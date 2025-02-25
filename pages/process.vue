<template>
  <div class="min-h-screen process-page">
    <!-- Subtle scroll progress indicator -->
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" ref="scrollProgressBar"></div>
    </div>

    <!-- Minimal, typography-driven hero section -->
    <section class="py-16 md:py-32 relative overflow-hidden">
      <div class="pad relative z-10">
        <h1 class="text-6xl md:text-8xl font-extralight mb-8 md:mb-12 tracking-tight hero-title">
          Our Process
        </h1>
        <p
          class="text-lg md:text-2xl font-light max-w-3xl leading-relaxed text-balance relative text-stone-700 dark:text-stone-400 hero-subtitle">
          <span class="text-primary-500 font-medium">"Rapid innovation with intention"</span>—we're polymaths who dive
          into any domain, embed in your organization, and deliver transformative solutions.
        </p>
      </div>
    </section>

    <!-- Typography-driven process timeline -->
    <section class="pad pb-24 relative">
      <div class="relative timeline-container">
        <!-- Minimal timeline line -->
        <div
          class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 dark:bg-stone-700 transform md:translate-x-px timeline-line">
        </div>

        <!-- Step 1: Kickoff -->
        <div class="process-step relative mb-24 md:mb-32">
          <div class="md:flex items-start">
            <div class="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0 relative">
              <div
                class="step-number absolute left-8 md:left-auto md:right-0 top-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium text-xl transform translate-x-0 md:translate-x-1/2">
                1
              </div>
              <h2 class="text-3xl md:text-5xl font-light text-stone-800 dark:text-stone-200 mb-6 pl-24 md:pl-0">Kickoff
              </h2>
              <p class="text-stone-700 dark:text-stone-400 leading-relaxed pl-24 md:pl-0">
                We align visions, establish success metrics, and rapidly absorb your domain expertise.
              </p>
            </div>
            <div class="md:w-1/2 md:pl-16">
              <p class="text-stone-600 dark:text-stone-400 italic">
                "They asked questions that completely reframed how we thought about our product."
              </p>
            </div>
          </div>
        </div>

        <!-- Step 2: Research -->
        <div class="process-step relative mb-24 md:mb-32">
          <div class="md:flex items-start">
            <div class="md:w-1/2 md:pr-16 order-2 md:order-1 mb-8 md:mb-0">
              <ul class="space-y-3 mt-6 text-stone-600 dark:text-stone-400">
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>User interviews & data analysis</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Subject matter expert collaboration</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Organizational embedding</span>
                </li>
              </ul>
            </div>
            <div class="md:w-1/2 md:pl-16 order-1 md:order-2 relative">
              <div
                class="step-number absolute left-8 md:left-0 top-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium text-xl transform translate-x-0 md:translate-x-0">
                2
              </div>
              <h2 class="text-3xl md:text-5xl font-light text-stone-800 dark:text-stone-200 mb-6 pl-24 md:pl-0">Deep
                Dive</h2>
              <p class="text-stone-700 dark:text-stone-400 leading-relaxed pl-24 md:pl-0">
                We immerse in your world, working with specialized data sources and proprietary systems to uncover
                hidden insights.
              </p>
            </div>
          </div>
        </div>

        <!-- Step 3: Sketch -->
        <div class="process-step relative mb-24 md:mb-32">
          <div class="md:flex items-start">
            <div class="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0 relative">
              <div
                class="step-number absolute left-8 md:left-auto md:right-0 top-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium text-xl transform translate-x-0 md:translate-x-1/2">
                3
              </div>
              <h2 class="text-3xl md:text-5xl font-light text-stone-800 dark:text-stone-200 mb-6 pl-24 md:pl-0">Vision
              </h2>
              <p class="text-stone-700 dark:text-stone-400 leading-relaxed pl-24 md:pl-0">
                We translate insights into innovative design solutions through expert whiteboard sketching and
                collaborative ideation.
              </p>
            </div>
            <div class="md:w-1/2 md:pl-16">
              <p class="text-stone-600 dark:text-stone-400">
                This is where complex ideas become visual concepts everyone can understand and contribute to.
              </p>
            </div>
          </div>
        </div>

        <!-- Step 4: Prototype -->
        <div class="process-step relative mb-24 md:mb-32">
          <div class="md:flex items-start">
            <div class="md:w-1/2 md:pr-16 order-2 md:order-1 mb-8 md:mb-0">
              <p class="text-stone-600 dark:text-stone-400 italic">
                "The first prototype was a revelation. They built in two weeks what we'd struggled with for months."
              </p>
            </div>
            <div class="md:w-1/2 md:pl-16 order-1 md:order-2 relative">
              <div
                class="step-number absolute left-8 md:left-0 top-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium text-xl transform translate-x-0 md:translate-x-0">
                4
              </div>
              <h2 class="text-3xl md:text-5xl font-light text-stone-800 dark:text-stone-200 mb-6 pl-24 md:pl-0">Rapid
                Prototyping</h2>
              <p class="text-stone-700 dark:text-stone-400 leading-relaxed pl-24 md:pl-0">
                As polymaths, we rapidly prototype across technologies, adapting to your needs rather than forcing you
                into our comfort zone.
              </p>
            </div>
          </div>
        </div>

        <!-- Step 5: Iterate -->
        <div class="process-step relative">
          <div class="md:flex items-start">
            <div class="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0 relative">
              <div
                class="step-number absolute left-8 md:left-auto md:right-0 top-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium text-xl transform translate-x-0 md:translate-x-1/2">
                5
              </div>
              <h2 class="text-3xl md:text-5xl font-light text-stone-800 dark:text-stone-200 mb-6 pl-24 md:pl-0">
                Refine & Deliver</h2>
              <p class="text-stone-700 dark:text-stone-400 leading-relaxed pl-24 md:pl-0">
                We iterate with your experts, add the finishing touches, and ensure a smooth handoff with ongoing
                support.
              </p>
            </div>
            <div class="md:w-1/2 md:pl-16">
              <ul class="space-y-3 mt-6 text-stone-600 dark:text-stone-400">
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Cross-platform expertise</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Skunkworks innovation</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Organizational integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skunkworks & Organizational Embedding Highlight -->
    <section class="pad py-16 md:py-24 bg-stone-100 dark:bg-stone-900">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-light mb-12 text-stone-800 dark:text-stone-200 text-center">
          Beyond The <span class="text-primary-500 font-medium">Ordinary</span>
        </h2>

        <div class="md:flex items-start gap-12">
          <!-- Skunkworks Innovation -->
          <div class="md:w-1/2 mb-12 md:mb-0">
            <div class="bg-white dark:bg-stone-800 p-8 rounded-xl shadow-sm">
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-rocket-launch" class="text-primary-500 text-3xl mr-4" />
                <h3 class="text-2xl md:text-3xl font-light text-stone-800 dark:text-stone-200">Skunkworks Innovation
                </h3>
              </div>
              <p class="text-stone-700 dark:text-stone-400 mb-6 leading-relaxed">
                We excel at radical innovation projects that operate outside conventional structures, delivering
                breakthrough solutions when traditional methods fail.
              </p>
              <ul class="space-y-3 text-stone-600 dark:text-stone-400">
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Rapid concept-to-prototype development</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Unconventional problem-solving</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Organizational Embedding -->
          <div class="md:w-1/2">
            <div class="bg-white dark:bg-stone-800 p-8 rounded-xl shadow-sm">
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-building-office-2" class="text-primary-500 text-3xl mr-4" />
                <h3 class="text-2xl md:text-3xl font-light text-stone-800 dark:text-stone-200">Organizational Embedding
                </h3>
              </div>
              <p class="text-stone-700 dark:text-stone-400 mb-6 leading-relaxed">
                We seamlessly integrate into your organization, collaborating with your experts and navigating complex
                structures to deliver results.
              </p>
              <ul class="space-y-3 text-stone-600 dark:text-stone-400">
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Deep subject matter expert collaboration</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Proprietary data system integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Minimal Call to Action -->
    <section class="pad py-16 md:py-32 text-center">
      <h2 class="text-3xl md:text-5xl font-light mb-6 text-stone-800 dark:text-stone-200">Ready to start your journey?
      </h2>
      <p class="text-lg md:text-xl text-stone-700 dark:text-stone-400 max-w-2xl mx-auto mb-12">
        Let's create transformative solutions that push boundaries.
      </p>
      <UButton to="/contact" size="lg"
        class="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 text-lg rounded-lg transition-all duration-300">
        Get in touch
        <UIcon name="i-heroicons-arrow-right" class="ml-2" />
      </UButton>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
