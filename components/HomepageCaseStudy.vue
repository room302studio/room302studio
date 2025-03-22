<template>
  <div class="case-study">
    <div class="pad relative md:flex items-center my-8 md:my-32 mx-auto lg:mx-0">
      <div class="w-full md:w-7/12">
        <h4 class="font-mono text-gray-500 uppercase text-sm tracking-wider pb-2 client-name">
          {{ project.client }}
        </h4>
        <h2 class="font-medium text-4xl md:text-5xl text-stone-800 dark:text-stone-200 pb-6 md:pb-8 project-title">
          {{ project.title }}
        </h2>
        <div class="intro-text text-lg my-2 border-l-2 text-gray-700 border-gray-500 dark:text-stone-400">
          <p class="pl-4 max-w-prose leading-relaxed project-description">
            {{ project.description }}
          </p>
        </div>

        <div class="value-add my-4 pl-4 max-w-prose">
          <h4 class="font-mono text-stone-600 dark:text-stone-400 text-sm uppercase tracking-wider mb-2">How We
            Brought This To Life</h4>
          <ul class="space-y-2 text-sm text-gray-700 dark:text-stone-400">
            <template v-if="project.valueAdd && project.valueAdd.length">
              <li v-for="(item, i) in project.valueAdd" :key="i" class="flex items-start">
                <UIcon :name="item.icon || 'i-heroicons-light-bulb'"
                  class="text-stone-500 dark:text-stone-400 mt-1 mr-2 flex-shrink-0" />
                <span>{{ item.text }}</span>
              </li>
            </template>
            <template v-else>
              <li class="flex items-start">
                <UIcon name="i-heroicons-light-bulb"
                  class="text-stone-500 dark:text-stone-400 mt-1 mr-2 flex-shrink-0" />
                <span>We explored multiple futures through rapid prototyping, helping the client see possibilities they
                  hadn't imagined.</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-beaker" class="text-stone-500 dark:text-stone-400 mt-1 mr-2 flex-shrink-0" />
                <span>Our team brought unique perspectives, finding elegant solutions where others saw only
                  complexity.</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-heart" class="text-stone-500 dark:text-stone-400 mt-1 mr-2 flex-shrink-0" />
                <span>We nurtured this idea with kindness and care, serving as midwives to bring it into the world fully
                  formed.</span>
              </li>
            </template>
          </ul>
        </div>

        <UButton variant="ghost" class="pl-5 py-8 project-link group" :to="project.link">
          <span class="relative font-mono">
            Explore this project
            <span
              class="absolute -bottom-1 left-0 w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
          </span>
          <UIcon name="i-heroicons-arrow-right-16-solid"
            class="ml-2 text-stone-500 group-hover:text-primary-500 transition-colors duration-300" />
        </UButton>
      </div>
      <div class="intro-images-wrapper w-full md:w-5/12 md:grid grid-cols-1 grid-rows-1 relative md:p-12">
        <img :src="project.images.primary" alt=""
          class="intro-image border border-gray-100 row-start-1 col-start-1 w-full rounded-lg py-2 md:py-0 transition-all duration-500 primary-image" />
        <img :src="project.images.secondary" alt=""
          class="intro-image border border-gray-100 row-start-1 col-start-1 w-full rounded-lg py-2 md:py-0 hidden md:block transition-all duration-500 secondary-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
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

.client-name {
  @apply opacity-80 transition-opacity duration-300;
}

.case-study:hover .client-name {
  @apply opacity-100;
}

.project-title {
  @apply transition-all duration-300;
}

.case-study:hover .project-title {
  @apply text-primary-500;
}

/* Subtle hover effects for icons */
.case-study:hover .text-stone-500,
.case-study:hover .text-stone-400 {
  @apply text-primary-500 transition-colors duration-300;
}

.project-description {
  @apply transition-all duration-300;
}

.project-link {
  @apply text-stone-700 dark:text-stone-300 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300;
}

.intro-image {
  @apply transition-all duration-500 ease-out;
}
</style>
