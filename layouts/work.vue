<template>
  <div class="min-h-screen bg-stone-50 dark:bg-stone-950">
    <SiteNav class="max-w-screen-2xl mx-auto" />
    <div class="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-32">
      <slot />
      <UButton to="/our-work" color="primary" class="fixed bottom-12 right-12 z-50" variant="solid">
        ← Back to work
      </UButton>
    </div>
    <GlobalFooter />
  </div>
</template>

<script setup>
// Force scroll to top on route changes
const router = useRouter()
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})
onMounted(() => window.scrollTo(0, 0))
</script>
