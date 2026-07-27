<template>
  <div>
    <section>
      <p class="eyebrow">Room 302 — Blog</p>
      <h1>Journal</h1>
      <p class="measure">Thoughts, processes, and ideas from Room 302 Studio.</p>
    </section>

    <section>
      <table>
        <thead>
          <tr><th class="mono">Date</th><th>Title</th></tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.path" v-show="!article.hidden">
            <td class="mono muted">{{ formatDate(article.date) }}</td>
            <td>
              <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
              <p v-if="article.description" class="muted">{{ article.description }}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p><NuxtLink to="/">Back to home →</NuxtLink></p>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData("blog-index", () =>
  queryCollection("blog").order("date", "DESC").all()
);

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
  ogImage: "https://room302.studio/og-image.jpg",
  ogUrl: "https://room302.studio/blog",
  twitterTitle: "Journal | Room 302 Studio",
  twitterDescription: "Thoughts, processes, and ideas from Room 302 Studio.",
})
</script>
