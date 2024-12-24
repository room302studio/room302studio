<template>
  <main class="relative">
    <!-- Hero image with transition -->
    <div v-if="data?.image" class="w-full transition-all duration-500 ease-out relative"
      :class="{ 'h-[85vh]': isImageLoaded }">
      <div class="relative w-full h-full">
        <img :src="data.image" @load="isImageLoaded = true" alt=""
          class="w-full h-full object-cover transition-all duration-500" :class="{
            'opacity-0': !isImageLoaded,
            'opacity-100': isImageLoaded,
            'rounded-lg': !isScrolled,
            'rounded-none': isScrolled
          }" />

        <!-- Gradient overlay that fades out on scroll -->
        <div class="absolute inset-0 bg-gradient-to-t 
                    from-black/90 via-black/50 to-transparent
                    transition-opacity duration-500" :class="{ 'opacity-0': isScrolled }">

          <!-- Hero text that fades out on scroll -->
          <div class="absolute bottom-12 md:bottom-24 left-0 right-0 p-12 md:px-24
                      transform transition-all duration-500" :class="{
                        'opacity-100 translate-y-0': !isScrolled,
                        'opacity-0 translate-y-8': isScrolled
                      }">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 drop-shadow-lg max-w-4xl">
              {{ data?.title }}
            </h1>
            <p class="text-xl text-white/90 font-light drop-shadow-md tracking-wide">
              {{ data?.client }}
            </p>
          </div>
        </div>

        <!-- Scroll indicator moved up slightly -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2
                    transform transition-all duration-500" :class="{ 'opacity-0': isScrolled }">
          <div class="flex flex-col items-center text-white/70">
            <span class="text-sm uppercase tracking-widest mb-2">Scroll</span>
            <div class="w-px h-8 bg-white/30"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rest of the content -->
    <div class="pad mt-12" :class="{ 'opacity-0': !isImageLoaded, 'opacity-100': isImageLoaded }">
      <!-- project metadata -->
      <div class="md:flex mt-4 mb-8">
        <div class="mb-6 md:w-1/2">
          <h4 class="text-gray-400 uppercase font-medium">
            Project Brief
          </h4>
          <p class="tracking-tight text-gray-700 dark:text-gray-300 pt-0 mt-0 pr-2 lg:pr-8 md:text-2xl leading-relaxed">
            {{ data?.description }}
          </p>
        </div>

        <div class="md:w-1/2 md:flex">
          <div class="mb-6 w-1/3">
            <h4 class="text-gray-400 uppercase font-medium">Client</h4>
            <p class="monospace tracking-tight text-gray-700 dark:text-gray-300 pt-0 mt-0 pr-2">
              {{ data?.client }}
            </p>
          </div>

          <div class="mb-6 md:w-1/3">
            <h4 class="text-gray-400 uppercase font-medium">Services</h4>
            <p class="monospace tracking-tight text-gray-700 dark:text-gray-300 pt-0 mt-0 pr-2">
              {{ data?.role }}
            </p>
          </div>

          <div class="mb-6 md:w-1/3">
            <h4 class="text-gray-400 uppercase font-medium">
              Technology
            </h4>
            <p class="monospace tracking-tight text-gray-700 dark:text-gray-300 pt-0 mt-0 pr-2">
              {{ data?.technology }}
            </p>
          </div>
        </div>
      </div>

      <div class="pt-8 prose dark:prose-invert">
        <ContentRenderer :value="data">
          <template #empty>
            <div>
              <p>We couldn't find this blog post.</p>

              <UButton to="/" class="mt-4"> Back home </UButton>
            </div>
          </template>
        </ContentRenderer>
      </div>

      <!-- make a related work section (just 3 random client works -->
      <section class="w-full">
        <UDivider class="my-8 md:my-12 lg:my-24" />
        <h4 class="my-8">Related Work</h4>
        <!-- make 3x3 grid of the projects in cards -->
        <div class="projects md:grid md:grid-cols-2 gap-4 lg:gap-8">
          <div v-for="project in clientWork" :key="project.title" :project="project"
            class="hover:shadow-lg transition-all flex rounded-lg bg-stone-100 text-stone-700 min-h-32 mb-6 md:mb-0">
            <div class="flex-1 min-w-24" v-if="project.image">
              <!-- Assuming you have an image url 'backgroundUrl' -->
              <div class="h-full bg-cover bg-center" :style="{ backgroundImage: `url(${project.image})` }"></div>
            </div>

            <div class="flex-1 p-4 text-2xl leading-relaxed flex flex-row items-center">
              <NuxtLink :to="project._path" class="tracking-wide leading-snug no-underline">
                {{ project.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "work",
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    onBeforeEnter: () => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    }
  },
  scrollToTop: true
});

const isImageLoaded = ref(false)
const isScrolled = ref(false)

// Track scroll position
onMounted(() => {
  // Force scroll to top immediately
  window.scrollTo(0, 0)

  // Then set up scroll handler
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)

  // Clean up
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

// Use router navigation guards as well
const router = useRouter()
router.beforeEach((to, from, next) => {
  if (to.path.includes('/our-work/client-work/')) {
    window.scrollTo(0, 0)
  }
  next()
})

const route = useRoute();

// const { data } = await useAsyncData(async () => {
//   return queryContent("our-work/client-work", route.params.slug[0]).findOne();
// });

const { data: clientWork } = await useAsyncData(
  "content/our-work/client-work",
  () => queryContent("our-work/client-work").find(),
);

const { data: internalWork } = await useAsyncData(
  "content/our-work/internal-work",
  () => queryContent("our-work/internal").find(),
);

// make data a computed where we find the right client work item
const data = computed(() => {
  if (!clientWork.value) return;
  const slug = route.params.slug[0];
  const item = clientWork.value.find(
    (item) => item._path === `/our-work/client-work/${slug}`,
  );
  return item;
});
</script>

<style scoped>
.pad {
  @apply px-6 md:px-12 lg:px-24;
}

/* Page Transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
