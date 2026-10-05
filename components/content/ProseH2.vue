<template>
  <h2 :id="id">
    <a v-if="generate" :href="`#${id}`"><slot /></a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h2);
</script>

<style scoped>
h2 a { text-decoration: none; color: inherit; }
</style>
