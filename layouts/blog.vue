<template>
  <div class="min-h-screen bg-stone-50 dark:bg-stone-950">
    <SiteNav class="pad max-w-screen-2xl mx-auto" />
    <div class="pad max-w-screen-2xl mx-auto">
      <p class="md:hidden mb-12 font-light monospace text-xs text-stone-600/50 dark:text-stone-200/50">
        Room 302 Studio is an innovation lab that guides concepts from ideation to implementation.
      </p>
      <slot />
    </div>
    <GlobalFooter />
  </div>
</template>

<style scoped>
.pad {
  @apply px-8 md:px-12 lg:px-32 py-12 md:py-16;
}
</style>
