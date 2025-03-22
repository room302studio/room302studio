<template>
  <main class="toolkit-page min-h-screen overflow-x-hidden">
    <!-- Hero Section -->
    <section class="hero-section relative py-16 md:py-32 overflow-hidden">
      <div class="pad relative z-10">
        <h1 class="text-5xl md:text-7xl font-extralight mb-8 md:mb-12 tracking-tight text-balance">
          <span class="block">The Room 302 Toolkit:</span>
          <span class="text-primary-500 font-light">Visualization Instruments</span>
          <span class="block">for Complex Systems</span>
        </h1>
        <p
          class="text-lg md:text-2xl font-light max-w-3xl leading-relaxed text-balance text-stone-700 dark:text-stone-400">
          Crafted for those who navigate digital complexity. Each tool reveals patterns invisible to the naked eye.
        </p>
      </div>
      <!-- Subtle topographic background pattern -->
      <div class="absolute inset-0 bg-stone-100/50 dark:bg-stone-900/50 -z-10 opacity-70 topographic-pattern"></div>
    </section>

    <!-- Toolkit Navigation -->
    <div
      class="sticky top-0 z-50 bg-stone-100/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
      <div class="pad flex justify-between items-center py-4">
        <div class="flex space-x-6 toolkit-nav">
          <button v-for="(tool, index) in tools" :key="index"
            class="tool-nav-item flex items-center py-2 px-3 rounded-md transition-all duration-300 hover:bg-stone-200 dark:hover:bg-stone-800"
            :class="{ 'active-tool': activeToolIndex === index }" @click="scrollToTool(index)">
            <UIcon :name="tool.icon" class="mr-2 text-primary-500/70" />
            <span>{{ tool.name }}</span>
          </button>
        </div>
        <button
          class="methodology-btn flex items-center py-2 px-4 rounded-md transition-all duration-300 hover:bg-stone-200 dark:hover:bg-stone-800"
          @click="toggleMethodology">
          <UIcon name="i-heroicons-beaker" class="mr-2 text-primary-500/70" />
          <span>Methodology</span>
        </button>
      </div>
    </div>

    <!-- Workbench (Horizontal Scrolling Interface) -->
    <div class="workbench relative" ref="workbenchRef">
      <div class="workbench-inner flex snap-x snap-mandatory overflow-x-auto">
        <div v-for="(tool, index) in tools" :key="index" :id="`tool-${index}`"
          class="tool-workstation min-w-full w-full h-[80vh] snap-center flex flex-col justify-center">
          <div class="pad grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Tool Info -->
            <div class="tool-info space-y-8">
              <div class="tool-header">
                <div class="flex items-center mb-4">
                  <UIcon :name="tool.icon" class="text-3xl text-primary-500 mr-3" />
                  <h2 class="text-3xl md:text-4xl font-light">{{ tool.name }}</h2>
                </div>
                <p class="text-xl font-light text-stone-700 dark:text-stone-400">{{ tool.description }}</p>
              </div>

              <div class="capabilities">
                <h3 class="text-lg font-medium mb-4 text-stone-800 dark:text-stone-300">Capabilities</h3>
                <ul class="space-y-3">
                  <li v-for="(capability, i) in tool.capabilities" :key="i" class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span class="text-stone-700 dark:text-stone-400">{{ capability }}</span>
                  </li>
                </ul>
              </div>

              <div class="works-with" v-if="tool.worksWith && tool.worksWith.length > 0">
                <h3 class="text-lg font-medium mb-4 text-stone-800 dark:text-stone-300">Works With</h3>
                <div class="space-y-3">
                  <div v-for="(connection, i) in tool.worksWith" :key="i"
                    class="flex items-center p-3 bg-stone-100 dark:bg-stone-800/50 rounded-lg border border-stone-200 dark:border-stone-700 transition-all duration-300 hover:border-primary-500 cursor-pointer">
                    <UIcon :name="getToolByName(connection.name).icon" class="text-xl text-primary-500/70 mr-3" />
                    <div>
                      <div class="font-medium text-stone-800 dark:text-stone-300">{{ connection.name }}</div>
                      <div class="text-sm text-stone-600 dark:text-stone-500">{{ connection.description }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex space-x-4">
                <UButton color="primary"
                  class="px-6 py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md"
                  :to="`/tools/${tool.slug}`">
                  Explore {{ tool.name }}
                  <UIcon name="i-heroicons-arrow-right" class="ml-2" />
                </UButton>
                <UButton variant="ghost"
                  class="px-6 py-3 rounded-lg border border-stone-300 dark:border-stone-700 transition-all duration-300 hover:border-primary-500"
                  @click="openToolDemo(tool.slug)">
                  See in Action
                  <UIcon name="i-heroicons-play" class="ml-2" />
                </UButton>
              </div>

              <!-- Quick access links - New addition for enhanced CTA strategy -->
              <div
                class="mt-4 bg-stone-50 dark:bg-stone-900/50 p-4 rounded-lg border border-stone-200 dark:border-stone-800">
                <h4 class="text-sm font-medium text-stone-500 dark:text-stone-400 mb-2">Quick Access</h4>
                <div class="flex flex-wrap gap-2">
                  <UButton size="xs" variant="ghost" color="gray" :to="`/docs/${tool.slug}`"
                    class="text-xs flex items-center">
                    <UIcon name="i-heroicons-document-text" class="mr-1" />
                    Documentation
                  </UButton>
                  <UButton size="xs" variant="ghost" color="gray" :to="`/tutorials/${tool.slug}`"
                    class="text-xs flex items-center">
                    <UIcon name="i-heroicons-academic-cap" class="mr-1" />
                    Tutorials
                  </UButton>
                  <UButton size="xs" variant="ghost" color="gray" :to="`/pricing#${tool.slug}`"
                    class="text-xs flex items-center">
                    <UIcon name="i-heroicons-currency-dollar" class="mr-1" />
                    Pricing
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Tool Visualization -->
            <div
              class="tool-visualization relative bg-stone-100 dark:bg-stone-800 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-sm">
              <div class="aspect-video w-full h-full flex items-center justify-center visualization-container"
                :class="`tool-${index}-viz`">
                <!-- Tool specific visualization placeholder -->
                <div class="text-center p-8">
                  <div class="text-6xl text-primary-500/20 mb-4">
                    <UIcon :name="tool.icon" />
                  </div>
                  <p class="text-stone-500 dark:text-stone-400">Interactive visualization for {{ tool.name }}</p>
                  <p class="text-xs text-stone-400 dark:text-stone-500 mt-2">Hover to see tool in action</p>
                </div>
              </div>
              <!-- Contextual Help -->
              <button
                class="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-200/80 dark:bg-stone-700/80 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-primary-500/20 hover:text-primary-500 transition-all duration-300">
                <UIcon name="i-heroicons-question-mark-circle" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Use Case Ribbon -->
    <section class="use-case-ribbon py-20 bg-stone-100 dark:bg-stone-900">
      <div class="pad">
        <h2 class="text-3xl md:text-4xl font-light mb-12 text-center">Use Cases</h2>

        <div class="use-cases-container overflow-x-auto pb-8">
          <div class="flex space-x-8 min-w-max">
            <div v-for="(useCase, index) in useCases" :key="index"
              class="use-case-card bg-white dark:bg-stone-800 rounded-xl p-6 shadow-sm border border-stone-200 dark:border-stone-700 w-80 flex-shrink-0 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <h3 class="text-xl font-medium mb-3 text-stone-800 dark:text-stone-200">{{ useCase.title }}</h3>
              <p class="text-stone-600 dark:text-stone-400 text-sm mb-5">{{ useCase.description }}</p>
              <div
                class="bg-stone-100 dark:bg-stone-700 rounded-lg p-4 aspect-video mb-4 flex items-center justify-center">
                <span class="text-stone-400 dark:text-stone-500">Solution Visualization</span>
              </div>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tool, i) in useCase.tools" :key="i"
                  class="text-xs py-1 px-2 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                  {{ tool }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- New global CTA for the toolkit -->
        <div class="mt-16 text-center max-w-2xl mx-auto">
          <h3 class="text-2xl font-light mb-4">Ready to apply these tools to your challenges?</h3>
          <p class="text-stone-600 dark:text-stone-400 mb-8">
            Our toolkit is designed to work together seamlessly, revealing insights that would remain hidden using
            traditional methods.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton color="primary" size="lg" to="/contact" class="px-8">
              Schedule Consultation
              <UIcon name="i-heroicons-calendar" class="ml-2" />
            </UButton>
            <UButton variant="outline" size="lg" to="/pricing" class="px-8">
              View Pricing Options
              <UIcon name="i-heroicons-currency-dollar" class="ml-2" />
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodology Sidebar (Hidden by default) -->
    <aside
      class="methodology-sidebar fixed top-0 right-0 h-full w-80 bg-white dark:bg-stone-800 shadow-xl transform translate-x-full transition-transform duration-500 z-50 overflow-y-auto"
      :class="{ 'translate-x-0': methodologySidebarOpen }">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-medium">Our Methodology</h3>
          <button @click="toggleMethodology" class="text-stone-500 hover:text-stone-800 dark:hover:text-stone-200">
            <UIcon name="i-heroicons-x-mark" class="text-xl" />
          </button>
        </div>

        <div class="space-y-6">
          <p class="text-stone-700 dark:text-stone-400">
            The Room 302 approach to visualization is centered around revealing hidden patterns in complex systems.
            Our toolkit works together to provide a comprehensive view of your data landscape.
          </p>

          <div class="bg-stone-100 dark:bg-stone-700/50 rounded-lg p-4">
            <h4 class="text-lg font-medium mb-3">Data Flow Between Tools</h4>
            <div
              class="methodology-diagram h-64 bg-stone-200 dark:bg-stone-600 rounded-md flex items-center justify-center">
              <span class="text-stone-500 dark:text-stone-400">Interactive Diagram</span>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-medium mb-3">Core Principles</h4>
            <ul class="space-y-2 text-stone-700 dark:text-stone-400">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                <span>Reveal hidden patterns through visual transformation</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                <span>Connect disparate data sources for holistic understanding</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                <span>Prioritize human interpretability over algorithmic complexity</span>
              </li>
            </ul>
          </div>

          <!-- New CTA section in methodology sidebar -->
          <div class="mt-8 pt-6 border-t border-stone-200 dark:border-stone-700">
            <h4 class="text-lg font-medium mb-4">Ready to transform your data?</h4>
            <UButton color="primary" size="lg" block to="/contact" class="mb-3">
              Request Full Toolkit Demo
              <UIcon name="i-heroicons-presentation-chart-line" class="ml-2" />
            </UButton>
            <p class="text-sm text-stone-500 dark:text-stone-400 mt-2">
              Schedule a personalized walkthrough with our visualization experts.
            </p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Methodology Sidebar Overlay -->
    <div
      class="methodology-overlay fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-500"
      :class="{ 'opacity-100 pointer-events-auto': methodologySidebarOpen }" @click="toggleMethodology"></div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import anime from 'animejs';

