<template>
  <div>
    <section>
      <p class="eyebrow">Room 302 — Lab</p>
      <h1>The Lab</h1>
      <p class="measure">Experiments, prototypes, and visual explorations from the studio.</p>
    </section>

    <section>
      <h2>Experiments</h2>
      <ul class="stack">
        <li>
          <NuxtLink to="/lab/gradients">Gradient Generator</NuxtLink>
          <p class="muted">Play with color palettes, glitch effects, and export poster-ready backgrounds.</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "The Lab | Room 302 Studio",
  description: "Experiments, prototypes, and visual explorations from Room 302 Studio.",
  ogTitle: "The Lab | Room 302 Studio",
  ogDescription: "Experiments, prototypes, and visual explorations from Room 302 Studio.",
});
</script>
