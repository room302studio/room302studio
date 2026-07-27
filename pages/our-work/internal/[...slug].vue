<template>
  <div>
    <p><NuxtLink to="/our-work">← Work</NuxtLink></p>

    <template v-if="data">
      <h1>{{ data.title }}</h1>

      <dl class="grid-2">
        <div>
          <dt class="eyebrow">Type</dt>
          <dd class="mono">{{ data.type || 'Internal Project' }}</dd>
        </div>
        <div v-if="data.technology">
          <dt class="eyebrow">Technology</dt>
          <dd class="mono">{{ data.technology }}</dd>
        </div>
        <div>
          <dt class="eyebrow">Status</dt>
          <dd class="mono">{{ data.status || 'In Development' }}</dd>
        </div>
        <div v-if="data.date">
          <dt class="eyebrow">Date</dt>
          <dd class="mono">{{ data.date }}</dd>
        </div>
      </dl>

      <p v-if="data.description" class="measure muted">{{ data.description }}</p>

      <img v-if="data.image" :src="data.image" :alt="data.title" />

      <article class="prose">
        <ContentRenderer :value="data" />
      </article>
    </template>

    <template v-else>
      <h1>Not found</h1>
      <p>We couldn't find this project.</p>
      <p><NuxtLink to="/" class="btn">Back home</NuxtLink></p>
    </template>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "work",
});

const route = useRoute();

const { data } = await useAsyncData(
  `internal-${route.params.slug[0]}`,
  () =>
    queryCollection("internalWork")
      .path(`/our-work/internal/${route.params.slug[0]}`)
      .first(),
);
</script>

<style scoped>
dl.grid-2 { margin: 24px 0; }
dt { margin-bottom: 4px; }
dd { margin: 0; }
</style>
