<template>
  <div>
    <section>
      <p class="eyebrow">Room 302 Studio</p>
      <h1>We make complicated things make sense</h1>
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
    </section>

    <section>
      <h2>Contact</h2>
      <p>Have a project in mind? <a href="mailto:studio@room302.studio">studio@room302.studio</a></p>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Room 302 Studio — Data Visualization & Interactive Studio",
  description:
    "Room 302 Studio builds data visualizations, interactive tools, and prototypes. Election graphics for the AP, coral-reef mapping for WCS, and more.",
  ogTitle: "Room 302 Studio",
  ogDescription:
    "A small studio building data visualizations, interactive tools, and prototypes.",
});
</script>
