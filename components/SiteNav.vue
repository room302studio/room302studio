<template>
  <div id="site-nav" class="text-center w-full align-middle justify-between z-10 tracking-wider">
    <div class="flex md:space-x-16 lg:space-x-24 items-center justify-center p-8 md:p-12 lg:px-32">
      <Logo class="text-center max-w-24 md:w-16 md:h-16 lg:h-24 lg:w-24" />

      <!-- Hamburger menu -->
      <div @click="isOpen = !isOpen" class="absolute left-8 md:hidden">
        <UIcon name="i-heroicons-queue-list-16-solid" class="text-primary-500 w-12 h-12" />
      </div>

      <!-- Desktop menu - super simplified -->
      <ul class="hidden md:flex md:space-x-12 lg:space-x-16 uppercase my-4 md:my-0">
        <li>
          <NuxtLink to="/" :class="linkClasses" :active-class="activeClasses">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/our-work" :class="linkClasses" :active-class="activeClasses">Work</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" :class="linkClasses" :active-class="activeClasses">Blog</NuxtLink>
        </li>
      </ul>

      <div class="hidden md:block absolute right-8 lg:right-32">
        <UButton to="/contact" class="text-lg leading-none px-4 py-2 tracking-wide font-mono">
          <span class="hidden lg:inline">Contact Us</span>
          <UIcon name="i-heroicons-envelope-16-solid" class="lg:hidden w-6 h-6" />
        </UButton>
      </div>
    </div>

    <!-- Mobile menu - super simplified -->
    <transition name="fade">
      <div v-show="isOpen" class="bg-gray-900/95 backdrop-blur-lg min-h-screen fixed top-0 left-0 w-full z-20">
        <div class="flex justify-between items-center py-8 px-8">
          <Logo class="text-center max-w-20 h-16 w-16" />

          <!-- Close button -->
          <div @click="isOpen = !isOpen" class="bloc md:hidden">
            <UIcon name="i-heroicons-x-mark-16-solid" class="text-primary-500 w-10 h-10" />
          </div>
        </div>
        <ul class="md:hidden flex flex-col items-center justify-center min-h-[70vh] space-y-8">
          <li>
            <NuxtLink to="/" :class="mobileLinkClasses" :active-class="mobileActiveClasses">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/our-work" :class="mobileLinkClasses" :active-class="mobileActiveClasses">Work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" :class="mobileLinkClasses" :active-class="mobileActiveClasses">Blog</NuxtLink>
          </li>
          <li class="pt-12">
            <UButton to="/contact" class="text-xl px-10 py-3 tracking-wider font-mono">
              <span class="hidden lg:inline">Contact Us</span>
              <UIcon name="i-heroicons-envelope-16-solid" class="lg:hidden w-8 h-8" />
            </UButton>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)

const linkClasses =
  "no-underline border-b-2 border-transparent transition text-md xl:text-xl text-gray-500 dark:text-gray-300 duration-300 font-light tracking-widest hover:text-primary-500 dark:hover:text-primary-500";

const activeClasses =
  "border-primary-500 text-primary-500 dark:text-primary-500 font-medium";

const mobileLinkClasses =
  "no-underline border-b-2 border-transparent transition text-5xl text-gray-200 duration-300 font-light tracking-widest hover:text-primary-500";

const mobileActiveClasses =
  "border-primary-500 text-primary-500 font-normal";

let isOpen = ref(false);

watch(route, () => {
  if (breakpoints.smallerOrEqual('md')) {
    isOpen.value = false;
  }
});

// Close mobile menu on escape key
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen.value) {
      isOpen.value = false;
    }
  });
});
</script>

<style scoped>
#site-nav a {
  font-family: "IBM Plex Sans", sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

#site-nav .font-mono,
#site-nav button {
  font-family: "IBM Plex Mono", monospace;
}

#site-nav a:hover,
#site-nav a:focus {
  transform: scale(1.025) translateY(-1px);
}

#site-nav a:active {
  transform: scale(0.98);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  filter: blur(8px);
}

/* Mobile optimization */
@media (max-width: 640px) {
  #site-nav .logo {
    max-width: 5rem;
  }
}

.font-mono {
  font-family: "IBM Plex Mono", monospace;
}
</style>
