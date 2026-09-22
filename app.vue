<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
/* Remove or fix any @import statements that might be here */

:root {
  color-scheme: dark;
}
:root.light {
  color-scheme: light;
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
</style>
