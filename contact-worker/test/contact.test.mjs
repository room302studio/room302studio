// The contact-form Worker under `wrangler dev --local`: throwaway local D1 (temp
// dir, migrations applied), simulated email to a .invalid address. Nothing
// remote is touched and no real mail is sent.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn, execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const wrangler = join(root, 'node_modules', '.bin', 'wrangler');
const ORIGIN = 'https://room302.studio';
const port = 8700 + Math.floor(Math.random() * 500);
const base = `http://127.0.0.1:${port}`;
let proc, persist, log = '';

const run = (args) => execFileSync(wrangler, args, { cwd: root, stdio: 'pipe', env: { ...process.env, CI: '1' } });
const sql = (command) => JSON.parse(run(['d1', 'execute', 'room302-contact', '--local', '--persist-to', persist, '--json', '--command', command]).toString())[0].results;

let ip = 0;
// Each call comes from a fresh IP unless one is given, so rate limiting only
// kicks in where a test means it to.
async function post(body, { origin = ORIGIN, from = `203.0.113.${++ip}`, raw } = {}) {
  const res = await fetch(base, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: origin, 'CF-Connecting-IP': from },
    body: raw ?? JSON.stringify(body),
  });
  return { status: res.status, headers: res.headers, body: await res.json().catch(() => null) };
}
const good = (over = {}) => ({ name: 'Ada Lovelace', email: 'ada@example.com', message: 'We need a map.', heard_from: 'a friend', landing: '/?utm_source=x', referrer: 'https://google.com', page: '/contact', elapsed_ms: 12000, ...over });
const count = () => sql('SELECT count(*) AS n FROM leads')[0].n;

before(async () => {
  persist = mkdtempSync(join(tmpdir(), 'contact-test-'));
  run(['d1', 'migrations', 'apply', 'room302-contact', '--local', '--persist-to', persist]);
  proc = spawn(wrangler, ['dev', '--local', '--persist-to', persist, '--port', String(port), '--var', 'LEAD_EMAILS:leads@example.invalid'], {
    cwd: root, stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, CI: '1' },
  });
  proc.stdout.on('data', (d) => (log += d));
  proc.stderr.on('data', (d) => (log += d));
  for (let i = 0; i < 160; i++) {
    try { await fetch(base, { method: 'OPTIONS' }); return; } catch { await new Promise((r) => setTimeout(r, 250)); }
  }
  throw new Error(`worker never came up:\n${log}`);
});
after(async () => { proc?.kill('SIGTERM'); await new Promise((r) => setTimeout(r, 300)); rmSync(persist, { recursive: true, force: true }); });

test('a real inquiry is saved with every field, then emailed', async () => {
  const res = await post(good());
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { ok: true });
  const [row] = sql("SELECT * FROM leads WHERE email = 'ada@example.com'");
  assert.equal(row.name, 'Ada Lovelace');
  assert.equal(row.message, 'We need a map.');
  assert.equal(row.heard_from, 'a friend');
  assert.equal(row.landing, '/?utm_source=x');
  assert.equal(row.referrer, 'https://google.com');
  assert.equal(row.page, '/contact');
  assert.match(row.ip_hash, /^[0-9a-f]{24}$/, 'IP is stored only as a short hash');
  assert.ok(!JSON.stringify(row).includes('203.0.113.'), 'raw IP never stored');
  assert.equal(row.emailed, 1, 'marked emailed once the mail binding accepted it');
});

test('CORS: the site may post; other origins may not', async () => {
  const pre = await fetch(base, { method: 'OPTIONS', headers: { Origin: ORIGIN } });
  assert.equal(pre.status, 204);
  assert.equal(pre.headers.get('Access-Control-Allow-Origin'), ORIGIN);
  const before = count();
  const evil = await post(good({ email: 'evil@example.com' }), { origin: 'https://evil.example' });
  assert.equal(evil.status, 403);
  assert.equal(evil.headers.get('Access-Control-Allow-Origin'), null);
  assert.equal(count(), before, 'nothing saved from a foreign origin');
});

test('only POST is accepted', async () => {
  const res = await fetch(base, { headers: { Origin: ORIGIN } });
  assert.equal(res.status, 405);
});

test('bots get a fake success and nothing is saved: honeypot, too fast, or no timer at all', async () => {
  const before = count();
  for (const body of [good({ website: 'http://spam' }), good({ elapsed_ms: 800 }), good({ elapsed_ms: undefined }), good({ elapsed_ms: 'soon' })]) {
    const res = await post(body);
    assert.equal(res.status, 200);
    assert.deepEqual(res.body, { ok: true });
  }
  assert.equal(count(), before);
});

test('malformed bodies get a clean 400, never a crash', async () => {
  for (const raw of ['not json', 'null', '[]', '42', '"str"']) {
    const res = await post(null, { raw });
    assert.equal(res.status, 400, `body ${raw}`);
  }
});

test('missing name/message or a bad email is refused with a readable error', async () => {
  assert.equal((await post(good({ name: '  ' }))).status, 400);
  assert.equal((await post(good({ message: '' }))).status, 400);
  for (const email of ['nope', 'a@b', 'a b@c.com', 'x@y.com\r\nBcc: victim@z.com']) {
    const res = await post(good({ email }));
    assert.equal(res.status, 400, email);
    assert.match(res.body.error, /email/i);
  }
});

test('oversized fields are trimmed to their limits, not rejected', async () => {
  await post(good({ email: 'long@example.com', name: 'N'.repeat(500), message: 'M'.repeat(9000) }));
  const [row] = sql("SELECT length(name) AS n, length(message) AS m FROM leads WHERE email = 'long@example.com'");
  assert.equal(row.n, 120);
  assert.equal(row.m, 5000);
});

test('unicode and HTML in a message are saved verbatim and the email still sends', async () => {
  const message = '日本語 🚀 <script>alert(1)</script> & "quotes"\nsecond line';
  await post(good({ email: 'uni@example.com', name: 'Zoë <b>', message }));
  const [row] = sql("SELECT message, emailed FROM leads WHERE email = 'uni@example.com'");
  assert.equal(row.message, message);
  assert.equal(row.emailed, 1);
});

test('a 5000-character emoji message (largest possible email) still sends', async () => {
  await post(good({ email: 'big@example.com', message: '🚀'.repeat(2500) }));
  const [row] = sql("SELECT emailed FROM leads WHERE email = 'big@example.com'");
  assert.equal(row.emailed, 1);
});

test('rate limit: 5 an hour per IP, then a polite 429', async () => {
  const from = '198.51.100.7';
  for (let i = 0; i < 5; i++) assert.equal((await post(good({ email: `r${i}@example.com` }), { from })).status, 200);
  const sixth = await post(good({ email: 'r6@example.com' }), { from });
  assert.equal(sixth.status, 429);
  assert.match(sixth.body.error, /email us directly/);
  assert.equal((await post(good({ email: 'other@example.com' }), { from: '198.51.100.8' })).status, 200, 'other visitors unaffected');
});
