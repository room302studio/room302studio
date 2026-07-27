<template>
  <main>
    <p><NuxtLink to="/blog">← Blog</NuxtLink></p>

    <article class="prose">
      <template v-if="data">
        <h1>{{ data.title }}</h1>
        <p class="mono muted" v-if="data.author || data.date">
          <span v-if="data.author">{{ data.author }}</span>
          <span v-if="data.author && data.date"> · </span>
          <time v-if="data.date" :datetime="data.date">{{ formatDate(data.date) }}</time>
        </p>
        <ContentRenderer :value="data" />
      </template>

      <div v-else>
        <h1>We couldn't find this blog post</h1>
        <p class="muted">The page you're looking for doesn't exist or may have been moved.</p>
        <p><NuxtLink to="/blog" class="btn">Browse all articles</NuxtLink></p>
      </div>
    </article>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "blog",
});

const route = useRoute();

const { data } = await useAsyncData(`blog-${route.params.slug[0]}`, () =>
  queryCollection("blog").path(`/blog/${route.params.slug[0]}`).first()
);

const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
};

useSeoMeta({
  title: () => data.value?.title ? `${data.value.title} | Room 302 Studio Blog` : "Blog | Room 302 Studio",
  description: () => data.value?.description || "Read the latest articles from Room 302 Studio",
  ogTitle: () => data.value?.title ? `${data.value.title} | Room 302 Studio Blog` : "Blog | Room 302 Studio",
  ogDescription: () => data.value?.description || "Read the latest articles from Room 302 Studio",
  ogImage: () => data.value?.image || "https://room302.studio/og-image.jpg",
});

const router = useRouter();
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
);
</script>
