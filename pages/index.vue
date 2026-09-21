<template>
  <div class="index min-h-screen">
    <!-- Page transition overlay -->
    <div class="page-transition-overlay" :class="{ 'active': isPageTransitioning }"></div>

    <div class="z-10 relative">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title font-fraunces">
              <span class="block font-fraunces-regular">We make</span>
              complicated things
              <span class="block mt-2 font-fraunces-regular">
                <em class="font-fraunces-black-italic text-primary-500">make sense.</em>
              </span>
            </h1>

            <p class="hero-subtitle">
              Room 302 is a small studio that builds data visualizations, interactive tools, and prototypes. We've made election graphics for the AP, mapped coral reefs for the Wildlife Conservation Society, and supported a studio member's indie game that ended up in Fast Company.
            </p>

            <div class="button-group">
              <!-- Primary Contact Button -->
              <UButton ref="primaryBtn" to="/contact" color="primary" class="hero-btn primary-btn font-mono"
                @mouseenter="primaryBtnHover = true" @mouseleave="primaryBtnHover = false"
                aria-label="Contact Room 302 Studio">
                <!-- Spotlight effect -->
                <span v-if="primaryBtnHover" class="btn-spotlight" :style="{
                  left: `${primaryX - primaryBtn?.offsetLeft}px`,
                  top: `${primaryY - primaryBtn?.offsetTop}px`,
                }" />
                Contact Us
                <UIcon name="i-heroicons-arrow-right" class="btn-icon" />
              </UButton>

              <!-- Secondary Button -->
              <UButton ref="secondaryBtn" to="/our-work" variant="ghost" class="hero-btn secondary-btn font-mono"
                @mouseenter="secondaryBtnHover = true" @mouseleave="secondaryBtnHover = false"
                aria-label="View our work">
                <!-- Spotlight effect -->
                <span v-if="secondaryBtnHover" class="btn-spotlight secondary" :style="{
                  left: `${secondaryX - secondaryBtn?.offsetLeft}px`,
                  top: `${secondaryY - secondaryBtn?.offsetTop}px`,
                }" />
                See our work
              </UButton>
            </div>
          </div>

          <!-- Value Propositions -->
          <div ref="valuePropsRef" class="value-props" :class="{ 'visible': valuePropsVisible }">
            <div v-for="(_, index) in 3" :key="index" class="value-prop"
              :style="{ 'transition-delay': `${index * 150}ms` }">
              <!-- Value prop content -->
              <template v-if="index === 0">
                <UIcon name="i-material-symbols-light:insert-chart-outline" class="value-icon" />
                <h3 class="value-title">Hard data, clear stories</h3>
                <p class="value-text">
                  We love the moment when a messy dataset clicks into a visualization that actually explains something. That's the work — whether it's global food supply chains or election night results.
                </p>
              </template>
              <template v-else-if="index === 1">
                <UIcon name="i-material-symbols-light:speed-rounded" class="value-icon" />
                <h3 class="value-title">Small team, fast hands</h3>
                <p class="value-text">
                  We're a small studio on purpose. No layers of approval, no scope creep meetings. You talk to the people building the thing, and we move quickly because we genuinely enjoy the work.
                </p>
              </template>
              <template v-else>
                <UIcon name="i-fa6-solid-hammer" class="value-icon" />
                <h3 class="value-title">Toolmakers at heart</h3>
                <p class="value-text">
                  When we're not doing client work, we're building our own tools — network visualizers, AI assistants, prototyping kits. That instinct to build things that are useful shows up in everything we make.
                </p>
              </template>
            </div>
          </div>
        </div>

        <!-- Background elements -->
        <div class="hero-bg"></div>
        <div class="hero-grid"></div>
      </section>

      <!-- Video Section -->
      <section ref="videoSectionRef" class="video-section">
        <div class="video-container">
          <div class="video-wrapper">
            <!-- Video -->
            <video ref="heroVideo" class="full-video" loop muted playsinline preload="none"
              poster="https://res.cloudinary.com/ejf/video/upload/q_auto,f_jpg,w_1280,so_0/v1707429688/Comp_2_1_1.jpg">
              <source :src="videoSrc" type="video/mp4" />
            </video>

            <!-- Overlay -->
            <div class="video-overlay"></div>

            <!-- Content -->
            <div class="video-content">
              <div class="container">
                <div class="video-grid">
                  <div class="video-text-col">
                    <h2 class="video-title font-fraunces-black">
                      See the work<span class="font-fraunces-black-italic">.</span>
                    </h2>
                  </div>
                  <div class="video-description-col">
                    <p class="video-description">
                      Interactive maps, real-time graphics, tools people actually use. We'd rather show you than tell you about it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Case Studies Section -->
      <section class="case-studies-section">
        <div class="case-studies-container">
          <div v-for="(project, index) in featuredProjects" :key="project.title"
            :ref="el => { if (el) caseStudyRefs[index] = el }" class="case-study-item"
            @mouseenter="caseStudyHoverStates[index] = true" @mouseleave="caseStudyHoverStates[index] = false">
            <HomepageCaseStudy :project="project" />
          </div>
        </div>
      </section>


      <!-- How We Work Section -->
      <section class="py-24 md:py-32">
        <div class="container">
          <div class="grid md:grid-cols-2 gap-8 md:gap-12">

            <NuxtLink to="/for-ceos"
              class="group block p-8 md:p-10 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-2 h-2 rounded-full bg-primary-500"></div>
                <h3 class="text-sm font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400">Prototyping</h3>
              </div>
              <h4 class="text-2xl md:text-3xl font-light mb-4 text-stone-800 dark:text-stone-200 group-hover:text-primary-500 transition-colors">
                Skunkworks for hire
              </h4>
              <p class="text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
                Got an idea that needs to exist? We'll build it with you — working prototypes, not slide decks. You talk directly to the people making the thing.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">Newsrooms</span>
                <span class="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">NGOs</span>
                <span class="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">Indie creators</span>
              </div>
            </NuxtLink>

            <NuxtLink to="/for-data-analysts"
              class="group block p-8 md:p-10 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-2 h-2 rounded-full bg-primary-500"></div>
                <h3 class="text-sm font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400">Data visualization</h3>
              </div>
              <h4 class="text-2xl md:text-3xl font-light mb-4 text-stone-800 dark:text-stone-200 group-hover:text-primary-500 transition-colors">
                Make your data land
              </h4>
              <p class="text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
                You've got a dataset that should be telling a story but isn't yet. We build the map, the dashboard, the scrollytelling piece — whatever makes people actually get it.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">D3 / Mapbox / WebGL</span>
                <span class="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">Election-night tested</span>
              </div>
            </NuxtLink>

          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="container font-mono">
          <div class="contact-content">
            <div>
              <h3 class="contact-title">
                <span class="contact-title-prefix">Ready to </span>
                <span class="contact-title-accent">collaborate?</span>
              </h3>

              <p class="contact-description">
                We'd love to hear what you're working on.
              </p>
            </div>

            <div class="contact-actions">
              <div>
                <MonoButton to="/contact" primary large class="contact-button">
                  <span class="button-text">Get in touch</span>
                  <UIcon name="i-heroicons-arrow-right" class="ml-2" />
                </MonoButton>
              </div>

              <p class="contact-alternative">
                or email us directly at <a href="mailto:studio@room302.studio"
                  class="contact-email">studio@room302.studio</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import HomepageCaseStudy from '~/components/HomepageCaseStudy.vue'