import { animate, stagger } from "~/anime.esm.js";
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'

useSeoMeta({
  title: 'Our Process | Room 302 Studio',
  description: 'Our "rapid innovation with intention" approach helps bring your ideas to life with care and expertise.',
})

// Track active step for animations
const activeStep = ref(null);
const scrollProgressBar = ref(null);
const prefersReducedMotion = usePreferredReducedMotion();

// Function to perform a smooth fade-in animation with a subtle slide
function smoothFadeInAnimation(el) {
  if (prefersReducedMotion.value === 'reduce') {
    // Just set opacity to 1 without animation for reduced motion
    el.style.opacity = '1';
    return;
  }

  animate(el, {
    translateY: ['20px', '0px'],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeOutQuint',
  });
}

// Throttle function to limit execution to once per specified time period
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

onMounted(() => {
  // Skip animations if user prefers reduced motion
  if (prefersReducedMotion.value !== 'reduce') {
    // Animate hero elements on page load
    animate('.hero-title', {
      opacity: [0, 1],
      translateY: ['30px', '0px'],
      duration: 800,
      easing: 'easeOutQuint',
    });

    animate('.hero-subtitle', {
      opacity: [0, 1],
      translateY: ['30px', '0px'],
      delay: 200,
      duration: 800,
      easing: 'easeOutQuint',
    });

    // Animate timeline line with a smoother animation
    animate('.timeline-line', {
      scaleY: [0, 1],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeOutQuint',
    });
  } else {
    // For reduced motion, just make everything visible without animation
    document.querySelectorAll('.hero-title, .hero-subtitle, .timeline-line').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // Add scroll event listener with throttle to prevent excessive triggering
  const throttledScrollHandler = throttle(handleScroll, 100);
  window.addEventListener('scroll', throttledScrollHandler);

  // Initialize active step and scroll progress
  handleScroll();

  // Set up intersection observers for process steps with better thresholds
  const processSteps = document.querySelectorAll('.process-step');
  processSteps.forEach((step, index) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply the smooth fade-in animation
          smoothFadeInAnimation(step);

          // Animate the step number with a subtle scale
          const stepNumber = step.querySelector('.step-number');
          if (stepNumber && prefersReducedMotion.value !== 'reduce') {
            animate(stepNumber, {
              scale: [0.8, 1],
              opacity: [0.5, 1],
              duration: 600,
              easing: 'easeOutQuint',
            });
          } else if (stepNumber) {
            stepNumber.style.opacity = '1';
          }

          // Only trigger once
          observer.unobserve(step);
        }
      });
    }, { threshold: 0.2, rootMargin: '-10% 0px' });

    observer.observe(step);
  });

  // Set up intersection observers for the "Beyond The Ordinary" section
  const beyondOrdinarySection = document.querySelector('.bg-stone-100.dark\\:bg-stone-900');
  if (beyondOrdinarySection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && prefersReducedMotion.value !== 'reduce') {
          // Animate the section title
          animate(beyondOrdinarySection.querySelector('h2'), {
            opacity: [0, 1],
            translateY: ['20px', '0px'],
            duration: 800,
            easing: 'easeOutQuint',
          });

          // Animate the cards with stagger
          animate(beyondOrdinarySection.querySelectorAll('.md\\:w-1\\/2 > div'), {
            opacity: [0, 1],
            translateY: ['30px', '0px'],
            duration: 800,
            delay: stagger(150),
            easing: 'easeOutQuint',
          });

          // Only trigger once
          observer.unobserve(beyondOrdinarySection);
        } else if (entry.isIntersecting) {
          // For reduced motion, just make everything visible
          beyondOrdinarySection.querySelectorAll('h2, .md\\:w-1\\/2 > div').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
          });
          observer.unobserve(beyondOrdinarySection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(beyondOrdinarySection);
  }
});

onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('scroll', throttle(handleScroll, 100));
});

function handleScroll() {
  // Update scroll progress indicator
  updateScrollProgress();

  const processSteps = document.querySelectorAll('.process-step');

  // Remove active class from all steps
  processSteps.forEach(step => {
    step.classList.remove('active');
  });

  // Find the step currently in view
  let activeStepFound = false;

  processSteps.forEach((step, index) => {
    const rect = step.getBoundingClientRect();
    // Improved calculation for determining if an element is in view
    const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.2;

    if (isInView && !activeStepFound) {
      activeStepFound = true;
      activeStep.value = index;

      // Add active class to current step
      step.classList.add('active');

      // Animate the step number with a subtle scale if animations are enabled
      if (prefersReducedMotion.value !== 'reduce') {
        const stepNumber = step.querySelector('.step-number');
        if (stepNumber) {
          animate(stepNumber, {
            scale: [1, 1.05, 1],
            duration: 600,
            easing: 'easeOutQuint',
          });
        }
      }
    }
  });
}

function updateScrollProgress() {
  if (!scrollProgressBar.value) {
    scrollProgressBar.value = document.querySelector('.scroll-progress-bar');
  }

  if (scrollProgressBar.value) {
    const windowHeight = document.documentElement.clientHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.scrollY;

    // Calculate scroll percentage
    const scrollPercentage = (scrollTop / documentHeight) * 100;

    // Update progress bar width
    scrollProgressBar.value.style.width = `${scrollPercentage}%`;
  }
}
</script>

