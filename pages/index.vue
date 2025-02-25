<template>
  <div class="index min-h-screen" @mousemove="updateCursorPosition">
    <!-- Page transition overlay -->
    <div class="page-transition-overlay" :class="{ 'active': isPageTransitioning }"></div>

    <!-- Custom cursor -->
    <div class="custom-cursor" :style="cursorStyle" v-if="!isMobile"></div>

    <div class="z-10 relative">
      <!-- Hero Section -->
      <section class="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        <div class="pad relative z-10">
          <div class="overflow-hidden max-w-5xl mx-auto">
            <h1
              class="text-4xl md:text-6xl lg:text-7xl font-extralight mb-10 md:mb-12 text-balance leading-tight tracking-tight hero-text">
              <span class="block">We are an</span>
              <span class="text-primary-500 font-light">innovation lab</span>
              <span class="block mt-2">that turns concepts into reality.</span>
            </h1>

            <p
              class="text-xl md:text-2xl font-light text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed mb-12 hero-subtitle">
              An innovation studio that brings ideas to life through rapid prototyping and thoughtful
              implementation.
            </p>

            <div class="flex flex-col sm:flex-row gap-6 mt-8">
              <UButton to="/our-work"
                class="hero-btn primary-btn bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
                See our work
                <UIcon name="i-heroicons-arrow-right"
                  class="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </UButton>
              <UButton to="/process" variant="ghost"
                class="hero-btn secondary-btn border border-stone-300 dark:border-stone-700 hover:border-primary-500 px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:translate-y-[-2px]">
                Our process
              </UButton>
            </div>
          </div>

          <!-- Key value propositions -->
          <div
            class="mt-24 md:mt-32 grid md:grid-cols-3 gap-12 md:gap-16 text-stone-600 dark:text-stone-400 value-props max-w-6xl mx-auto">
            <div class="value-prop">
              <UIcon name="i-material-symbols-light:speed-rounded" class="text-4xl text-primary-500 mb-4 value-icon" />
              <h3 class="font-medium text-xl md:text-2xl text-stone-800 dark:text-stone-200 mb-3">Fast-paced prototyping
              </h3>
              <p class="leading-relaxed text-base md:text-lg">
                We know the best way to make great ideas is to iterate. A lot. Our focus on rapid prototyping
                lets us get further, faster.
              </p>
            </div>

            <div class="value-prop">
              <UIcon name="i-material-symbols-light:insert-chart-outline"
                class="text-4xl text-primary-500 mb-4 value-icon" />
              <h3 class="font-medium text-xl md:text-2xl text-stone-800 dark:text-stone-200 mb-3">Rooted in data</h3>
              <p class="leading-relaxed text-base md:text-lg">
                Our studio has a deep background in data visualization and analysis. We use data to inform decisions
                and incorporate it into our products.
              </p>
            </div>

            <div class="value-prop">
              <UIcon name="i-fa6-solid-hammer" class="text-4xl text-primary-500 mb-4 value-icon" />
              <h3 class="font-medium text-xl md:text-2xl text-stone-800 dark:text-stone-200 mb-3">Fearless exploration
              </h3>
              <p class="leading-relaxed text-base md:text-lg">
                Part of being on the cutting edge is being willing to take risks. We're not afraid to explore
                uncharted territory.
              </p>
            </div>
          </div>
        </div>

        <!-- Refined background with subtle gradient -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-950 dark:to-stone-900 -z-10" />

        <!-- Subtle grid pattern overlay -->
        <div class="absolute inset-0 bg-grid opacity-5 dark:opacity-10 -z-5"></div>

        <!-- Scroll indicator -->
        <div class="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span
            class="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2 opacity-80">Scroll</span>
          <div class="w-px h-12 bg-gradient-to-b from-stone-300 to-transparent dark:from-stone-700"></div>
        </div>
      </section>

      <!-- What We Actually Do Section -->
      <section
        class="pad py-16 md:py-24 bg-gradient-to-br from-stone-100 to-stone-50 dark:from-stone-900/70 dark:to-stone-900/40 rounded-xl my-24 md:my-32">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-light mb-12 text-stone-800 dark:text-stone-200 text-center">What We
            Actually Do</h2>
          <div class="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div class="what-we-do-item">
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                  <UIcon name="i-heroicons-eye" class="text-xl" />
                </div>
                <h3 class="font-medium text-xl text-primary-500">We Help You See The Future</h3>
              </div>
              <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
                Through rapid prototyping and exploration, we help you visualize multiple possible futures for your
                product or idea. We're not just building what you ask for—we're showing you what's possible that you
                haven't even
                imagined yet.
              </p>
            </div>
            <div class="what-we-do-item">
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                  <UIcon name="i-heroicons-heart" class="text-xl" />
                </div>
                <h3 class="font-medium text-xl text-primary-500">We Develop Great Ideas</h3>
              </div>
              <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
                We provide the expertise and environment needed for your concept to flourish. We guide ideas from their
                earliest,
                most fragile stage to robust implementation.
              </p>
            </div>
            <div class="what-we-do-item">
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                  <UIcon name="i-heroicons-sparkles" class="text-xl" />
                </div>
                <h3 class="font-medium text-xl text-primary-500">We Bring Fresh Perspectives</h3>
              </div>
              <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
                Our team sees problems differently. We find elegant solutions where
                others see only complexity, bringing a refreshing alternative to conventional approaches.
              </p>
            </div>
            <div class="what-we-do-item">
              <div class="flex items-center mb-4">
                <div
                  class="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                  <UIcon name="i-heroicons-cube" class="text-xl" />
                </div>
                <h3 class="font-medium text-xl text-primary-500">We Build What Matters</h3>
              </div>
              <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
                From interactive data visualizations to custom software solutions, we create tools and experiences
                that make a difference. Our work spans startups, established companies, non-profits, and news
                organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Video Section -->
      <section class="my-24 md:my-48 -mx-8 md:-mx-12 lg:-mx-32">
        <div class="relative overflow-hidden w-screen relative left-1/2 right-1/2 -translate-x-1/2">
          <div class="relative min-h-[80vh] py-24 md:py-32">
            <video class="absolute inset-0 w-full h-full object-cover opacity-90" autoplay loop muted playsinline>
              <source src="https://res.cloudinary.com/ejf/video/upload/v1707429688/Comp_2_1_1.mp4" type="video/mp4" />
            </video>

            <!-- Enhanced overlay with gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30"></div>

            <!-- Content - still contained -->
            <div
              class="absolute inset-0 flex flex-col justify-center items-center text-center container mx-auto px-8 md:px-12 lg:px-32">
              <div class="overflow-hidden">
                <h2
                  class="text-5xl md:text-8xl lg:text-9xl text-white font-extralight mb-8 md:mb-12 max-w-6xl leading-none video-heading">
                  Bringing your ideas from 0 to 60<span class="text-primary-500">.</span>
                </h2>
              </div>
              <p class="text-xl md:text-3xl text-stone-200 max-w-3xl font-light leading-relaxed video-text">
                From rapid prototyping to production-ready solutions, we transform complex challenges into
                elegant implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Statement -->
      <section class="pad my-16 md:my-32">
        <div class="overflow-hidden">
          <p class="text-lg md:text-2xl font-light text-stone-700 dark:text-stone-400 max-w-3xl leading-relaxed mission-text"
            v-intersection-observer="animateMissionText">
            Innovation is at the heart of everything we do. Our collaborations span startups, established companies,
            non-profits, and news organizations. We provide the tools, expertise, and environment needed
            to
            <span class="font-medium text-stone-950 dark:text-stone-50">bring your ideas to life.</span>
          </p>

          <!-- Our Approach -->
          <div class="mt-12 md:mt-16 grid md:grid-cols-3 gap-8">
            <div class="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-lg approach-card">
              <UIcon name="i-heroicons-light-bulb" class="text-3xl text-primary-500 mb-4" />
              <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200 mb-3">Thoughtful Exploration</h3>
              <p class="text-stone-600 dark:text-stone-400">
                We don't rush to code. We take time to understand the problem space, explore multiple solutions, and
                find the approach that truly serves your needs—not just the first idea that comes to mind.
              </p>
            </div>
            <div class="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-lg approach-card">
              <UIcon name="i-heroicons-beaker" class="text-3xl text-primary-500 mb-4" />
              <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200 mb-3">Rapid Experimentation</h3>
              <p class="text-stone-600 dark:text-stone-400">
                We move quickly to test ideas and get feedback, but always with purpose and care.
                This balanced approach leads to better outcomes.
              </p>
            </div>
            <div class="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-lg approach-card">
              <UIcon name="i-heroicons-heart" class="text-3xl text-primary-500 mb-4" />
              <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200 mb-3">Thoughtful Collaboration</h3>
              <p class="text-stone-600 dark:text-stone-400">
                We thrive on deep listening and genuine collaboration. We bring our full, authentic selves to every
                project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Case Studies -->
      <section class="my-32">
        <div class="case-studies-container">
          <HomepageCaseStudy v-for="(project, index) in featuredProjects" :key="project.title" :project="project"
            v-intersection-observer="{ handler: (entries) => animateCaseStudy(entries, index), rootMargin: '-100px' }"
            class="case-study-item" />
        </div>
      </section>

      <!-- Contact Section -->
      <section
        class="pad my-16 md:my-32 bg-gradient-to-br from-stone-100 to-stone-50 dark:from-stone-900/70 dark:to-stone-900/40 py-12 md:py-24 rounded-xl shadow-sm">
        <div class="max-w-7xl mx-auto md:flex gap-12 md:gap-24">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h3 class="text-3xl md:text-4xl font-light mb-4 md:mb-8 contact-heading">Say hello<span
                class="text-primary-500">:</span></h3>
            <p class="text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl contact-text">
              Fancy a chat about creative puzzles or technological wonders? Our team is all ears!
              Email us at <a href="mailto:studio@room302.studio"
                class="font-medium text-primary-500 hover:text-primary-600 transition-colors underline-offset-4 hover:underline">
                studio@room302.studio
              </a>
            </p>
          </div>
          <div class="md:w-1/2 contact-form">
            <MailchimpSignupForm />
          </div>
        </div>
      </section>

      <!-- ... rest of sections with similar refinements ... -->
    </div>
  </div>
