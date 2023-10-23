<template>
  <div class="member m-10 md:my-24 py-10 lg:py-18 p-4 flex flex-col md:flex-row items-center rounded-md shadow-md">
    <div class="p-4 md:p-8 lg:p-10 w-1/2">
      <img :src="headshot" :alt="name" class="rounded-md md:mr-4 shadow-lg w-fit" />
    </div>
    <div class="flex flex-col">
      <h3 class="text-specialorange-500 my-0 py-2 text-lg font-bold">{{ name }}</h3>
      <div class="member-bio max-w-prose prose dark:prose-dark dark:text-white">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  headshot: {
    type: String,
    required: true,
  },
});
</script>
