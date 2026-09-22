<template>
  <div>
    <section>
      <p class="eyebrow">For CEOs &amp; CTOs</p>
      <h1>Test and validate your product prototype without the politics</h1>
      <p class="measure">
        It's hard to get prototypes built at target companies with multiple stakeholders. We
        help you validate if your product will resonate with your target market.
      </p>
      <p class="row">
        <NuxtLink to="/contact" class="btn big">Get started</NuxtLink>
        <NuxtLink to="/our-work" class="btn big">See our work</NuxtLink>
      </p>
    </section>

    <section>
      <h2>Common challenges</h2>
      <div class="grid-2">
        <div>
          <h3>Time-to-market pressure</h3>
          <p class="muted">
            Every day spent on internal politics is a day your competitors gain ground. Our rapid
            prototyping approach gets you from concept to validation quickly.
          </p>
        </div>
        <div>
          <h3>Stakeholder alignment</h3>
          <p class="muted">
            Getting multiple stakeholders to agree on a direction can feel impossible. We help you
            build prototypes that show rather than tell, making alignment easier.
          </p>
        </div>
        <div>
          <h3>Budget uncertainty</h3>
          <p class="muted">
            Investing in full product development before validation is risky. Our approach lets you
            test assumptions with minimal investment.
          </p>
        </div>
        <div>
          <h3>Innovation roadblocks</h3>
          <p class="muted">
            Existing systems and legacy technology often block innovation. We bring fresh
            perspectives and modern solutions to help you break through.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2>Technologies we use</h2>
      <TechnologyShowcase type="ceo" :showAndMore="false" />
    </section>

    <section>
      <h2>Ready to validate your product quickly?</h2>
      <p class="measure">
        Let's turn your concept into a reality that resonates with your target market.
      </p>
      <p class="row">
        <NuxtLink to="/contact" class="btn big">Contact us</NuxtLink>
      </p>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'For CEOs & CTOs | Room 302 Studio',
  description: 'Test and validate your product prototype without the politics. We help you quickly determine if your product will resonate with your target market.',
  ogDescription: 'Test and validate your product prototype without the politics. We help you quickly determine if your product will resonate with your target market.',
  url: 'https://room302.studio/for-ceos',
  ogImage: '/twitter-image.jpg',
  twitterImage: '/twitter-image.jpg',
})
</script>
