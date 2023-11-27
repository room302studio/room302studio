<template>
  <NuxtLayout>
    <Nav />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  title: 'Room 302 Studio'
})

</script>
<style>
body {
  /* background-color: #2A3A44; */
  font-family: 'Source Code Pro', monospace;
}

.monospace {
  font-family: 'Source Code Pro', monospace !important;
}

.orange-fill {
  fill: #E17055 !important;
}

.white-fill {
  fill: #D1DCE3 !important;
}

h1 {
  font-family: 'Modak', cursive;
}

.font-display {
  font-family: 'Modak', cursive;
}
</style>