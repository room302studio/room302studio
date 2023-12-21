<template>
  <main class="pt-16 p-4">
    <ContentQuery path="/blog/" :sort="{ date: -1 }" v-slot="{ data }">
      <div class="">
        <UCard v-for="article in data" :key="article._path" :class="[
          article.hidden ? 'hidden' : '',
          'my-4 md:py-4 lg:my-8 align-middle',
        ]">
          <div class="flex justify-between">
            <ContentQuery :path="article._path" v-slot="{ data, toc }" find="one">


              <NuxtLink :to="article._path" style="overflow-wrap: break-word"
                class="pr-4 text-2xl md:text-3xl lg:text-4xl">
                {{ article.title }}

                <span v-if="article.author" class="mr-1 opacity-50 block md:inline-block text-lg lg:text-xl">
                  by {{ article.author }}
                </span>
              </NuxtLink>

              <span v-if="article.date" class="monospace opacity-30">
                {{ formatDate(new Date(article.date)) }}
              </span>


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
