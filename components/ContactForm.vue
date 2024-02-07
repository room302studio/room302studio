<template>
  <form name="contact" netlify>
    <div class="my-8">
      <h4 class="font-light text-xs py-1 pl-1">Name</h4>
      <UInput id="name" type="text" name="name" placeholder="Your Name" label="Your Name"
        icon="i-heroicons-user-circle-20-solid" />
    </div>
    <div class="my-8">
      <h4 class="font-light text-xs py-1 pl-1">Email</h4>
      <UInput id="email" type="email" name="email" placeholder="Email" label="Email" icon="i-heroicons-envelope" />
    </div>
    <div class="my-8">
      <h4 class="font-light text-xs py-1 pl-1">Company Name</h4>
      <UInput id="company" type="text" name="size" placeholder="Company name" label="Company name"
        icon="i-heroicons-building-office-2-20-solid" />
    </div>
    <div class="my-8">
      <h4 class="font-light text-xs py-1 pl-1">Position at company</h4>
      <UInput id="position" type="text" name="position" placeholder="Position at company" label="Position at your company"
        icon="i-heroicons-user-group-20-solid" />
    </div>

    <UDivider class="my-12" />

    <div class="my-8">
      <h4 class="font-light text-xs py-1 pl-1">Project budget</h4>
      <!-- add a radio item for under 5k / non-profit -->
      <!-- <URadio id="budget-under-5k" type="radio" name="budget" value="under-5k" label="Small project ($0-$5k)" />
      <URadio id="budget-5-20k" type="radio" name="budget" value="5-20k" label="Medium project ($5k-$20k)" />
      <URadio id="budget-20-50k" type="radio" name="budget" value="20-50k" label="Large project ($20k-$50k)" />
      <URadio id="budget-50k-plus" type="radio" name="budget" value="50k+" label="Enterprise project ($50k+)" /> -->

      <!-- we are gonna replace these radio buttons with a 2x2 grid of divs -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-zinc-100 border border-zinc-200 p-2 rounded text-zinc-900">
          <UCheckbox id="budget-under-5k" type="checkbox" name="budget" value="under-5k" label="Small project ($0-$5k)"
            icon="i-heroicons-currency-dollar-20-solid" />
        </div>
        <div class="bg-zinc-100 border border-zinc-200 p-2 rounded text-zinc-900">
          <UCheckbox id="budget-5-20k" type="checkbox" name="budget" value="5-20k" label="Medium project ($5k-$20k)"
            icon="i-heroicons-currency-dollar-20-solid" />
        </div>
        <div class="bg-zinc-100 border border-zinc-200 p-2 rounded text-zinc-900">
          <UCheckbox id="budget-20-50k" type="checkbox" name="budget" value="20-50k" label="Large project ($20k-$50k)"
            icon="i-heroicons-currency-dollar-20-solid" />
        </div>
        <div class="bg-zinc-100 border border-zinc-200 p-2 rounded text-zinc-900">
          <UCheckbox id="budget-50k-plus" type="checkbox" name="budget" value="50k+" label="Enterprise project ($50k+)"
            icon="i-heroicons-currency-dollar-20-solid" />
        </div>
      </div>
    </div>

    <UDivider class="my-12" />

    <div class="my-8">
      <h2 class="font-light text-xl py-1 pl-1 my-4">Sharing Permissions</h2>

      <!-- use flex to make 2 columns -->
      <div class="flex justify-between my-8">
        <div class="explanation-paragraph w-1/2">
          <p class="text-xs font-light text-zinc-700 pr-4">We often share our work on social media and in our portfolio.
            We
            also livestream
            our
            working sessions and open-source our code. We understand some clients require confidentiality.</p>
        </div>

        <div class="w-1/2">
          <!-- add options for yes and no -->

          <div class="bg-primary-100 border border-primary-500 p-2 rounded text-zinc-900 my-1 text-xs">
            Yes this project can be open-sourced
          </div>

          <div class="bg-zinc-100 border border-zinc-200 p-2 rounded text-zinc-900 my-1 text-xs">
            No this project cannot be open-sourced
          </div>
        </div>
      </div>
    </div>

    <UDivider class="my-12" />

    <div class="mb-4">
      <h2 class="font-light text-xl py-1 pl-1 my-4">Sample Dataset</h2>

      <!-- use flex to make 2 columns -->
      <div class="flex justify-between my-8">
        <div class="explanation-paragraph w-1/2">
          <p class="text-xs font-light text-zinc-700 pr-4">Not all projects involve data, but for those that do for data
            exploration bloop bloop bloop</p>
        </div>

        <div class="w-1/2">
          <!-- add options for yes and no -->

          <div class="bg-primary-100 border border-primary-500 p-2 rounded text-zinc-900 my-1 text-xs">
            Yes, we have sample data
          </div>

          <div class="bg-zinc-100 border border-zinc-200 p-2 rounded text-zinc-900 my-1 text-xs">
            No, we don't have sample data yet
          </div>
        </div>
      </div>
    </div>

    <div class="mb-4" v-if="hasDataset">
      <UInput id="datafile" type="file" name="datafile" label="Upload your dataset" />
    </div>

    <div class="mb-4">
      <!-- <UTextarea id="description" name="description" placeholder="Brief description of project" class="bg-zinc-300 p-4"
        label="Brief description of project" /> -->

      <textarea id="description" name="description" placeholder="Brief description of project"
        class="bg-zinc-100 text-zinc-800 p-4 md:p-8 w-full rounded-lg focus:shadow-lg min-h-96 focus:outline-primary-500"
        label="Brief description of project"></textarea>
    </div>

    <div class="flex justify-end text-center">
      <!-- <UButton type="submit" icon="i-heroicons-arrow-up-right" :trailing="true" class="w-full text-center">Send Inquiry
      </UButton> -->
      <button type="submit" class="bg-primary-500 text-white p-2 rounded-lg text-sm text-center w-full">Send
        Inquiry
        <UIcon name="i-heroicons-arrow-up-right" class="ml-1" />
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

let hasDataset = ref(false);
</script>

<style></style>
