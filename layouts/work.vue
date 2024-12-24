<template>
  <main class="max-w-screen-2xl mx-auto">
    <SiteNav class="" />
    <div class="relative">
      <slot />

      <UButton to="/our-work" class="fixed bottom-8 right-8 z-50" color="primary" variant="solid">
        ← Back to work
      </UButton>
    </div>

    <GlobalFooter />
  </main>
</template>

<script setup>
// Force scroll to top on route changes
const router = useRouter()

// Handle scroll restoration
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
/* Ensure smooth scrolling except when forcing scroll position */
:root {
  scroll-behavior: smooth;
}

/* But disable smooth scroll when we're forcing position */
.force-scroll {
  scroll-behavior: auto;
}
</style>
