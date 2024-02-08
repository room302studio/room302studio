<template>
  <div id="site-nav"
    class="text-center md:flex md:space-x-8 items-center p-8 md:p-12 lg:px-24 w-full align-middle justify-between z-10 tracking-wide">
    <Logo class="text-center md:w-16 md:h-16 lg:h-24 lg:w-24 mx-auto md:mx-0" />
    <ul class="md:flex md:space-x-4 lg:space-x-8 uppercase my-4 md:my-0">
      <li>
        <NuxtLink to="/" :class="linkClasses" :active-class="activeClasses">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/our-work" :class="linkClasses" :active-class="activeClasses">Work
        </NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/process" :class="linkClasses" :active-class="activeClasses">Process
        </NuxtLink>
      </li> -->

      <li>
        <NuxtLink to="/events" :class="linkClasses" :active-class="activeClasses">Events
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/blog" :class="linkClasses" :active-class="activeClasses">Blog
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/members" :class="linkClasses" :active-class="activeClasses">
          Members
        </NuxtLink>
      </li>


      <!-- <li>
        <NuxtLink to="/services" :class="linkClasses" :active-class="activeClasses">Services
        </NuxtLink>
      </li> -->

    </ul>

    <!-- Add an orange Contact Us button that is pushed all the way right on desktop, but is centered below on mobile -->
    <div class="">
      <UButton to="/contact" color="orange">
        Contact Us
      </UButton>
    </div>
  </div>
</template>
<script setup>

const linkClasses =
  "no-underline hover:border-primary-500/50 border-b-2 transition text-xs text-gray-500 dark:text-gray-500 duration-200 font-medium mx-1 md:mx-2";

const activeClasses = "border-primary-500 text-gray-700 font-semibold tracking-widest"
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
