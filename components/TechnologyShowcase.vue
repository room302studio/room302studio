<template>
  <ul class="row mono">
    <li v-for="tech in technologiesForType" :key="tech.name">{{ tech.name }}</li>
    <li v-if="showAndMore" class="muted">…and more</li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Technologies We Use' },
  type: {
    type: String,
    default: 'general',
    validator: (value) => ['general', 'data', 'ceo'].includes(value)
  },
  technologies: { type: Array, default: null },
  showAndMore: { type: Boolean, default: false }
})

const dataTechnologies = [
  { name: 'D3.js' }, { name: 'Supabase' }, { name: 'Node.js' }, { name: 'PostgreSQL' },
  { name: 'Cloudflare' }, { name: 'Neo4j' }, { name: 'Docker' }, { name: 'GitHub' },
]
const ceoTechnologies = [
  { name: 'Cloudflare' }, { name: 'Neo4j' }, { name: 'Docker' }, { name: 'GitHub' },
  { name: 'Google BigQuery' }, { name: 'OpenAI' }, { name: 'Grafana' }, { name: 'Supabase' },
  { name: 'PostgreSQL' },
]
const generalTechnologies = [
  { name: 'Vue.js' }, { name: 'D3.js' }, { name: 'Node.js' }, { name: 'PostgreSQL' },
]

const technologiesForType = computed(() => {
  if (props.technologies) return props.technologies
  switch (props.type) {
    case 'data': return dataTechnologies
    case 'ceo': return ceoTechnologies
    default: return generalTechnologies
  }
})
</script>

<style scoped>
ul.row { gap: 8px 20px; }
</style>
