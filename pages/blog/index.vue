<template>
  <main class="pt-16 p-4">
    <ContentQuery path="/blog/" :sort="{ date: -1 }" v-slot="{ data }">
      <div class="columns columns-1 md:columns-3 gap-4 lg:gap-5 xl:columns-5">
        <UCard
          v-for="article in data"
          :key="article._path"
          :class="[
            article.hidden ? 'hidden' : '',
            'opacity-80 xl:opacity-60 hover:opacity-100 transition duration-200 ease-in-out mb-4',
          ]"
        >
          <div>
            <!-- do another contentquery and contentrenderer instead of contentdoc for this specific article in the list, so we can get additional data in the doc, like readingTime -->
            <ContentQuery
              :path="article._path"
              v-slot="{ data, toc }"
              find="one"
            >
              <div
                class="flex justify-between items-center text-gray-400 dark:text-gray-600 text-xs md:text-sm mb-2 md:mb-4"
              >
                <span v-if="article.date">
                  {{ formatDate(new Date(article.date)) }}
                </span>
              </div>

              <NuxtLink
                :to="article._path"
                style="overflow-wrap: break-word"
                class="link font-bold text-gray-900 dark:text-gray-100 text-2xl md:text-3xl tracking-tight mb-2 md:mb-4 block hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200"
              >
                {{ article.title }}</NuxtLink
              >

              <div
                class="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-2 md:mb-4"
              ></div>

              <div class="text-gray-700 dark:text-gray-300 text-md max-w-prose">
                <div v-if="article.dek" class="font-light my-6">
                  {{ article.dek }}
                </div>
                <div v-else="article.description" class="dek">
                  {{ article.description }}
                </div>
              </div>
            </ContentQuery>
          </div>
        </UCard>
      </div>
    </ContentQuery>
  </main>
</template>
<script setup lang="ts">
// import { countPhotos, filterStrongTags } from '~/helpers'
// import anime from "animejs/lib/anime.es.js";
import { timeFormat } from "d3-time-format";

const formatDate = timeFormat("%B %d, %Y");
</script>
<style></style>
