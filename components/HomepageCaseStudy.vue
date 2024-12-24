<template>
  <div class="case-study">
    <div class="pad relative md:flex items-center my-8 md:my-32 mx-auto lg:mx-0">
      <div class="w-full md:w-7/12">
        <h4 class="font-medium text-gray-500 tex uppercase text-base pb-2">
          {{ project.client }}
        </h4>
        <h2 class="font-medium text-5xl text-primary-500 pb-8">
          {{ project.title }}
        </h2>
        <div class="intro-text text-lg my-2 border-l-2 text-gray-700 border-gray-500 dark:text-stone-400">
          <p class="pl-4 max-w-prose leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <UButton variant="ghost" class="pl-5 py-8" :to="project.link">
          Explore this project
          <UIcon name="i-heroicons-arrow-right-16-solid" />
        </UButton>
      </div>
      <div class="intro-images-wrapper w-full md:w-5/12 md:grid grid-cols-1 grid-rows-1 relative md:p-12">
        <img :src="project.images.primary" alt=""
          class="intro-image border border-gray-100 row-start-1 col-start-1 w-full rounded-lg md:translate-y-5 md:drop-shadow-xl py-2 md:py-0" />
        <img :src="project.images.secondary" alt=""
          class="intro-image border border-gray-100 row-start-1 col-start-1 w-full rounded-lg md:translate-x-5 md:drop-shadow-xl py-2 md:py-0 hidden md:block" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.pad {
  @apply p-2 md:p-8 lg:p-12;
}
</style>
