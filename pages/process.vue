<template>
  <div class="min-h-screen process-page">
    <!-- Subtle scroll progress indicator -->
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" ref="scrollProgressBar"></div>
    </div>

    <!-- Hero section - with standardized spacing -->
    <section class="section-spacing">
      <div class="content-container relative z-10">
        <div class="flex flex-col md:flex-row items-start">
          <div class="md:w-3/4 mb-16 md:mb-0">
            <div class="font-mono text-primary-500 uppercase tracking-wide text-sm mb-4">Room 302 — Process</div>
            <h1
              class="font-heading text-6xl md:text-7xl xl:text-8xl font-light mb-12 md:mb-16 tracking-tight hero-title">
              Our Process
            </h1>
            <p
              class="text-lg md:text-xl xl:text-2xl font-light max-w-3xl leading-relaxed text-balance relative text-stone-700 dark:text-stone-400 hero-subtitle">
              <span class="font-mono text-stone-800 dark:text-stone-300">"Rapid innovation with intention"</span>—we
              work at the
              intersection of speed and quality, turning complex data into elegant, usable tools.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process timeline - with improved spacing -->
    <section class="content-container pb-section">
      <div class="relative timeline-container">
        <!-- Data timeline component -->
        <DataTimeline :nodes="timelineNodes" :activeNodeIndex="activeNodeIndex" :progress="timelineProgress"
          :annotations="timelineAnnotations" :isDarkMode="isDarkMode" @node-click="handleNodeClick" />

        <!-- Process step details -->
        <div class="process-steps mt-32 xl:mt-40">
          <!-- Step 1: Kickoff -->
          <div class="process-step" :class="{ 'active': activeNodeIndex >= 0 }">
            <div class="md:flex items-start">
              <div class="md:w-1/2 md:pr-20 mb-16 md:mb-0 relative">
                <h2 class="section-title font-heading mb-content-spacing">
                  <span class="font-mono text-sm text-stone-500 dark:text-stone-400 block mb-2">01.</span>
                  Kickoff
                </h2>
                <p class="content-text mb-content-spacing">
                  We learn your business quickly and thoroughly. Through focused discovery, we identify opportunities
                  and constraints to <NuxtLink to="/contact" class="text-primary-500 hover:underline">solve your real
                    challenges</NuxtLink>.
                </p>

                <!-- Restored data annotation -->
                <TufteAnnotation label="Kickoff Phase" value="Week 1" description="Discovery and interviews" />
              </div>
              <div class="md:w-1/2 md:pl-20">
                <!-- Placeholder for visuals or future content -->
                <div class="bg-stone-50 dark:bg-stone-800/50 rounded-sm p-8 border-l-2 border-primary-500/30">
                  <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
                    One of our favorite things is talking to people who are knowledgeable and passionate about their
                    work. We want to capture the institutional knowledge that can help us iterate quickly without
                    re-treading old ideas. </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Deep Dive -->
          <div class="process-step process-step-spacing" :class="{ 'active': activeNodeIndex >= 1 }">
            <div class="md:flex items-start">
              <div class="md:w-1/2 md:pr-20 order-2 md:order-1 mb-16 md:mb-0">
                <ul class="space-y-4 mt-8 text-stone-600 dark:text-stone-400">
                  <li class="flex items-start">
                    <span class="text-primary-500 mr-4">—</span>
                    <span>Interviewing subject matter experts</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-primary-500 mr-4">—</span>
                    <span>Collecting and analyzing raw data</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-primary-500 mr-4">—</span>
                    <span>Building relationships with your team</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-primary-500 mr-4">—</span>
                    <span>Creating new mechanisms to collect data</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-primary-500 mr-4">—</span>
                    <span>Building a shared vocabulary of terms</span>
                  </li>
                </ul>

                <!-- Restored data visualization -->
                <div class="mt-16">
                  <DataViz type="bar-chart" title="Data sources integrated (TK average)" :isDarkMode="isDarkMode" />
                </div>
              </div>
              <div class="md:w-1/2 md:pl-20 order-1 md:order-2 relative">
                <h2 class="section-title mb-content-spacing">
                  <span class="font-mono text-sm text-stone-500 dark:text-stone-400 block mb-2">02.</span>
                  Deep Dive
                </h2>
                <p class="content-text mb-content-spacing">
                  Once we have real data to work with and the context needed to understand it, we can start querying it
                  and playing around with different concepts. Our goal is to "go wide" and find all of the potential
                  paths forward.
                </p>

              </div>
            </div>
          </div>

          <!-- Step 3: Vision -->
          <div class="process-step process-step-spacing" :class="{ 'active': activeNodeIndex >= 2 }">
            <div class="md:flex items-start">
              <div class="md:w-1/2 md:pr-20 mb-16 md:mb-0 relative">
                <h2 class="section-title mb-content-spacing">
                  <span class="font-mono text-sm text-stone-500 dark:text-stone-400 block mb-2">03.</span>
                  Vision
                </h2>
                <p class="content-text mb-content-spacing">
                  We clear the fog of war. Through stakeholder interviews and deep data analysis, we map out what's
                  possible. Then we present you with a menu of options—each with different tradeoffs of speed, cost,
                  and impact—so we can <NuxtLink to="/contact" class="text-primary-500 hover:underline">decide together
                  </NuxtLink> how to proceed into our next phase.
                </p>

                <!-- Updated data annotation -->
                <TufteAnnotation label="Strategy Process" value="Clarity"
                  description="We transform uncertainty into actionable pathways forward" />
              </div>
              <div class="md:w-1/2 md:pl-20">
                <div
                  class="bg-stone-50 dark:bg-stone-800/50 p-8 rounded-sm border-l-2 border-stone-300 dark:border-stone-700">
                  <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
                    Our interviews with subject matter experts could be a podcast. We approach them like journalists,
                    asking questions that uncover insights about the data that would otherwise remain hidden. These
                    conversations often reveal the most valuable opportunities.
                  </p>
                </div>

                <div class="quote-container mt-8">
                  <div class="absolute -left-6 top-0 text-4xl text-primary-300 font-serif">"</div>
                  <p class="text-stone-600 dark:text-stone-400 italic pl-4">
                    "We never expected to see this come together so quickly!"
                  </p>
                </div>

                <!-- Restored data visualization -->
                <div class="mt-16">
                  <DataViz type="scatter-plot" title="Solution viability matrix (TK concepts)"
                    :isDarkMode="isDarkMode" />
                </div>
              </div>
            </div>
          </div>

          <!-- Step 4: Rapid Prototyping -->
          <div class="process-step process-step-spacing" :class="{ 'active': activeNodeIndex >= 3 }">
            <div class="md:flex items-start">
              <div class="md:w-1/2 md:pr-20 order-2 md:order-1 mb-16 md:mb-0">
                <div class="quote-container">
                  <div class="absolute -left-6 top-0 text-4xl text-primary-300 font-serif">"</div>
                  <p class="text-stone-600 dark:text-stone-400 italic pl-4 mb-6">
                    "We needed a pinch hitter, and you came through with home run after home run. We could not have done
                    this without you."
                  </p>
                </div>

                <!-- Prototype iteration loop using Vue's v-for -->
                <div class="prototype-loop-container mt-16 relative">
                  <div class="prototype-loop-animation">
                    <div v-for="i in 4" :key="i" class="loop-section">
                      <div v-for="step in ['Iterate', 'Prototype', 'Test']" :key="step" class="loop-item">
                        <div class="loop-node font-mono text-sm">{{ step }}</div>
                        <div class="loop-arrow">→</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Restored data visualization -->
                <div class="mt-16">
                  <DataViz type="line-chart" title="Development velocity (4× faster)" :isDarkMode="isDarkMode" />
                </div>
              </div>
              <div class="md:w-1/2 md:pl-20 order-1 md:order-2 relative">
                <h2 class="section-title mb-content-spacing">
                  <span class="font-mono text-sm text-stone-500 dark:text-stone-400 block mb-2">04.</span>
                  Rapid Prototyping
                </h2>
                <p class="content-text mb-content-spacing">
                  We build 4 little tools in the time it takes most teams to write their tickets. Our secret? A
                  high-velocity loop of <span class="font-mono">iterate → prototype → test</span> → iterate again. Each
                  cycle compounds our
                  understanding and brings
                  us closer to the perfect solution.
                </p>

                <!-- Restored data annotation -->
                <TufteAnnotation label="MVP" value="1 Month"
                  description="Faster than traditional development because we don't waste time on useless meetings" />
              </div>
            </div>
          </div>

          <!-- Step 5: Refine & Deliver -->
          <div class="process-step process-step-spacing" :class="{ 'active': activeNodeIndex >= 4 }">
            <div class="md:flex items-start">
              <div class="md:w-1/2 md:pr-20 mb-16 md:mb-0 relative">
                <h2 class="section-title mb-content-spacing">
                  <span class="font-mono text-sm text-stone-500 dark:text-stone-400 block mb-2">05.</span>
                  Refine & Deliver
                </h2>
                <p class="content-text mb-content-spacing">
                  Most companies nickel and dime you on maintenance. We're not like that. We <NuxtLink to="/contact"
                    class="text-primary-500 hover:underline">teach you to fish</NuxtLink> instead —
                  we want to help the next client see the future, not live in the boiler room of your app forever. We
                  get you self-sufficient with stellar documentation.
                </p>
              </div>
              <div class="md:w-1/2 md:pl-20">
                <ul class="space-y-8 mt-8 text-stone-600 dark:text-stone-400">
                  <li class="flex items-start">
                    <span class="text-stone-500 text-xl mr-4">—</span>
                    <div>
                      <div class="font-medium text-stone-800 dark:text-stone-200 mb-2">Knowledge transfer that sticks
                      </div>
                      <p class="text-sm">Detailed documentation, videos, and code so clean it speaks for itself</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-stone-500 text-xl mr-4">—</span>
                    <div>
                      <div class="font-medium text-stone-800 dark:text-stone-200 mb-2">Modular setup</div>
                      <p class="text-sm">Slot in new ideas like high-end legos after we're gone</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-stone-500 text-xl mr-4">—</span>
                    <div>
                      <div class="font-medium text-stone-800 dark:text-stone-200 mb-2">Team transformation</div>
                      <p class="text-sm">Your team leaves saying "wow, we can do so much more now"</p>
                    </div>
                  </li>
                </ul>

                <!-- Restored data visualization -->
                <div class="mt-16">
                  <DataViz type="sparkline" title="Implementation clarity over time" :isDarkMode="isDarkMode" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section - direct and confident -->
    <section class="section-spacing bg-stone-100 dark:bg-stone-900 text-center">
      <div class="content-container max-w-4xl mx-auto">
        <h2
          class="font-heading text-3xl md:text-4xl xl:text-5xl font-light mb-12 xl:mb-16 text-stone-800 dark:text-stone-200">
          Simple
          Pricing</h2>
        <div class="bg-white dark:bg-stone-800 p-12 md:p-16 rounded-sm border-t border-primary-500/30 mb-8">
          <div class="flex flex-col items-center">
            <p class="text-5xl md:text-6xl xl:text-7xl font-light text-stone-800 dark:text-stone-200 mb-8">$1,000<span
                class="font-mono text-2xl">/day</span>
            </p>
            <p class="text-xl md:text-2xl text-stone-700 dark:text-stone-400 mb-8"><span class="font-mono">20</span> day
              minimum engagement</p>
            <div class="w-32 h-px bg-stone-200 dark:bg-stone-700 my-8"></div>
            <p class="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              No hidden fees. No scope creep upcharges. No bullshit. <br>
              Just straightforward value for organizations that need results.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action - simplified -->
    <section class="section-spacing text-center">
      <div class="content-container">
        <h2 class="font-heading text-3xl md:text-4xl xl:text-5xl font-light mb-8 text-stone-800 dark:text-stone-200">
          Ready to move at
          lightspeed?
        </h2>
        <p class="text-lg md:text-xl text-stone-700 dark:text-stone-400 max-w-2xl mx-auto mb-16 xl:mb-20">
          Let's create something that makes your team feel empowered and your competitors wonder how you did it.
        </p>
        <MonoButton to="/contact" primary large>
          Let's do this
          <UIcon name="i-heroicons-arrow-right" class="ml-2" />
        </MonoButton>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, computed } from 'vue'
