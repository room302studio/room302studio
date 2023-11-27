<template>
  <main class="measure-wide f4 lh-copy prose dark:prose-invert p-4 md:p-10 lg:p-14">
    <!-- <ContentDoc /> -->
    <ContentRenderer :value="data">
      <template #empty>
        <p>We couldn't find this blog post.</p>
      </template>
    </ContentRenderer>
  </main>
</template>
<script setup>
definePageMeta({
  layout: 'our-work'
})

const route = useRoute()

const { data } = await useAsyncData(async () => {
  return queryContent('our-work', route.params.slug[0]).findOne()
})
</script>
