<template>
  <div>
    <img :src="headshot" :alt="name" width="120" />
    <h3>{{ name }}</h3>
    <p v-if="role" class="muted">{{ role }}</p>
    <p v-if="email"><a :href="`mailto:${email}`">{{ email }}</a></p>
    <div class="prose">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  headshot: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
});
</script>
