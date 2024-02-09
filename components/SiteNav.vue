<template>
  <div id="site-nav" class="text-center  w-full align-middle justify-between z-10 tracking-wide">
    <div class="flex md:space-x-8 items-center p-8 md:p-12 lg:px-24">
      <Logo class="text-center max-w-24 md:w-16 md:h-16 lg:h-24 lg:w-24 mx-auto md:mx-0" />

      <!-- Hamburger menu -->
      <div @click="isOpen = !isOpen" class="py-10 bloc md:hidden">
        <UIcon name="i-heroicons-queue-list-16-solid" class="text-primary-500 w-8 h-8" />
      </div>

      <!-- Desktop menu -->
      <ul class="hidden md:flex md:space-x-4 lg:space-x-8 uppercase my-4 md:my-0">
        <li>
          <NuxtLink to="/" :class="linkClasses" :active-class="activeClasses">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/our-work" :class="linkClasses" :active-class="activeClasses">Work
          </NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="/events" :class="linkClasses" :active-class="activeClasses">Events
          </NuxtLink>
        </li> -->
        <li>
          <NuxtLink to="/blog" :class="linkClasses" :active-class="activeClasses">Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/members" :class="linkClasses" :active-class="activeClasses">
            Members
          </NuxtLink>
        </li>
      </ul>

      <div class="hidden md:block">
        <UButton to="/contact" color="orange"> Contact Us </UButton>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="fade">
      <div v-show="isOpen" class="bg-gray-800 min-h-screen fixed top-0 left-0 w-full z-20 px-4">
        <div class="flex">
          <Logo class="text-center max-w-24 md:w-16 md:h-16 lg:h-24 lg:w-24 mx-auto md:mx-0" />

          <!-- Hamburger menu -->
          <div @click="isOpen = !isOpen" class="py-10 bloc md:hidden">
            <UIcon name="i-heroicons-x-mark-16-solid" class="text-primary-500 w-8 h-8" />
          </div>
        </div>
        <ul class="md:hidden flex flex-col text-left justify-left mt-4">
          <li class="my-4">
            <NuxtLink to="/" :class="linkClasses" :active-class="activeClasses">Home</NuxtLink>
          </li>
          <li class="my-4">
            <NuxtLink to="/our-work" :class="linkClasses" :active-class="activeClasses">Work
            </NuxtLink>
          </li>
          <li class="my-4">
            <NuxtLink to="/events" :class="linkClasses" :active-class="activeClasses">Events
            </NuxtLink>
          </li>
          <li class="my-4">
            <NuxtLink to="/blog" :class="linkClasses" :active-class="activeClasses">Blog
            </NuxtLink>
          </li>
          <li class="my-4">
            <NuxtLink to="/members" :class="linkClasses" :active-class="activeClasses">
              Members
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)

const linkClasses =
  "no-underline hover:border-primary-500/50 border-b-2 transition text-4xl md:text-xs text-gray-200 md:text-gray-500 dark:text-gray-500 duration-200 font-medium mx-1 md:mx-2 mb-4";

const activeClasses =
  "border-primary-500 text-gray-700 font-semibold tracking-widest";

let isOpen = ref(false);
</script>

<style scoped>
/* add some subtle transitions / animations */
#site-nav a {
  font-family: "IBM Plex Sans", sans-serif;
  transition: all 0.2s ease-in-out;
}

#site-nav a:hover,
#site-nav a:focus {
  transform: scale(1.1);
}

#site-nav a:active {
  transform: scale(0.9);
}
</style>