import DataViz from '~/components/DataViz.vue'
import TufteAnnotation from '~/components/TufteAnnotation.vue'
import DataTimeline from '~/components/DataTimeline.vue'
import TufteGrid from '~/components/TufteGrid.vue'

useSeoMeta({
  title: 'Our Process | Room 302 Studio',
  description: "We're hackers for good, moving at lightspeed to build tools that transform how your team works.",
})

// Track scroll progress
const scrollProgressBar = ref(null);
const activeNodeIndex = ref(-1);
const isDarkMode = ref(false);

// Timeline data - simplified
const timelineNodes = [
  { label: 'Kickoff', position: 10 },
  { label: 'Deep Dive', position: 30 },
  { label: 'Vision', position: 50 },
  { label: 'Prototype', position: 70 },
  { label: 'Deliver', position: 90 }
];

const timelineAnnotations = [
  { position: 20, above: true, label: 'Discovery', description: 'Initial insights emerge' },
  { position: 60, above: false, label: 'Inflection', description: 'When solutions take shape' },
  { position: 80, above: true, label: 'Handoff', description: 'Knowledge transfer period' }
];

const timelineProgress = computed(() => {
  // Calculate progress based on active node
  if (activeNodeIndex.value < 0) return 0;
  if (activeNodeIndex.value >= timelineNodes.length - 1) return 100;

  const currentNode = timelineNodes[activeNodeIndex.value];
  const nextNode = timelineNodes[activeNodeIndex.value + 1];
  return currentNode.position;
});

