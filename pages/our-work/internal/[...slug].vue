<template>
  <div class="dossier">
    <!-- Rotated spine label up the left margin — the actual source filename.
         Real, not invented. Hidden from AT (redundant) and on small screens. -->
    <div class="spine mono" aria-hidden="true">FILE // {{ docId }}</div>

    <p class="back-row"><NuxtLink to="/our-work" class="mono back">← Work</NuxtLink></p>

    <template v-if="data">
      <h1>{{ data.title }}</h1>

      <dl class="grid-2 meta">
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

      <p v-if="data.description" class="measure muted lead-desc">{{ data.description }}</p>

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
const slug = route.params.slug[0];

const { data } = await useAsyncData(
  `internal-${slug}`,
  () =>
    queryCollection("internalWork")
      .path(`/our-work/internal/${slug}`)
      .first(),
);

// Doc id for the spine label, e.g. COACHARTIE.MD — the real source filename.
const docId = computed(() => `${slug.replace(/-/g, "")}.MD`.toUpperCase());
</script>

<style scoped>
.dossier { position: relative; }

/* Spine — sideways mono label pinned 4px from the left edge of the window
   (the source filename). Rides the screen edge, vertically centered. */
.spine {
  position: fixed;
  left: 4px;
  top: 50%;
  writing-mode: vertical-rl;
  transform: translateY(-50%) rotate(180deg);
  font-size: 0.6875rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--text-faint);
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  z-index: 10;
}

.back-row { margin-bottom: 3rem; }
.back { text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.8125rem; }

/* Metadata block — generous air between the title, the rows, and the body. */
dl.meta.grid-2 { margin: 2.5rem 0 4rem; gap: 3rem 64px; }
dt { margin-bottom: 4px; }
dd { margin: 0; }

.lead-desc { margin-top: 0; margin-bottom: 4rem; }

@media (max-width: 43.75rem) {
  /* Keep the spine on phones too. The gutter is too tight by default, so nudge
     the dossier content right to give the label its own clean lane. */
  .spine { letter-spacing: 0.18em; font-size: 0.625rem; }
  .dossier { padding-left: 1.5rem; }
  dl.meta.grid-2 { gap: 2rem; margin: 2rem 0 2.5rem; }
  .back-row { margin-bottom: 2rem; }
}
</style>
