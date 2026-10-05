<template>
  <div>
    <SiteNav />
    <main class="page">
      <section>
        <h1>{{ error?.statusCode || "Error" }}</h1>
        <p class="measure">
          {{ error?.statusMessage || "Something went wrong." }}
        </p>
        <p class="row">
          <NuxtLink to="/" class="btn" @click="handleError">Back home</NuxtLink>
        </p>
      </section>
    </main>
    <GlobalFooter />
  </div>
</template>

<script setup>
import { clearError } from "#app";

defineProps({
  error: Object,
});

function handleError() {
  clearError({ redirect: "/" });
}
</script>
