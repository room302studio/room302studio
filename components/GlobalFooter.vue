<template>
  <div class="bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-800 py-8">
    <div class="my-12 py-6 lg:py-24 px-16 lg:px-12 ">
      <p ref="creativeHub" class="text-5xl lg:w-8/12 leading-tight">
        Building <span class="text-primary-500">elegant utilities</span> for good.
      </p>

      <!-- Three callout sections with new titles and icons -->
      <div class="flex flex-wrap justify-between mt-8 lg:mt-20 text-stone-400 text-sm">
        <div class="callout-section-item my-4 md:w-1/3">
          <div>
            <h4 class="text-lg leading-tight mb-4 text-stone-300 dark:text-stone-700 font-boldtext-balance">
              <!-- New icon for collaboration -->
              <UIcon name="i-material-symbols-group-work-outline" />
              Creative Workspace
            </h4>
            <p class="pr-8">
              Our space is a crucible of collaboration, where ideas collide and take shape through collective creativity.
              Join forces to bring concepts to life—faster, smarter, together.
            </p>
          </div>
        </div>
        <div class="callout-section-item my-4 md:w-1/3">

          <div>
            <h4 class="text-lg leading-tight mb-4 text-stone-300 dark:text-stone-700 font-bold  text-balance">
              <!-- New icon for data integration -->
              <UIcon name="i-material-symbols-table-rows-narrow-outline" />
              Data-Driven
            </h4>
            <p class="pr-8">
              We weave data into every fabric of our design. Harness insights to sculpt solutions that are both elegant
              and grounded in real-world utility.
            </p>
          </div>
        </div>

        <div class="callout-section-item my-4 md:w-1/3">
          <div>
            <h4 class="text-lg leading-tight mb-4 text-stone-300 dark:text-stone-700 font-bold text-balance">
              <!-- New icon for innovation and experimentation -->
              <UIcon name="i-material-symbols-lab-research-rounded" />
              Fearless Experimentation
            </h4>
            <p class="pr-8">
              The future is for the bold. We embrace the unknown, pioneering new paths and walking the talk to shape the
              bleeding edge of technology and design.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- include a little sitemap / verbose navigation and a motivational quote -->
    <div class="lg:py-24 px-16 lg:px-12 flex ">
      <!-- quote -->
      <div class="w-1/3 pr-4 md:pr-8 text-xl md:text-2xl font-bold text-balance">
        We focus on joy-driven development
      </div>

      <div class="sitemap-section-item flex w-full">
        <div class="md:w-1/3">
          <h4 class="text-stone-500 tracking-widest font-semibold">Learn More</h4>
          <ul class="list-none">
            <li>
              <NuxtLink to="/blog/">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/process/">Process</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/process/">Services</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:w-1/3">
          <h4 class="text-stone-500 tracking-widest font-semibold">Hire Us</h4>
          <ul class="list-none">
            <li>
              <NuxtLink to="/contact/">Contact</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact/#calendar">Free consultation</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:w-1/3">
          <h4 class="text-stone-500 tracking-widest font-semibold">Get Involved</h4>
          <ul class="list-none">
            <li><a href="#">Join the Discord</a></li>
            <li><a href="#">Sign up for Updates</a></li>
            <li><a href="#">See upcoming events</a></li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
li {
  @apply my-2 text-xs;
}
</style>