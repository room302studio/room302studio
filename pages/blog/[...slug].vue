<template>
  <main class="measure-wide f4 lh-copy prose dark:prose-invert p-4 md:p-10 lg:p-14">
    <!-- <ContentDoc /> -->
    <ContentRenderer :value="data">
      <template #empty>
        <p class="f4 lh-copy">We couldn't find this blog post.</p>

        <UButton to="/blog" class="mt-4">
          Back to blog
        </UButton>
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
</script>
