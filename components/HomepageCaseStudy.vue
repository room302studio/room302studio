<template>
  <div class="relative lg:flex items-center my-32 max-w-screen-md mx-auto lg:mx-0">
    <div class="w-full md:w-1/2">
      <h4 class="text-xs text-gray-500 uppercase font-extralight tracking-widest">Mapping Resilience</h4>
      <h2 class="text-xl font-medium text-primary-500 pb-8">Turning Complex Problems Into Action</h2>
      <div class="intro-text text-sm my-2 border-l-2 border-gray-500 dark:text-stone-400">
        <p class="pl-4 max-w-prose">
          From ideation to execution, our multidisciplinary approach weaves together the latest tech
          with strategic design thinking.
        </p>

        <p class="pl-4 max-w-prose">
          Whether it's uncovering trends in huge datasets or crafting intuitive experiences, our work is focused
          on
          pushing the envelope of what's possible.
        </p>


      </div>

      <UButton variant="ghost" class="pl-5">
        Explore this project
        <UIcon name="i-heroicons-arrow-right-16-solid" />

      </UButton>
    </div>
    <div class="intro-images-wrapper w-full md:w-3/6 grid grid-cols-1 grid-rows-1 relative p-12">
      <img src="/our-work-images/unhcr.png" alt=""
        class="intro-image row-start-1 col-start-1 w-full rounded-xl translate-y-24 drop-shadow-md" />
      <img src="/our-work-images/themargin.png" alt=""
        class="intro-image row-start-1 col-start-1 w-full rounded-xl translate-x-10 drop-shadow-md" />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped></style>