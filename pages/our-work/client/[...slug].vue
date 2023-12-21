<template>
  <main class="f4 lh-copy prose dark:prose-invert">
    <!-- <ContentDoc /> -->
    <ContentRenderer :value="data">
      <template #empty>
        <div>
          <p>We couldn't find this blog post.</p>

          <UButton to="/" class="mt-4">
            Back home
          </UButton>
        </div>
      </template>
    </ContentRenderer>
  </main>
</template>
<script setup>
definePageMeta({
  layout: "our-work",
});

const route = useRoute();

const { data } = await useAsyncData(async () => {
  return queryContent("client-work", route.params.slug[0]).findOne();
});
</script>
