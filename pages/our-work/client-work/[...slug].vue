<template>
  <div>
    <p><NuxtLink to="/our-work">← Work</NuxtLink></p>

    <template v-if="data">
      <h1>{{ data.title }}</h1>

      <dl class="grid-2">
        <div v-if="data.client">
          <dt class="eyebrow">Client</dt>
          <dd class="mono">{{ data.client }}</dd>
        </div>
        <div v-if="data.role">
          <dt class="eyebrow">Role</dt>
          <dd class="mono">{{ data.role }}</dd>
        </div>
        <div v-if="data.technology">
          <dt class="eyebrow">Technology</dt>
          <dd class="mono">{{ data.technology }}</dd>
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

      <section>
        <h2>Related Work</h2>
        <ul class="stack">
          <li v-for="project in clientWork" :key="project.title">
            <NuxtLink :to="project.path">{{ project.title }}</NuxtLink>
          </li>
        </ul>
      </section>
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

const { data: clientWork } = await useAsyncData(
  "content/our-work/client-work",
  () => queryCollection("clientWork").all(),
);

// find the current client work item from the list
const data = computed(() => {
  if (!clientWork.value) return;
  const slug = route.params.slug[0];
  return clientWork.value.find(
    (item) => item.path === `/our-work/client-work/${slug}`,
  );
});
</script>

<style scoped>
dl.grid-2 { margin: 24px 0 40px; gap: 24px 64px; }
dt { margin-bottom: 4px; }
dd { margin: 0; }
</style>
