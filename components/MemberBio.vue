<template>
  <div class="member m-10 md:my-24 py-10 lg:py-18 p-4 flex flex-col md:flex-row items-center">
    <div class="p-4 md:p-8 lg:p-10 w-1/2">
      <img :src="headshot" :alt="name" class="rounded md:mr-4 shadow-lg w-fit" />
    </div>
    <div class="flex flex-col">
      <h3 class="text-specialorange-500 my-0 py-0 text-2-xl md:text-4xl font-bold tracking-widest">{{ name }}</h3>
      <!-- add email -->

      <h4 class="text-specialorange-900 my-0 py-2 text-1-xl">
        <a href="`mailto:${email}`" class="hover:text-specialorange-500">{{ email }}</a>
      </h4>


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
  email: {
    type: String,
    required: false,
  },
});
</script>