<style scoped>
.pad {
  @apply px-6 md:px-12 lg:px-24 xl:px-32;
}

/* Enhanced process step styling with improved spacing */
.process-step {
  @apply transition-all duration-500 opacity-80 pt-24 md:pt-28;
  will-change: opacity;
  position: relative;
}

.process-step.active {
  @apply opacity-100;
}

.step-number {
  @apply transition-all duration-300 z-10;
  will-change: transform, opacity;
  top: 0;
}

.process-step:hover .step-number,
.process-step.active .step-number {
  @apply transform scale-105;
}

/* Hero title animation */
.hero-title {
  @apply relative;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  @apply relative;
  letter-spacing: 0.01em;
}

/* Mobile adjustments with improved positioning */
@media (max-width: 768px) {
  .step-number {
    position: absolute;
    top: 0 !important;
    left: 0 !important;
    margin-left: 8px;
    transform: translateX(0) !important;
    z-index: 10;
  }

  .process-step {
    @apply pt-24 pb-8;
    margin-bottom: 2rem !important;
    display: flex;
    flex-direction: column;
  }

  .process-step h2 {
    @apply pl-24 text-2xl;
    margin-top: 0.75rem;
    padding-top: 0.5rem;
  }

  .process-step p {
    @apply pl-24;
  }

  /* Ensure the timeline line is properly positioned on mobile */
  .timeline-line {
    left: 8px !important;
    z-index: 1;
  }

  /* Fix order issues on mobile */
  .md\:order-1 {
    order: 1;
  }

  .md\:order-2 {
    order: 2;
  }

  .process-step>div {
    width: 100%;
  }

  .process-step .md\:text-right {
    text-align: left;
  }

  .process-step .md\:pl-16,
  .process-step .md\:pr-16 {
    padding-left: 0;
    padding-right: 0;
  }
}

/* COMPLETELY FIXED STEP NUMBER POSITIONING */
/* This is a complete rewrite of the step number positioning to fix all issues */
.process-step {
  padding-top: 3rem !important;
}

.process-step .step-number {
  position: absolute;
  z-index: 20 !important;
}

