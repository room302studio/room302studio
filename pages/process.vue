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
          <div class="md:w-3/4 mb-12 md:mb-0">
            <h1 class="text-6xl md:text-7xl xl:text-8xl font-extralight mb-8 md:mb-12 tracking-tight hero-title">
              Our Process
            </h1>
            <p
              class="text-lg md:text-xl xl:text-2xl font-light max-w-3xl leading-relaxed text-balance relative text-stone-700 dark:text-stone-400 hero-subtitle">
              <span class="text-primary-500 font-medium">"Rapid innovation with intention"</span>—or as we like to say,
              we're <span class="text-primary-500 font-medium">hackers for good</span>, tapping into your systems faster
              than you ever thought possible and filling walls with visualizations like it's our favorite thing (it is,
              actually).
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process timeline - with standardized spacing -->
    <section class="content-container pb-section">
      <div class="relative timeline-container">
        <!-- Data timeline component -->
        <DataTimeline :nodes="timelineNodes" :activeNodeIndex="activeNodeIndex" :progress="timelineProgress"
          :annotations="timelineAnnotations" :isDarkMode="isDarkMode" @node-click="handleNodeClick" />

        <!-- Process step details -->
        <div class="process-steps mt-24 xl:mt-32">
          <!-- Step 1: Kickoff -->
          <div class="process-step" :class="{ 'active': activeNodeIndex >= 0 }">
            <div class="md:flex items-start">
              <div class="md:w-1/2 md:pr-16 mb-8 md:mb-0 relative">
                <h2 class="section-title mb-content-spacing">
                  Kickoff
                </h2>
                <p class="content-text mb-content-spacing">
                  We learn your business quickly and thoroughly. In 2-3 days, we master your domain and spot
                  opportunities
                  others miss. This fast start lets us move directly to <NuxtLink to="/contact"
                    class="text-primary-500 hover:underline">solving your real challenges</NuxtLink>.
                </p>

                <!-- Restored data annotation -->
                <TufteAnnotation label="Kickoff Phase" value="2-3 days"
                  description="That's all we need to grasp your entire business model" />
              </div>
              <div class="md:w-1/2 md:pl-16">
                <!-- Placeholder for visuals or future content -->
                <div class="bg-stone-50 dark:bg-stone-800/50 rounded-sm p-6 border-l-2 border-primary-500/30">
                  <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
                    We grasp complex domains quickly and turn that understanding into action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Deep Dive -->
          <div class="process-step process-step-spacing" :class="{ 'active': activeNodeIndex >= 1 }">
            <div class="md:flex items-start">
              <div class="md:w-1/2 md:pr-16 order-2 md:order-1 mb-8 md:mb-0">
                <ul class="space-y-3 mt-6 text-stone-600 dark:text-stone-400">
                  <li class="flex items-start">
                    <span class="text-primary-500 mr-2">—</span>
                    <span>Interviewing the dorks closest to the data (with love)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-primary-500 mr-2">—</span>
                    <span>Demanding <em>all</em> the raw data (and then some)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-primary-500 mr-2">—</span>
                    <span>Making system admins our new best friends</span>
                  </li>
                </ul>

                <!-- Restored data visualization -->
                <div class="mt-8">
                  <DataViz type="bar-chart" title="Data sources integrated (TK average)" :isDarkMode="isDarkMode" />
                </div>
              </div>
              <div class="md:w-1/2 md:pl-16 order-1 md:order-2 relative">
                <h2 class="section-title mb-content-spacing">
                  Deep Dive
                </h2>
                <p class="content-text mb-content-spacing">
                  We start by learning your business inside and out. In days, not weeks, we absorb your domain knowledge
                  and identify opportunities others miss. This rapid understanding sets the foundation for everything
                  that follows. <NuxtLink to="/contact" class="text-primary-500/80 text-sm hover:underline">Ready for a
                    deep dive?</NuxtLink>
                </p>

                <div class="quote-container relative mt-4">
                  <div class="absolute -left-6 top-0 text-4xl text-primary-300 font-serif">"</div>
                  <p class="text-stone-600 dark:text-stone-400 italic pl-4">
                    "You guys really want ALL that data?"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Vision -->
          <div class="process-step process-step-spacing" :class="{ 'active': activeNodeIndex >= 2 }">
            <div class="md:flex items-start">
              <div class="md:w-1/2 md:pr-16 mb-8 md:mb-0 relative">
                <h2 class="section-title mb-content-spacing">
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
              <div class="md:w-1/2 md:pl-16">
                <div class="bg-stone-50 dark:bg-stone-800/50 p-6 rounded-sm border-l-2 border-primary-500">
                  <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
                    Our interviews with subject matter experts could be a podcast. We approach them like journalists,
                    asking questions that uncover insights about the data that would otherwise remain hidden. These
                    conversations often reveal the most valuable opportunities.
                  </p>
                </div>

                <div class="quote-container relative mt-6">
                  <div class="absolute -left-6 top-0 text-4xl text-primary-300 font-serif">"</div>
                  <p class="text-stone-600 dark:text-stone-400 italic pl-4">
                    "We never expected to see this come together so quickly!"
                  </p>
                </div>

                <!-- Restored data visualization -->
                <div class="mt-8">
                  <DataViz type="scatter-plot" title="Solution viability matrix (TK concepts)"
                    :isDarkMode="isDarkMode" />
                </div>
              </div>
            </div>
          </div>

          <!-- Step 4: Rapid Prototyping -->
          <div class="process-step process-step-spacing" :class="{ 'active': activeNodeIndex >= 3 }">
            <div class="md:flex items-start">
              <div class="md:w-1/2 md:pr-16 order-2 md:order-1 mb-8 md:mb-0">
                <div class="quote-container relative">
                  <div class="absolute -left-6 top-0 text-4xl text-primary-300 font-serif">"</div>
                  <p class="text-stone-600 dark:text-stone-400 italic pl-4 mb-6">
                    "We needed a pinch hitter, and you came through with home run after home run. We could not have done
                    this without you."
                  </p>
                </div>

                <!-- Prototype iteration loop using Vue's v-for -->
                <div class="prototype-loop-container mt-8 relative">
                  <div class="prototype-loop-animation">
                    <div v-for="i in 4" :key="i" class="loop-section">
                      <div v-for="step in ['Iterate', 'Prototype', 'Test']" :key="step" class="loop-item">
                        <div class="loop-node">{{ step }}</div>
                        <div class="loop-arrow">→</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Restored data visualization -->
                <div class="mt-12">
                  <DataViz type="line-chart" title="Development velocity (4× faster)" :isDarkMode="isDarkMode" />
                </div>
              </div>
              <div class="md:w-1/2 md:pl-16 order-1 md:order-2 relative">
                <h2 class="section-title mb-content-spacing">
                  Rapid Prototyping
                </h2>
                <p class="content-text mb-content-spacing">
                  We build 4 little tools in the time it takes most teams to write their tickets. Our secret? A
                  high-velocity
                  loop of iterate → prototype → test → iterate again. Each cycle compounds our understanding and brings
                  us closer to the perfect solution. <NuxtLink to="/contact"
                    class="text-primary-500/80 text-sm hover:underline">Start prototyping now.</NuxtLink>
                </p>

                <!-- Restored data annotation -->
                <TufteAnnotation label="Implementation Speed" value="4×"
                  description="Faster than traditional development because we don't waste time on useless meetings" />
              </div>
            </div>
          </div>

          <!-- Step 5: Refine & Deliver -->
          <div class="process-step process-step-spacing" :class="{ 'active': activeNodeIndex >= 4 }">
            <div class="md:flex items-start">
              <div class="md:w-1/2 md:pr-16 mb-8 md:mb-0 relative">
                <h2 class="section-title mb-content-spacing">
                  Refine & Deliver
                </h2>
                <p class="content-text mb-content-spacing">
                  Most companies nickel and dime you on maintenance. We're not like that. We <NuxtLink to="/contact"
                    class="text-primary-500 hover:underline">teach you to fish</NuxtLink> instead —
                  we want to help the next client see the future, not live in the boiler room of your app forever. We
                  get you self-sufficient with stellar documentation.
                </p>
              </div>
              <div class="md:w-1/2 md:pl-16">
                <ul class="space-y-6 mt-6 text-stone-600 dark:text-stone-400">
                  <li class="flex items-start">
                    <span class="text-primary-500 text-xl mr-3">—</span>
                    <div>
                      <div class="font-medium text-stone-800 dark:text-stone-200 mb-1">Knowledge transfer that sticks
                      </div>
                      <p class="text-sm">Detailed documentation, videos, and code so clean it speaks for itself</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-primary-500 text-xl mr-3">—</span>
                    <div>
                      <div class="font-medium text-stone-800 dark:text-stone-200 mb-1">Modular setup</div>
                      <p class="text-sm">Slot in new ideas like high-end legos after we're gone</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-primary-500 text-xl mr-3">—</span>
                    <div>
                      <div class="font-medium text-stone-800 dark:text-stone-200 mb-1">Team transformation</div>
                      <p class="text-sm">Your team leaves saying "wow, we can do so much more now"</p>
                    </div>
                  </li>
                </ul>

                <!-- Restored data visualization -->
                <div class="mt-8">
                  <DataViz type="sparkline" title="Implementation clarity over time" :isDarkMode="isDarkMode" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Beyond Convention - with standardized card heights -->
    <section class="section-spacing bg-stone-100 dark:bg-stone-900">
      <div class="content-container">
        <h2
          class="text-4xl md:text-5xl xl:text-6xl font-light mb-12 xl:mb-16 text-stone-800 dark:text-stone-200 text-center">
          Beyond <span class="text-primary-500 font-medium">Boring</span>
        </h2>

        <div class="md:flex items-stretch gap-12">
          <!-- Innovation -->
          <div class="md:w-1/2 mb-12 md:mb-0">
            <div class="bg-white dark:bg-stone-800 p-8 rounded-sm border-t border-primary-500/30 h-full flex flex-col">
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-rocket-launch" class="text-primary-500 text-3xl mr-4" />
                <h3 class="text-2xl md:text-3xl font-light text-stone-800 dark:text-stone-200">Expert Innovation Studio
                </h3>
              </div>
              <p class="content-text mb-6">
                We're not a typical agency or consultancy. We're a studio of exceptionally talented innovators who are
                passionate about technical excellence and deliver at speeds that traditional teams struggle to match.
              </p>
              <ul class="space-y-3 text-stone-600 dark:text-stone-400">
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Speed that makes your head spin</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>Solutions your competitors haven't thought of yet</span>
                </li>
              </ul>

              <!-- Restored data visualization -->
              <div class="mt-8 mt-auto pt-4">
                <DataViz type="bar-chart" title="Innovation success rate (TK% higher)" :isDarkMode="isDarkMode" />
              </div>
            </div>
          </div>

          <!-- Organizational Integration -->
          <div class="md:w-1/2">
            <div class="bg-white dark:bg-stone-800 p-8 rounded-sm border-t border-primary-500/30 h-full flex flex-col">
              <div class="flex items-center mb-6">
                <UIcon name="i-heroicons-building-office-2" class="text-primary-500 text-3xl mr-4" />
                <h3 class="text-2xl md:text-3xl font-light text-stone-800 dark:text-stone-200">Your Team's Secret Weapon
                </h3>
              </div>
              <p class="content-text mb-6">
                Your subject matter experts will love us. We speak their language, value their insight, and make them
                look like heroes. We're the force multiplier that makes everyone around us better.
              </p>
              <ul class="space-y-3 text-stone-600 dark:text-stone-400">
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>We make your experts feel understood</span>
                </li>
                <li class="flex items-start">
                  <span class="text-primary-500 mr-2">—</span>
                  <span>We extract genius from every corner of your org</span>
                </li>
              </ul>

              <!-- Restored data grid visualization -->
              <div class="mt-8 mt-auto pt-4">
                <TufteGrid :rows="4" :columns="6" :cellSize="24" :gap="3" :highlightedCells="[
                  { row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 },
                  { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 }, { row: 1, col: 4 },
                  { row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }, { row: 2, col: 3 }, { row: 2, col: 4 }, { row: 2, col: 5 },
                  { row: 3, col: 1 }, { row: 3, col: 2 }, { row: 3, col: 3 }, { row: 3, col: 4 }
                ]" :showAxisLabels="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Beyond Convention - refined with elegant approach -->
    <section class="section-spacing bg-stone-100 dark:bg-stone-900">
      <div class="content-container max-w-5xl mx-auto">
        <h2
          class="text-4xl md:text-6xl xl:text-7xl font-light mb-16 xl:mb-20 text-stone-800 dark:text-stone-200 text-center tracking-tight">
          Beyond <span class="text-primary-500">Expectations</span>
        </h2>

        <div class="grid md:grid-cols-2 gap-16">
          <!-- Innovation -->
          <div>
            <div class="border-t border-primary-500/30 pt-8">
              <h3 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-200 mb-8 tracking-tight">
                Technical Velocity
              </h3>
              <p class="text-xl text-stone-700 dark:text-stone-400 mb-12 leading-relaxed">
                We move at the pace of innovation, not bureaucracy. Our approach bridges the gap between
                vision and implementation, creating solutions that others haven't yet <NuxtLink to="/contact"
                  class="text-primary-500 hover:underline">imagined</NuxtLink>.
              </p>

              <!-- Simplified data visualization -->
              <div class="mt-8">
                <DataViz type="bar-chart" title="Innovation velocity" :isDarkMode="isDarkMode" />
              </div>
            </div>
          </div>

          <!-- Organizational Integration -->
          <div>
            <div class="border-t border-primary-500/30 pt-8">
              <h3 class="text-3xl md:text-4xl font-light text-stone-800 dark:text-stone-200 mb-8 tracking-tight">
                Human Connection
              </h3>
              <p class="text-xl text-stone-700 dark:text-stone-400 mb-12 leading-relaxed">
                We speak the language of your domain experts while translating complex technical concepts.
                This bridge-building creates <NuxtLink to="/contact" class="text-primary-500 hover:underline">profound
                  collaboration</NuxtLink> that elevates everyone involved.
              </p>

              <!-- Simplified data grid visualization -->
              <div class="mt-8">
                <TufteGrid :rows="4" :columns="6" :cellSize="24" :gap="3" :highlightedCells="[
                  { row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 },
                  { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 }, { row: 1, col: 4 },
                  { row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }, { row: 2, col: 3 }, { row: 2, col: 4 }, { row: 2, col: 5 },
                  { row: 3, col: 1 }, { row: 3, col: 2 }, { row: 3, col: 3 }, { row: 3, col: 4 }
                ]" :showAxisLabels="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section - direct and confident -->
    <section class="section-spacing bg-stone-100 dark:bg-stone-900 text-center">
      <div class="content-container max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl xl:text-5xl font-light mb-8 xl:mb-12 text-stone-800 dark:text-stone-200">Simple
          Pricing</h2>
        <div class="bg-white dark:bg-stone-800 p-8 md:p-12 rounded-sm border-t border-primary-500/30 mb-8">
          <div class="flex flex-col items-center">
            <p class="text-5xl md:text-6xl xl:text-7xl font-light text-primary-500 mb-4">$1,000<span
                class="text-2xl">/day</span>
            </p>
            <p class="text-xl md:text-2xl text-stone-700 dark:text-stone-400 mb-6">20 day minimum engagement</p>
            <div class="w-24 h-px bg-stone-200 dark:bg-stone-700 my-6"></div>
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
        <h2 class="text-3xl md:text-4xl xl:text-5xl font-light mb-6 text-stone-800 dark:text-stone-200">Ready to move at
          lightspeed?
        </h2>
        <p class="text-lg md:text-xl text-stone-700 dark:text-stone-400 max-w-2xl mx-auto mb-12 xl:mb-16">
          Let's create something that makes your team feel empowered and your competitors wonder how you did it.
        </p>
        <UButton to="/contact" size="lg"
          class="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 text-lg rounded-lg transition-all duration-300">
          Let's do this
          <UIcon name="i-heroicons-arrow-right" class="ml-2" />
        </UButton>
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
/* Standardized spacing classes */
.content-container {
  @apply px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 max-w-7xl mx-auto;
}

