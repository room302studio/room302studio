<template>
  <div class="min-h-screen bg-stone-50 dark:bg-stone-950">
    <SiteNav class="max-w-screen-2xl mx-auto" />
    <main class="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-32">
      <slot />
    </main>
    <GlobalFooter />
  </div>
</template>
