<template>
  <div>
    <section class="contact">
      <p class="eyebrow">Contact</p>
      <h1>Let's make something</h1>
      <p class="measure lede">
        Tell us what you're working on. A person at the studio reads every
        message and writes every reply, typically within a day on business days.
      </p>

      <!-- Sent: a handwritten-feeling thank-you -->
      <div v-if="status === 'sent'" class="measure sent" role="status" aria-live="polite">
        <h2 class="sent-title">
          <span class="ringed">
            Got it{{ firstName ? `, ${firstName}` : '' }}
            <HandMark name="circle-lg" stretch draw from="down" class="ring" />
          </span>
        </h2>
        <p class="sent-line">
          <HandMark name="arrow-bend-down-right" size="1.4em" draw class="accent" />
          We'll write to <strong>{{ form.email }}</strong>, typically within a day.
        </p>
        <p class="muted">
          In the meantime, have a look at <NuxtLink to="/our-work">what we've made</NuxtLink>
        </p>
      </div>

      <form v-else class="measure contact-form" novalidate @submit.prevent="submit">
        <!-- 1. Email first: the one thing we need to write back -->
        <div class="step" :class="{ done: emailOk }">
          <HandMark name="circled-1" size="1.9em" class="num" :draw="emailOk" />
          <label for="c-email">Where can we write back?</label>
          <div class="inline">
            <input
              id="c-email"
              ref="emailEl"
              v-model="form.email"
              name="email"
              type="email"
              inputmode="email"
              autocomplete="email"
              placeholder="you@company.com"
              required
              @keydown.enter.prevent="acceptEmail"
              @blur="emailTouched = form.email.length > 0"
            />
            <button v-if="step < 2" type="button" class="btn next" @click="acceptEmail">
              <span class="sr-only">Next</span>
              <HandMark name="arrow-right-long" size="0.9em" />
            </button>
          </div>
          <p v-if="emailHint" class="hint" role="alert">{{ emailHint }}</p>
        </div>

        <Transition name="unfold">
          <div v-if="step >= 2" class="unfolded">
            <!-- 2. What kind of thing: tap instead of describe -->
            <fieldset class="step" :class="{ done: form.kinds.length > 0 }">
              <HandMark name="circled-2" size="1.9em" class="num" :draw="form.kinds.length > 0" />
              <legend>What are you working on? <span class="muted optional">pick any</span></legend>
              <div class="chips">
                <button
                  v-for="(k, i) in KINDS"
                  :key="k"
                  :ref="(el) => { if (i === 0) firstChip = el }"
                  type="button"
                  class="chip"
                  :aria-pressed="form.kinds.includes(k)"
                  @click="toggleKind(k)"
                >
                  {{ k }}<HandMark v-if="k === WEIRD" name="star-4pt" size="0.85em" class="star" />
                  <HandMark v-if="form.kinds.includes(k)" name="circle-lg" stretch draw from="down" class="ring" />
                </button>
              </div>
            </fieldset>

            <!-- 3. The message, with a nudge instead of a blank box -->
            <div class="step" :class="{ done: form.message.trim().length > 2 }">
              <HandMark name="circled-3" size="1.9em" class="num" :draw="form.message.trim().length > 2" />
              <label for="c-message">Tell us a little more</label>
              <textarea
                id="c-message"
                ref="messageEl"
                v-model="form.message"
                name="message"
                rows="5"
                placeholder="A sentence or two is plenty"
                required
                @keydown.meta.enter.prevent="submit"
                @keydown.ctrl.enter.prevent="submit"
              ></textarea>
              <p class="starters">
                <span class="muted">try:</span>
                <template v-for="(s, i) in STARTERS" :key="s.label">
                  <button type="button" class="starter" @click="addStarter(s.text)">{{ s.label }}</button><span v-if="i < STARTERS.length - 1" class="muted dot" aria-hidden="true">·</span>
                </template>
              </p>
            </div>
          </div>
        </Transition>

        <Transition name="unfold">
          <div v-if="step >= 2 && form.message.trim().length > 0" class="unfolded">
            <!-- 4. Who we're talking to -->
            <div class="step" :class="{ done: form.name.trim().length > 0 }">
              <HandMark name="circled-4" size="1.9em" class="num" :draw="form.name.trim().length > 0" />
              <label for="c-name">And who are we talking to?</label>
              <input id="c-name" v-model="form.name" name="name" autocomplete="name" placeholder="Your name" required />
              <label for="c-heard" class="small-label">How'd you find us? <span class="muted optional">optional</span></label>
              <input id="c-heard" v-model="form.heard_from" name="heard_from" class="small-input" placeholder="A friend, a search, a talk…" />
            </div>

            <!-- Honeypot: hidden from people and screen readers; bots fill it in. -->
            <p class="hp" aria-hidden="true">
              <label for="c-website">Website</label>
              <input id="c-website" v-model="form.website" name="website" tabindex="-1" autocomplete="off" />
            </p>

            <p v-if="error" class="error" role="alert">{{ error }}</p>
            <p class="send-row">
              <button type="submit" class="btn big send" :disabled="status === 'sending'">
                <span>{{ status === 'sending' ? 'Sending' : 'Send it' }}</span>
                <HandMark name="arrow-right-long" size="0.75em" class="send-arrow" :class="{ flying: status === 'sending' }" />
              </button>
              <span class="muted kbd-hint">or press ⌘ + Enter</span>
            </p>
          </div>
        </Transition>
      </form>

      <p class="muted alt">
        Prefer plain email? <a href="mailto:studio@room302.studio">studio@room302.studio</a>
      </p>
    </section>
  </div>
