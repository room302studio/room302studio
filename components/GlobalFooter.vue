<template>
  <div class="bg-stone-900 text-stone-50 dark:bg-stone-800 py-8">
    <div class="md:my-12 md:py-6 lg:py-24 px-8 md:px-16 lg:px-12 max-w-screen-2xl mx-auto">
      <p ref="creativeHub" class="text-5xl lg:w-8/12 leading-tight">
        Building <span class="text-primary-500">elegant utilities</span> for
        good.
      </p>

      <!-- Three callout sections with new titles and icons -->
      <div class="flex flex-wrap justify-between mt-8 lg:mt-20 text-stone-400 text-sm">
        <div class="callout-section-item my-4 md:w-1/3">
          <div>
            <h4 class="text-lg leading-tight mb-4 text-stone-300 dark:text-stone-400 font-bold text-balance">
              <!-- New icon for data integration -->
              <UIcon name="i-material-symbols-table-rows-narrow-outline" />
              Data-Driven Process
            </h4>
            <p class="pr-8">
              We weave data into all of the work that we do. We try to harness
              these insights to sculpt solutions that are both elegant and
              grounded in real-world testing.
            </p>
          </div>
        </div>

        <div class="callout-section-item my-4 md:w-1/3">
          <div>
            <h4 class="text-lg leading-tight mb-4 text-stone-300 dark:text-stone-400 font-bold text-balance">
              <!-- New icon for innovation and experimentation -->
              <UIcon name="i-material-symbols-lab-research-rounded" />
              Fearless Experimentation
            </h4>
            <p class="pr-8">
              The future is for the bold. We embrace the unknown, pioneering new
              paths and designing new futures. We are at home exploring things
              no one has ever seen before.
            </p>
          </div>
        </div>

        <div class="callout-section-item my-4 md:w-1/3">
          <div>
            <h4 class="text-lg leading-tight mb-4 text-stone-300 dark:text-stone-400 font-bold text-balance">
              <!-- New icon for collaboration -->
              <UIcon name="i-material-symbols-group-work-outline" />
              Emphasizing Collaboration
            </h4>
            <p class="pr-8">
              Our online space emphasizes collaboration, where like-minded
              people can gather and turn their ideas into reality through the
              power of collective creativity.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- include a little sitemap / verbose navigation and a motivational quote -->
    <div class="lg:py-18 px-8 md:px-16 lg:px-12 md:flex max-w-screen-2xl mx-auto">
      <!-- quote -->
      <div class="w-full md:w-1/3 pr-4 md:pr-8 text-xl md:text-2xl font-light text-balance pb-16 md:py-0">
        Pleasure in the job puts perfection in the work.
        <UIcon name="i-svg-spinners-wind-toy" />
      </div>

      <div class="sitemap-section-item md:flex w-full">
        <div class="md:w-1/3 pb-4 md:pb-10 md:py-0">
          <h4 class="text-stone-500 tracking-widest font-semibold">
            Work with us
          </h4>
          <ul class="list-none">
            <li>
              <NuxtLink to="/contact/" class="hover:text-primary-500 transition duration-200"
                :class="{ 'text-primary-500 font-medium': $route.path.startsWith('/contact') }">Contact us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact/" class="hover:text-primary-500 transition duration-200"
                :class="{ 'text-primary-500 font-medium': $route.path.startsWith('/contact') }">Free consultation
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:w-1/3 pb-4 md:pb-10 md:py-0">
          <h4 class="text-stone-500 tracking-widest font-semibold">
            Solutions
          </h4>
          <ul class="list-none">
            <li>
              <NuxtLink to="/for-ceos/" class="hover:text-primary-500 transition duration-200"
                :class="{ 'text-primary-500 font-medium': $route.path.startsWith('/for-ceos') }">For CEOs & CTOs
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/for-data-analysts/" class="hover:text-primary-500 transition duration-200"
                :class="{ 'text-primary-500 font-medium': $route.path.startsWith('/for-data-analysts') }">For Data Teams
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/process/" class="hover:text-primary-500 transition duration-200"
                :class="{ 'text-primary-500 font-medium': $route.path.startsWith('/process') }">Our Process</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:w-1/3 pb-4 md:pb-10 md:py-0">
          <h4 class="text-stone-500 tracking-widest font-semibold">
            Explore
          </h4>
          <ul class="list-none">
            <li>
              <NuxtLink to="/blog/" class="hover:text-primary-500 transition duration-200"
                :class="{ 'text-primary-500 font-medium': $route.path.startsWith('/blog') }">Blog</NuxtLink>
            </li>
            <li>
              <a href="https://discord.gg/QMg7pZgkxK" class="hover:text-primary-500 transition duration-200">Join the
                Discord</a>
            </li>
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
