<template>
  <main class="min-h-screen py-32 md:py-40 bg-stone-50/50 dark:bg-stone-900/80">
    <div class="max-w-4xl mx-auto px-6 md:px-8">
      <div class="mb-16 md:mb-24">
        <h1
          class="text-5xl md:text-6xl font-extralight tracking-tight text-stone-800 dark:text-stone-200 flex items-center">
          <UIcon name="i-heroicons-document-text"
            class="text-primary-500/30 dark:text-primary-500/30 mr-4 text-4xl md:text-5xl" />
          Studio Journal
        </h1>
      </div>

      <ContentQuery path="/blog/" :sort="{ date: -1 }" v-slot="{ data }">
        <div class="space-y-24 md:space-y-32">
          <div v-for="(article, index) in data" :key="article._path" :class="[article.hidden ? 'hidden' : '']"
            class="article-container" :style="{ 'animation-delay': `${index * 0.1}s` }">
            <div class="group">
              <ContentQuery :path="article._path" v-slot="{ data }" find="one">
                <NuxtLink :to="article._path"
                  class="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl transition-all">
                  <div class="space-y-8">
                    <!-- Date display with subtle icon -->
                    <div
                      class="text-sm font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center">
                      <UIcon name="i-heroicons-calendar"
                        class="text-stone-400/50 dark:text-stone-500/50 mr-2 text-xs" />
                      {{ formatDate(article.date) }}
                      <span v-if="article.category"
                        class="ml-3 text-primary-500 dark:text-primary-500 flex items-center">
                        <UIcon name="i-heroicons-hashtag"
                          class="text-primary-500/50 dark:text-primary-500/50 mr-1 text-xs" />
                        {{ article.category }}
                      </span>
                    </div>

                    <div v-if="data.image"
                      class="aspect-[21/9] w-full bg-cover bg-center rounded-xl ring-1 ring-inset ring-stone-900/10 dark:ring-white/10 overflow-hidden">
                      <div
                        class="w-full h-full bg-cover bg-center transform transition duration-700 ease-out group-hover:scale-105"
                        :style="{ 'background-image': `url(${data.image})` }">
                      </div>
                    </div>

                    <div class="space-y-5">
                      <h2
                        class="text-3xl md:text-4xl font-light tracking-tight text-stone-800 dark:text-stone-200 group-hover:text-primary-500 dark:group-hover:text-primary-500 transition-colors duration-300">
                        {{ article.title }}
                      </h2>

                      <div class="text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-light prose-lg">
                        {{ data.description || ' ' }}
                      </div>

                      <!-- Read more link with subtle icon -->
                      <div
                        class="pt-4 flex items-center text-primary-500 dark:text-primary-500 font-medium group-hover:text-primary-500/80 dark:group-hover:text-primary-500/80 transition-colors duration-300">
                        <UIcon name="i-heroicons-arrow-right-circle"
                          class="text-primary-500/30 dark:text-primary-500/30 mr-2" />
                        <span>Read more</span>
                        <span
                          class="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </ContentQuery>
            </div>

            <!-- Subtle divider with tiny dot for extra refinement -->
            <div v-if="index !== data.length - 1" class="mt-24 md:mt-32 flex items-center justify-center">
              <div class="w-1/3 h-px bg-stone-200 dark:bg-stone-800"></div>
              <div class="w-1 h-1 rounded-full bg-primary-500/20 dark:bg-primary-500/20 mx-4"></div>
              <div class="w-1/3 h-px bg-stone-200 dark:bg-stone-800"></div>
            </div>
          </div>
        </div>
      </ContentQuery>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { watch } from 'vue';

const router = useRouter();

// Watch route changes to scroll to top
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
);

// Format date function
const formatDate = (dateString: string) => {
  if (!dateString) return '';

  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

useHead({
  title: "Journal | Room 302 Studio",
})

useSeoMeta({
  title: "Journal | Room 302 Studio",
  description: "Thoughts on design, technology, and the spaces in between.",
  ogTitle: "Journal | Room 302 Studio",
  ogDescription: "Thoughts on design, technology, and the spaces in between.",
  ogImage: "https://room302studio.com/og-image.jpg",
  ogUrl: "https://room302studio.com/blog",
  twitterTitle: "Journal | Room 302 Studio",
  twitterDescription: "Thoughts on design, technology, and the spaces in between.",
})
</script>

<style scoped>
.article-container {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
