<template>
  <div class="flex space-x-8 items-center p-8 md:p-12 lg:px-24">
    <Logo class="font-bold" />
    <ul class="flex space-x-4 lg:space-x-8 uppercase">
      <li>
        <NuxtLink to="/" :class="linkClasses" active-class="border-primary-500">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/members" :class="linkClasses" active-class="border-primary-500">
          Members
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/our-work" :class="linkClasses" active-class="border-primary-500">Work
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/events" :class="linkClasses" active-class="border-primary-500">Events
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" :class="linkClasses" active-class="border-primary-500">Blog
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/services" :class="linkClasses" active-class="border-primary-500">Services
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/process" :class="linkClasses" active-class="border-primary-500">Process
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
// import { animate, stagger } from '/Users/ejfox/code/anime-beta/lib/anime.esm.min.js' // early anime v4 release

function animate() { }
function stagger() { }
function createTimeline() { }

const linkClasses =
  "no-underline hover:border-primary-500 border-b-2 transition text-xs text-gray-700 dark:text-gray-300";

onMounted(() => {
  animate("li", {
    translateY: {
      to: 0,
      from: "-6.3rem",
      ease: "outQuad",
      duration: 2000,
    },
    // scale: [0.9, 1],
    scale: {
      from: 0.9,
      to: 1,
      duration: 1000,
      delay: stagger(500),
    },
    opacity: {
      from: 0,
      to: 1,
      duration: 1000,
      delay: stagger(500),
    },
    // scaleZ: { from: 0, to: 1 },
    // scale: { from: 0.2, to: 1 },
    duration: 600,
    delay: stagger(400),
    ease: "inOutQuad",
  });
});
</script>
<style scoped></style>
