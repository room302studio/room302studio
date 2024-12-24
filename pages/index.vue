<template>
  <div class="index min-h-screen">
    <div class="z-10 relative">
      <!-- Hero Section -->
      <section class="min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
        <div class="pad relative z-10">
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-extralight mb-8 md:mb-12 max-w-4xl text-balance leading-tight">
            We are a bespoke
            <span class="text-stone-800 dark:text-stone-200">innovation lab</span>
            that guides concepts from ideation to implementation<span :style="{ color: dotColor }">.</span>
          </h1>

          <!-- Key value propositions -->
          <div class="mt-8 md:mt-16 grid md:grid-cols-3 gap-8 md:gap-12 text-stone-600 dark:text-stone-400">
            <div class="space-y-3 md:space-y-4">
              <div class="flex items-center gap-3 text-lg md:text-xl">
                <UIcon name="i-material-symbols-light:speed-rounded" class="text-xl md:text-2xl" />
                <h3 class="font-medium">Fast-paced prototyping</h3>
              </div>
              <p class="leading-relaxed text-sm md:text-base">
                We know the best way to make great ideas is to iterate. A lot. Our focus on rapid prototyping
                lets us get further, faster.
              </p>
            </div>

            <div class="space-y-3 md:space-y-4">
              <div class="flex items-center gap-3 text-lg md:text-xl">
                <UIcon name="i-material-symbols-light:insert-chart-outline" class="text-xl md:text-2xl" />
                <h3 class="font-medium">Rooted in data</h3>
              </div>
              <p class="leading-relaxed text-sm md:text-base">
                Our studio has a deep background in data visualization and analysis. We use data to inform decisions
                and incorporate it into our products.
              </p>
            </div>

            <div class="space-y-3 md:space-y-4">
              <div class="flex items-center gap-3 text-lg md:text-xl">
                <UIcon name="i-fa6-solid-hammer" class="text-xl md:text-2xl" />
                <h3 class="font-medium">Willing to bleed</h3>
              </div>
              <p class="leading-relaxed text-sm md:text-base">
                Part of being on the cutting edge is being willing to take risks. We're not afraid to explore
                uncharted territory.
              </p>
            </div>
          </div>
        </div>

        <!-- Subtle background animation -->
        <div class="absolute inset-0 bg-gradient-to-br from-stone-100/50 to-transparent 
             dark:from-stone-950/50 backdrop-blur-3xl -z-10 opacity-60" />
      </section>

      <!-- Video Section with Refined Layout -->
      <section class="px-4 md:px-8 my-12 md:my-24">
        <div class="relative overflow-hidden rounded-xl bg-stone-950">
          <!-- Video background with duotone effect -->
          <div class="relative aspect-[16/9] md:aspect-[21/9]">
            <video class="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60" autoplay loop
              muted playsinline>
              <source src="https://res.cloudinary.com/ejf/video/upload/v1707429688/Comp_2_1_1.mp4" type="video/mp4" />
            </video>

            <!-- Much lighter gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-stone-950/20 to-transparent"></div>

            <!-- Content -->
            <div class="absolute inset-0 pad flex flex-col justify-center items-center text-center">
              <h2
                class="text-4xl md:text-7xl lg:text-8xl text-white font-extralight mb-4 md:mb-8 max-w-4xl leading-none">
                Bringing your ideas from 0 to 60<span class="text-primary-500">.</span>
              </h2>
              <p class="text-lg md:text-2xl text-stone-300 max-w-2xl font-light leading-relaxed px-4">
                From rapid prototyping to production-ready solutions, we transform complex challenges into
                elegant implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Statement -->
      <section class="pad my-16 md:my-32">
        <p class="text-lg md:text-2xl font-light text-stone-700 dark:text-stone-400 max-w-3xl leading-relaxed"
          v-intersection-observer="animatePushIn">
          Innovation is at the heart of everything we do. Our collaborations span startups, mature companies,
          non-profits, and news organizations. We provide the tools, expertise, and collaborative environment needed to
          <span class="font-medium text-stone-950 dark:text-stone-50">turn ideas into reality.</span>
        </p>
      </section>

      <!-- Case Studies -->
      <section class="my-32">
        <HomepageCaseStudy v-for="project in featuredProjects" :key="project.title" :project="project" />
      </section>

      <!-- Contact Section -->
      <section class="pad my-16 md:my-32 bg-stone-100 dark:bg-stone-900/50 py-12 md:py-24 rounded-xl">
        <div class="max-w-7xl mx-auto md:flex gap-12 md:gap-24">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h3 class="text-3xl md:text-4xl font-light mb-4 md:mb-8">Say hello:</h3>
            <p class="text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl">
              Fancy a chat about creative puzzles or technological wonders? Our team is all ears!
              Email us at <a href="mailto:studio@room302.studio"
                class="font-medium text-primary-500 hover:text-primary-600 transition-colors">
                studio@room302.studio
              </a>
            </p>
          </div>
          <div class="md:w-1/2">
            <MailchimpSignupForm />
          </div>
        </div>
      </section>

      <!-- ... rest of sections with similar refinements ... -->
    </div>
  </div>
</template>

<script setup>
import { vIntersectionObserver } from '@vueuse/components'

import { animate, createAnimatable, createTimeline, createTimer, stagger, utils } from "~/anime.esm.js";
import HomepageCaseStudy from '~/components/HomepageCaseStudy.vue'

function animatePushIn(e) {
  // console.log('animatePushIn')
  // console.log(e)
  // const targetEl = e[0].target
  // console.log(targetEl)

  // const targetMap = e.map((el) => el.target)

  // animate(
  //   targetMap, {

  //   keyframes: [
  //     { x: '-2px', scale: 0.999 }, // duration = (4000 / 5 = 800)

  //     { scale: 1.005 },
  //     // { x: '17rem', rotate: 180, scale: .5 }, // duration = (4000 / 5 = 800)
  //     { y: 0, x: 0, scale: 1 }
  //   ],
  //   duration: 300,
  //   // ease: 'inOutQuad',
  //   playbackEase: 'inOutQuad',
  //   loop: false
  // });
}

const dotColor = ref(null)

onMounted(() => {
  animate(dotColor, {
    keyframes: [
      { value: 'hsl(0, 100%, 100%)' },
      // orange
      { value: 'hsl(12, 91%, 60%)' }
    ],
    duration: 7000,
    alternate: true,
    loop: true,
  });

});

useSeoMeta({
  title: 'Room 302 Studio',
  description: 'We are a bespoke innovation lab that guides concepts from ideation to implementation.',
  ogDescription: 'We are a bespoke innovation lab that guides concepts from ideation to implementation.',
  url: 'https://room302.studio',
  ogImage: '/twitter-image.jpg',
  twitterImage: '/twitter-image.jpg',

})

// Featured projects data
const featuredProjects = [
  {
    title: 'Mapping Resilience',
    client: 'The Margin',
    description: 'We partnered with the Wildlife Conservation Society on an interesting and vital challenge: to bring to light the resilience of certain coral reefs in the throes of climate change.',
    images: {
      primary: '/our-work-images/reef-2.jpg',
      secondary: '/our-work-images/reef-1.jpg'
    },
    link: 'our-work/client-work/coralreefs'
  },
  // ... other projects
]

</script>

<style scoped>
.pad {
  @apply px-6 md:px-12 lg:px-24;
}

/* Ensure text balance */
.text-balance {
  text-wrap: balance;
}

/* Smooth transitions */
.case-study {
  @apply transition-all duration-500;
}

.case-study:hover {
  @apply transform -translate-y-1;
}
</style>
