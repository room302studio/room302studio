<template>
  <main class="pt-16 p-4">
    <ContentQuery path="/blog/" :sort="{ date: -1 }" v-slot="{ data }">
      <div class="flex">
        <div v-for="article in data" :key="article._path" :class="[
          article.hidden ? 'hidden' : '',
          'my-4 lg:my-8 p-2 align-middle w-1/2 lg:w-1/3',
        ]">
          <div class="rounded-lg  bg-zinc-100">
            <ContentQuery :path="article._path" v-slot="{ data, toc }" find="one">
              <div class="w-full cover h-32 bg-cover bg-center rounded" v-if="data.image" :style="{
                'background-image': `url(${data.image})`,
              }">

              </div>
              <div class="p-8">
                <div v-if="article.date" class="monospace text-zinc-400 text-xs">
                  {{ formatDate(new Date(article.date)) }}
                </div>

                <NuxtLink :to="article._path" style="overflow-wrap: break-word"
                  class="pr-4 text-xl leading-tight font-semibold text-zinc-700">
                  {{ article.title }}
                </NuxtLink>

                <div class="text-zinc-600 text-sm font-light pt-4" v-if="data.description">
                  {{ data.description }}
                </div>

                <NuxtLink :to="article._path" class="text-primary-500 mt-4 block">
                  Read post
                </NuxtLink>


              </div>



            </ContentQuery>
          </div>
        </div>
      </div>
    </ContentQuery>
  </main>
</template>
<script setup lang="ts">
// import { countPhotos, filterStrongTags } from '~/helpers'
// import anime from "animejs/lib/anime.es.js";
import { timeFormat } from "d3-time-format";

const formatDate = timeFormat("%m.%d.%y");

</script>
<style></style>
