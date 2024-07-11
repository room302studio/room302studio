<template>
  <div>
    <p>ID: </p>
    <pre>{{ router.params.id }}</pre>

    <LivestreamCard v-if="livestream" :livestream="livestream" />

    <pre>{{ livestream }}</pre>
  </div>
</template>

<script setup>

const { currentRoute: router } = useRouter();

const id = computed(() => router.params.id)


const { data: livestream, error, refresh } = useAsyncData(async () => {
  const { data, error } = await supabase
    .from('livestreams')
    .select('*')
    .eq('id', id.value)
  if (error) {
    console.error(error)
  } else {
    return data
  }
})
</script>

<style scoped></style>