import { useRouter } from 'vue-router'
import { useIntersectionObserver, usePointer, useScroll } from '@vueuse/core'
import { useOgMetadata } from '~/composables/useOgMetadata'

// Page transition
const isPageTransitioning = ref(false)
const router = useRouter()

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    isPageTransitioning.value = true
    setTimeout(() => {
      next()
    }, 300)
  } else {
    next()
  }
})

router.afterEach(() => {
  setTimeout(() => {
    isPageTransitioning.value = false
  }, 500)
})

// Lazy-load video only when section is visible
const heroVideo = ref(null)
const videoSrc = ref('')
const videoUrl = 'https://res.cloudinary.com/ejf/video/upload/q_auto,f_auto,w_1280,br_2m/v1707429688/Comp_2_1_1'

// Scroll-Triggered Value Propositions Reveal
const valuePropsRef = ref(null)
const valuePropsVisible = ref(false)

useIntersectionObserver(valuePropsRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    valuePropsVisible.value = true
  }
}, { threshold: 0.2 })

// Hero Button Hover Spotlight
const primaryBtn = ref(null)
const secondaryBtn = ref(null)
const primaryBtnHover = ref(false)
const secondaryBtnHover = ref(false)

const { x: primaryX, y: primaryY } = usePointer({
  target: primaryBtn,
})

