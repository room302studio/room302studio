// room302.studio contact form → D1 → email.
//
// POST / (JSON) { name, email, message, heard_from, landing, referrer, page,
//                 website (honeypot), elapsed_ms }
//
// The lead is written to D1 first, then emailed to LEAD_EMAILS via Email
// Routing, with Reply-To set to the sender so replying answers them directly.
import { EmailMessage } from 'cloudflare:email';

const LIMITS = { name: 120, email: 200, message: 5000, heard_from: 300, landing: 500, referrer: 500, page: 200 };
const PER_HOUR = 5;
const MIN_FILL_MS = 3000; // humans don't fill a form in under 3s

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return json({ error: 'POST only' }, 405, cors);
    if (!cors['Access-Control-Allow-Origin']) return json({ error: 'origin not allowed' }, 403, cors);

    let body;
    try { body = await request.json(); } catch { return json({ error: 'bad json' }, 400, cors); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) return json({ error: 'bad json' }, 400, cors);

    // Bots: fill the hidden field, or submit faster than a person could (or
    // post straight here without the form's timer). Pretend it worked so they
    // don't learn anything.
    if (body.website || !(Number(body.elapsed_ms) >= MIN_FILL_MS)) return json({ ok: true }, 200, cors);

    const lead = {};
    for (const [key, max] of Object.entries(LIMITS)) lead[key] = String(body[key] ?? '').trim().slice(0, max);
    if (!lead.name || !lead.message) return json({ error: 'Please include your name and a message.' }, 400, cors);
    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(lead.email)) return json({ error: 'That email address doesn’t look right.' }, 400, cors);

    const ipHash = await dailyHash(request.headers.get('cf-connecting-ip') ?? '');
    const { recent } = await env.DB.prepare(
      "SELECT count(*) AS recent FROM leads WHERE ip_hash = ? AND created_at > datetime('now', '-1 hour')"
    ).bind(ipHash).first();
    if (recent >= PER_HOUR) return json({ error: 'Too many messages — please email us directly.' }, 429, cors);

    const { id } = await env.DB.prepare(
      `INSERT INTO leads (name, email, message, heard_from, landing, referrer, page, ip_hash)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`
    ).bind(lead.name, lead.email, lead.message, lead.heard_from, lead.landing, lead.referrer, lead.page, ipHash).first();

    const results = await sendLead(env, { id, ...lead });
    const emailed = results.some((r) => r.ok);
    if (emailed) await env.DB.prepare('UPDATE leads SET emailed = 1 WHERE id = ?').bind(id).run();
    else console.error('lead email failed', id, results);

    // Saved either way, so the visitor gets a success response.
    return json({ ok: true }, 200, cors);
  },
};

async function sendLead(env, lead) {
  const rows = [
    ['From', `${lead.name} <${lead.email}>`],
    ['Heard about us', lead.heard_from || '—'],
    ['Landed on', lead.landing || '—'],
    ['Referrer', lead.referrer || '(direct)'],
    ['Sent from', lead.page || '—'],
  ];
  const text = `${lead.message}\n\n---\n${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nLead #${lead.id}`;
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const html = `
    <div style="font:15px/1.6 -apple-system,system-ui,sans-serif;max-width:560px">
      <p style="white-space:pre-wrap;margin:0 0 20px">${esc(lead.message)}</p>
      <table style="font-size:13px;color:#555;border-top:1px solid #ddd;padding-top:8px">
        ${rows.map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0;color:#999">${k}</td><td>${esc(v)}</td></tr>`).join('')}
      </table>
      <p style="font-size:12px;color:#aaa">Lead #${lead.id} · reply to answer ${esc(lead.name)} directly</p>
    </div>`;

  const subject = `New inquiry: ${lead.name}`;
  const from = `${env.FROM_NAME} <${env.FROM_ADDRESS}>`;
  const recipients = env.LEAD_EMAILS.split(',').map((s) => s.trim()).filter(Boolean);
  return Promise.all(recipients.map((to) =>
    env.EMAIL.send(new EmailMessage(env.FROM_ADDRESS, to, mime({ from, to, replyTo: lead.email, subject, text, html })))
      .then(() => ({ to, ok: true }))
      .catch((e) => ({ to, ok: false, error: String(e.message || e) }))
  ));
}

function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') ?? '';
  const allowed = env.ALLOWED_ORIGINS.split(',').map((s) => s.trim());
  return allowed.includes(origin)
    ? { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' }
    : { Vary: 'Origin' };
}

const json = (data, status, headers) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...headers } });

// Rate-limit key that can't be turned back into an IP and rotates daily.
async function dailyHash(ip) {
  const day = new Date().toISOString().slice(0, 10);
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${day}:${ip}`));
  return [...new Uint8Array(buf)].slice(0, 12).map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Minimal multipart/alternative MIME message (Email Routing sends raw MIME).
function mime({ from, to, replyTo, subject, text, html }) {
  const b64 = (s) => btoa(String.fromCharCode(...new TextEncoder().encode(s)));
  const wrap = (s) => s.match(/.{1,76}/g).join('\r\n');
  const boundary = `r302-${crypto.randomUUID()}`;
  return [
    `From: ${from}`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: =?UTF-8?B?${b64(subject)}?=`,
    `Message-ID: <${crypto.randomUUID()}@${from.match(/@([^>]+)>/)[1]}>`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    wrap(b64(text)),
    `--${boundary}`,
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    wrap(b64(html)),
    `--${boundary}--`,
    '',
  ].join('\r\n');
}