// Use a single scroll handler with requestAnimationFrame for better performance
let ticking = false;

function handleScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateScrollProgress();
      updateActiveStep();
      ticking = false;
    });
    ticking = true;
  }
}

function updateScrollProgress() {
  if (!scrollProgressBar.value) {
    scrollProgressBar.value = document.querySelector('.scroll-progress-bar');
    if (!scrollProgressBar.value) return;
  }

  const windowHeight = document.documentElement.clientHeight;
  const documentHeight = document.documentElement.scrollHeight - windowHeight;
  const scrollTop = window.scrollY;

  // Calculate scroll percentage with bounds checking
  const scrollPercentage = Math.min(100, Math.max(0, (scrollTop / documentHeight) * 100));

  // Update progress bar width
  scrollProgressBar.value.style.width = `${scrollPercentage}%`;
}

function updateActiveStep() {
  const processSteps = document.querySelectorAll('.process-step');
  if (!processSteps.length) return;

  // Find the steps currently in view
  let activeIndex = -1;
  processSteps.forEach((step, index) => {
    if (!step) return;

    const rect = step.getBoundingClientRect();
    // Element is in view when it's in the upper portion of the viewport
    // This creates a more dramatic reveal effect as user scrolls down
    const isInView = rect.top < window.innerHeight * 0.8;

    if (isInView) {
      step.classList.add('active');
      if (activeIndex === -1 || index < activeIndex) {
        activeIndex = index;
      }
    } else if (rect.top > window.innerHeight) {
      // Only remove active class if element is below viewport
      // This keeps elements visible after scrolling past them
      step.classList.remove('active');
    }
  });

  // Update active node index for timeline
  activeNodeIndex.value = activeIndex;
}