.section-spacing {
  @apply py-16 md:py-24 lg:py-32 xl:py-40;
}

.pb-section {
  @apply pb-16 md:pb-24 lg:pb-32 xl:pb-40;
}

.process-step-spacing {
  @apply mt-24 md:mt-32 lg:mt-40 xl:mt-48;
}

.section-title {
  @apply text-3xl md:text-4xl xl:text-5xl font-light text-stone-800 dark:text-stone-200;
}

.content-text {
  @apply text-base md:text-lg text-stone-700 dark:text-stone-400 leading-relaxed;
}

.content-spacing {
  @apply mb-6 md:mb-8;
}

/* Process step styling */
.process-step {
  @apply transition-all duration-700 opacity-0 translate-y-8 relative;
  transform: translateY(20px);
}

.process-step.active {
  @apply opacity-100 translate-y-0;
  transform: translateY(0);
}

/* Typography styling */
.hero-title {
  letter-spacing: -0.02em;
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.hero-subtitle {
  letter-spacing: 0.01em;
  animation: fadeInUp 1s ease-out 0.3s forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Text balance */
.text-balance {
  text-wrap: balance;
}

/* Scroll progress indicator */
.scroll-progress-container {
  @apply fixed top-0 left-0 w-full h-px bg-stone-200/30 dark:bg-stone-800/30 z-50;
}

.scroll-progress-bar {
  @apply h-full bg-primary-500/80 w-0 transition-all duration-100;
}

/* Beyond The Ordinary section styles */
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
  background: linear-gradient(90deg, transparent, rgba(var(--color-primary-500), 0.3), transparent);
}

.bg-stone-100.dark\:bg-stone-900::before {
  top: 0;
}

.bg-stone-100.dark\:bg-stone-900::after {
  bottom: 0;
}

/* Tufte-inspired data styling */
.data-metrics {
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}

/* Quote styling */
.quote-container {
  position: relative;
  padding-left: 1rem;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .process-step {
    @apply pt-0 pb-12;
    margin-bottom: 3rem !important;
  }
}

/* Prototype Loop Animation */
.prototype-loop-container {
  padding: 1rem 0;
  overflow: hidden;
  width: 100%;
  margin: 1rem 0;
  position: relative;
}

.prototype-loop-animation {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: max-content;
  animation: loopFlow 20s linear infinite;
}

.loop-item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.loop-node {
  @apply bg-primary-500/10 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-md font-medium;
  margin: 0 0.5rem;
  white-space: nowrap;
}

.loop-arrow {
  @apply text-primary-500 text-xl font-light;
  margin: 0 0.25rem;
}

/* The key to seamless looping is to ensure the animation moves exactly one complete cycle */
@keyframes loopFlow {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% / 3));
    /* Move exactly one complete cycle (since we have 3 identical cycles) */
  }
}

/* No override for wider screens - use the same infinite marquee on all devices */
@media (min-width: 768px) {
  .prototype-loop-container {
    max-width: 100%;
  }

  .prototype-loop-animation {
    animation-duration: 20s;
    /* Slower on desktop for better readability */
  }
}

/* Mobile optimization */
@media (max-width: 768px) {
  .prototype-loop-animation {
    animation-duration: 15s;
    /* Slightly faster on mobile */
  }
}

/* Loop section styling */
.loop-section {
  display: flex;
  flex-shrink: 0;
}
</style>
