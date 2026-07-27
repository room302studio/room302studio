<template>
  <header class="site-header">
    <div class="page between">
      <NuxtLink to="/" class="brand">Room 302 Studio</NuxtLink>
      <nav class="mono">
        <NuxtLink to="/" active-class="here">Home</NuxtLink>
        <NuxtLink to="/our-work" active-class="here">Work</NuxtLink>
        <NuxtLink to="/blog" active-class="here">Blog</NuxtLink>
        <NuxtLink to="/contact" active-class="here">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
nav a { text-decoration: none; }
nav a.here { text-decoration: underline; text-underline-offset: 3px; }
@media (max-width: 560px) {
  nav a { margin-left: 10px; font-size: 0.9rem; }
}
</style>
