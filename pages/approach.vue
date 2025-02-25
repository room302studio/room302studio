<template>
  <div>
    <ClientOnly>
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-3xl md:text-4xl font-light mb-6">Redirecting to Our Process...</h1>
          <p class="text-lg text-stone-600 dark:text-stone-400 mb-8">
            We've moved our approach information to our comprehensive process page.
          </p>
          <UButton to="/process" class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2">
            Go to Process Page
          </UButton>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // Redirect to process page after a short delay
  setTimeout(() => {
    router.push('/process')
  }, 1500)
})

useSeoMeta({
  title: 'Our Approach | Room 302 Studio',
  description: 'Learn about our "YOLO but thoughtful" approach to bringing ideas to life.',
})
</script>

<style scoped>
/* Add any styles you need */
</style>