function handleNodeClick(index) {
  activeNodeIndex.value = index;

  // Scroll to the corresponding process step
  const processSteps = document.querySelectorAll('.process-step');
  if (processSteps[index]) {
    processSteps[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Check for dark mode
function checkDarkMode() {
  isDarkMode.value = document.documentElement.classList.contains('dark');
}

onMounted(() => {
  // Check initial dark mode
  checkDarkMode();

  // Listen for dark mode changes
  const observer = new MutationObserver(checkDarkMode);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Initialize scroll progress and active step
  handleScroll();
});

onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Standardized spacing classes with more generous whitespace */
.content-container {
  @apply px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 max-w-7xl mx-auto;
}

.section-spacing {
  @apply py-24 md:py-32 lg:py-40 xl:py-48;
}

.pb-section {
  @apply pb-24 md:pb-32 lg:pb-40 xl:pb-48;
}

.process-step-spacing {
  /* @apply mt-32 md:mt-40 lg:mt-48 xl:mt-56; */
  /* use even my spacing instead */
  @apply my-16 md:my-20 lg:my-24 xl:my-32;
}

.section-title {
  @apply text-3xl my-4 md:text-4xl xl:text-5xl font-light text-stone-800 dark:text-stone-200 tracking-tight;
}

.content-text {
  @apply text-base md:text-lg text-stone-700 dark:text-stone-400 leading-relaxed tracking-wide;
}

.content-spacing {
  @apply mb-8 md:mb-12;
}

/* Process step styling - simplified animation */
.process-step {
  @apply transition-all duration-1000 opacity-0 translate-y-4 relative;
}

.process-step.active {
  @apply opacity-100 translate-y-0;
}

/* Typography styling - elegant, simplified animation */
.hero-title {
  letter-spacing: -0.025em;
  animation: fadeIn 1.2s ease-out forwards;
  opacity: 0;
}

.hero-subtitle {
  letter-spacing: 0.01em;
  animation: fadeIn 1.2s ease-out 0.3s forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Font classes */
.font-heading {
  font-family: var(--font-sans);
  font-weight: 300;
  letter-spacing: -0.025em;
}

.font-mono {
  font-family: var(--font-mono);
  letter-spacing: -0.01em;
}

.font-serif {
  font-family: var(--font-serif);
}

/* Text balance */
.text-balance {
  text-wrap: balance;
}

/* Scroll progress indicator - more subtle */
.scroll-progress-container {
  @apply fixed top-0 left-0 w-full h-0.5 bg-stone-200/20 dark:bg-stone-800/20 z-50;
}

.scroll-progress-bar {
  @apply h-full bg-primary-500/60 w-0 transition-all duration-300;
}

/* Section separators - refined */
.bg-stone-100.dark\:bg-stone-900 {
  position: relative;
  overflow: hidden;
}

.bg-stone-100.dark\:bg-stone-900::before,
.bg-stone-100.dark\:bg-stone-900::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(var(--color-primary-500), 0.2), transparent);
}

.bg-stone-100.dark\:bg-stone-900::before {
  top: 0;
}

.bg-stone-100.dark\:bg-stone-900::after {
  bottom: 0;
}

/* Quote styling - more elegance */
.quote-container {
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;
}

.quote-container .absolute {
  @apply text-5xl text-primary-300/60 font-serif;
  top: -0.75rem;
  left: -0.5rem;
}

/* Prototype Loop Animation - simplified */
.prototype-loop-container {
  padding: 2rem 0;
  overflow: hidden;
  width: 100%;
  margin: 2rem 0;
  position: relative;
}

.prototype-loop-animation {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: max-content;
  animation: loopFlow 30s linear infinite;
}

.loop-item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.loop-node {
  @apply bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 px-4 py-2 rounded-md font-medium;
  margin: 0 0.75rem;
  white-space: nowrap;
}

.loop-arrow {
  @apply text-stone-500 text-xl font-light;
  margin: 0 0.5rem;
}

@keyframes loopFlow {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% / 3));
  }
}

/* Loop section styling */
.loop-section {
  display: flex;
  flex-shrink: 0;
}
</style>
