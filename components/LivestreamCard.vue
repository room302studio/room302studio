<template>
  <UCard>
    <NuxtLink :to="`/livestreams/${livestream.id}`" class="text-blue-500 hover:underline">
      <h3>{{ livestream.title }}</h3>
    </NuxtLink>
    <UBadge v-if="!livestream.confirmed" color="primary" variant="outline">Unconfirmed</UBadge>
    <p>{{ livestream.description }}</p>
    <p>{{ streamStartNiceTimeFormat(livestream.start_time) }}</p>
    <p v-if="livestream.confirmed">Going live in {{ timeRelativeToNow(livestream.start_time) }}</p>
  </UCard>
</template>

<script setup>
const { livestream } = defineProps(['livestream'])
</script>

<style scoped></style>