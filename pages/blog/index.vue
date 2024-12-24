<template>
  <main class="min-h-screen px-4 py-24 bg-white dark:bg-zinc-900">
    <div class="max-w-3xl mx-auto">
      <h1 class="sr-only">Room 302 Studio Blog</h1>

      <ContentQuery path="/blog/" :sort="{ date: -1 }" v-slot="{ data }">
        <div class="space-y-16 md:space-y-24">
          <div v-for="article in data" :key="article._path" :class="[article.hidden ? 'hidden' : '']">
            <div class="group">
              <ContentQuery :path="article._path" v-slot="{ data }" find="one">
                <NuxtLink :to="article._path"
                  class="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-xl">
                  <div class="space-y-6">
                    <div v-if="data.image"
                      class="aspect-[21/9] w-full bg-cover bg-center rounded-xl ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10 overflow-hidden">
                      <div
                        class="w-full h-full bg-cover bg-center transform transition duration-700 group-hover:scale-105"
                        :style="{ 'background-image': `url(${data.image})` }">
                      </div>
                    </div>

                    <div class="space-y-4">
                      <h2
                        class="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-200">
                        {{ article.title }}
                      </h2>

                      <div class="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {{ data.description || ' ' }}
                      </div>

                      <div class="inline-flex items-center text-sm font-semibold text-orange-500 dark:text-orange-400">
                        Read article
                        <div
                          class="i-heroicons-arrow-right-20-solid w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </ContentQuery>
            </div>
          </div>
        </div>
      </ContentQuery>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Room 302 Studio Blog",
})

useSeoMeta({
  title: "Room 302 Studio Blog",
  description: "Room 302 Studio Blog",
  ogTitle: "Room 302 Studio Blog",
  ogDescription: "Room 302 Studio Blog",
  ogImage: "https://room302studio.com/og-image.jpg",
  ogUrl: "https://room302studio.com/blog",
  twitterTitle: "Room 302 Studio Blog",
  twitterDescription: "Room 302 Studio Blog",
})
</script>
