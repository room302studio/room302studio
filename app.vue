<template>
  <NuxtLayout>
    <section class="">
      <NuxtPage />
    </section>
  </NuxtLayout>
</template>
<script setup>
// useHead({
//   title: "Room 302 Studio",
//   lang: "en",
// });
</script>
<style>
.pad {
  @apply px-8 md:px-12 lg:px-32;
}

/* h1,
h2,
h3,
h4,
h5,
p {
  text-wrap: balance;
} */

.text-balance {
  text-wrap: balance;
}

body {
  /* background-color: #2A3A44; */
  font-family: "IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.monospace {
  font-family: "Source Code Pro", monospace !important;
}

.sans-serif-display {
  font-family: "IBM Plex Sans", sans-serif !important;
}

/* .near-white {
  color: #D1DCE3 !important;
}

.orange {
  color: #E17055 !important;
}

.bg-orange {
  background-color: #E17055 !important;
}

.orange-fill {
  fill: #E17055 !important;
}

.white-fill {
  fill: #D1DCE3 !important;
}

.bg-dark-blue {
  background-color: #2A3A44 !important;
} */

.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  scale: 1;
  transform-origin: 50% 0%;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(3rem); */
  /* scale: 0.33; */
}

.page-enter-from {
  /* transform: translate3d(0, 100%, 0); */
  /* transform: translate3d(-5, 0, 0) skewX(-15deg); */
}

.page-leave-to {
  /* transform: translate3d(0, -100%, 0); */
  /* transform: translate3d(5, 0, 0) skewX(15deg); */
}

/* Global transition classes */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-leave-active {
  position: absolute;
}

/* Smooth page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