const { x: secondaryX, y: secondaryY } = usePointer({
  target: secondaryBtn,
})

// Parallax Video Section
const { y: scrollY } = useScroll()
const videoSectionRef = ref(null)

// Lazy-load video when section scrolls into view
useIntersectionObserver(videoSectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting && !videoSrc.value) {
    videoSrc.value = videoUrl
    nextTick(() => {
      heroVideo.value?.load()
      heroVideo.value?.play()
    })
  }
}, { threshold: 0.1 })

// Compute parallax effect based on scroll position
const videoParallax = computed(() => {
  if (!videoSectionRef.value) return {}

  const rect = videoSectionRef.value.getBoundingClientRect()
  const elementCenter = rect.top + rect.height / 2
  const viewportCenter = window.innerHeight / 2
  const distance = elementCenter - viewportCenter

  // Calculate percentage for parallax effect (limited range)
  const parallaxFactor = Math.min(Math.max(-15, distance * 0.05), 15)

  return {
    transform: `translateY(${parallaxFactor}px)`,
  }
})

// Case Study Hover Effect
const caseStudyRefs = ref([])
const caseStudyHoverStates = ref([false, false, false]) // Pre-initialize with false values

onMounted(() => {
  // Make all elements visible immediately
  document.querySelectorAll('.hero-text, .hero-subtitle, .hero-btn, .value-prop, .value-icon, .what-we-do-item, .approach-card, .case-study-item, .contact-heading, .contact-text, .contact-form, .video-heading, .video-text').forEach(el => {
    if (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    }
  });

  // Add theme-color meta tag for browser chrome color
  const meta = document.createElement('meta')
  meta.name = 'theme-color'
  meta.content = '#f5f5f4' // Default to light stone color
  document.head.appendChild(meta)
});

// Set up OG metadata for the home page
useOgMetadata(
  'Room 302 Studio',
  'Data visualization and interactive studio. We build the maps, graphics, and tools that turn complex data into something people understand.'
)

// JSON-LD structured data for rich search results
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Room 302 Studio',
        url: 'https://room302.studio',
        description: 'Data visualization and interactive studio. We build maps, graphics, and tools that turn complex data into something people understand.',
        foundingDate: '2023',
        founder: {
          '@type': 'Person',
          name: 'EJ Fox',
          url: 'https://ejfox.com',
        },
        knowsAbout: [
          'Data Visualization',
          'Interactive Design',
          'D3.js',
          'Mapbox',
          'Election Graphics',
          'Rapid Prototyping',
          'AI Tools',
        ],
        areaServed: 'Worldwide',
        sameAs: [
          'https://github.com/room302studio',
        ],
      }),
    },
  ],
})

