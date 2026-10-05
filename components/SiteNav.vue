<template>
  <header class="site-header">
    <div class="page between">
      <NuxtLink to="/" class="brand">Room 302 Studio</NuxtLink>
      <nav class="mono">
        <NuxtLink to="/" active-class="here">Home</NuxtLink>
        <NuxtLink to="/our-work" active-class="here">Work</NuxtLink>
        <NuxtLink to="/process" active-class="here">Process</NuxtLink>
        <NuxtLink to="/blog" active-class="here">Blog</NuxtLink>
        <NuxtLink to="/contact" active-class="here">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
nav a { text-decoration: none; }
/* The current page is the only nav item that gets the accent — a single
   orange underline that says "you are here." */
nav a.here {
  text-decoration: underline; text-underline-offset: 4px;
  text-decoration-color: var(--accent); text-decoration-thickness: 2px;
}
@media (max-width: 35rem) {
  /* Wrap the links into a tidy gapped row (no leading indent) once the
     wordmark drops them to their own line. */
  nav { flex-wrap: wrap; gap: 0.5rem 1.5rem; margin-top: 0.5rem; }
  nav a { font-size: 0.875rem; }
}
</style>
