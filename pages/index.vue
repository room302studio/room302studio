<template>
  <div>
    <section>
      <h1 class="kinetic-display" :style="{ '--wght': wght }">We make complicated things make sense</h1>
      <p class="measure">
        Room 302 is a small studio that builds data visualizations, interactive tools, and
        prototypes. We've made election graphics for the AP, mapped coral reefs for the Wildlife
        Conservation Society, and supported a studio member's indie game that ended up in Fast
        Company.
      </p>
      <p class="row">
        <NuxtLink to="/contact" class="btn big">Contact us</NuxtLink>
        <NuxtLink to="/our-work" class="btn big">See our work</NuxtLink>
      </p>
    </section>

    <section>
      <h2>What we're about</h2>
      <div class="grid-3">
        <div>
          <h3>Hard data, clear stories</h3>
          <p class="muted">We love the moment when a messy dataset clicks into a visualization that
            actually explains something — whether it's global food supply chains or election night
            results.</p>
        </div>
        <div>
          <h3>Small team, fast hands</h3>
          <p class="muted">A small studio on purpose. No layers of approval, no scope-creep
            meetings. You talk to the people building the thing, and we move quickly because we
            genuinely enjoy the work.</p>
        </div>
        <div>
          <h3>Toolmakers at heart</h3>
          <p class="muted">When we're not doing client work, we're building our own tools — network
            visualizers, AI assistants, prototyping kits. That instinct shows up in everything we
            make.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>Selected work</h2>
      <table>
        <thead>
          <tr><th class="mono">Year</th><th>Project</th><th>Client</th></tr>
        </thead>
        <tbody>
          <tr><td class="mono">2025</td><td><NuxtLink to="/our-work/internal/subway-builder">Subway Builder</NuxtLink></td><td>Internal</td></tr>
          <tr><td class="mono">2024</td><td><NuxtLink to="/our-work/client-work/apnews-2024">Election 2024</NuxtLink></td><td>Associated Press</td></tr>
          <tr><td class="mono">2024</td><td><NuxtLink to="/our-work/internal/issuebuilder">IssueBuilder</NuxtLink></td><td>Internal</td></tr>
          <tr><td class="mono">2023</td><td><NuxtLink to="/our-work/client-work/coralreefs">Mapping Resilience</NuxtLink></td><td>Wildlife Conservation Society</td></tr>
          <tr><td class="mono">2023</td><td><NuxtLink to="/our-work/internal/coachartie">Coach Artie</NuxtLink></td><td>Internal</td></tr>
        </tbody>
      </table>
      <p><NuxtLink to="/our-work">All work →</NuxtLink></p>
    </section>

    <section>
      <h2>How we work</h2>
      <div class="grid-2">
        <div class="card">
          <h3>Skunkworks for hire</h3>
          <p class="muted">Got an idea that needs to exist? We build it with you — working
            prototypes, not slide decks. You talk directly to the people making the thing.</p>
          <p><NuxtLink to="/for-ceos">For CEOs &amp; CTOs →</NuxtLink></p>
        </div>
        <div class="card">
          <h3>Data, made legible</h3>
          <p class="muted">We turn messy datasets into visualizations and tools your team and your
            audience can actually use.</p>
          <p><NuxtLink to="/for-data-analysts">For data teams →</NuxtLink></p>
        </div>
      </div>
      <p><NuxtLink to="/process">How we go from first call to shipped product →</NuxtLink></p>
    </section>
  </div>
</template>

<script setup>
// Kinetic display type: the hero weight "breathes" as you scroll — light and
// airy at the top (wght 330), waking to a confident 640 as it scrolls away.
// One CSS property (font-variation-settings) + one mapped scroll value; no lib.
const { y } = useWindowScroll()
const wght = computed(() => Math.round(330 + Math.min(y.value, 520) / 520 * 310))

useSeoMeta({
  title: "Room 302 Studio — Data Visualization & Interactive Studio",
  description:
    "Room 302 Studio builds data visualizations, interactive tools, and prototypes. Election graphics for the AP, coral-reef mapping for WCS, and more.",
  ogTitle: "Room 302 Studio",
  ogDescription:
    "A small studio building data visualizations, interactive tools, and prototypes.",
});
</script>

<style scoped>
/* The editorial-serif counterpoint to the mono/sans chrome. Fraunces at full
   optical size, sentence-case (so the wonky old-style lowercase actually shows),
   with weight driven live from JS (--wght) and WONK/SOFT flipped on hover. */
.kinetic-display {
  font-family: "Fraunces", Georgia, serif;
  text-transform: none;
  font-size: clamp(2.5rem, 6vw, 4.75rem);
  line-height: 1.02;
  letter-spacing: -0.025em;
  max-width: 16ch;
  --wonk: 0;
  --soft: 0;
  font-variation-settings:
    "opsz" 144, "wght" var(--wght, 340), "SOFT" var(--soft, 0), "WONK" var(--wonk, 0);
  /* Weight tracks scroll every frame; SOFT/WONK ease on hover. */
  transition: font-variation-settings 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.kinetic-display:hover {
  --wonk: 1;
  --soft: 55;
}
@media (prefers-reduced-motion: reduce) {
  .kinetic-display { transition: none; }
}
</style>