</template>

<script setup>
import { vIntersectionObserver } from '@vueuse/components'
import { animate, createAnimatable, createTimeline, createTimer, stagger, utils } from "~/anime.esm.js";
import HomepageCaseStudy from '~/components/HomepageCaseStudy.vue'
import { useWindowSize } from '@vueuse/core'
import { useRouter } from 'vue-router'

// Create an alias for stagger to match the code
const anime = { stagger };

function animateMissionText(entries) {
  if (entries[0].isIntersecting) {
    animate(
      entries[0].target, {
      translateY: ['10px', '0px'],
      duration: 800,
      easing: 'easeOutQuad',
    }
    );
  }
}

function animateCaseStudy(entries, index) {
  if (entries[0].isIntersecting) {
    animate(
      entries[0].target, {
      translateY: ['20px', '0px'],
      duration: 800,
      easing: 'easeOutQuad',
      delay: index * 150, // Stagger effect
    }
    );
  }
}

function animatePushIn(e) {
  // Keeping the commented code for reference
}

const dotColor = ref(null)

// Custom cursor
const cursorPosition = ref({ x: 0, y: 0 })
const cursorStyle = computed(() => {
  return {
    transform: `translate(${cursorPosition.value.x}px, ${cursorPosition.value.y}px)`,
  }
})

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

