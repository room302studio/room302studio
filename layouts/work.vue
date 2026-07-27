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
// Force scroll to top on route changes
const router = useRouter()
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})
onMounted(() => window.scrollTo(0, 0))
</script>
