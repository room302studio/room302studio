<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Remove or fix any @import statements that might be here */

:root {
  color-scheme: light dark;
}

body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.monospace {
  font-family: var(--font-mono);
}

.text-balance {
  text-wrap: balance;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
