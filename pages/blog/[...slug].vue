<template>
  <main>
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
  layout: 'blog'
})

const route = useRoute()

const { data } = await useAsyncData(async () => {
  return queryContent('blog', route.params.slug[0]).findOne()
})
</script>
