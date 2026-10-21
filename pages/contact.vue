<template>
  <div>
    <section class="contact">
      <p class="eyebrow">Contact</p>
      <h1>Let's make something</h1>

      <!-- Note sent -->
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
      </div>

      <template v-else>
        <!-- Main path: pick a time. No writing required. -->
        <div class="measure book">
          <p class="lede">Pick a time for a 20-minute call.</p>

          <div v-if="slots.length" class="slots" role="group" aria-label="Open times">
            <button
              v-for="s in slots"
              :key="s.datetime"
              type="button"
              class="slot"
              :aria-pressed="picked?.datetime === s.datetime"
              @click="pick(s)"
            >
              <span class="slot-day">{{ fmtDay(s.datetime) }}</span>
              <span class="slot-time">
                {{ fmtTime(s.datetime) }}
                <PenLoop v-if="picked?.datetime === s.datetime" :seed="s.datetime" :weight="1.5" draw class="pen-ring" />
              </span>
            </button>
          </div>
          <p v-if="slots.length && tz" class="muted tz">Times in {{ tz }}</p>

          <Transition name="unfold">
            <form v-if="picked" class="confirm" novalidate @submit.prevent="book">
              <label for="c-book-email">Your email</label>
              <div class="inline">
                <input
                  id="c-book-email"
                  ref="bookEmailEl"
                  v-model="form.email"
                  type="email"
                  inputmode="email"
                  autocomplete="email"
                  placeholder="you@company.com"
                  required
                />
                <button type="submit" class="btn book-btn">
                  Book it <HandMark name="arrow-right-thick" size="0.7em" class="send-arrow" />
                </button>
              </div>
              <p v-if="emailHint" class="hint" role="alert">{{ emailHint }}</p>
            </form>
          </Transition>

          <p class="other">
            <a :href="CAL_URL" data-umami-event="contact-other-times">{{ slots.length ? 'Other times' : 'See open times' }}</a>
            <span class="muted" aria-hidden="true"> · </span>
            <button type="button" class="linklike" :aria-expanded="showNote" @click="openNote">or send a note instead</button>
          </p>
        </div>

        <!-- Secondary path: a note, for people who'd rather write -->
        <Transition name="unfold">
          <form v-if="showNote" class="measure contact-form" novalidate @submit.prevent="submit">
            <div class="step">
              <label for="c-email">Your email</label>
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
                @blur="emailTouched = form.email.length > 0"
              />
            </div>
            <div class="step">
              <label for="c-message">What's on your mind?</label>
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
            <div class="step">
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
            </p>
          </form>
        </Transition>
      </template>

      <p class="muted alt">
        Or email <a href="mailto:studio@room302.studio">studio@room302.studio</a>
      </p>
    </section>
  </div>
</template>

<script setup>
import { useOgMetadata } from '~/composables/useOgMetadata'

const ENDPOINT = 'https://room302-contact.ejfox.workers.dev'
const CAL_URL = 'https://cal.com/ejfox/30min?duration=20'

// Next open times (server/api/slots.get.ts). Client-only so a slow calendar
// never delays the page; with no slots the page shows a plain calendar link.
const { data: slotData } = useLazyFetch('/api/slots', { server: false, default: () => ({ slots: [] }) })
const slots = computed(() => slotData.value?.slots || [])

const form = reactive({ email: '', message: '', name: '', website: '' })
const status = ref('idle') // idle | sending | sent
const picked = ref(null)
const showNote = ref(false)
const error = ref('')
const emailTouched = ref(false)
const emailEl = ref(null)
const bookEmailEl = ref(null)
const messageEl = ref(null)
let openedAt = 0
onMounted(() => { openedAt = Date.now() })

const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/
const emailOk = computed(() => EMAIL_RE.test(form.email.trim()))
const emailHint = computed(() =>
  emailTouched.value && form.email.trim() && !emailOk.value ? 'Check that email address' : ''
)
const firstName = computed(() => form.name.trim().split(/\s+/)[0] || '')

// Shown in the visitor's own time zone.
const fmtDay = (iso) => new Date(iso).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
const fmtTime = (iso) => new Date(iso).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }).replace(':00', '').replace(' ', '').toLowerCase()
const tz = computed(() => {
  if (!import.meta.client || !slots.value[0]) return ''
  return new Intl.DateTimeFormat(undefined, { timeZoneName: 'long' }).formatToParts(new Date(slots.value[0].datetime)).find((p) => p.type === 'timeZoneName')?.value || ''
})

