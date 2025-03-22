<template>
  <div class="min-h-screen bg-stone-50 dark:bg-stone-950">
    <SiteNav class="max-w-screen-2xl mx-auto" />
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-32">
      <slot />
    </div>
    <GlobalFooter />
  </div>
</template>
