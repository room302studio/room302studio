<template>
  <div>
    <section>
      <p class="eyebrow">Contact</p>
      <h1>Get in touch</h1>
      <p class="measure">
        Have a project in mind? Want to collaborate? Just want to say hi?
        Tell us a little about it and we'll get back to you, typically
        within 24 hours on business days.
      </p>

      <div v-if="status === 'sent'" class="measure sent" role="status">
        <h2>Thanks — got it.</h2>
        <p>We'll reply to {{ form.email }} soon.</p>
      </div>

      <form v-else class="measure contact-form" @submit.prevent="submit" novalidate>
        <div class="grid-2 pair">
          <p>
            <label for="c-name">Name</label>
            <input id="c-name" v-model="form.name" name="name" autocomplete="name" required />
          </p>
          <p>
            <label for="c-email">Email</label>
            <input id="c-email" v-model="form.email" name="email" type="email" autocomplete="email" required />
          </p>
        </div>
        <p>
          <label for="c-message">What are you working on?</label>
          <textarea id="c-message" v-model="form.message" name="message" rows="6" required></textarea>
        </p>
        <p>
          <label for="c-heard">How did you hear about us? <span class="muted optional">optional</span></label>
          <input id="c-heard" v-model="form.heard_from" name="heard_from" />
        </p>
        <!-- Honeypot: hidden from people and screen readers; bots fill it in. -->
        <p class="hp" aria-hidden="true">
          <label for="c-website">Website</label>
          <input id="c-website" v-model="form.website" name="website" tabindex="-1" autocomplete="off" />
        </p>

        <p v-if="error" class="error" role="alert">{{ error }}</p>
        <p class="row">
          <button type="submit" class="btn big" :disabled="status === 'sending'">
            {{ status === 'sending' ? 'Sending…' : 'Send' }}
          </button>
        </p>
      </form>

      <p class="muted">
        Prefer email? <a href="mailto:studio@room302.studio">studio@room302.studio</a>
      </p>
    </section>
  </div>
</template>

<script setup>
import { useOgMetadata } from '~/composables/useOgMetadata'

const ENDPOINT = 'https://room302-contact.ejfox.workers.dev'

const form = reactive({ name: '', email: '', message: '', heard_from: '', website: '' })
const status = ref('idle') // idle | sending | sent
const error = ref('')
let openedAt = 0
onMounted(() => { openedAt = Date.now() })

async function submit() {
  error.value = ''
  if (!form.name.trim() || !form.message.trim()) return (error.value = 'Please include your name and a message.')
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return (error.value = 'That email address doesn’t look right.')

  status.value = 'sending'
  // First page + referrer of this visit, saved by the umami-funnel plugin.
  let firstTouch = {}
  try { firstTouch = JSON.parse(sessionStorage.getItem('r302-first-touch') || '{}') } catch {}

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, ...firstTouch, page: location.pathname, elapsed_ms: Date.now() - openedAt }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) throw new Error(data.error || 'Something went wrong.')
    status.value = 'sent'
    window.umami?.track('form-submit', { from: location.pathname, heard_from: form.heard_from.trim().slice(0, 60) || '(blank)' })
  } catch (e) {
    status.value = 'idle'
    error.value = e.message
  }
}

useHead({
  title: "Contact Room 302 Studio",
})

useSeoMeta({
  title: "Contact Room 302 Studio",
  description: "Get in touch with Room 302 Studio. Email us to start a conversation about your project.",
  ogTitle: "Contact Room 302 Studio",
  ogDescription: "Get in touch with Room 302 Studio. Email us to start a conversation about your project.",
  ogUrl: "https://room302.studio/contact",
  ogImage: "https://room302.studio/og/contact.png",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterImage: "https://room302.studio/og/contact.png",
  twitterTitle: "Contact Room 302 Studio",
  twitterDescription: "Get in touch with Room 302 Studio. Email us to start a conversation about your project."
})

// Set up OG metadata for the contact page
useOgMetadata(
  'Contact Us',
  'Get in touch with Room 302 Studio. Email us to start a conversation about your project.'
)
</script>

<style scoped>
.contact-form { margin-top: 3rem; }
.contact-form p { margin-bottom: 1.5rem; }
.pair { gap: 0 1.5rem; }
.optional { font-weight: 400; }
.hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }
.error { color: var(--accent); }
.sent { margin: 3rem 0; }
button[disabled] { opacity: 0.5; cursor: wait; }
</style>