// State
const workbenchRef = ref(null);
const activeToolIndex = ref(0);
const methodologySidebarOpen = ref(false);

// Tool data
const tools = ref([
  {
    name: 'Context Alchemy',
    slug: 'context-alchemy',
    description: 'Your AI\'s mixing board',
    icon: 'i-heroicons-beaker',
    capabilities: [
      'Reveal hidden biases in AI training data',
      'Fine-tune language model outputs with contextual adjustments',
      'Create balanced data representations for more equitable AI'
    ],
    worksWith: [
      { name: 'Connectology', description: 'Feeds processed context data for relationship mapping' },
      { name: 'Pattern Loom', description: 'Provides refined data for pattern recognition' }
    ]
  },
  {
    name: 'Connectology',
    slug: 'connectology',
    description: 'Map relationships across networks',
    icon: 'i-heroicons-globe-alt',
    capabilities: [
      'Visualize complex network relationships at multiple scales',
      'Identify key nodes and connection patterns in large datasets',
      'Export relationship data for further analysis'
    ],
    worksWith: [
      { name: 'Context Alchemy', description: 'Receives contextual data to enhance relationship mapping' },
      { name: 'Temporal Lens', description: 'Integrates time-based data for dynamic network analysis' }
    ]
  },
  {
    name: 'Pattern Loom',
    slug: 'pattern-loom',
    description: 'Weave meaning from disparate data sources',
    icon: 'i-heroicons-squares-2x2',
    capabilities: [
      'Discover recurring patterns across diverse datasets',
      'Generate visual representations of abstract patterns',
      'Identify anomalies and outliers in complex systems'
    ],
    worksWith: [
      { name: 'Context Alchemy', description: 'Uses contextual frameworks to enhance pattern detection' },
      { name: 'Temporal Lens', description: 'Incorporates time-series data for temporal pattern analysis' }
    ]
  },
  {
    name: 'Temporal Lens',
    slug: 'temporal-lens',
    description: 'See through time to track system evolution',
    icon: 'i-heroicons-clock',
    capabilities: [
      'Visualize system changes across multiple time scales',
      'Identify critical moments and inflection points',
      'Project future system states based on historical patterns'
    ],
    worksWith: [
      { name: 'Connectology', description: 'Provides temporal context to network relationships' },
      { name: 'Pattern Loom', description: 'Supplies time-based data for temporal pattern detection' }
    ]
  }
]);

