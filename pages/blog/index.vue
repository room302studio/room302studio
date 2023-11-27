<template>
  <div class="max-w-2xl mx-auto">
    <ul>
      <li v-for="post in posts" :key="post.slug" class="my-12 block">
        <!-- <pre>{{ post }}</pre> -->
        <!-- <h2>{{ post.title }}</h2> -->
        <h2 class="text-2xl md:text-6xl font-bold mb-2">
          <NuxtLink :to="`${post._path}`" class="
        no-underline">{{ post.title }}</NuxtLink>
        </h2>
        <p>{{ post.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('content/blog', () => queryContent('blog').find())

</script>