<template>
  <main id="blog-content"
    class="measure-wide f4 lh-copy prose dark:prose-invert overflow-x-auto space-y-8 md:space-y-12">
    <span class="text-primary-500 uppercase tracking-wider block mb-8 md:mb-12">Blog</span>
    <!-- <ContentDoc /> -->
    <ContentRenderer :value="data">
      <template #empty>
        <p class="f4 lh-copy">We couldn't find this blog post.</p>

        <UButton to="/blog" class="mt-8"> Back to blog </UButton>
      </template>
    </ContentRenderer>
  </main>
</template>
<script setup>
// use the blog layout
definePageMeta({
  layout: "blog",
});

const route = useRoute();

const { data } = await useAsyncData(async () => {
  return queryContent("blog", route.params.slug[0]).findOne();
});

useSeoMeta({
  title: () => data?.title,
  description: () => data?.description,
  ogTitle: () => data?.title,
  ogDescription: () => data?.description,

})

useContentHead(data)

onMounted(() => {
  // Ensure we start at the top when entering a blog post
  window.scrollTo({
    top: 0,
    behavior: 'instant' // Use instant for blog posts to avoid content jumping
  });
});

// Also watch route changes within blog posts
const router = useRouter();
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }
);
</script>
<style lang="scss">
#blog-content img {
  @apply rounded-md;
}
</style>