/* Left-side step numbers (odd steps) */
.process-step:nth-child(odd) .md\:w-1\/2:first-child .step-number {
  top: 0 !important;
  right: -6px !important;
  left: auto !important;
}

/* Right-side step numbers (even steps) */
.process-step:nth-child(even) .md\:w-1\/2:last-child .step-number {
  top: 0 !important;
  left: -6px !important;
  right: auto !important;
}

/* Mobile step numbers */
@media (max-width: 768px) {
  .process-step {
    padding-top: 3.5rem !important;
  }

  .process-step .step-number {
    top: 0 !important;
    left: 0 !important;
    right: auto !important;
    margin-left: 8px;
  }

  .process-step h2 {
    padding-left: 32px !important;
    margin-top: 1.5rem !important;
  }

  .process-step p {
    padding-left: 32px !important;
  }
}

/* Timeline line animation origin */
.timeline-line {
  @apply transition-all duration-700;
  transform-origin: top center;
  will-change: transform, opacity;
}

.process-step.active~.process-step .timeline-line {
  @apply opacity-30;
}

/* Ensure text balance */
.text-balance {
  text-wrap: balance;
}

/* Subtle scroll progress indicator */
.scroll-progress-container {
  @apply fixed top-0 left-0 w-full h-px bg-stone-200/30 dark:bg-stone-800/30 z-50;
}

.scroll-progress-bar {
  @apply h-full bg-primary-500/80 w-0 transition-all duration-100;
  will-change: width;
}

/* Respect user preferences for reduced motion */
@media (prefers-reduced-motion: reduce) {

  .process-step,
  .step-number,
  .hero-title,
  .hero-subtitle,
  .timeline-line {
    transition: opacity 0.5s ease !important;
    transform: none !important;
    animation: none !important;
  }

  /* Ensure all elements are visible immediately */
  .process-step,
  .step-number,
  .hero-title,
  .hero-subtitle,
  .timeline-line {
    opacity: 1 !important;
  }
}

/* Fix for Safari */
@supports (-webkit-touch-callout: none) {
  .step-number {
    transform: translateZ(0);
  }
}

/* Fix for timeline positioning */
.timeline-line {
  z-index: 1;
}

/* Fix for mobile layout */
@media (max-width: 768px) {
  .process-step {
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
  }

  .process-step>div {
    width: 100%;
  }

  .process-step .md\:text-right {
    text-align: left;
  }

  .process-step .md\:pl-16,
  .process-step .md\:pr-16 {
    padding-left: 0;
    padding-right: 0;
  }

  .step-number {
    left: 0 !important;
    top: 0 !important;
    margin-left: 8px;
  }

  .process-step h2 {
    padding-left: 28px !important;
    margin-top: 0.75rem;
  }

  .process-step p {
    padding-left: 28px !important;
  }
}

/* Beyond The Ordinary section styles */
.bg-stone-100.dark\:bg-stone-900 {
  position: relative;
  overflow: hidden;
}

.bg-stone-100.dark\:bg-stone-900::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(var(--color-primary-500), 0.3), transparent);
}

.bg-stone-100.dark\:bg-stone-900::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(var(--color-primary-500), 0.3), transparent);
}

.bg-stone-100.dark\:bg-stone-900 h2,
.bg-stone-100.dark\:bg-stone-900 .md\:w-1\/2>div {
  opacity: 0;
  transform: translateY(20px);
  will-change: opacity, transform;
}

.bg-stone-100.dark\:bg-stone-900 .md\:w-1\/2>div {
  transition: transform 0.5s ease-out, box-shadow 0.3s ease;
}

.bg-stone-100.dark\:bg-stone-900 .md\:w-1\/2>div:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

@media (prefers-reduced-motion: reduce) {

  .bg-stone-100.dark\:bg-stone-900 h2,
  .bg-stone-100.dark\:bg-stone-900 .md\:w-1\/2>div {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .bg-stone-100.dark\:bg-stone-900 .md\:w-1\/2>div:hover {
    transform: none !important;
    box-shadow: none;
  }
}
</style>
