<template>
  <div>    
    <NuxtPage />
    <Nav />
  </div>
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

.near-white {
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
}
</style>