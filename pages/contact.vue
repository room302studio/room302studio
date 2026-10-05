<template>
  <div>
    <section>
      <p class="eyebrow">Contact</p>
      <h1>Get in touch</h1>
      <p class="measure">
        Have a project in mind? Want to collaborate? Just want to say hi?
        Email us and we'll get back to you as soon as possible, typically
        within 24 hours on business days.
      </p>
      <p class="row">
        <a href="mailto:studio@room302.studio" class="btn big">studio@room302.studio</a>
      </p>
    </section>
  </div>
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
