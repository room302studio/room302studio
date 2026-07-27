<template>
  <div>
    <section>
      <p class="eyebrow">For Data Teams</p>
      <h1>Turn your data into something people get</h1>
      <p class="measure">
        You've got the data. We build the visualization that makes it click — for your team, your
        stakeholders, or the public.
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
          <h3>Data overwhelm</h3>
          <p class="muted">
            Too much data and not enough insights leads to analysis paralysis. We help you identify
            the metrics that matter most to your business.
          </p>
        </div>
        <div>
          <h3>Visualization challenges</h3>
          <p class="muted">
            Creating effective visualizations that tell a story is difficult. Our expertise in data
            visualization helps you communicate insights clearly.
          </p>
        </div>
        <div>
          <h3>Legacy systems</h3>
          <p class="muted">
            Extracting meaningful data from older systems is often a roadblock. We specialize in
            bridging the gap between legacy data and modern insights.
          </p>
        </div>
        <div>
          <h3>Automation bottlenecks</h3>
          <p class="muted">
            Manual data processing steals valuable time. We create automated solutions that free
            you to focus on analysis rather than data wrangling.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2>Data technologies we use</h2>
      <TechnologyShowcase type="data" :showAndMore="true" />
    </section>

    <section>
      <h2>Got a dataset that needs to tell a story?</h2>
      <p class="measure">
        Tell us what you're working with and we'll figure out the best way to make it click.
      </p>
      <p class="row">
        <NuxtLink to="/contact" class="btn big">Contact us</NuxtLink>
      </p>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'For Data Analysts | Room 302 Studio',
  description: 'Transform your data into actionable insights that your team can use. We help data analysts make sense of complex information through visualization and analysis.',
  ogDescription: 'Transform your data into actionable insights that your team can use. We help data analysts make sense of complex information through visualization and analysis.',
  url: 'https://room302.studio/for-data-analysts',
  ogImage: '/twitter-image.jpg',
  twitterImage: '/twitter-image.jpg',
})
</script>
