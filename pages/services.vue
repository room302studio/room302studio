<template>
  <div class="min-h-screen">
    <!-- Hero section -->
    <section class="py-16 md:py-32 relative overflow-hidden">
      <div class="pad relative z-10">
        <h1 class="text-6xl md:text-8xl font-extralight mb-8 md:mb-12 tracking-tight">
          Our Services
        </h1>
        <p
          class="text-lg md:text-2xl font-light max-w-3xl leading-relaxed text-balance relative text-stone-700 dark:text-stone-400">
          We help you see the future by exploring possibilities, nurturing ideas, and bringing them to life with care
          and expertise.
          <span class="text-primary-500">No hustle culture, just kind brilliance.</span>
        </p>
      </div>
      <!-- Ambient background element -->
      <div class="absolute inset-0 bg-gradient-to-br from-stone-100/50 to-transparent dark:from-stone-950/50 
           backdrop-blur-3xl -z-10 opacity-60" />
    </section>

    <!-- Services grid -->
    <section class="pad pb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <!-- Innovation Midwifery -->
        <div
          class="service-card bg-stone-50 dark:bg-stone-900/50 p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div class="flex items-center mb-6">
            <UIcon name="i-heroicons-light-bulb" class="text-4xl text-primary-500 mr-4" />
            <h2 class="text-2xl md:text-3xl font-light text-stone-800 dark:text-stone-200">Innovation Midwifery</h2>
          </div>
          <p class="text-stone-700 dark:text-stone-400 mb-6 leading-relaxed">
            We nurture your ideas from conception to reality, providing the care and expertise needed for them to
            flourish.
            Our team brings unique perspectives to help your concept reach its full potential.
          </p>
          <h3 class="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">How we help:</h3>
          <ul class="space-y-2 text-stone-700 dark:text-stone-400">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Concept development workshops</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Rapid prototyping to visualize possibilities</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Iterative refinement with thoughtful feedback</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Implementation guidance and support</span>
            </li>
          </ul>
        </div>

        <!-- Data Visualization -->
        <div
          class="service-card bg-stone-50 dark:bg-stone-900/50 p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div class="flex items-center mb-6">
            <UIcon name="i-material-symbols-light:insert-chart-outline" class="text-4xl text-primary-500 mr-4" />
            <h2 class="text-2xl md:text-3xl font-light text-stone-800 dark:text-stone-200">Data Visualization</h2>
          </div>
          <p class="text-stone-700 dark:text-stone-400 mb-6 leading-relaxed">
            We transform complex data into intuitive, interactive experiences that reveal insights and tell compelling
            stories.
            Our deep background in data visualization helps you make sense of your information.
          </p>
          <h3 class="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">Our expertise includes:</h3>
          <ul class="space-y-2 text-stone-700 dark:text-stone-400">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Interactive data dashboards</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Narrative-driven data stories</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Custom visualization tools</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Data-driven journalism</span>
            </li>
          </ul>
        </div>

        <!-- Interactive Design -->
        <div
          class="service-card bg-stone-50 dark:bg-stone-900/50 p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div class="flex items-center mb-6">
            <UIcon name="i-heroicons-cursor-arrow-rays" class="text-4xl text-primary-500 mr-4" />
            <h2 class="text-2xl md:text-3xl font-light text-stone-800 dark:text-stone-200">Interactive Design</h2>
          </div>
          <p class="text-stone-700 dark:text-stone-400 mb-6 leading-relaxed">
            We create engaging, intuitive interfaces and experiences that delight users while solving complex problems.
            Our approach balances aesthetics with functionality to create products people love to use.
          </p>
          <h3 class="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">What we design:</h3>
          <ul class="space-y-2 text-stone-700 dark:text-stone-400">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Web applications with thoughtful UX</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Interactive storytelling experiences</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Experimental interfaces</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Accessible and inclusive design systems</span>
            </li>
          </ul>
        </div>

        <!-- Developer Relations & Content Marketing -->
        <div
          class="service-card bg-stone-50 dark:bg-stone-900/50 p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div class="flex items-center mb-6">
            <UIcon name="i-heroicons-document-text" class="text-4xl text-primary-500 mr-4" />
            <h2 class="text-2xl md:text-3xl font-light text-stone-800 dark:text-stone-200">Developer Relations & Content
            </h2>
          </div>
          <p class="text-stone-700 dark:text-stone-400 mb-6 leading-relaxed">
            We help technical products connect with their audience through authentic, valuable content and community
            building.
            Our approach focuses on genuine relationships rather than marketing hype.
          </p>
          <h3 class="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">Our services include:</h3>
          <ul class="space-y-2 text-stone-700 dark:text-stone-400">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Developer education and documentation</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Technical content strategy</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Community building and engagement</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
              <span>Technical workshops and events</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Our Process -->
    <section class="pad py-16 md:py-24 bg-stone-100 dark:bg-stone-900/70 rounded-xl">
      <h2 class="text-4xl md:text-5xl font-extralight mb-12 md:mb-16 text-stone-800 dark:text-stone-200">Our Process
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div class="process-step">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 font-medium text-xl mr-4">
              1</div>
            <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">Explore Possibilities</h3>
          </div>
          <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
            We begin by understanding your goals and challenges, then explore multiple possible futures through
            research, sketching, and rapid prototyping. This phase is about opening up possibilities rather than
            narrowing down.
          </p>
        </div>

        <div class="process-step">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 font-medium text-xl mr-4">
              2</div>
            <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">Nurture & Refine</h3>
          </div>
          <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
            We carefully develop the most promising ideas through iterative refinement. Our team brings
            unique perspectives to solve problems creatively while maintaining a focus on your goals.
          </p>
        </div>

        <div class="process-step">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 font-medium text-xl mr-4">
              3</div>
            <h3 class="text-xl font-medium text-stone-800 dark:text-stone-200">Bring to Life</h3>
          </div>
          <p class="text-stone-700 dark:text-stone-400 leading-relaxed">
            We implement the solution with care and expertise, focusing on quality and attention to detail.
            Throughout this phase, we maintain open communication and adapt as needed to ensure the final product
            exceeds expectations.
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="pad py-16 md:py-24 text-center">
      <h2 class="text-3xl md:text-4xl font-light mb-6 text-stone-800 dark:text-stone-200">Ready to bring your ideas to
        life?</h2>
      <p class="text-lg text-stone-700 dark:text-stone-400 max-w-2xl mx-auto mb-8">
        Let's collaborate to explore possibilities and create something amazing together.
      </p>
      <UButton to="/contact" size="lg" class="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3">
        Get in touch
        <UIcon name="i-heroicons-arrow-right" class="ml-2" />
      </UButton>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Our Services | Room 302 Studio',
  description: 'We help you see the future by exploring possibilities, nurturing ideas, and bringing them to life with care and expertise.',
})
</script>

<style scoped>
.pad {
  @apply px-8 md:px-12 lg:px-32;
}

.service-card,
.process-step {
  @apply transition-all duration-300;
}

.service-card:hover {
  @apply transform -translate-y-1;
}
</style>
