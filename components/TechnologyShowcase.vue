<template>
  <section class="pad my-24 md:my-32">
    <h2 class="text-3xl md:text-4xl font-light mb-12 text-stone-800 dark:text-stone-200 text-center">
      {{ title }}
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div v-for="tech in technologiesForType" :key="tech.name"
        class="p-6 bg-stone-50 dark:bg-stone-900/50 rounded-lg tech-item">
        <div class="flex justify-center items-center h-16">
          <UIcon :name="tech.icon" class="text-5xl text-primary-500" />
        </div>
        <h4 class="font-medium mt-3">{{ tech.name }}</h4>
      </div>
      <!-- And more element (optional) -->
      <div v-if="showAndMore"
        class="col-span-2 md:col-span-4 p-6 bg-stone-50/50 dark:bg-stone-900/30 rounded-lg mt-2 border border-dashed border-stone-200 dark:border-stone-700">
        <UIcon name="i-heroicons-plus-circle" class="text-3xl text-primary-500/70 mb-2 mx-auto" />
        <h4 class="font-medium text-stone-600 dark:text-stone-400">And many more</h4>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Technologies We Use'
  },
  type: {
    type: String,
    default: 'general',
    validator: (value) => ['general', 'data', 'ceo'].includes(value)
  },
  technologies: {
    type: Array,
    default: null
  },
  showAndMore: {
    type: Boolean,
    default: false
  }
})

// Predefined technology lists
const dataTechnologies = [
  { name: 'D3.js', icon: 'i-simple-icons-d3dotjs' },
  { name: 'Supabase', icon: 'i-simple-icons-supabase' },
  { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
  { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql' },
  { name: 'Cloudflare', icon: 'i-simple-icons-cloudflare' },
  { name: 'Neo4j', icon: 'i-simple-icons-neo4j' },
  { name: 'Docker', icon: 'i-simple-icons-docker' },
  { name: 'GitHub', icon: 'i-simple-icons-github' },
]

const ceoTechnologies = [
  { name: 'Cloudflare', icon: 'i-simple-icons-cloudflare' },
  { name: 'Neo4j', icon: 'i-simple-icons-neo4j' },
  { name: 'Docker', icon: 'i-simple-icons-docker' },
  { name: 'GitHub', icon: 'i-simple-icons-github' },
]

// Default/general technologies (subset of others)
const generalTechnologies = [
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
  { name: 'D3.js', icon: 'i-simple-icons-d3dotjs' },
  { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
  { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql' },
]

// Compute which technologies to display based on the type prop
const technologiesForType = computed(() => {
  // If custom technologies are provided, use those instead of predefined lists
  if (props.technologies) {
    return props.technologies
  }

  // Otherwise use the predefined lists based on type
  switch (props.type) {
    case 'data':
      return dataTechnologies
    case 'ceo':
      return ceoTechnologies
    default:
      return generalTechnologies
  }
})
</script>

<style scoped>
.pad {
  @apply px-8 md:px-12 lg:px-32 py-12 md:py-16;
}

.tech-item {
  @apply transition-all duration-300;
}

.tech-item:hover {
  @apply transform -translate-y-1 shadow-sm;
}

.tech-item UIcon {
  @apply transition-all duration-300;
}

.tech-item:hover UIcon {
  @apply text-primary-400 scale-110;
}
</style>