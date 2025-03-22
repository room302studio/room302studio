<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="min-h-[70vh] flex flex-col justify-center relative overflow-hidden">
      <div class="pad relative z-10">
        <div class="overflow-hidden max-w-5xl mx-auto">
          <div class="mb-4 flex items-center">
            <UIcon name="i-heroicons-chart-bar" class="text-primary-500 w-8 h-8 mr-2" />
            <h4 class="uppercase tracking-widest text-primary-500 font-medium">For Data Analysts</h4>
          </div>

          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-extralight mb-10 md:mb-12 text-balance leading-tight tracking-tight hero-text">
            <span class="block">Transform your data into</span>
            <span class="text-primary-500 font-light">actionable insights</span>
            <span class="block mt-2">that your team can use.</span>
          </h1>

          <p
            class="text-xl md:text-2xl font-light text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed mb-12 hero-subtitle">
            Understanding your existing data shouldn't require a PhD. We help you make sense of your data and visualize
            it in ways that drive decisions.
          </p>

          <div class="flex flex-col sm:flex-row gap-6 mt-8">
            <UButton to="/contact" color="primary"
              class="hero-btn primary-btn px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
              Get started
              <UIcon name="i-heroicons-arrow-right"
                class="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </UButton>
            <UButton to="/our-work" variant="ghost"
              class="hero-btn secondary-btn border border-stone-300 dark:border-stone-700 hover:border-primary-500 px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:translate-y-[-2px]">
              See our work
            </UButton>
          </div>
        </div>
      </div>

      <!-- Background elements -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-stone-50 to-stone-100 dark:from-stone-950 dark:to-stone-900 -z-10" />
      <div class="absolute inset-0 bg-grid opacity-5 dark:opacity-10 -z-5"></div>
    </section>

    <!-- Pain Points Section -->
    <section
      class="pad py-16 md:py-24 bg-gradient-to-br from-stone-100 to-stone-50 dark:from-stone-900/70 dark:to-stone-900/40 rounded-xl my-24 md:my-32">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-light mb-12 text-stone-800 dark:text-stone-200 text-center">Common
          Challenges</h2>
        <div class="grid md:grid-cols-2 gap-x-16 gap-y-12">
          <div class="what-we-do-item">
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                <UIcon name="i-heroicons-document-chart-bar" class="text-xl" />
              </div>
              <h3 class="font-medium text-xl text-primary-500">Data overwhelm</h3>
            </div>
            <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
              Too much data and not enough insights leads to analysis paralysis. We help you identify the metrics that
              matter most to your business.
            </p>
          </div>
          <div class="what-we-do-item">
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                <UIcon name="i-heroicons-presentation-chart-line" class="text-xl" />
              </div>
              <h3 class="font-medium text-xl text-primary-500">Visualization challenges</h3>
            </div>
            <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
              Creating effective visualizations that tell a story is difficult. Our expertise in data visualization
              helps you communicate insights clearly.
            </p>
          </div>
          <div class="what-we-do-item">
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                <UIcon name="i-heroicons-variable" class="text-xl" />
              </div>
              <h3 class="font-medium text-xl text-primary-500">Legacy systems</h3>
            </div>
            <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
              Extracting meaningful data from older systems is often a roadblock. We specialize in bridging the gap
              between legacy data and modern insights.
            </p>
          </div>
          <div class="what-we-do-item">
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mr-4">
                <UIcon name="i-heroicons-arrow-path" class="text-xl" />
              </div>
              <h3 class="font-medium text-xl text-primary-500">Automation bottlenecks</h3>
            </div>
            <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
              Manual data processing steals valuable time. We create automated solutions that free you to focus on
              analysis rather than data wrangling.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Showcase -->
    <TechnologyShowcase title="Data Technologies We Use" type="data" :showAndMore="true" />

    <!-- Visualization Showcase -->
    <section class="pad my-24 md:my-32">
      <h2 class="text-3xl md:text-4xl font-light mb-12 text-stone-800 dark:text-stone-200 text-center">Visualizations
        That Tell Stories</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-lg overflow-hidden">
          <img src="/our-work-images/reef-1.jpg" alt="Data Visualization Example"
            class="rounded-lg w-full h-48 object-cover mb-4" />
          <h3 class="font-medium text-xl text-primary-500 mb-2">Interactive Dashboards</h3>
          <p class="text-stone-700 dark:text-stone-400">
            We create custom dashboards that provide real-time insights into your key metrics, allowing for data
            exploration and discovery.
          </p>
        </div>
        <div class="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-lg overflow-hidden">
          <img src="/our-work-images/reef-2.jpg" alt="Data Visualization Example"
            class="rounded-lg w-full h-48 object-cover mb-4" />
          <h3 class="font-medium text-xl text-primary-500 mb-2">Complex Data Simplification</h3>
          <p class="text-stone-700 dark:text-stone-400">
            We transform complex datasets into clear, intuitive visualizations that make patterns and trends immediately
            visible.
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <!-- 
    <section class="pad my-24 md:my-32 bg-stone-100 dark:bg-stone-900/70 rounded-xl">
      <div class="max-w-4xl mx-auto text-center">
        <UIcon name="i-heroicons-chat-bubble-bottom-center-text" class="text-4xl text-primary-500/50 mb-6 mx-auto" />
        <blockquote class="text-2xl md:text-3xl italic font-light text-stone-800 dark:text-stone-200 mb-8">
          "We were drowning in data but starving for insights. Room 302 Studio helped us make sense of our metrics and
          build visualizations that finally got our executive team to understand the patterns we'd been trying to
          explain for months."
        </blockquote>
        <div class="flex items-center justify-center">
          <div class="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mr-4">
            <UIcon name="i-heroicons-user-circle" class="text-2xl text-primary-500" />
          </div>
          <div class="text-left">
            <p class="font-medium text-stone-800 dark:text-stone-200">Director of Data Science</p>
            <p class="text-stone-600 dark:text-stone-400 text-sm">Enterprise Tech Company</p>
          </div>
        </div>
      </div>
    </section>
    -->

    <!-- CTA Section -->
    <section class="pad my-24 md:my-32">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-light mb-6 text-stone-800 dark:text-stone-200">Ready to unlock the power of
          your data?</h2>
        <p class="text-xl text-stone-600 dark:text-stone-400 mb-10">Let's transform your raw data into actionable
          insights that drive better decisions.</p>
        <UButton to="/contact" color="primary" class="text-lg px-10 py-4">Contact Us</UButton>
      </div>
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
</script>

<style scoped>
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

.bg-grid {
  background-image: linear-gradient(to right, rgba(100, 100, 100, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
}
</style>