</template>

<script setup>
import { useOgMetadata } from '~/composables/useOgMetadata'

const ENDPOINT = 'https://room302-contact.ejfox.workers.dev'
const WEIRD = 'Something weird'
const KINDS = ['A data visualization', 'An interactive tool', 'A map', 'A prototype', 'Election or news graphics', WEIRD]
const STARTERS = [
  { label: 'a deadline', text: 'We need this by ' },
  { label: 'a dataset', text: 'The data we have is ' },
  { label: 'a dream', text: 'In a perfect world, ' },
  { label: 'a budget', text: 'Our budget is around ' },
]

const form = reactive({ email: '', kinds: [], message: '', name: '', heard_from: '', website: '' })
const status = ref('idle') // idle | sending | sent
const step = ref(1)
const error = ref('')
const emailTouched = ref(false)
const emailEl = ref(null)
const messageEl = ref(null)
let firstChip = null
let openedAt = 0
onMounted(() => { openedAt = Date.now() })

const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/
const emailOk = computed(() => EMAIL_RE.test(form.email.trim()))
const emailHint = computed(() =>
  emailTouched.value && form.email.trim() && !emailOk.value ? 'That address looks a little off. Mind checking it?' : ''
)
const firstName = computed(() => form.name.trim().split(/\s+/)[0] || '')

const track = (name, data) => { try { window.umami?.track(name, data) } catch {} }

async function acceptEmail() {
  emailTouched.value = true
  if (!emailOk.value) return emailEl.value?.focus()
  if (step.value < 2) {
    step.value = 2
    track('contact-step', { step: 'email' })
    await nextTick()
    firstChip?.focus({ preventScroll: true })
    firstChip?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' })
  }
}

function toggleKind(k) {
  const i = form.kinds.indexOf(k)
  if (i === -1) form.kinds.push(k)
  else form.kinds.splice(i, 1)
}

async function addStarter(text) {
  const m = form.message
  form.message = m && !/\s$/.test(m) ? `${m} ${text}` : `${m}${text}`
  await nextTick()
  const el = messageEl.value
  if (el) { el.focus(); el.setSelectionRange(form.message.length, form.message.length) }
}

async function submit() {
  error.value = ''
  if (!emailOk.value) { emailTouched.value = true; return emailEl.value?.focus() }
  if (!form.message.trim()) return (error.value = 'Tell us a little about it first.')
  if (!form.name.trim()) return (error.value = 'And your name, so we know who to thank.')

  status.value = 'sending'
  // First page + referrer of this visit, saved by the umami-funnel plugin.
  let firstTouch = {}
  try { firstTouch = JSON.parse(sessionStorage.getItem('r302-first-touch') || '{}') } catch {}
  const kinds = form.kinds.length ? `Working on: ${form.kinds.join(', ')}\n\n` : ''

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name, email: form.email, message: kinds + form.message, heard_from: form.heard_from,
        website: form.website, ...firstTouch, page: location.pathname, elapsed_ms: Date.now() - openedAt,
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(data.error || 'Something went wrong on our end. Try the email address below?')
    status.value = 'sent'
    track('form-submit', { from: location.pathname, heard_from: form.heard_from.trim().slice(0, 60) || '(blank)', kinds: form.kinds.join('|') || '(none)' })
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  } catch (e) {
    status.value = 'idle'
    error.value = e.message || 'Something went wrong on our end. Try the email address below?'
  }
}

useHead({ title: 'Contact Room 302 Studio' })

useSeoMeta({
  title: 'Contact Room 302 Studio',
  description: "Tell Room 302 Studio what you're working on. A person reads every message and writes every reply.",
  ogTitle: 'Contact Room 302 Studio',
  ogDescription: "Tell Room 302 Studio what you're working on. A person reads every message and writes every reply.",
  ogUrl: 'https://room302.studio/contact',
  ogImage: 'https://room302.studio/og/contact.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://room302.studio/og/contact.png',
  twitterTitle: 'Contact Room 302 Studio',
  twitterDescription: "Tell Room 302 Studio what you're working on. A person reads every message and writes every reply.",
})

