<template>
  <div class="min-h-screen relative">
    <!-- Floating project stickers that overlap sections -->
    <div class="relative z-30">
      <div class="absolute inset-0 pointer-events-none">
        <div v-for="(project, index) in allProjects.slice(0, 8)" :key="'sticker-' + project._path" :class="[
          'absolute pointer-events-auto',
          hoverSticker === project._path ? 'scale-110 z-40' : 'z-30'
        ]" :style="`${stickerPositions[index % stickerPositions.length]}`" @mouseenter="hoverSticker = project._path"
          @mouseleave="hoverSticker = null">
          <div class="relative group">
            <NuxtLink :to="project._path"
              class="relative block rounded-full overflow-hidden bg-white dark:bg-stone-800 shadow-lg hover:shadow-xl transform transition-all duration-300 border-2 border-white dark:border-stone-700 hover:scale-110"
              :style="`width: ${stickerSizes[index % stickerSizes.length]}px; height: ${stickerSizes[index % stickerSizes.length]}px;`">
              <div class="absolute inset-0 bg-noise opacity-10"></div>
              <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
              <div v-else class="w-full h-full flex items-center justify-center bg-primary-100 dark:bg-primary-900/30">
                <span class="text-xs font-bold text-primary-600 dark:text-primary-400">{{ project.title.substring(0, 2)
                  }}</span>
              </div>
            </NuxtLink>

            <!-- Hover tooltip that fades in below the circle -->
            <div
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-white dark:bg-stone-800 rounded-md shadow-lg text-xs text-center font-medium text-stone-700 dark:text-stone-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {{ project.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero section -->
    <section class="py-24 md:py-40 relative overflow-hidden">
      <!-- Subtle noise texture overlay -->
      <div class="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>

      <div class="pad relative z-10">
        <h1 class="text-7xl md:text-9xl font-extralight tracking-tight hero-title relative">
          <span class="block overflow-hidden leading-none">
            Our Work
            <span class="absolute -bottom-3 left-0 w-16 h-1 bg-primary-500"></span>
          </span>
        </h1>

        <div class="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 hero-subtitle">
          <!-- Left column with main text -->
          <p class="text-xl md:text-2xl font-light max-w-lg md:max-w-2xl leading-relaxed">
            Selected projects from our portfolio for creative coding, data visualization, and interactive digital
            experiences.
          </p>

          <!-- Right column with the "secret" note -->
          <p
            class="text-base md:text-lg text-stone-500 dark:text-stone-400 italic max-w-xs pl-0 md:pl-4 md:border-l md:border-stone-200 dark:md:border-stone-700">
            This is just the stuff we're allowed to show you.
          </p>
        </div>
      </div>

      <!-- Subtle grid pattern -->
      <div class="absolute inset-0 bg-grid opacity-5 dark:opacity-10 -z-5"></div>
    </section>

    <!-- Client Work Section with enhanced card design -->
    <section class="pad py-20 md:py-32 relative">
      <h2 class="text-5xl md:text-6xl font-extralight mb-16 md:mb-24 section-title relative inline-block">
        Client Work
        <span class="absolute -bottom-3 left-0 w-12 h-0.5 bg-primary-500/70"></span>
      </h2>

      <div class="grid grid-cols-1 gap-20 md:gap-32">
        <div v-for="project in clientWork" :key="project.title" class="group relative">
          <!-- Card container with image and hover effects -->
          <div
            class="relative rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02] shadow-lg hover:shadow-xl">
            <!-- Project image with gradient overlay -->
            <NuxtLink :to="project._path" class="block relative">
              <div class="aspect-[16/9] relative">
                <img :src="project.image" :alt="project.title"
                  class="object-cover w-full h-full transition-all duration-1000 group-hover:scale-105 brightness-[0.85] group-hover:brightness-100" />

                <!-- Enhanced gradient overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t 
                      from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />

                <!-- Side accent line -->
                <div class="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary-500 transform origin-bottom 
                      scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"></div>

                <!-- Minimal Project Info on image -->
                <div class="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div class="transform transition-all duration-500 group-hover:translate-x-2">
                    <div class="overflow-hidden mb-2">
                      <h3
                        class="text-3xl md:text-4xl font-light text-white drop-shadow-lg transform transition-all duration-700">
                        {{ project.title }}
                      </h3>
                    </div>

                    <div class="overflow-hidden">
                      <p class="text-sm md:text-base text-white/90 font-light drop-shadow-md tracking-wide">
                        {{ project.client }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>

            <!-- Project details below the image -->
            <div class="p-6 md:p-8 bg-white dark:bg-stone-800 border-t border-stone-100 dark:border-stone-700">
              <div class="mb-4">
                <div class="text-sm text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
                  {{ project.role }}
                </div>

                <p class="text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                  {{ project.description || 'A visual exploration of data and interactive storytelling.' }}
                </p>
              </div>

              <NuxtLink :to="project._path"
                class="inline-flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors mt-2">
                View Project
                <UIcon name="i-heroicons-arrow-right"
                  class="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Internal Projects Section with improved card design -->
    <section class="pad py-20 md:py-32 relative bg-stone-100 dark:bg-stone-900/50">
      <h2 class="text-5xl md:text-6xl font-extralight mb-16 md:mb-24 section-title relative inline-block">
        Internal Projects
        <span class="absolute -bottom-3 left-0 w-12 h-0.5 bg-primary-500/70"></span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div v-for="project in internalWork" :key="project.title" class="group relative bg-white dark:bg-stone-800 rounded-xl md:rounded-2xl p-8 md:p-10
            transform transition-all duration-500 hover:scale-[1.02]
            hover:shadow-2xl hover:shadow-stone-950/10">
          <NuxtLink :to="project._path" class="block">
            <!-- Project image with enhanced hover effects -->
            <div v-if="project.image" class="aspect-[16/9] mb-8 overflow-hidden rounded-xl">
              <img :src="project.image" :alt="project.title" class="object-cover w-full h-full transition-all duration-700 group-hover:scale-105 
                  brightness-95 group-hover:brightness-100" />
            </div>

            <!-- Enhanced fallback design when no image -->
            <div v-else class="aspect-[16/9] mb-8 rounded-xl bg-gradient-to-br 
                        from-stone-200 to-stone-100 dark:from-stone-700 dark:to-stone-800
                        flex items-center justify-center overflow-hidden">
              <div class="relative w-full h-full p-10 flex items-center justify-center">
                <!-- Abstract decorative elements with subtle animation -->
                <div class="absolute inset-0 opacity-20">
                  <div class="absolute top-0 left-0 w-48 h-48 rounded-full bg-primary-500 transform -translate-x-16 -translate-y-16
                    animate-pulse-slow">
                  </div>
                  <div class="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary-500 transform translate-x-24 translate-y-24
                    animate-pulse-slower">
                  </div>
                </div>

                <!-- Project type indicator with improved styling -->
                <span class="text-base uppercase tracking-widest text-stone-600 dark:text-stone-400 font-light
                  px-4 py-2 border border-stone-300 dark:border-stone-600 rounded-md">
                  {{ project.type || 'Internal Project' }}
                </span>
              </div>
            </div>

            <!-- Project info with better hierarchy -->
            <div class="transform transition-all duration-500 group-hover:translate-x-2">
              <h3 class="text-2xl md:text-3xl font-light mb-4 text-stone-800 dark:text-stone-200 
                  group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-stone-600 dark:text-stone-400 text-base leading-relaxed mb-8">
                {{ project.description }}
              </p>

              <!-- Enhanced button with animation -->
              <UButton color="primary" variant="ghost"
                class="text-base group-hover:translate-x-2 transition-all duration-500 
                  border-stone-300 dark:border-stone-700 group-hover:border-primary-500 dark:group-hover:border-primary-500">
                View Project
                <UIcon name="i-heroicons-arrow-right"
                  class="ml-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1" />
              </UButton>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Subtle footer indicator -->
    <div class="w-full h-20 bg-gradient-to-t from-stone-200/50 dark:from-stone-950/50 to-transparent"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from 'vue'

const categories = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "Environment & Climate",
    slug: "environment",
  },
  {
    name: "News Organizations",
    slug: "news",
  },
  {
    name: "Nonprofits",
    slug: "nonprofits",
  },
  {
    name: "AI",
    slug: "ai",
  },
];

const activeWorkFilter = ref("all");

const filteredWork = ref([]);
const filterWorkTo = (category) => {
  activeWorkFilter.value = category;
  filteredWork.value = internalWork.filter((project) => {
    return project.categories.includes(category);
  });
};

watch(activeWorkFilter, (newVal) => {
  if (newVal === "all") {
    filteredWork.value = internalWork;
  } else {
    filteredWork.value = internalWork.filter((project) => {
      return project.categories.includes(newVal);
    });
  }
});

// use the default layout
definePageMeta({
  layout: "default",
  scrollToTop: true
});

const { data: clientWork } = await useAsyncData(
  "content/our-work/client-work",
  () => queryContent("our-work/client-work").find(),
);

const { data: internalWork } = await useAsyncData(
  "content/our-work/internal-work",
  () => queryContent("our-work/internal").find(),
);

// Reference to the currently hovered sticker
const hoverSticker = ref(null);

// Combine all projects for the sticker display
const allProjects = computed(() => {
  return [...clientWork.value || [], ...internalWork.value || []];
});

// Static elegant positions for stickers
const stickerPositions = [
  'top: 70px; right: 15%;',
  'top: 160px; left: 8%;',
  'top: 40px; left: 32%;',
  'top: 220px; right: 32%;',
  'top: -30px; left: 20%;',
  'top: 300px; right: 25%;',
  'top: 180px; left: 42%;',
  'top: 360px; right: 12%;'
];

// Different sticker sizes for visual hierarchy
const stickerSizes = [60, 50, 55, 45, 65, 55, 48, 52];

onMounted(() => {
  // Improved animation sequencing for elements
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const sectionTitles = document.querySelectorAll('.section-title');

  if (heroTitle) {
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';
  }

  if (heroSubtitle) {
    setTimeout(() => {
      heroSubtitle.style.opacity = '1';
      heroSubtitle.style.transform = 'translateY(0)';
    }, 200);
  }

  sectionTitles.forEach((title, index) => {
    setTimeout(() => {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }, 300 + (index * 100));
  });
});
</script>

<style scoped>
.pad {
  @apply px-6 md:px-12 lg:px-24 xl:px-32;
}

/* Grid background */
.bg-grid {
  background-image: linear-gradient(to right, rgba(100, 100, 100, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Noise texture */
.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}

/* Animated elements */
.hero-title,
.hero-subtitle,
.section-title {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* Sticker hover effects */
.absolute.pointer-events-auto:hover {
  z-index: 40 !important;
}

/* Animations */
@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.3;
  }
}

@keyframes pulse-slower {

  0%,
  100% {
    opacity: 0.15;
  }

  50% {
    opacity: 0.25;
  }
}

/* Subtle page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Enhance group hover effects */
.group {
  @apply transition-all duration-500;
}
</style>
