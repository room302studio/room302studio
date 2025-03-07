<template>
  <main class="relative">
    <!-- Hero image with transition -->
    <div v-if="data?.image" class="w-full transition-all duration-500 ease-out relative"
      :class="{ 'h-[60vh] max-h-[700px]': isImageLoaded }">
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
              {{ data?.type || 'Internal Project' }}
            </p>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform transition-all duration-500"
          :class="{ 'opacity-0': isScrolled }">
          <!-- Animated scroll indicator -->
          <div class="flex flex-col items-center">
            <div class="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 
                        relative overflow-hidden">
              <div class="absolute inset-0 animate-scroll-pulse">
                <div class="w-full h-1/2 bg-gradient-to-b from-white/0 to-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fallback hero for projects without images -->
    <div v-else class="w-full h-[60vh] max-h-[700px] relative bg-gradient-to-br 
                      from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900">
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-0 left-0 w-96 h-96 rounded-full bg-stone-700 blur-3xl 
                    transform -translate-x-1/2 -translate-y-1/2">
        </div>
        <div class="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-stone-700 blur-3xl 
                    transform translate-x-1/2 translate-y-1/2">
        </div>
      </div>

      <div class="relative h-full flex items-center justify-center">
        <div class="text-center p-12">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8">
            {{ data?.title }}
          </h1>
          <p class="text-xl text-white/90 font-light tracking-wide">
            {{ data?.type || 'Internal Project' }}
          </p>
        </div>
      </div>

      <!-- Animated scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform transition-all duration-500">
        <div class="flex flex-col items-center">
          <div class="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 
                      relative overflow-hidden">
            <div class="absolute inset-0 animate-scroll-pulse">
              <div class="w-full h-1/2 bg-gradient-to-b from-white/0 to-white/30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content section -->
    <div class="pad" :class="{
      'opacity-0': data?.image && !isImageLoaded,
      'opacity-100': !data?.image || isImageLoaded
    }">
      <!-- Project metadata -->
      <div class="max-w-measure mx-auto">
        <div class="md:flex mt-12 mb-16 gap-12">
          <div class="mb-6 md:w-2/3">
            <h4 class="text-stone-400 uppercase font-medium mb-4 tracking-wider text-sm">
              Project Overview
            </h4>
            <p class="text-stone-700 dark:text-stone-300 text-xl md:text-2xl font-light leading-relaxed">
              {{ data?.description }}
            </p>
          </div>

          <div class="md:w-1/3 space-y-8">
            <div>
              <h4 class="text-stone-400 uppercase font-medium mb-2 tracking-wider text-sm">Technology</h4>
              <p class="monospace text-stone-700 dark:text-stone-300 leading-relaxed">
                {{ data?.technology }}
              </p>
            </div>

            <div>
              <h4 class="text-stone-400 uppercase font-medium mb-2 tracking-wider text-sm">Status</h4>
              <p class="monospace text-stone-700 dark:text-stone-300 leading-relaxed">
                {{ data?.status || 'In Development' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Main content -->
        <div class="prose dark:prose-invert prose-lg prose-stone mx-auto 
                    prose-headings:font-light prose-p:font-light
                    prose-a:text-primary-500 hover:prose-a:text-primary-400
                    prose-img:rounded-lg prose-img:shadow-lg">
          <ContentRenderer v-if="data" :value="data">
            <template #empty>
              <p>No content available for this project.</p>
            </template>
          </ContentRenderer>
        </div>
      </div>
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

const route = useRoute();
const isImageLoaded = ref(false)
const isScrolled = ref(false)

// Track scroll position
onMounted(() => {
  window.scrollTo(0, 0)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

const { data: internalWork } = await useAsyncData(
  "content/our-work/internal",
  () => queryContent("our-work/internal").find(),
);

const data = computed(() => {
  if (!internalWork.value) return;
  const slug = route.params.slug[0];
  const item = internalWork.value.find(
    (item) => item._path === `/our-work/internal/${slug}`,
  );
  return item;
});
</script>

<style scoped>
.pad {
  @apply px-6 md:px-12 lg:px-24;
}

@keyframes scroll-pulse {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
}

.animate-scroll-pulse {
  animation: scroll-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
