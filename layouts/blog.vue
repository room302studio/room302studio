<template>
  <main class="w-full overflow-x-auto">
    <SiteNav class="" />
    <div class="px-8">
      <p
        class="opacity-50 md:hidden p-4 font-light monospace leading-relaxed text-xs md:text-sm text-stone-600 dark:text-stone-200 text-balance">
        Room 302 Studio is a bespoke
        innovation lab
        that guides concepts from ideation to implementation.
      </p>
      <slot />
    </div>
    <GlobalFooter />
  </main>
</template>

<script setup>
</script>

<style scoped></style>
