<template>
  <div class="min-h-screen relative">
    <!-- Hero section with subtle animation -->
    <section class="py-16 md:py-32 relative overflow-hidden">
      <div class="pad relative z-10">
        <h1 class="text-6xl md:text-8xl font-extralight mb-8 md:mb-12 tracking-tight">
          Our Work
        </h1>
        <p class="text-lg md:text-xl font-light max-w-2xl leading-relaxed text-balance relative">
          At Room 302 Studio, our work is all about innovation with impact. Whether
          we're collaborating with mission-driven clients or building our own
          open-source platforms, each project is a step towards a better future.
          <span class="text-stone-500">This is just the stuff we are allowed to show you.</span>
        </p>
      </div>
      <!-- Ambient background element -->
      <div class="absolute inset-0 bg-gradient-to-br from-stone-100/50 to-transparent dark:from-stone-950/50 
           backdrop-blur-3xl -z-10 opacity-60" />
    </section>

    <!-- Client Work Section -->
    <section class="pad py-12 md:py-24 relative">
      <h2 class="text-4xl md:text-5xl font-extralight mb-8 md:mb-16">Client Work</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <div v-for="project in clientWork" :key="project.title" class="group relative">
          <NuxtLink :to="project._path" class="block relative rounded-lg md:rounded-xl overflow-hidden transform 
                          transition-all duration-500 hover:scale-[1.02]">
            <!-- Project Image -->
            <div class="aspect-[3/2] md:aspect-[4/3] relative">
              <img :src="project.image" :alt="project.title"
                class="object-cover w-full h-full transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t 
                          from-black/90 via-black/50 to-transparent" />
            </div>

            <!-- Project Info -->
            <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 class="text-xl md:text-2xl font-light text-white mb-2 drop-shadow-lg">
                {{ project.title }}
              </h3>
              <p class="text-xs md:text-sm text-white/90 font-light mb-1 drop-shadow-md tracking-wide">
                {{ project.client }}
              </p>
              <p class="text-xs md:text-sm text-white/80 font-light drop-shadow-md tracking-wide">
                {{ project.role }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Internal Projects Section -->
    <section class="pad py-12 md:py-24 relative bg-stone-100 dark:bg-stone-900/50">
      <h2 class="text-4xl md:text-5xl font-extralight mb-8 md:mb-16">Internal Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <div v-for="project in internalWork" :key="project.title" class="group relative bg-white dark:bg-stone-800 rounded-lg md:rounded-xl p-6 md:p-8
                    transform transition-all duration-500 hover:scale-[1.02]
                    hover:shadow-2xl hover:shadow-stone-950/10">
          <NuxtLink :to="project._path" class="block">
            <!-- Image container with fallback -->
            <div v-if="project.image" class="aspect-[16/9] mb-6 overflow-hidden rounded-lg">
              <img :src="project.image" :alt="project.title" class="object-cover w-full h-full" />
            </div>

            <!-- Fallback design when no image -->
            <div v-else
              class="aspect-[16/9] mb-6 rounded-lg bg-gradient-to-br 
                        from-stone-200 to-stone-100 dark:from-stone-700 dark:to-stone-800
                        flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
              <div class="relative w-full h-full p-8 flex items-center justify-center">
                <!-- Abstract decorative elements -->
                <div class="absolute inset-0 opacity-10">
                  <div
                    class="absolute top-0 left-0 w-32 h-32 rounded-full bg-current transform -translate-x-16 -translate-y-16">
                  </div>
                  <div
                    class="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-current transform translate-x-24 translate-y-24">
                  </div>
                </div>

                <!-- Project type or category indicator -->
                <span class="text-sm uppercase tracking-wider text-stone-600 dark:text-stone-400 font-light">
                  {{ project.type || 'Internal Project' }}
                </span>
              </div>
            </div>

            <h3 class="text-2xl font-light mb-3">{{ project.title }}</h3>
            <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6">
              {{ project.description }}
            </p>

            <UButton color="gray" variant="ghost" class="group-hover:translate-x-2 transition-transform">
              View Project →
            </UButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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
</script>

<style scoped>
.pad {
  @apply px-6 md:px-12 lg:px-24;
}
</style>
