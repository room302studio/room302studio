<template>
  <div class="flex flex-col items-center justify-center h-screen" id="thanks">
    <h1 class="text-4xl lg:text-8xl text-center font-bold">Thank you for reaching out!</h1>
    <p class="text-lg mt-32">We'll be in touch soon.</p>
  </div>
</template>

<script setup>
// Only reachable after submitting the contact form, so it should never show up
// in search results — otherwise someone can land on "Thank you for reaching
// out!" without having reached out.
useSeoMeta({ robots: "noindex, nofollow" });
</script>

<style scoped></style>