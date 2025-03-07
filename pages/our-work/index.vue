<template>
  <div class="min-h-screen relative">
    <!-- Hero section with subtle animation -->
    <section class="py-20 md:py-36 relative overflow-hidden">
      <div class="pad relative z-10">
        <h1 class="text-7xl md:text-9xl font-extralight mb-10 md:mb-16 tracking-tight hero-title">
          Our Work
        </h1>
        <p class="text-xl md:text-2xl font-light max-w-3xl leading-relaxed text-balance relative hero-subtitle">
          We create <span class="text-primary-500 font-medium">transformative solutions</span> that push boundaries.
          <span class="block mt-4 text-stone-500 text-lg md:text-xl">This is just the stuff we're allowed to show
            you.</span>
        </p>
      </div>
      <!-- Enhanced ambient background element -->
      <div class="absolute inset-0 bg-gradient-to-br from-stone-100/50 to-transparent dark:from-stone-950/50 
           backdrop-blur-3xl -z-10 opacity-60" />
    </section>

    <!-- Client Work Section -->
    <section class="pad py-16 md:py-32 relative">
      <h2 class="text-5xl md:text-6xl font-extralight mb-12 md:mb-20 section-title">Client Work</h2>

      <div class="grid grid-cols-1 gap-16 md:gap-24">
        <div v-for="project in clientWork" :key="project.title" class="group relative">
          <NuxtLink :to="project._path" class="block relative rounded-xl md:rounded-2xl overflow-hidden transform 
                          transition-all duration-500 hover:scale-[1.02]">
            <!-- Larger Project Image -->
            <div class="aspect-[16/9] relative">
              <img :src="project.image" :alt="project.title"
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t 
                          from-black/80 via-black/40 to-transparent" />
            </div>

            <!-- Enhanced Project Info -->
            <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 class="text-2xl md:text-4xl font-light text-white mb-3 drop-shadow-lg">
                {{ project.title }}
              </h3>
              <p class="text-sm md:text-base text-white/90 font-light mb-2 drop-shadow-md tracking-wide">
                {{ project.client }}
              </p>
              <p class="text-sm md:text-base text-white/80 font-light drop-shadow-md tracking-wide">
                {{ project.role }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Internal Projects Section -->
    <section class="pad py-16 md:py-32 relative bg-stone-100 dark:bg-stone-900/50">
      <h2 class="text-5xl md:text-6xl font-extralight mb-12 md:mb-20 section-title">Internal Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div v-for="project in internalWork" :key="project.title" class="group relative bg-white dark:bg-stone-800 rounded-xl md:rounded-2xl p-8 md:p-10
                    transform transition-all duration-500 hover:scale-[1.02]
                    hover:shadow-2xl hover:shadow-stone-950/10">
          <NuxtLink :to="project._path" class="block">
            <!-- Larger image container with fallback -->
            <div v-if="project.image" class="aspect-[16/9] mb-8 overflow-hidden rounded-xl">
              <img :src="project.image" :alt="project.title"
                class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
            </div>

            <!-- Enhanced fallback design when no image -->
            <div v-else class="aspect-[16/9] mb-8 rounded-xl bg-gradient-to-br 
                        from-stone-200 to-stone-100 dark:from-stone-700 dark:to-stone-800
                        flex items-center justify-center overflow-hidden">
              <div class="relative w-full h-full p-10 flex items-center justify-center">
                <!-- Abstract decorative elements -->
                <div class="absolute inset-0 opacity-10">
                  <div
                    class="absolute top-0 left-0 w-48 h-48 rounded-full bg-primary-500 transform -translate-x-16 -translate-y-16">
                  </div>
                  <div
                    class="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary-500 transform translate-x-24 translate-y-24">
                  </div>
                </div>

                <!-- Project type or category indicator -->
                <span class="text-base uppercase tracking-wider text-stone-600 dark:text-stone-400 font-light">
                  {{ project.type || 'Internal Project' }}
                </span>
              </div>
            </div>

            <h3 class="text-2xl md:text-3xl font-light mb-4">{{ project.title }}</h3>
            <p class="text-stone-600 dark:text-stone-400 text-base leading-relaxed mb-8">
              {{ project.description }}
            </p>

            <UButton color="gray" variant="ghost" class="text-base group-hover:translate-x-2 transition-transform">
              View Project →
            </UButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

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

onMounted(() => {
  // Make all elements visible immediately
  document.querySelectorAll('.hero-title, .hero-subtitle, .section-title').forEach(el => {
    if (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    }
  });
});
</script>

<style scoped>
.pad {
  @apply px-6 md:px-12 lg:px-24 xl:px-32;
}

/* Make all elements visible by default */
.hero-title,
.hero-subtitle,
.section-title {
  opacity: 1 !important;
  transform: none !important;
}

/* Smooth hover transitions */
.group {
  @apply transition-all duration-500;
}

/* Subtle animation for images */
img {
  @apply transition-all duration-700;
}

/* Enhance text readability */
p {
  @apply tracking-wide;
}

/* Subtle page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
