<template>
  <div>
    <p class="back-row"><NuxtLink to="/our-work" class="mono back">← Work</NuxtLink></p>

    <template v-if="data">
      <h1>{{ data.title }}</h1>

      <dl class="grid-2 meta">
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
          <dd class="mono"><time :datetime="data.date">{{ formatDate(data.date) }}</time></dd>
        </div>
      </dl>

      <p v-if="data.description" class="lead">{{ data.description }}</p>

      <p v-if="data.url" class="visit">
        <a :href="data.url" target="_blank" rel="noopener" class="mono">Visit the project ↗</a>
      </p>

      <figure v-if="data.image" class="hero-figure">
        <img :src="data.image" :alt="data.title" />
      </figure>

      <article class="prose">
        <ContentRenderer :value="data" />
      </article>

      <section v-if="relatedWork.length" class="related">
        <h2>More client work</h2>
        <table>
          <thead>
            <tr><th class="mono">Year</th><th>Project</th><th>Client</th></tr>
          </thead>
          <tbody>
            <tr v-for="project in relatedWork" :key="project.path">
              <td class="mono">{{ project.date?.slice(0, 4) }}</td>
              <td><NuxtLink :to="project.path">{{ project.title }}</NuxtLink></td>
              <td>{{ project.client }}</td>
            </tr>
          </tbody>
        </table>
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
const slug = route.params.slug?.[0];
if (!slug) throw createError({ statusCode: 404, statusMessage: "Project not found" });

const { data: clientWork } = await useAsyncData(
  "content/our-work/client-work",
  () => queryCollection("clientWork").all(),
);

const currentPath = `/our-work/client-work/${slug}`;

// The current project, resolved from the collection.
const data = computed(() =>
  clientWork.value?.find((item) => item.path === currentPath),
);

// Everything else, newest first, for the More client work table.
const relatedWork = computed(() =>
  (clientWork.value ?? [])
    .filter((item) => item.path !== currentPath)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "")),
);

// "2023-09-01" → "Sep 2023". Dates are month-precision at best, so no day.
// Parsed as UTC so the month never slips back across a timezone boundary.
const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short", year: "numeric", timeZone: "UTC",
  });
</script>

<style scoped>
.back-row { margin-bottom: 3rem; }
.back { text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.8125rem; }

/* Metadata block — same air as the internal project pages. */
dl.meta.grid-2 { margin: 2.5rem 0 3.5rem; gap: 2rem 4rem; }
dt { margin-bottom: 0.25rem; }
dd { margin: 0; }

.lead { color: var(--text-strong); margin-bottom: 1.5rem; }
.visit { margin-bottom: 0; }

.hero-figure { margin: 3.5rem 0 4rem; }
.hero-figure img { width: 100%; border: 1px solid var(--rule); }

.related { margin-top: 7rem; }

@media (max-width: 43.75rem) {
  .back-row { margin-bottom: 2rem; }
  dl.meta.grid-2 { grid-template-columns: 1fr 1fr; gap: 1.5rem 2rem; margin: 2rem 0 2.5rem; }
  .hero-figure { margin: 2.5rem 0 3rem; }
  .related { margin-top: 5rem; }
}
</style>
