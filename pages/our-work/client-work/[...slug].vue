<template>
  <main class="f4 lh-copy prose dark:prose-invert">
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
  layout: "work",
});

const route = useRoute();

const { data } = await useAsyncData(async () => {
  return queryContent("our-work/client-work", route.params.slug[0]).findOne();
});
</script>