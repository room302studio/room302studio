<template>
  <div id="site-nav" class="text-center w-full align-middle justify-between z-10 tracking-wider">
    <div class="flex md:space-x-16 lg:space-x-24 items-center p-8 md:p-12 lg:px-32">
      <Logo class="text-center max-w-24 md:w-16 md:h-16 lg:h-24 lg:w-24 mx-auto md:mx-0" />

      <!-- Hamburger menu -->
      <div @click="isOpen = !isOpen" class="py-10 bloc md:hidden">
        <UIcon name="i-heroicons-queue-list-16-solid" class="text-primary-500 w-12 h-12" />
      </div>

      <!-- Desktop menu -->
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

      <div class="hidden md:block">
        <UButton to="/contact" color="orange" class="text-lg px-8 py-3 tracking-wide"> Contact Us </UButton>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="fade">
      <div v-show="isOpen" class="bg-gray-900/95 backdrop-blur-lg min-h-screen fixed top-0 left-0 w-full z-20">
        <div class="flex justify-between items-center py-12 px-8">
          <Logo class="text-center max-w-24 md:w-16 md:h-16 lg:h-24 lg:w-24" />

          <!-- Close button -->
          <div @click="isOpen = !isOpen" class="bloc md:hidden">
            <UIcon name="i-heroicons-x-mark-16-solid" class="text-primary-500 w-12 h-12" />
          </div>
        </div>
        <ul class="md:hidden flex flex-col items-center justify-center min-h-[70vh] space-y-12">
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
            <UButton to="/contact" color="orange" class="text-2xl px-12 py-4 tracking-wider">Contact Us</UButton>
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
  "no-underline border-b-2 border-transparent transition text-lg lg:text-xl text-gray-500 dark:text-gray-300 duration-300 font-light tracking-widest hover:text-orange-500 dark:hover:text-orange-400";

const activeClasses =
  "border-primary-500 text-gray-900 dark:text-white font-medium";

const mobileLinkClasses =
  "no-underline border-b-2 border-transparent transition text-7xl text-gray-200 duration-300 font-light tracking-widest hover:text-orange-500";

const mobileActiveClasses =
  "border-primary-500 text-white font-normal";

let isOpen = ref(false);

watch(route, () => {
  if (breakpoints.smallerOrEqual('md')) {
    isOpen.value = false;
  }
});
</script>

<style scoped>
#site-nav a {
  font-family: "IBM Plex Sans", sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
</style>