function updateCursorPosition(e) {
  // Animate cursor with a slight delay for smooth following effect
  animate(cursorPosition.value, {
    x: e.clientX,
    y: e.clientY,
    duration: 800,
    easing: 'spring(1, 80, 10, 0)',
  });
}

// Page transition
const isPageTransitioning = ref(false)
const router = useRouter()

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    isPageTransitioning.value = true

    // Delay navigation slightly to allow for transition
    setTimeout(() => {
      next()
    }, 300)
  } else {
    next()
  }
})

router.afterEach(() => {
  // Reset transition state after navigation
  setTimeout(() => {
    isPageTransitioning.value = false
  }, 500)
})

onMounted(() => {
  // Make all text fully visible immediately
  document.querySelectorAll('.hero-text, .hero-subtitle, .hero-btn, .value-prop, .value-icon, .what-we-do-item').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });

  // Animate the dot color
  animate(dotColor, {
    keyframes: [
      { value: 'hsl(0, 100%, 100%)' },
      // orange
      { value: 'hsl(12, 91%, 60%)' }
    ],
    duration: 7000,
    alternate: true,
    loop: true,
  });

  // Only animate elements if user doesn't prefer reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Hero text animation - start from already visible
    animate('.hero-text', {
      translateY: ['10px', '0px'],
      duration: 1000,
      easing: 'easeOutQuad',
    });

    // Hero subtitle animation - start from already visible
    animate('.hero-subtitle', {
      translateY: ['10px', '0px'],
      duration: 800,
      delay: 200,
      easing: 'easeOutQuad',
    });

    // Value props animation with stagger - start from already visible
    animate('.value-prop', {
      translateY: ['10px', '0px'],
      duration: 800,
      delay: stagger(150, { start: 400 }),
      easing: 'easeOutQuad',
    });

    // What we do items animation - start from already visible
    animate('.what-we-do-item', {
      translateY: ['10px', '0px'],
      duration: 800,
      delay: stagger(100),
      easing: 'easeOutQuad',
    });

    // Value icons subtle animation - start from already visible
    animate('.value-icon', {
      scale: [0.9, 1],
      duration: 600,
      delay: stagger(200, { start: 300 }),
      easing: 'spring(1, 80, 10, 0)',
    });
  }

  // Initialize cursor position
  if (process.client && !isMobile.value) {
    document.addEventListener('mousemove', (e) => {
      cursorPosition.value = { x: e.clientX, y: e.clientY }
    }, { once: true })
  }

  // Animate scroll indicator
  animate('.scroll-indicator', {
    opacity: [0, 1],
    translateY: ['10px', '0px'],
    duration: 1000,
    delay: 1000,
    easing: 'easeOutQuad',
  });

  // Subtle bounce animation for scroll indicator
  animate('.scroll-indicator div', {
    translateY: ['0px', '8px'],
    opacity: [1, 0.5],
    duration: 1500,
    delay: 1500,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
  });
});

