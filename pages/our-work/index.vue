<template>
  <div class="work-page">
    <!-- Scattered project "stickers" — grayscale badges tossed across the ENTIRE
         page at odd angles, hugging the gutters so they frame the content top to
         bottom. Bloom to colour + straighten on hover. The fun is in the mess. -->
    <ul v-if="stickers.length" class="sticker-layer" aria-label="Featured projects">
      <li
        v-for="(project, i) in stickers"
        :key="project.path"
        class="sticker"
        :style="`--x: ${spots[i % spots.length].x}%; --y: ${spots[i % spots.length].y}%; --tilt: ${tilts[i % tilts.length]}deg; --size: ${sizes[i % sizes.length]}rem;`"
      >
        <NuxtLink :to="project.path" class="sticker-link">
          <img :src="project.image" :alt="project.title" loading="lazy" />
          <span class="sticker-label mono">{{ project.title }}</span>
        </NuxtLink>
      </li>
    </ul>

    <section>
      <h1>Our Work</h1>
      <p class="measure">
        Selected projects from our portfolio — data visualization, interactive maps, and tools for
        the AP, Wildlife Conservation Society, The Plotline, and more.
      </p>
      <p class="muted measure">This is just the stuff we're allowed to show you.</p>
    </section>

    <section>
      <h2>Client Work</h2>
      <table>
        <thead>
          <tr><th>Project</th><th>Client</th><th>Role</th></tr>
        </thead>
        <tbody>
          <tr v-for="project in clientWork" :key="project.path">
            <td><NuxtLink :to="project.path">{{ project.title }}</NuxtLink></td>
            <td>{{ project.client }}</td>
            <td>{{ project.role }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Internal Projects</h2>
      <table>
        <thead>
          <tr><th>Project</th><th>Type</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr v-for="project in internalWork" :key="project.path">
            <td><NuxtLink :to="project.path">{{ project.title }}</NuxtLink></td>
            <td>{{ project.type || 'Internal' }}</td>
            <td class="muted">{{ project.description }}</td>
          </tr>
        </tbody>
      </table>
    </section>

  </div>
</template>

<script setup>
// use the default layout
definePageMeta({
  layout: "default",
  scrollToTop: true
});

useHead({ title: 'Our Work — Room 302 Studio' })
useSeoMeta({
  title: 'Our Work — Room 302 Studio',
  description: 'Selected projects from Room 302 Studio — data visualization, interactive maps, and tools for the AP, Wildlife Conservation Society, The Plotline, and more.',
  ogTitle: 'Our Work — Room 302 Studio',
  ogDescription: 'Selected projects from Room 302 Studio — data visualization, interactive maps, and tools for the AP, Wildlife Conservation Society, The Plotline, and more.',
})

const { data: clientWork } = await useAsyncData(
  "content/our-work/client-work",
  () => queryCollection("clientWork").all(),
);

const { data: internalWork } = await useAsyncData(
  "content/our-work/internal-work",
  () => queryCollection("internalWork").all(),
);

// Stickers: any project with a thumbnail, capped so the cluster stays playful
// rather than crowded. Fixed tilt/size arrays keep it lively but deterministic
// (no layout shift on hydration).
const stickers = computed(() =>
  [...(clientWork.value || []), ...(internalWork.value || [])]
    .filter((p) => p.image)
    .slice(0, 7)
);
// Scattered coordinates (% of the whole page) — spread top-to-bottom and biased
// toward the left/right gutters so they frame the centred column instead of
// landing on the copy. Deliberately uneven; overlaps welcome.
const spots = [
  { x: 3, y: 5 },
  { x: 89, y: 15 },
  { x: 5, y: 38 },
  { x: 91, y: 48 },
  { x: 2, y: 68 },
  { x: 87, y: 80 },
  { x: 45, y: 95 },
];
const tilts = [-7, 5, -3, 8, -5, 3, -9];
const sizes = [4.75, 4, 5.25, 4.25, 4.75, 4.25, 4];
</script>

<style scoped>
/* Anchor the full-page sticker layer. */
.work-page { position: relative; }

/* The layer spans the ENTIRE page — full viewport width (breaks out of the
   centred column via 100vw) and the full content height (inset 0). It ignores
   pointer events so the stickers, not the empty layer, are what you click. */
.sticker-layer {
  position: absolute;
  inset: 0;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 5;
}

.sticker {
  position: absolute;
  left: var(--x, 0);
  top: var(--y, 0);
  transform: rotate(var(--tilt, 0deg));
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: auto;
}

.sticker-link {
  display: block;
  position: relative;
  width: var(--size, 4rem);
  height: var(--size, 4rem);
  border-radius: 50%;
  overflow: hidden;
  background: none;
  /* Hairline ring instead of the old colourful drop shadow. */
  box-shadow: 0 0 0 1px var(--rule);
  text-decoration: none;
}
/* Kill the global link hover-invert on the circular badge. */
.sticker-link:hover { background: none; }

.sticker-link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Monochrome by default — fits the B&W page; blooms to colour on hover. */
  filter: grayscale(1) contrast(1.05);
  transition: filter 0.25s ease;
}

/* Hover the whole sticker: straighten it, pop it up, colour returns, and the
   accent ring lights up — the third and final restrained use of the orange. */
.sticker:hover,
.sticker:focus-within {
  transform: rotate(0deg) scale(1.09);
  z-index: 2;
}
.sticker:hover .sticker-link,
.sticker:focus-within .sticker-link {
  box-shadow: 0 0 0 2px var(--accent);
}
.sticker:hover .sticker-link img,
.sticker:focus-within .sticker-link img {
  filter: grayscale(0) contrast(1);
}

/* Name tag fades in beneath the badge. */
.sticker-label {
  position: absolute;
  top: calc(100% + 0.4rem);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  background: var(--bg);
  padding: 0.1rem 0.35rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.sticker:hover .sticker-label,
.sticker:focus-within .sticker-label {
  opacity: 1;
}

/* On narrow screens the gutters vanish and full-page scatter would land on the
   copy — fall back to an inline wrapped row inside the intro flow instead. */
@media (max-width: 43.75rem) {
  .sticker-layer {
    position: static;
    width: auto;
    transform: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.75rem 1.25rem;
    margin: 2.5rem 0 0;
  }
  .sticker {
    position: static;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sticker,
  .sticker-link img { transition: none; }
  .sticker:hover,
  .sticker:focus-within { transform: none; }
}
</style>
