<template>
  <main class="min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div class="space-y-16 md:space-y-24">
        <!-- Email Section -->
        <div class="text-center space-y-8">
          <div class="font-mono text-primary-500 uppercase tracking-wide text-sm mb-6">Room 302 — Contact</div>
          <h1
            class="text-4xl md:text-5xl xl:text-6xl font-heading font-light tracking-tight text-stone-800 dark:text-stone-200 mb-8">
            Get in touch
          </h1>
          <p
            class="text-lg md:text-xl text-stone-600 dark:text-stone-400 font-light tracking-wide max-w-2xl mx-auto mb-12">
            <span class="font-serif italic">Have a project in mind?</span> Want to collaborate? Just want to say hi?
          </p>

          <div class="flex flex-col items-center space-y-8">
            <MonoButton as="a" to="mailto:studio@room302.studio" primary large class="py-4 px-8 text-xl">
              studio@room302.studio
            </MonoButton>

            <p class="text-base text-stone-500 dark:text-stone-400 font-light max-w-md">
              We'll get back to you as soon as possible, typically within 24 hours on business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useOgMetadata } from '~/composables/useOgMetadata'

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
.font-heading {
  font-family: var(--font-sans);
  font-weight: 300;
  letter-spacing: -0.025em;
}

.font-mono {
  font-family: var(--font-mono);
  letter-spacing: -0.01em;
}

.font-serif {
  font-family: var(--font-serif);
  font-weight: 300;
}
</style>
