<template>
  <div>
    <section>
      <p class="eyebrow">Services</p>
      <h1>Our services</h1>
      <p class="measure">
        We help teams go from idea to working product. Data visualization,
        interactive tools, rapid prototyping — whatever the project needs.
      </p>
    </section>

    <section>
      <h2>What we do</h2>
      <div class="grid-2">
        <div>
          <h3>Prototyping &amp; Development</h3>
          <p class="muted">
            You have an idea or a rough concept. We turn it into a working
            prototype you can test, share, and build on. Concept development
            workshops, rapid prototyping to visualize possibilities, iterative
            refinement with thoughtful feedback, and implementation guidance
            and support.
          </p>
        </div>

        <div>
          <h3>Data Visualization</h3>
          <p class="muted">
            We transform complex data into intuitive, interactive experiences
            that reveal insights and tell compelling stories. Interactive data
            dashboards, narrative-driven data stories, custom visualization
            tools, and data-driven journalism.
          </p>
        </div>

        <div>
          <h3>Interactive Design</h3>
          <p class="muted">
            We create engaging, intuitive interfaces and experiences that
            delight users while solving complex problems. Web applications with
            thoughtful UX, interactive storytelling experiences, experimental
            interfaces, and accessible, inclusive design systems.
          </p>
        </div>

        <div>
          <h3>Developer Relations &amp; Content</h3>
          <p class="muted">
            We help technical products connect with their audience through
            authentic, valuable content and community building. Developer
            education and documentation, technical content strategy, community
            building and engagement, and technical workshops and events.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2>Our process</h2>
      <div class="grid-3">
        <div>
          <h3>1 — Explore possibilities</h3>
          <p class="muted">
            We begin by understanding your goals and challenges, then explore
            multiple possible futures through research, sketching, and rapid
            prototyping. This phase is about opening up possibilities rather
            than narrowing down.
          </p>
        </div>

        <div>
          <h3>2 — Build &amp; iterate</h3>
          <p class="muted">
            We build working versions quickly and refine based on what we learn.
            Multiple rounds, constant feedback, getting closer each time.
          </p>
        </div>

        <div>
          <h3>3 — Bring to life</h3>
          <p class="muted">
            We implement the solution with care and expertise, focusing on
            quality and attention to detail. Throughout this phase, we maintain
            open communication and adapt as needed to ensure the final product
            exceeds expectations.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2>Ready to bring your ideas to life?</h2>
      <p class="measure">
        Let's collaborate to explore possibilities and create something amazing
        together.
      </p>
      <p class="row">
        <NuxtLink to="/contact" class="btn big">Get in touch</NuxtLink>
      </p>
    </section>
  </div>
</template>

<script setup>
import { useOgMetadata } from '~/composables/useOgMetadata'

// Set up OG metadata for the services page
useOgMetadata(
  'Services',
  'Data visualization, interactive tools, and rapid prototyping for teams that need to ship.'
)

useSeoMeta({
  title: 'Our Services | Room 302 Studio',
  description: 'Data visualization, interactive tools, and rapid prototyping for teams that need to ship.',
  ogTitle: 'Our Services | Room 302 Studio',
  ogDescription: 'Data visualization, interactive tools, and rapid prototyping for teams that need to ship.',
  ogUrl: 'https://room302.studio/services',
  ogImage: 'https://room302.studio/og/services.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://room302.studio/og/services.png',
  twitterTitle: 'Our Services | Room 302 Studio',
  twitterDescription: 'Data visualization, interactive tools, and rapid prototyping for teams that need to ship.'
})
</script>
