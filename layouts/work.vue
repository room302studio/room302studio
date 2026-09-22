<template>
  <div>
    <SiteNav />
    <main class="page">
      <slot />
      <p class="row">
        <NuxtLink to="/our-work" class="btn">← Back to work</NuxtLink>
      </p>
    </main>
    <GlobalFooter />
  </div>
</template>

<script setup>
// Nuxt's default router scrollBehavior already resets scroll on route
// changes; just handle the initial mount here (no global guard to leak).
onMounted(() => window.scrollTo(0, 0))
</script>
