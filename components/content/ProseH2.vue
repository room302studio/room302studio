<template>
  <h2 :id="id" class="text-2xl lg:text-6xl text-balance no-underline my-0 py-0 mb-12">
    <a v-if="generate" :href="`#${id}`" class="no-underline font-light">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>