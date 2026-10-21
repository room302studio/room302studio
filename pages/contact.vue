<template>
  <div>
    <section class="contact">
      <p class="eyebrow">Contact</p>
      <h1>Let's make something</h1>
      <p class="measure lede">
        Tell us about the project. We read every message and usually reply
        within a day.
      </p>

      <div v-if="status === 'sent'" class="measure sent" role="status" aria-live="polite">
        <h2 class="sent-title">
          <span class="ringed">
            Got it{{ form.name.trim() ? `, ${firstName}` : '' }}
            <PenLoop :seed="`got-${firstName}`" :weight="2.25" draw class="pen-ring" />
          </span>
        </h2>
        <p class="sent-line">
          <HandMark name="arrow-bend-down-right" size="1.4em" draw class="accent" />
          We'll reply to <strong>{{ form.email }}</strong>, usually within a day.
        </p>
        <p class="muted"><NuxtLink to="/our-work">Our work</NuxtLink></p>
      </div>

      <form v-else class="measure contact-form" novalidate @submit.prevent="submit">
        <!-- 1. Email -->
        <div class="step" :class="{ done: emailOk }">
          <HandMark name="circled-bold-1" size="2.1em" class="num" :draw="emailOk" />
          <label for="c-email">Your email</label>
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
              <HandMark name="arrow-right-thick" size="0.75em" />
            </button>
          </div>
          <p v-if="emailHint" class="hint" role="alert">{{ emailHint }}</p>
        </div>

        <Transition name="unfold">
          <div v-if="step >= 2" class="unfolded">
            <!-- 2. The project: one box, optional one-tap tags -->
            <div class="step" :class="{ done: form.message.trim().length > 2 }">
              <HandMark name="circled-bold-2" size="2.1em" class="num" :draw="form.message.trim().length > 2" />
              <label for="c-message">What's the project?</label>
              <div class="chips" role="group" aria-label="Project type, optional">
                <button
                  v-for="k in KINDS"
                  :key="k"
                  type="button"
                  class="chip"
                  :aria-pressed="form.kinds.includes(k)"
                  @click="toggleKind(k)"
                >
                  {{ k }}
                  <PenLoop v-if="form.kinds.includes(k)" :seed="k" :weight="1.5" draw class="pen-ring" />
                </button>
              </div>
              <textarea
                id="c-message"
                ref="messageEl"
                v-model="form.message"
                name="message"
                rows="4"
                placeholder="A few sentences is plenty"
                required
                @keydown.meta.enter.prevent="submit"
                @keydown.ctrl.enter.prevent="submit"
              ></textarea>
            </div>

            <!-- 3. Send (name optional) -->
            <div class="step" :class="{ done: status === 'sending' }">
              <HandMark name="circled-bold-3" size="2.1em" class="num" />
              <label for="c-name">Your name <span class="muted optional">optional</span></label>
              <input id="c-name" v-model="form.name" name="name" autocomplete="name" />
            </div>

            <!-- Honeypot: hidden from people and screen readers; bots fill it in. -->
            <p class="hp" aria-hidden="true">
              <label for="c-website">Website</label>
              <input id="c-website" v-model="form.website" name="website" tabindex="-1" autocomplete="off" />
            </p>

            <p v-if="error" class="error" role="alert">{{ error }}</p>
            <p class="send-row">
              <button type="submit" class="btn big send" :disabled="status === 'sending'">
                <span>{{ status === 'sending' ? 'Sending' : 'Send' }}</span>
                <HandMark name="arrow-right-thick" size="0.7em" class="send-arrow" :class="{ flying: status === 'sending' }" />
              </button>
              <a class="muted call" href="https://ejfox.com/calendar" data-umami-event="contact-book-call">or book a 20-minute call</a>
            </p>
          </div>
        </Transition>
      </form>

      <p class="muted alt">
        Or email <a href="mailto:studio@room302.studio">studio@room302.studio</a>
      </p>
    </section>
  </div>
</template>

<script setup>
import { useOgMetadata } from '~/composables/useOgMetadata'

const ENDPOINT = 'https://room302-contact.ejfox.workers.dev'
// Optional one-tap tags. Kept short on purpose: every extra option is reading.
const KINDS = ['Map', 'Dashboard', 'Prototype', 'AI', 'Election graphics', 'Something else']

const form = reactive({ email: '', kinds: [], message: '', name: '', website: '' })
const status = ref('idle') // idle | sending | sent
const step = ref(1)
const error = ref('')
const emailTouched = ref(false)
const emailEl = ref(null)
const messageEl = ref(null)
let openedAt = 0
onMounted(() => { openedAt = Date.now() })

