<template>
  <main class="prose dark:prose-invert p-4 md:p-8 lg:p-12">
    <!-- <ContentDoc /> -->
    <ContentRenderer :value="data">
      <template #empty>
        <p>We couldn't find this blog post.</p>
      </template>
    </ContentRenderer>
  </main>
</template>
<script setup>

// use the blog layout 
definePageMeta({
  layout: 'work'
})

const route = useRoute()

const { data } = await useAsyncData(async () => {
  return queryContent('our-work', route.params.slug[0]).findOne()
})
</script>
