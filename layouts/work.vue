<template>
  <main class="max-w-screen-2xl mx-auto">
    <SiteNav class="" />
    <div class="p-8">
      <slot />

      <UButton to="/our-work" class="mt-10" color="primary">
        Back to work
      </UButton>
    </div>


    <GlobalFooter />
  </main>
</template>

<script setup></script>

<style scoped></style>