// Use case data
const useCases = ref([
  {
    title: 'AI Bias Detection',
    description: 'Identifying and mitigating bias in large language models through visualization and context analysis.',
    tools: ['Context Alchemy', 'Pattern Loom']
  },
  {
    title: 'Social Network Analysis',
    description: 'Mapping complex social interactions and community formation across digital platforms.',
    tools: ['Connectology', 'Temporal Lens']
  },
  {
    title: 'Market Trend Forecasting',
    description: 'Predicting market movements by analyzing historical patterns and network effects.',
    tools: ['Pattern Loom', 'Temporal Lens', 'Connectology']
  },
  {
    title: 'Knowledge Graph Construction',
    description: 'Building comprehensive knowledge representations from unstructured data sources.',
    tools: ['Context Alchemy', 'Connectology']
  },
  {
    title: 'System Anomaly Detection',
    description: 'Identifying unusual patterns in complex systems that may indicate problems or opportunities.',
    tools: ['Pattern Loom', 'Temporal Lens']
  }
]);

// Utilities
const getToolByName = (name: string) => {
  return tools.value.find(tool => tool.name === name) || tools.value[0];
};

// Interactions
const scrollToTool = (index: number) => {
  const element = document.getElementById(`tool-${index}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    activeToolIndex.value = index;
  }
};

const toggleMethodology = () => {
  methodologySidebarOpen.value = !methodologySidebarOpen.value;
};

// Function to open tool demo modal or redirect to demo page
const openToolDemo = (toolSlug: string) => {
  // For MVP, we'll just log this - in a real implementation,
  // this would open a modal with an interactive demo or redirect to a demo page
  console.log(`Opening demo for ${toolSlug}`);

  // Here you would implement:
  // 1. A modal that shows a video or interactive demo
  // 2. Or navigate to a specific demo page: router.push(`/demos/${toolSlug}`);

  // For now, create an alert to show this is working
  alert(`Demo for ${toolSlug} would open here. In the full implementation, this would be an interactive demo.`);
};

// Intersection Observer to update active tool based on scroll position
onMounted(() => {
  // Initialize the workbench and tool visualizations
  initializeAnimations();

  // Initialize parallax effect
  initializeParallax();

  // Set up intersection observer for tool sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const index = parseInt(id.split('-')[1]);
        activeToolIndex.value = index;
      }
    });
  }, { threshold: 0.6 });

  // Observe all tool sections
  for (let i = 0; i < tools.value.length; i++) {
    const element = document.getElementById(`tool-${i}`);
    if (element) observer.observe(element);
  }
});

// Parallax effect for the workbench
function initializeParallax() {
  const workbench = workbenchRef.value as HTMLElement | null;
  if (!workbench) return;

  const parallaxItems = document.querySelectorAll('.tool-visualization');

  // Listen for scroll events on the workbench
  workbench.addEventListener('scroll', () => {
    const scrollPosition = workbench.scrollLeft;

    // Apply subtle parallax effect to visualizations
    parallaxItems.forEach((item, index) => {
      const offset = (scrollPosition * 0.1) - (index * workbench.clientWidth * 0.1);
      (item as HTMLElement).style.transform = `translateX(${offset * 0.2}px)`;
    });

    // Apply parallax to background
    const background = document.querySelector('.topographic-pattern') as HTMLElement;
    if (background) {
      background.style.transform = `translateX(${-scrollPosition * 0.05}px)`;
    }
  });
}

// Animation functions
function initializeAnimations() {
  // Initialize hover animations for tool visualizations
  document.querySelectorAll('.visualization-container').forEach((container, index) => {
    container.addEventListener('mouseenter', () => {
      animateToolVisualization(index);
    });
  });
}

function animateToolVisualization(index: number) {
  // Get the target container
  const container = document.querySelector(`.tool-${index}-viz`);
  if (!container) return;

  // Create different animations based on which tool is being animated
  switch (index) {
    case 0: // Context Alchemy
      // Create a mixing/blending animation
      anime({
        targets: container.querySelector('.text-6xl'),
        scale: [1, 1.1],
        opacity: [0.2, 0.8],
        duration: 800,
        easing: 'easeInOutQuad',
        direction: 'alternate'
      });

      // Add particles or wave effect
      const particleCount = 20;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.position = 'absolute';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = 'var(--color-primary-500)';
        particle.style.opacity = '0';
        container.appendChild(particle);

        anime({
          targets: particle,
          translateX: anime.random(-100, 100),
          translateY: anime.random(-100, 100),
          scale: [0, 1],
          opacity: [0, 0.3, 0],
          duration: anime.random(1000, 2000),
          delay: anime.random(0, 500),
          easing: 'easeOutExpo',
          complete: () => {
            container.removeChild(particle);
          }
        });
      }
      break;

    case 1: // Connectology
      // Create network connection animations
      anime({
        targets: container.querySelector('.text-6xl'),
        rotate: '1turn',
        duration: 1000,
        easing: 'easeInOutSine'
      });

      // Simulate network connections with lines
      const lineCount = 6;
      for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.classList.add('network-line');
        line.style.position = 'absolute';
        line.style.top = '50%';
        line.style.left = '50%';
        line.style.width = '0';
        line.style.height = '2px';
        line.style.transform = `rotate(${i * 60}deg)`;
        line.style.backgroundColor = 'var(--color-blue-500)';
        line.style.transformOrigin = '0 0';
        container.appendChild(line);

        anime({
          targets: line,
          width: [0, anime.random(60, 120)],
          opacity: [0, 0.6, 0],
          duration: 1200,
          delay: i * 100,
          easing: 'easeOutQuad',
          complete: () => {
            container.removeChild(line);
          }
        });
      }
      break;

    case 2: // Pattern Loom
      // Create pattern weaving animation
      const gridSize = 4;
      const patternContainer = document.createElement('div');
      patternContainer.classList.add('pattern-container');
      patternContainer.style.position = 'absolute';
      patternContainer.style.top = '50%';
      patternContainer.style.left = '50%';
      patternContainer.style.transform = 'translate(-50%, -50%)';
      patternContainer.style.display = 'grid';
      patternContainer.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`;
      patternContainer.style.gridTemplateRows = `repeat(${gridSize}, 20px)`;
      patternContainer.style.gap = '8px';
      container.appendChild(patternContainer);

      // Add grid items
      for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.style.width = '20px';
        cell.style.height = '20px';
        cell.style.backgroundColor = 'var(--color-amber-500)';
        cell.style.opacity = '0';
        cell.style.borderRadius = '2px';
        patternContainer.appendChild(cell);

        anime({
          targets: cell,
          opacity: [0, 0.7],
          scale: [0.6, 1],
          delay: i * 50,
          duration: 600,
          easing: 'easeOutQuad',
          complete: function () {
            anime({
              targets: cell,
              opacity: 0,
              scale: 0.6,
              delay: 800,
              duration: 400,
              easing: 'easeInQuad',
              complete: () => {
                // Clean up after animation
                if (i === gridSize * gridSize - 1) {
                  container.removeChild(patternContainer);
                }
              }
            });
          }
        });
      }
      break;

    case 3: // Temporal Lens
      // Create time-based animation
      anime({
        targets: container.querySelector('.text-6xl'),
        opacity: [0.2, 1],
        duration: 1000,
        easing: 'easeInOutSine'
      });

      // Create timeline effect
      const timelineContainer = document.createElement('div');
      timelineContainer.classList.add('timeline-container');
      timelineContainer.style.position = 'absolute';
      timelineContainer.style.bottom = '30%';
      timelineContainer.style.left = '10%';
      timelineContainer.style.right = '10%';
      timelineContainer.style.height = '3px';
      timelineContainer.style.backgroundColor = 'var(--color-emerald-500)';
      timelineContainer.style.opacity = '0';
      container.appendChild(timelineContainer);

      // Create timeline markers
      const markerCount = 5;
      const markers: HTMLDivElement[] = [];
      for (let i = 0; i < markerCount; i++) {
        const marker = document.createElement('div');
        marker.style.position = 'absolute';
        marker.style.width = '12px';
        marker.style.height = '12px';
        marker.style.borderRadius = '50%';
        marker.style.backgroundColor = 'var(--color-emerald-500)';
        marker.style.top = '-5px';
        marker.style.left = `${i * 25}%`;
        marker.style.opacity = '0';
        timelineContainer.appendChild(marker);
        markers.push(marker);
      }

      // Animate timeline
      anime({
        targets: timelineContainer,
        opacity: [0, 0.7],
        duration: 600,
        easing: 'easeOutQuad'
      });

      // Animate markers
      anime({
        targets: markers,
        opacity: [0, 1],
        scale: [0, 1],
        delay: anime.stagger(200),
        duration: 600,
        easing: 'easeOutQuad',
        complete: function () {
          anime({
            targets: [timelineContainer, ...markers],
            opacity: 0,
            delay: 1000,
            duration: 800,
            easing: 'easeInQuad',
            complete: () => {
              container.removeChild(timelineContainer);
            }
          });
        }
      });
      break;

    default:
      console.log(`No specific animation for tool ${index}`);
  }
}

