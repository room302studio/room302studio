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
              <span class="block font-fraunces-regular">We are an</span>
              innovation lab
              <span class="block mt-2 font-fraunces-regular">that turns
                <em class="font-fraunces-black-italic text-primary-300 dark:text-primary-700">concepts</em>
                into <em class="font-fraunces-black-italic text-primary-500">reality.</em>
              </span>
            </h1>

            <p class="hero-subtitle">
              If your team is struggling to validate and market something quickly, we can help you forge a path forward.
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
                <UIcon name="i-material-symbols-light:speed-rounded" class="value-icon" />
                <h3 class="value-title">Fast-paced prototyping</h3>
                <p class="value-text">
                  We know the best way to make great ideas is to iterate. A lot. Our focus on rapid prototyping
                  lets us get further, faster.
                </p>
              </template>
              <template v-else-if="index === 1">
                <UIcon name="i-material-symbols-light:insert-chart-outline" class="value-icon" />
                <h3 class="value-title">Rooted in data</h3>
                <p class="value-text">
                  We have a deep background in data visualization and analysis, and our core processes use data to
                  inform all our decisions along the way.
                </p>
              </template>
              <template v-else>
                <UIcon name="i-fa6-solid-hammer" class="value-icon" />
                <h3 class="value-title">Fearless exploration</h3>
                <p class="value-text">
                  Part of being on the cutting edge is being willing to take risks. We're not afraid to explore
                  uncharted territory with you; it's what we do best.
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
            <video class="full-video" autoplay loop muted playsinline>
              <source src="https://res.cloudinary.com/ejf/video/upload/v1707429688/Comp_2_1_1.mp4" type="video/mp4" />
            </video>

            <!-- Overlay -->
            <div class="video-overlay"></div>

            <!-- Content -->
            <div class="video-content">
              <div class="container">
                <div class="video-grid">
                  <div class="video-text-col">
                    <h2 class="video-title font-fraunces-black">
                      Bringing your ideas from
                      <span class="font-fraunces-black-italic">0</span> to
                      <span class="font-fraunces-black-italic">60</span><span>.</span>
                    </h2>
                  </div>
                  <div class="video-description-col">
                    <p class="video-description">
                      From rapid prototyping to scalable solutions, we transform complex challenges into
                      elegant implementations faster than you think.
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


      <!-- Profile Cards Section -->
      <section class="profiles-section">
        <div class="container">
          <div class="profile-cards">
            <!-- CEO/CTO Card -->
            <div class="profile-card">
              <div class="card-header">
                <div class="card-header-gradient"></div>
                <div class="card-title-wrapper">
                  <h3 class="card-title">
                    <span>Skunkworks for hire</span>
                  </h3>
                </div>
              </div>
              <div class="card-body">
                <p class="card-description">
                  Need to test and validate a prototype quickly? We help you overcome stakeholder politics and get to
                  market faster.
                </p>
                <ul class="card-features">
                  <li class="feature-item">
                    <UIcon name="i-heroicons-check" class="feature-icon" />
                    <span>Visualize multiple possible futures for your product</span>
                  </li>
                  <li class="feature-item">
                    <UIcon name="i-heroicons-check" class="feature-icon" />
                    <span>Bring stakeholders together with tangible prototypes</span>
                  </li>
                  <li class="feature-item">
                    <UIcon name="i-heroicons-check" class="feature-icon" />
                    <span>Get to market quickly with validated solutions</span>
                  </li>
                </ul>
                <div class="card-action">
                  <UButton to="/for-ceos" class="card-button group">
                    Learn more
                    <UIcon name="i-heroicons-arrow-right" class="button-arrow" />
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Data Analyst Card -->
            <div class="profile-card">
              <div class="card-header">
                <div class="card-header-gradient"></div>
                <div class="card-title-wrapper">
                  <h3 class="card-title">
                    <span>Unlock your data</span>
                  </h3>
                </div>
              </div>
              <div class="card-body">
                <p class="card-description">
                  Drowning in data but starving for insights? We transform complex data into actionable visualizations
                  that tell a story for internal stakeholders or your customers.
                </p>
                <ul class="card-features">
                  <li class="feature-item">
                    <UIcon name="i-heroicons-check" class="feature-icon" />
                    <span>Create custom dashboards and alert systems</span>
                  </li>
                  <li class="feature-item">
                    <UIcon name="i-heroicons-check" class="feature-icon" />
                    <span>Find patterns in complex datasets through visualization</span>
                  </li>
                  <li class="feature-item">
                    <UIcon name="i-heroicons-check" class="feature-icon" />
                    <span>Create reusable tools that deliver consistent value for your team</span>
                  </li>
                </ul>
                <div class="card-action">
                  <UButton to="/for-data-analysts" class="card-button group">
                    Learn more
                    <UIcon name="i-heroicons-arrow-right" class="button-arrow" />
                  </UButton>
                </div>
              </div>
            </div>
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
                We turn concepts into reality for organizations that need results.
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
  'We are an innovation lab that turns concepts into reality.'
)