// Featured projects data
const featuredProjects = [
  {
    title: 'Mapping Resilience',
    client: 'Wildlife Conservation Society',
    description: 'The Wildlife Conservation Society had years of research showing certain coral reefs were surviving climate change better than others. We built interactive maps that let people explore why — launched at NYC Climate Week.',
    images: {
      primary: '/our-work-images/reef-2.jpg',
      secondary: '/our-work-images/reef-1.jpg'
    },
    link: 'our-work/client-work/coralreefs',
    valueAdd: [
      {
        icon: 'i-heroicons-globe-americas',
        text: 'Built interactive maps showing which reefs are surviving climate change and why.'
      },
      {
        icon: 'i-fluent-lightbulb-filament-48-filled',
        text: 'Complex scientific datasets were transformed into accessible visual narratives for policymakers.'
      },
      {
        icon: 'i-heroicons-presentation-chart-line',
        text: 'The visualization supported WCS advocacy efforts with clear, actionable insights.'
      }
    ]
  },
  {
    title: 'Ukraine Grain',
    client: 'The Plotline',
    description: 'The war in Ukraine was disrupting global grain supply, but the data was scattered and in Ukrainian. We translated it, built an interactive tool where you can adjust output by region, and see the ripple effects on food security worldwide.',
    images: {
      primary: '/our-work-images/ukrainegrain.png',
      secondary: '/our-work-images/ukraine.jpg'
    },
    link: 'our-work/client-work/ukrainegrain',
    valueAdd: [
      {
        icon: 'i-heroicons-clock',
        text: 'Against a tight deadline, we rapidly assembled disparate data sources into coherent visualizations.'
      },
      {
        icon: 'i-heroicons-map',
        text: 'We mapped critical supply chain disruptions to illustrate global food security implications.'
      },
      {
        icon: 'i-heroicons-eye',
        text: 'The visualization brought clarity to a complex geopolitical situation for key decision-makers.'
      }
    ]
  },
  {
    title: 'Election 2024',
    client: 'Associated Press',
    description: 'AP needed extra hands for election night. We joined their graphics team to help build and test live election visualizations used by news organizations around the world.',
    images: {
      primary: '/our-work-images/ap1.png',
      secondary: '/our-work-images/ap2.png'
    },
    link: 'our-work/client-work/apnews-2024',
    valueAdd: [
      {
        icon: 'i-heroicons-bolt',
        text: 'Joined AP\'s existing graphics team and hit the ground running for election night.'
      },
      {
        icon: 'i-heroicons-document-chart-bar',
        text: 'Helped build and QA live graphics under election-night pressure — no room for errors.'
      },
      {
        icon: 'i-heroicons-users',
        text: 'Millions of viewers relied on our visualizations to understand emerging electoral patterns.'
      }
    ]
  }
]
</script>

<style scoped>
/* Base Layout */
.container {
  @apply max-w-5xl mx-auto px-8 md:px-12 lg:px-32;
}

/* Hero Section */
.hero-section {
  @apply min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20;
}

.hero-content {
  @apply overflow-hidden max-w-5xl mx-auto py-8 md:py-12;
}