const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/
const emailOk = computed(() => EMAIL_RE.test(form.email.trim()))
const emailHint = computed(() =>
  emailTouched.value && form.email.trim() && !emailOk.value ? 'Check that email address' : ''
)
const firstName = computed(() => form.name.trim().split(/\s+/)[0] || '')

const track = (name, data) => { try { window.umami?.track(name, data) } catch {} }
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches

async function acceptEmail() {
  emailTouched.value = true
  if (!emailOk.value) return emailEl.value?.focus()
  if (step.value < 2) {
    step.value = 2
    track('contact-step', { step: 'email' })
    await nextTick()
    messageEl.value?.focus({ preventScroll: true })
    messageEl.value?.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'center' })
  }
}

function toggleKind(k) {
  const i = form.kinds.indexOf(k)
  if (i === -1) { form.kinds.push(k); track('contact-step', { step: 'kind', kind: k }) }
  else form.kinds.splice(i, 1)
}

async function submit() {
  error.value = ''
  if (!emailOk.value) { emailTouched.value = true; return emailEl.value?.focus() }
  if (!form.message.trim()) { error.value = 'Add a line about the project'; return messageEl.value?.focus() }

  status.value = 'sending'
  // First page + referrer of this visit, saved by the umami-funnel plugin.
  let firstTouch = {}
  try { firstTouch = JSON.parse(sessionStorage.getItem('r302-first-touch') || '{}') } catch {}
  const kinds = form.kinds.length ? `Project: ${form.kinds.join(', ')}\n\n` : ''
  // Name is optional here; the worker needs one, so fall back to the email's local part.
  const name = form.name.trim() || form.email.trim().split('@')[0]

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, email: form.email, message: kinds + form.message, heard_from: '',
        website: form.website, ...firstTouch, page: location.pathname, elapsed_ms: Date.now() - openedAt,
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(data.error || "That didn't send. Email studio@room302.studio instead")
    status.value = 'sent'
    track('form-submit', { from: location.pathname, kinds: form.kinds.join('|') || '(none)', named: form.name.trim() ? 'yes' : 'no' })
    window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' })
  } catch (e) {
    status.value = 'idle'
    error.value = e.message || "That didn't send. Email studio@room302.studio instead"
  }
}

const DESC = 'Tell Room 302 Studio about your project. We read every message and usually reply within a day.'
useHead({ title: 'Contact Room 302 Studio' })
useSeoMeta({
  title: 'Contact Room 302 Studio',
  description: DESC,
  ogTitle: 'Contact Room 302 Studio',
  ogDescription: DESC,
  ogUrl: 'https://room302.studio/contact',
  ogImage: 'https://room302.studio/og/contact.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://room302.studio/og/contact.png',
  twitterTitle: 'Contact Room 302 Studio',
  twitterDescription: DESC,
})
useOgMetadata('Contact Us', DESC)
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
  .chips { padding: 0 2.25rem 0 0.5rem; }
  /* loops are ~118% of a chip; capping width keeps them on screen, long labels wrap */
  .chip { max-width: 82%; text-align: left; }
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
.chips { display: flex; flex-wrap: wrap; gap: 0.6rem 0.7rem; margin: 0.25rem 0 1rem; }
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
.chip .pen-ring {
  position: absolute;
  /* a loop only touches its box at the edge midpoints, so the box must be
     ~1.3x the chip for the corners of the label to sit inside the ink */
  left: -9%; top: -30%;
  width: 118%; height: 160%;
  color: var(--accent);
  pointer-events: none;
}



.call { font-size: 0.9375rem; }
.send-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; }
.send { display: inline-flex; align-items: center; gap: 0.7rem; }
.send-arrow { transition: transform 0.25s cubic-bezier(0.3, 0.7, 0.4, 1); }
.send:hover .send-arrow { transform: translateX(4px); }
.send-arrow.flying { animation: fly 0.9s ease-in-out infinite; }
@keyframes fly { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(7px); } }
button[disabled] { opacity: 0.6; cursor: wait; }

.error { color: var(--accent); }
.alt { margin-top: 2.5rem; }

/* sent */
.sent { margin: 3rem 0 2rem; }
.sent-title { font-size: 2rem; margin-bottom: 1.25rem; }
/* margin-left leaves room for the loop's left swing so it never runs off the page edge */
.ringed { position: relative; display: inline-block; padding: 0 0.15em; margin-left: 0.55em; }
.ringed .pen-ring { position: absolute; left: -15%; top: -42%; width: 130%; height: 184%; color: var(--accent); pointer-events: none; }
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