// SEO
useHead({
  title: "The Room 302 Toolkit: Visualization Instruments for Complex Systems",
  meta: [
    { name: 'description', content: 'Crafted visualization tools for navigating complex systems. Reveal patterns invisible to the naked eye.' }
  ]
})
</script>

<style scoped>
/* Topographic pattern background */
.topographic-pattern {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 800 800"><g fill="none" stroke-opacity="0.05" stroke-width="2"><path d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63" stroke="rgb(0, 112, 150)"/><path d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764" stroke="rgb(0, 112, 150)"/><path d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880" stroke="rgb(0, 112, 150)"/></g></svg>');
  filter: invert(80%) sepia(9%) saturate(378%) hue-rotate(314deg) brightness(89%) contrast(89%);
}

.dark .topographic-pattern {
  filter: invert(20%) sepia(9%) saturate(378%) hue-rotate(314deg) brightness(89%) contrast(89%);
}

/* Workbench scrolling */
.workbench-inner {
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.workbench-inner::-webkit-scrollbar {
  display: none;
}

/* Active tool indicator */
.active-tool {
  color: var(--color-primary-500);
  background-color: rgba(var(--color-primary-500), 0.1);
}

/* Use case ribbon */
.use-cases-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.use-cases-container::-webkit-scrollbar {
  display: none;
}

/* Tool-specific visualization styles */
.tool-0-viz {
  background: linear-gradient(135deg, rgba(var(--color-primary-500), 0.05), rgba(var(--color-primary-500), 0.1));
}

.tool-1-viz {
  background: linear-gradient(135deg, rgba(var(--color-blue-500), 0.05), rgba(var(--color-blue-500), 0.1));
}

.tool-2-viz {
  background: linear-gradient(135deg, rgba(var(--color-amber-500), 0.05), rgba(var(--color-amber-500), 0.1));
}

.tool-3-viz {
  background: linear-gradient(135deg, rgba(var(--color-emerald-500), 0.05), rgba(var(--color-emerald-500), 0.1));
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.pad {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 768px) {
  .pad {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

@media (min-width: 1024px) {
  .pad {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .toolkit-nav {
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .toolkit-nav::-webkit-scrollbar {
    display: none;
  }

  .tool-workstation {
    height: auto;
    min-height: 90vh;
  }

  .methodology-sidebar {
    width: 100%;
  }
}
</style>