.hero-title {
  @apply text-4xl md:text-6xl lg:text-7xl mb-10 md:mb-12 text-balance leading-tight tracking-tight;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.hero-subtitle {
  @apply text-xl md:text-2xl font-light text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed mb-12 md:mb-14;
  letter-spacing: 0.01em;
}

.button-group {
  @apply flex flex-col sm:flex-row gap-6 mt-8 mb-4;
}

.hero-btn {
  @apply px-8 py-4 text-lg rounded-lg transition-all duration-300 relative overflow-hidden;
}

.primary-btn {
  @apply relative overflow-hidden;
}

.secondary-btn {
  @apply border border-stone-300 dark:border-stone-700 hover:border-stone-400;
}

.btn-spotlight {
  @apply absolute inline-block rounded-full h-[1px] w-[1px] pointer-events-none;
  boxShadow: 0 0 25px 0.6rem rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.btn-spotlight.secondary {
  boxShadow: 0 0 20px 0.5rem rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.1);
}

.btn-icon {
  @apply ml-2 transition-transform duration-300 group-hover:translate-x-1;
}

.hero-bg {
  @apply absolute inset-0 bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-950 dark:to-stone-900 -z-10;
}

.hero-grid {
  @apply absolute inset-0 bg-grid opacity-5 dark:opacity-10 -z-10;
}

/* Value Props */
.value-props {
  @apply mt-16 mb-24 md:mt-20 md:mb-32 grid md:grid-cols-3 gap-12 md:gap-16 text-stone-600 dark:text-stone-400 max-w-6xl mx-auto py-4 md:py-8;
}

.value-props.visible .value-prop {
  @apply opacity-100 transform-none;
}

.value-prop {
  @apply transition-all duration-500 opacity-0 translate-y-5;
}

.value-icon {
  @apply text-4xl text-stone-700 dark:text-stone-300 mb-4;
}

.value-title {
  @apply text-xl md:text-2xl text-stone-900 dark:text-stone-100 font-medium mb-3;
  letter-spacing: -0.01em;
}

.value-text {
  @apply leading-relaxed text-base md:text-lg;
}

/* Video Section */
.video-section {
  @apply my-24 md:my-32 -mx-8 md:-mx-12 lg:-mx-32;
}

.video-container {
  @apply relative w-screen left-1/2 right-1/2 -translate-x-1/2 overflow-hidden;
}

.video-wrapper {
  @apply relative min-h-[80vh];
}

.full-video {
  @apply absolute inset-0 w-full h-full object-cover;
}

.video-overlay {
  @apply absolute inset-0 bg-black/50;
}

.video-content {
  @apply absolute inset-0 flex items-center;
}

.video-grid {
  @apply md:grid md:grid-cols-2 md:gap-12 items-center;
}

.video-text-col {
  @apply mb-8 md:mb-0;
}

.video-title {
  @apply text-5xl md:text-7xl lg:text-8xl text-white leading-tight;
}

.video-description-col {
  /* Empty for counterpart styling */
}

.video-description {
  @apply text-xl md:text-2xl lg:text-3xl text-stone-200 font-light leading-relaxed;
}

/* Profile Cards - removed, using inline Tailwind now */

/* Case Studies */
.case-studies-section {
  @apply my-24 md:my-32 py-8;
}

.case-studies-container {
  @apply space-y-20 md:space-y-32;
}

.case-study-item {
  @apply transition-all duration-500;
}

/* Contact Section */
.contact-section {
  @apply py-24 md:py-32 mt-24 md:mt-32 bg-gradient-to-br from-stone-100 to-stone-50 dark:from-stone-900/80 dark:to-stone-900/30 rounded-2xl shadow-sm;
}

.contact-content {
  @apply space-y-16;
}

.contact-title {
  @apply text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none mb-6;
}

.contact-title-prefix {
  @apply text-stone-500 dark:text-stone-400 block md:inline;
}

.contact-title-accent {
  @apply block md:inline;
}

.contact-description {
  @apply text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto;
}

.contact-actions {
  @apply space-y-8;
}

.contact-button {
  @apply px-8 py-8 w-full;
}

.button-text {
  @apply px-3 tracking-wider text-lg;
}

.contact-alternative {
  @apply text-stone-500 dark:text-stone-500 font-light tracking-wide;
}

.contact-email {
  @apply text-stone-700 dark:text-stone-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors underline-offset-4 hover:underline;
}

/* Typography */
.bg-grid {
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

.text-balance {
  text-wrap: balance;
}

/* Animation effects */
.page-transition-overlay {
  @apply fixed inset-0 bg-stone-50 dark:bg-stone-950 z-50 pointer-events-none opacity-0 transition-opacity duration-500;
}

.page-transition-overlay.active {
  @apply opacity-100;
}

/* Font definitions */
.font-fraunces {
  font-family: 'Fraunces', serif;
}

.font-fraunces-regular {
  font-family: 'Fraunces', serif;
  font-weight: 300;
}

.font-fraunces-black {
  font-family: 'Fraunces', serif;
  font-weight: 700;
}

.font-fraunces-black-italic {
  font-family: 'Fraunces', serif;
  font-weight: 700;
  font-style: italic;
}

.font-mono {
  font-family: 'IBM Plex Mono', monospace;
}
</style>
