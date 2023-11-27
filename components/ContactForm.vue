<template>
  <form name="contact" netlify>
    <div class="mb-4">
      <UInput id="name" type="text" name="name" placeholder="Your Name" label="Your Name"
        icon="i-heroicons-user-circle-20-solid" />
    </div>
    <div class="mb-4">
      <UInput id="email" type="email" name="email" placeholder="Email" label="Email" icon="i-heroicons-envelope" />
    </div>
    <div class="mb-4">
      <UInput id="company" type="text" name="size" placeholder="Company name" label="Company name"
        icon="i-heroicons-building-office-2-20-solid" />
    </div>
    <div class="mb-4">
      <UInput id="position" type="text" name="position" placeholder="Position at company" label="Position at your company"
        icon="i-heroicons-user-group-20-solid" />
    </div>
    <div class="mb-4">
      <h4>Project budget</h4>
      <!-- add a radio item for under 5k / non-profit -->
      <URadio id="budget-under-5k" type="radio" name="budget" value="under-5k" label="Small project ($0-$5k)" />
      <URadio id="budget-5-20k" type="radio" name="budget" value="5-20k" label="Medium project ($5k-$20k)" />
      <URadio id="budget-20-50k" type="radio" name="budget" value="20-50k" label="Large project ($20k-$50k)" />
      <URadio id="budget-50k-plus" type="radio" name="budget" value="50k+" label="Enterprise project ($50k+)" />
    </div>
    <div class="mb-4">
      <UCheckbox id="opensource" type="checkbox" name="opensource"
        label="Are we allowed to open-source/work in the open on this project?"
        help="Whenever possible we post in-progress screenshots, livestream working sessions, and open-source our code, but we understand some clients require confidentiality." />
    </div>

    <div class="mb-4">
      <UCheckbox id="dataset" type="checkbox" name="dataset" label="If applicable, can you provide a sample dataset?"
        icon="i-heroicons-clipboard-20-solid" v-model="hasDataset" />
    </div>
    <div class="mb-4" v-if="hasDataset">
      <UInput id="datafile" type="file" name="datafile" label="Upload your dataset" />
    </div>

    <div class="mb-4">
      <UTextarea id="description" name="description" placeholder="Brief description of project"
        label="Brief description of project" />
    </div>

    <div class="flex justify-end">
      <UButton type="submit" icon="i-heroicons-arrow-up-right" :trailing="true">Send Inquiry</UButton>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

let hasDataset = ref(false);
</script>

<style></style>