// Featured projects data
const featuredProjects = [
  {
    title: 'Mapping Resilience',
    client: 'The Margin',
    description: 'When the Wildlife Conservation Society needed to visualize critical environmental data quickly, we delivered an interactive experience that transformed complex datasets into a compelling narrative about coral reef resilience.',
    images: {
      primary: '/our-work-images/reef-2.jpg',
      secondary: '/our-work-images/reef-1.jpg'
    },
    link: 'our-work/client-work/coralreefs',
    valueAdd: [
      {
        icon: 'i-heroicons-globe-americas',
        text: 'We developed interactive maps to visualize ecosystem resilience across the globe.'
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
    description: 'Facing tight deadlines and challenging data sources, we built an interactive visualization that cut through bureaucratic barriers to clearly show how Ukraine\'s war impacts global food security, helping stakeholders make informed decisions.',
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
    description: 'Serving as a pinch hitter for AP\'s award-nominated VoteCast team, our founder integrated with their existing talent to support the development of real-time visualizations that helped millions understand complex voter data from 120,000+ respondents on election night.',
    images: {
      primary: '/our-work-images/ap1.png',
      secondary: '/our-work-images/ap2.png'
    },
    link: 'our-work/client-work/apnews-2024',
    valueAdd: [
      {
        icon: 'i-heroicons-bolt',
        text: 'We integrated seamlessly with AP\'s team to deliver real-time visualizations under extreme pressure.'
      },
      {
        icon: 'i-heroicons-document-chart-bar',
        text: 'Our work helped translate complex polling data from 120,000+ respondents into accessible insights.'
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

/* Profile Cards */
.profiles-section {
  @apply my-24 md:my-32 py-8;
}

.profile-cards {
  @apply grid md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12;
}

.profile-card {
  @apply bg-white dark:bg-stone-950 rounded-xl shadow-sm transition-all duration-300 overflow-hidden p-4 sm:p-0;
}

.card-header {
  /* @apply min-h-16 bg-stone-100 dark:bg-stone-800 relative overflow-hidden; */
  @apply bg-primary-500 text-white relative min-h-16;
}

.card-header-gradient {
  @apply absolute inset-0 bg-gradient-to-t from-white dark:from-stone-950 to-transparent;
}

.card-title-wrapper {
  @apply absolute inset-0 flex items-center px-4 sm:px-6 py-0;
}

.card-title {
  @apply text-xl sm:text-2xl flex items-center py-2;
}

.card-title-icon {
  @apply text-stone-700 dark:text-stone-300 w-5 h-5 sm:w-6 sm:h-6 mr-2;
}

.card-body {
  @apply p-4 sm:p-6;
}

.card-description {
  @apply text-stone-700 dark:text-stone-300 mb-3 sm:mb-4 text-sm sm:text-base;
}

.card-features {
  @apply mb-4 sm:mb-6 text-xs sm:text-sm text-stone-600 dark:text-stone-400 space-y-1 sm:space-y-2;
}

.feature-item {
  @apply flex items-start;
}

.feature-icon {
  @apply text-stone-700 dark:text-stone-300 mt-0.5 mr-1.5 sm:mt-1 sm:mr-2 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5;
}

.card-action {
  @apply flex items-center justify-between;
}

.card-button {
  @apply text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2;
}

.button-arrow {
  @apply ml-1 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5;
}

.card-button:hover .button-arrow {
  @apply translate-x-1;
}

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