const track = (name, data) => { try { window.umami?.track(name, data) } catch {} }
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches

async function pick(s) {
  picked.value = s
  track('contact-slot-pick', { day: new Date(s.datetime).getDay() })
  await nextTick()
  bookEmailEl.value?.focus({ preventScroll: true })
}

// Hand off to Cal.com on the exact slot, email already filled in.
function book() {
  emailTouched.value = true
  if (!emailOk.value) return bookEmailEl.value?.focus()
  const url = new URL(picked.value.bookingUrl)
  url.searchParams.set('email', form.email.trim())
  track('contact-book', {})
  window.location.href = url.toString()
}

async function openNote() {
  showNote.value = !showNote.value
  if (showNote.value) {
    track('contact-note-open', {})
    await nextTick()
    ;(form.email ? messageEl : emailEl).value?.focus({ preventScroll: true })
    ;(form.email ? messageEl : emailEl).value?.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'center' })
  }
}

async function submit() {
  error.value = ''
  if (!emailOk.value) { emailTouched.value = true; error.value = 'Check that email address'; return emailEl.value?.focus() }
  if (!form.message.trim()) { error.value = 'Add a line about the project'; return messageEl.value?.focus() }

  status.value = 'sending'
  // First page + referrer of this visit, saved by the umami-funnel plugin.
  let firstTouch = {}
  try { firstTouch = JSON.parse(sessionStorage.getItem('r302-first-touch') || '{}') } catch {}
  // Name is optional here; the worker needs one, so fall back to the email's local part.
  const name = form.name.trim() || form.email.trim().split('@')[0]

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, email: form.email, message: form.message, heard_from: '',
        website: form.website, ...firstTouch, page: location.pathname, elapsed_ms: Date.now() - openedAt,
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(data.error || "That didn't send. Email studio@room302.studio instead")
    status.value = 'sent'
    track('form-submit', { from: location.pathname, named: form.name.trim() ? 'yes' : 'no' })
    window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' })
  } catch (e) {
    status.value = 'idle'
    error.value = e.message || "That didn't send. Email studio@room302.studio instead"
  }
}

const DESC = 'Pick a time for a 20-minute call with Room 302 Studio, or send a note.'
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
  .send-arrow.flying { animation: none; }
}

/* time slots: the main path */
.book { margin-top: 0.5rem; }
.slots { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.75rem; margin: 1.25rem 0 0.5rem; }
.slot {
  position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 0.2rem;
  padding: 0.85rem 1rem; border: 1.5px solid var(--rule); border-radius: 2px; background: var(--bg); cursor: pointer;
  transition: border-color 0.2s, transform 0.15s;
}
.slot:hover { border-color: var(--text-muted); transform: translateY(-1px); }
.slot:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.slot[aria-pressed='true'] { border-color: var(--accent); }
.slot-day { font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); }
.slot-time { position: relative; font-size: 1.25rem; font-weight: 600; }
.slot .pen-ring { position: absolute; left: -22%; top: -18%; width: 144%; height: 136%; color: var(--accent); pointer-events: none; }
.tz { font-size: 0.8125rem; margin: 0 0 1rem; }
.confirm { margin: 1.25rem 0 0.5rem; }
.book-btn { display: inline-flex; align-items: center; gap: 0.6rem; white-space: nowrap; }
.other { margin-top: 1.25rem; font-size: 0.9375rem; }
.linklike { background: none; border: 0; padding: 0; font: inherit; color: var(--text-muted); text-decoration: underline; text-underline-offset: 3px; cursor: pointer; }
.linklike:hover { color: var(--text); }
.contact-form { margin-top: 2rem; padding-top: 1.75rem; border-top: 1px solid var(--rule); }
@media (max-width: 520px) {
  .slots { grid-template-columns: 1fr; }
  .slot { padding-right: 1.4rem; }
  .slot { flex-direction: row; justify-content: space-between; align-items: baseline; }
}
@media (max-width: 400px) {
  .confirm .inline { flex-direction: column; }
  .book-btn { justify-content: center; padding: 0.8rem; }
}
@media (prefers-reduced-motion: reduce) { .slot { transition: none; } .slot:hover { transform: none; } }
</style>
