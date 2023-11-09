<template>
  <nav class="bg-white shadow dark:bg-gray-800">
    <div class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <div>
          <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">room302.studio</a>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button type="button" class="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="items-center md:flex">
        <div class="flex flex-col md:flex-row md:mx-6">
          <NuxtLink class="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/">Home</NuxtLink>
          <NuxtLink class="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/members">Members</NuxtLink>
          <NuxtLink class="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/our-work">Our Work</NuxtLink>
          <NuxtLink class="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/blog">Blog</NuxtLink>
          <NuxtLink class="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/contact">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  color: #3b82f6;
}
</style>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}
</script>
