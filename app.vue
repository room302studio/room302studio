<template>
  <section class="p-8 md:p-12 lg:p-24 bg-stone-100 dark:bg-stone-900">
    <Nav />
    <NuxtPage />
  </section>
</template>
<script setup>
useHead({
  title: "Room 302 Studio",
});
</script>
<style>
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
  font-family: "Rubik", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.monospace {
  font-family: "Source Code Pro", monospace !important;
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
</style>