useSeoMeta({
  title: 'Room 302 Studio',
  description: 'We are an innovation lab that turns concepts into reality.',
  ogDescription: 'We are an innovation lab that turns concepts into reality.',
  url: 'https://room302.studio',
  ogImage: '/twitter-image.jpg',
  twitterImage: '/twitter-image.jpg',
})

// Featured projects data
const featuredProjects = [
  {
    title: 'Mapping Resilience',
    client: 'The Margin',
    description: 'We partnered with the Wildlife Conservation Society on an interesting and vital challenge: to bring to light the resilience of certain coral reefs in the throes of climate change.',
    images: {
      primary: '/our-work-images/reef-2.jpg',
      secondary: '/our-work-images/reef-1.jpg'
    },
    link: 'our-work/client-work/coralreefs'
  },
  // ... other projects
]

</script>

<style scoped>
/* Remove the preload animation that's causing issues */
/* .hero-text,
.hero-subtitle,
.hero-btn,
.value-prop,
.value-icon,
.what-we-do-item {
  animation: textPreload 0s var(--text-preload-delay) forwards !important;
}

@keyframes textPreload {
  to {
    opacity: 0.01;
  }
} */

.pad {
  @apply px-8 md:px-12 lg:px-32 py-12 md:py-16;
}

/* Hero section refinements */
.hero-text {
  @apply relative;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.hero-text .text-primary-500 {
  @apply relative inline-block;
}

.hero-text .text-primary-500::after {
  content: '';
  @apply absolute -bottom-1 left-0 w-full h-px bg-primary-500/30;
}

.hero-subtitle {
  @apply relative;
  letter-spacing: 0.01em;
  max-width: 42rem;
  margin-top: 1.5rem;
}

/* Ensure text balance */
.text-balance {
  text-wrap: balance;
}

/* Smooth transitions */
.case-study {
  @apply transition-all duration-500;
}

.case-study:hover {
  @apply transform -translate-y-1;
}

/* Subtle grid background */
.bg-grid {
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* What We Do section refinements */
.what-we-do-item {
  @apply transition-all duration-300;
}

.what-we-do-item:hover .w-10 {
  @apply bg-primary-500/30 scale-110;
  transition: all 0.3s ease;
}

/* Initial state for animations - MAKE VISIBLE BY DEFAULT */
.hero-text,
.hero-subtitle,
.hero-btn,
.value-prop,
.value-icon,
.what-we-do-item {
  opacity: 1;
  transform: none;
}

/* Remove the fadeIn animation that's causing issues */
/* @keyframes fadeIn {
  0% {
    opacity: 0.01;
  }

  100% {
    opacity: 1;
  }
} */

/* Fallback for users with reduced motion preferences */
@media (prefers-reduced-motion) {

  .hero-text,
  .hero-subtitle,
  .hero-btn,
  .value-prop,
  .value-icon,
  .what-we-do-item {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
  }
}

/* Remove the ensureVisibility animation that's causing issues */
/* .hero-text,
.hero-subtitle,
.hero-btn,
.value-prop,
.value-icon,
.what-we-do-item {
  animation: ensureVisibility 0s 1s forwards;
}

@keyframes ensureVisibility {
  to {
    opacity: 1;
    transform: none;
  }
} */

/* Refined hover states */
a {
  @apply transition-all duration-300;
}

/* Case study refinements */
.case-studies-container {
  @apply space-y-16 md:space-y-32;
}

.case-study-item {
  @apply relative;
}

/* Custom cursor */
.custom-cursor {
  @apply fixed w-6 h-6 rounded-full bg-primary-500/20 backdrop-blur-sm pointer-events-none z-50 mix-blend-difference;
  top: -12px;
  left: -12px;
  transform: translate(0, 0);
  will-change: transform;
}

/* Make links and interactive elements show the cursor pointer */
a,
button,
.interactive {
  @apply cursor-pointer;
}

/* Hide custom cursor on mobile */
@media (max-width: 768px) {

  a,
  button,
  .interactive {
    @apply cursor-pointer;
  }
}

/* Scroll indicator */
.scroll-indicator {
  @apply transition-opacity duration-500;
  opacity: 0;
}

/* Hide scroll indicator when scrolling down */
@media (min-height: 700px) {
  .scroll-indicator {
    @apply md:block;
  }
}

/* Page transition overlay */
.page-transition-overlay {
  @apply fixed inset-0 bg-stone-50 dark:bg-stone-950 z-50 pointer-events-none opacity-0 transition-opacity duration-500;
}

.page-transition-overlay.active {
  @apply opacity-100;
}

/* What We Actually Do section */
.mt-16.md\:mt-24.bg-stone-100 {
  @apply shadow-sm transition-all duration-500;
}

.mt-16.md\:mt-24.bg-stone-100:hover {
  @apply shadow-md;
}

/* Approach cards */
.approach-card {
  @apply transition-all duration-300 shadow-sm;
}

.approach-card:hover {
  @apply shadow-md transform -translate-y-1;
}

.hero-btn {
  @apply relative overflow-hidden;
}

.primary-btn::before {
  content: '';
  @apply absolute inset-0 bg-primary-600/0 transition-all duration-300;
}

.primary-btn:hover::before {
  @apply bg-primary-600/10;
}

.secondary-btn:hover {
  @apply text-primary-500;
}
</style>
