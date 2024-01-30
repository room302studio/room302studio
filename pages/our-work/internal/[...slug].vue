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
  const param = route.params.slug[0];
  console.log(param)
  return queryContent("our-work/internal", param).findOne();
});

const { data: clientWork } = await useAsyncData("content/our-work/client-work", () =>
  queryContent("our-work/client-work").find(),
);

const { data: internalWork } = await useAsyncData("content/our-work/internal-work", () =>
  queryContent("our-work/internal").find(),
);

</script>
