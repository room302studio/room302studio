<template>
  <main class="min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div class="space-y-16 md:space-y-24">
        <!-- Email Section -->
        <div class="text-center space-y-8">
          <h1 class="text-4xl md:text-5xl font-light tracking-tight text-zinc-900 dark:text-white">
            Get in touch
          </h1>
          <p class="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-light tracking-wide max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Just want to say hi?
          </p>

          <a href="mailto:studio@room302.studio"
            class="inline-block px-8 py-4 text-lg md:text-xl bg-primary-500 hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500 text-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
            studio@room302.studio
          </a>

          <p class="text-base text-zinc-500 dark:text-zinc-400 font-light">
            We'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Contact Room 302 Studio",
})

useSeoMeta({
  title: "Contact Room 302 Studio",
  description: "Get in touch with Room 302 Studio. Email us to start a conversation about your project.",
  ogTitle: "Contact Room 302 Studio",
  ogDescription: "Get in touch with Room 302 Studio. Email us to start a conversation about your project.",
  ogImage: "https://room302studio.com/og-image.jpg",
  ogUrl: "https://room302studio.com/contact",
})
</script>