useOgMetadata('Contact Us', "Tell Room 302 Studio what you're working on. A person reads every message and writes every reply.")
</script>

<style scoped>
.lede { margin-bottom: 0; }
.contact-form { margin-top: 3rem; }

/* Each question carries a hand-circled number in the margin, like notebook marginalia */
.step { position: relative; margin: 0 0 2.25rem; padding: 0; border: 0; min-width: 0; }
.num { position: absolute; left: -3.25rem; top: -0.3rem; color: var(--text-faint); transition: color 0.3s; }
.step.done .num { color: var(--accent); }
@media (max-width: 760px) {
  .num { left: auto; right: 0; top: -0.35rem; }
  label, legend { padding-right: 2.5rem; }
  .chips { padding-right: 2.25rem; }
}

label, legend { display: block; font-weight: 700; margin-bottom: 0.5rem; font-size: 1.125rem; padding: 0; }
.optional { font-weight: 400; font-size: 0.875rem; margin-left: 0.25rem; }

/* inputs: bigger, calmer, 16px+ so iOS never zooms */
input, textarea {
  font-size: 1.0625rem;
  border-width: 1.5px;
  border-color: var(--rule);
  border-radius: 2px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
input:hover, textarea:hover { border-color: var(--text-muted); }
input:focus, textarea:focus { outline: none; border-color: var(--text); box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent); }
input::placeholder, textarea::placeholder { color: var(--text-faint); }
textarea { resize: vertical; line-height: 1.55; }

.inline { display: flex; gap: 0.5rem; }
.inline input { flex: 1; }
.next { padding: 0 1.1rem; display: inline-flex; align-items: center; }
.hint { margin: 0.5rem 0 0; color: var(--accent); font-size: 0.9375rem; }

/* project chips: tap to pick; a pen ring loops around the chosen ones */
.chips { display: flex; flex-wrap: wrap; gap: 0.6rem 0.7rem; }
.chip {
  position: relative;
  padding: 0.55rem 0.95rem;
  border: 1.5px solid var(--rule);
  border-radius: 999px;
  background: var(--bg);
  font-size: 0.9375rem;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.15s;
}
.chip:hover { border-color: var(--text-muted); transform: translateY(-1px) rotate(-0.4deg); }
.chip:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.chip[aria-pressed='true'] { border-color: transparent; font-weight: 600; }
.chip .ring {
  position: absolute;
  /* a loop only touches its box at the edge midpoints, so the box must be
     ~1.3x the chip for the corners of the label to sit inside the ink */
  left: -13%; top: -38%;
  width: 126%; height: 176%;
  color: var(--accent);
  pointer-events: none;
}
.star { margin-left: 0.3rem; color: var(--accent); }

.starters { margin: 0.6rem 0 0; font-size: 0.9375rem; display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.2rem 0.45rem; }
.starter {
  background: none; border: 0; padding: 0; cursor: pointer; color: var(--text);
  text-decoration: underline; text-decoration-style: wavy; text-decoration-color: color-mix(in srgb, var(--accent) 70%, transparent);
  text-underline-offset: 4px;
}
.starter:hover { color: var(--accent); }
.dot { user-select: none; }

.small-label { font-size: 0.9375rem; font-weight: 600; margin-top: 1.25rem; }
.small-input { font-size: 1rem; }

.send-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; }
.send { display: inline-flex; align-items: center; gap: 0.7rem; }
.send-arrow { transition: transform 0.25s cubic-bezier(0.3, 0.7, 0.4, 1); }
.send:hover .send-arrow { transform: translateX(4px); }
.send-arrow.flying { animation: fly 0.9s ease-in-out infinite; }
@keyframes fly { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(7px); } }
.kbd-hint { font-size: 0.8125rem; font-family: var(--font-mono); }
@media (hover: none) { .kbd-hint { display: none; } }
button[disabled] { opacity: 0.6; cursor: wait; }

.error { color: var(--accent); }
.alt { margin-top: 2.5rem; }

/* sent */
.sent { margin: 3rem 0 2rem; }
.sent-title { font-size: 2rem; margin-bottom: 1.25rem; }
.ringed { position: relative; display: inline-block; padding: 0 0.15em; }
.ringed .ring { position: absolute; left: -15%; top: -42%; width: 130%; height: 184%; color: var(--accent); pointer-events: none; }
.sent-line { font-size: 1.125rem; line-height: 1.6; }
.sent-line .accent { margin-right: 0.45rem; vertical-align: -0.35em; }
.accent { color: var(--accent); }

.hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

/* unfold: the next questions slide in from just below */
.unfold-enter-active { transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.3, 0.7, 0.4, 1); }
.unfold-enter-from { opacity: 0; transform: translateY(10px); }
@media (prefers-reduced-motion: reduce) {
  .unfold-enter-active, .chip, .send-arrow, .num { transition: none; }
  .chip:hover { transform: none; }
  .send-arrow.flying { animation: none; }
}
</style>
