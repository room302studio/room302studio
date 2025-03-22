<template>
  <main class="min-h-screen py-36 md:py-48 bg-stone-50/50 dark:bg-stone-900/80">
    <div class="max-w-5xl mx-auto px-8 md:px-12">
      <!-- Blog header section -->
      <header class="mb-24 md:mb-32">
        <div class="font-mono text-primary-500 uppercase tracking-wide text-sm mb-4">Room 302 — Blog</div>
        <h1
          class="font-fraunces text-5xl md:text-6xl xl:text-7xl font-light mb-10 text-stone-800 dark:text-stone-200 tracking-tight">
          Blog
        </h1>
        <p
          class="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl tracking-wide leading-relaxed font-light">
          Thoughts, processes, and ideas from Room 302 Studio.
        </p>
      </header>

      <ContentQuery path="/blog/" :sort="{ date: -1 }" v-slot="{ data }">
        <div class="space-y-32 md:space-y-40">
          <div v-for="(article, index) in data" :key="article._path" :class="[article.hidden ? 'hidden' : '']"
            class="article-item">
            <div class="max-w-3xl mx-auto">
              <ContentQuery :path="article._path" v-slot="{ data }" find="one">
                <NuxtLink :to="article._path"
                  class="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl transition-all">
                  <div class="space-y-10">
                    <!-- Date display with subtle icon -->
                    <div
                      class="font-mono text-sm uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center">
                      <UIcon name="i-heroicons-calendar"
                        class="text-stone-400/50 dark:text-stone-500/50 mr-3 text-xs" />
                      {{ formatDate(article.date) }}
                      <span v-if="article.category"
                        class="ml-4 text-primary-500 dark:text-primary-500 flex items-center">
                        <UIcon name="i-heroicons-hashtag"
                          class="text-primary-500/50 dark:text-primary-500/50 mr-1 text-xs" />
                        {{ article.category }}
                      </span>
                    </div>

                    <div v-if="data.image"
                      class="aspect-[21/9] w-full bg-cover bg-center rounded-xl ring-1 ring-inset ring-stone-900/10 dark:ring-white/10 overflow-hidden">
                      <div class="w-full h-full bg-cover bg-center"
                        :style="{ 'background-image': `url(${data.image})` }">
                      </div>
                    </div>

                    <div class="space-y-6 max-w-prose">
                      <h2
                        class="font-fraunces text-3xl md:text-4xl font-light tracking-tight text-stone-800 dark:text-stone-200 leading-snug">
                        {{ article.title }}
                      </h2>

                      <div
                        class="text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-light max-w-[65ch] tracking-wide">
                        <span v-if="data.description">{{ data.description }}</span>
                      </div>

                      <!-- Read more link with subtle icon -->
                      <div
                        class="pt-8 font-mono text-primary-500 dark:text-primary-500 text-sm group-hover:text-primary-500/80 dark:group-hover:text-primary-500/80 transition-colors duration-300">
                        <span>Read more</span>
                        <span
                          class="ml-2 text-primary-500/70 group-hover:text-primary-500 transition-colors duration-300">→</span>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </ContentQuery>
            </div>

            <!-- Refined divider with literary styling -->
            <div v-if="index !== data.length - 1" class="mt-28 md:mt-36 flex items-center justify-center">
              <div class="w-20 h-px bg-stone-200 dark:bg-stone-800"></div>
              <div class="mx-6 text-stone-300 dark:text-stone-700 font-fraunces">&#10022;</div>
              <div class="w-20 h-px bg-stone-200 dark:bg-stone-800"></div>
            </div>
          </div>
        </div>
      </ContentQuery>

      <div class="mt-32 flex justify-center">
        <MonoButton to="/" primary large>Back to home</MonoButton>
      </div>
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
  description: "Thoughts, processes, and ideas from Room 302 Studio.",
  ogTitle: "Journal | Room 302 Studio",
  ogDescription: "Thoughts, processes, and ideas from Room 302 Studio.",
  ogImage: "https://room302studio.com/og-image.jpg",
  ogUrl: "https://room302studio.com/blog",
  twitterTitle: "Journal | Room 302 Studio",
  twitterDescription: "Thoughts, processes, and ideas from Room 302 Studio.",
})
</script>

<style scoped>
.font-fraunces {
  font-family: 'Fraunces', serif;
  font-weight: 300;
  letter-spacing: -0.025em;
}

.font-mono {
  font-family: var(--font-mono);
  letter-spacing: -0.01em;
}
</style>
