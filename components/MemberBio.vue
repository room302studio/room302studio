<template>
  <div class="member flex flex-col md:flex-row items-center">
    <div class="p-2">
      <img :src="headshot" :alt="name" class="rounded-lg shadow-md md:mr-4 w-full object-cover" />

      <h3 class="text-primary-500 my-0 pt-2 text-md font-semibold">
        {{ name }}
      </h3>

      <h4 class="text-zinc-500 font-semibold my-0 py-0 text-sm">
        {{ role }}
      </h4>

      <h4 class="text-primary-900 my-0 py-2 text-1-xl">
        <a href="`mailto:${email}`" class="hover:text-primary-500">{{
          email
        }}</a>
      </h4>

      <!-- <UButton @click="showBio = !showBio" class="mt-4" color="gray">
        {{ showBio ? "Hide" : "Show" }} Bio
      </UButton> -->
      <div class="member-bio max-w-prose prose dark:prose-dark dark:text-white" v-show="showBio">
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
  role: {
    type: String,
    required: false,
  },
});

const showBio = ref(false);
</script>
