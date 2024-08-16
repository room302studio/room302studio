<template>
  <div class="index">
    <div class="z-10 relative">
      <div class="dark:text-stone-200 leading-relaxed text-lg">
        <p class="pad text-4xl md:text-5xl lg:w-8/12 text-stone-600 dark:text-stone-200 text-balance leading-snug">
          We are a bespoke
          <span class="text-stone-800 dark:text-stone-200">innovation lab</span>
          that guides concepts from ideation to implementation<span :style="{
            color: dotColor
          }">.</span>
        </p>


        <div class="px-4 md:px-8">
          <div
            class="relative overflow-hidden callout-section text-stone-50 my-24 py-12 lg:py-24 px-4 md:px-16 md:rounded-sm md:shadow-lg">
            <video class="absolute top-0 left-0 w-full h-full object-cover -z-10 md:rounded-lg md:shadow-lg bg-black"
              autoplay loop muted playsinline>
              <source src="https://res.cloudinary.com/ejf/video/upload/v1707429688/Comp_2_1_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p ref="zeroToSixty" class="z-10 text-5xl lg:w-5/12 leading-tight text-balance font-semibold">
              Bringing your ideas from 0 to 60<span class="z-10 text-primary-500">.</span>
            </p>

            <!-- now use flexbox to make a 3-wide of these sections -->
            <div class="flex flex-wrap justify-between mt-8 lg:mt-20 text-stone-300 text-sm">
              <div class="callout-section-item my-4 lg:w-1/3">
                <div>
                  <h4 class="text-lg leading-tight mb-4 text-stone-300 font-bold">
                    <UIcon name="i-material-symbols-light:speed-rounded" />
                    Fast-paced prototyping
                  </h4>
                  <p class="pr-8">
                    We know the best way to make a great ideas is to iterate. A
                    lot. Our focus on rapid prototyping lets us get further,
                    faster, and make sure we're building the right thing.
                  </p>
                </div>
              </div>
              <div class="callout-section-item my-4 lg:w-1/3">
                <div>
                  <h4 class="text-lg leading-tight mb-4 text-stone-300 font-bold">
                    <UIcon name="i-material-symbols-light:insert-chart-outline" />
                    Rooted in data
                  </h4>
                  <p class="pr-8">
                    Our studio has a deep background in data visualization and
                    analysis. We use data both to inform our product decisions,
                    as well as incorporating data into the DNA of our products.
                  </p>
                </div>
              </div>

              <div class="callout-section-item my-4 lg:w-1/3">
                <div>
                  <h4 class="text-lg leading-tight mb-4 text-stone-300 font-bold">
                    <UIcon name="i-fa6-solid-hammer" />
                    Willing to bleed
                  </h4>
                  <p class="pr-8">
                    Part of being on the cutting edge is being willing to take
                    risks. We're not afraid to try new things, explore uncharted
                    territory, and push the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="pad text-lg mt-6 text-balance text-stone-700 dark:text-stone-400 max-w-screen-lg" ref="introGraf1"
          id="introGraf1" v-intersection-observer="animatePushIn">
          Innovation is at the heart of everything we do. Our collaborations
          span startups, mature companies, non-profits, and news organizations.
          We provide the tools, expertise, and collaborative environment needed
          to
          <span class="font-bold text-stone-950 dark:text-stone-50 tracking-wider">turn ideas into reality.</span>
          Our team of experts thrives on pushing boundaries, experimenting with
          cutting-edge technologies, and driving change.
        </p>

        <div class="case-study">
          <div class="pad relative md:flex items-center my-8 md:my-32 mx-auto lg:mx-0"
            v-intersection-observer="animatePushIn">
            <div class="w-full md:w-7/12">
              <h4 class="font-medium text-gray-500 tex uppercase text-base pb-2">
                The Margin
              </h4>
              <h2 class="font-medium text-5xl text-primary-500 pb-8">
                Mapping Resilience
              </h2>
              <div class="intro-text text-lg my-2 border-l-2 text-gray-700 border-gray-500 dark:text-stone-400">
                <p class="pl-4 max-w-prose leading-relaxed">
                  We partnered with the Wildlife Conservation Society on an interesting and vital challenge: to bring to
                  light the resilience of certain coral reefs in the throes of climate change.
                </p>
              </div>

              <UButton variant="ghost" class="pl-5 py-8" to="our-work/client-work/coralreefs">
                Explore this project
                <UIcon name="i-heroicons-arrow-right-16-solid" />
              </UButton>
            </div>
            <div class="intro-images-wrapper w-full md:w-5/12 md:grid grid-cols-1 grid-rows-1 relative md:p-12">
              <img src="/our-work-images/reef-2.jpg" alt=""
                class="intro-image border border-gray-100 dark:border-gray-900 row-start-1 col-start-1 w-full rounded-lg md:translate-y-5 md:drop-shadow-xl py-2 md:py-0" />
              <img src="/our-work-images/reef-1.jpg" alt=""
                class="intro-image border border-gray-100 dark:border-gray-900 row-start-1 col-start-1 w-full rounded-lg md:translate-x-5 md:drop-shadow-xl py-2 md:py-0 hidden md:block" />
            </div>
          </div>
        </div>

        <div class="case-study">
          <div class="pad relative md:flex items-center my-8 md:my-32 mx-auto lg:mx-0"
            v-intersection-observer="animatePushIn">
            <div class="w-full md:w-7/12">
              <h4 class="font-medium text-gray-500 tex uppercase text-base pb-2">
                The Margin
              </h4>
              <h2 class="font-medium text-5xl text-primary-500 pb-8">
                Visualizing Environmental Justice
              </h2>
              <div class="intro-text text-lg my-2 border-l-2 text-gray-700 border-gray-500 dark:text-stone-400">
                <p class="pl-4 max-w-prose leading-relaxed">
                  In a series examining environmental justice's impact on different communities, we created interactive
                  scroll-powered maps and visualizations for The Margin's five inaugural stories.
                </p>
              </div>

              <UButton variant="ghost" class="pl-5 py-8" to="our-work/client-work/themargin">
                Explore this project
                <UIcon name="i-heroicons-arrow-right-16-solid" />
              </UButton>
            </div>
            <div class="intro-images-wrapper w-full md:w-5/12 md:grid grid-cols-1 grid-rows-1 relative md:p-12">
              <img src="/our-work-images/margin-2.jpg" alt=""
                class="intro-image border border-gray-100 dark:border-gray-900 row-start-1 col-start-1 w-full rounded-lg md:translate-y-5 md:drop-shadow-xl py-2 md:py-0" />
              <img src="/our-work-images/margin-1.jpg" alt=""
                class="intro-image border border-gray-100 dark:border-gray-900 row-start-1 col-start-1 w-full rounded-lg md:translate-x-5 md:drop-shadow-xl py-2 md:py-0 hidden md:block" />
            </div>
          </div>
        </div>

        <div class="case-study">
          <div class="pad relative md:flex items-center my-8 md:my-32 mx-auto lg:mx-0">
            <div class="w-full md:w-7/12">
              <h4 class="font-medium text-gray-500 tex uppercase text-base pb-2">
                The Plotline
              </h4>
              <h2 class="font-medium text-5xl text-primary-500 pb-8">
                Ukraine Grain's Global Impact
              </h2>
              <div class="intro-text text-lg my-2 border-l-2 text-gray-700 border-gray-500 dark:text-stone-400">
                <p class="pl-4 max-w-prose leading-relaxed">
                  In partnership with Earthrise Media for The Plotline, we undertook the mission of translating the
                  complexities of agricultural supply chains into an interactive tool for both experts and the general
                  public.
                </p>
              </div>

              <UButton variant="ghost" class="pl-5 py-8" to="our-work/client-work/ukrainegrain">
                Explore this project
                <UIcon name="i-heroicons-arrow-right-16-solid" />
              </UButton>
            </div>
            <div class="intro-images-wrapper w-full md:w-5/12 md:grid grid-cols-1 grid-rows-1 relative md:p-12">
              <img src="/our-work-images/ukraine-2.jpg" alt=""
                class="intro-image border border-gray-100 dark:border-gray-900 row-start-1 col-start-1 w-full rounded-lg md:translate-y-5 md:drop-shadow-xl py-2 md:py-0" />
              <img src="/our-work-images/ukraine-1.jpg" alt=""
                class="intro-image border border-gray-100 dark:border-gray-900 row-start-1 col-start-1 w-full rounded-lg md:translate-x-5 md:drop-shadow-xl py-2 md:py-0 hidden md:block" />
            </div>
          </div>
        </div>




        <div class="callout-section my-24 px-12 text-2xl lg:text-6xl text-balance backdrop-blur-sm md:flex"
          ref="sayHello">
          <div class="w-full md:w-1/2 xl:w-2/3 pb-16 md:py-0 pr-4">
            <h3 class="text-3xl">Say hello:</h3>

            <div class="intro-text text-lg my-2 border-l-2 text-gray-700 dark:text-gray-400 border-gray-500 max-w-md">
              <p class="pl-4 pr-6 leading-relaxed">
                Fancy a chat about creative puzzles or technological wonders? Our team at Room 302 Studio is all ears!
                Email us at <a href="mailto:studio@room302.studio"
                  class="font-bold text-primary-500 underline transition-colors duration-200 dark:hover:text-primary-700">
                  <span class="">studio</span><span class="">@room302.studio</span></a>, and while you're here,
                subscribe
                to our newsletter for your regular dose of inspiration.

              </p>
            </div>
          </div>

          <div class="w-full md:w-1/2 xl:w-1/3">
            <MailchimpSignupForm />
          </div>
        </div>

        <div
          class="pad callout-section bg-stone-900 text-stone-50 dark:bg-stone-800/80 backdrop-blur-sm my-24 py-12 md:rounded-sm shadow-lg">
          <p class="text-3xl md:text-5xl lg:w-8/12 leading-loose md:leading-tight">
            Meet
            <a href="http://coachartiebot.com"
              class="text-primary-500 underline hover:text-primary-700 transition-all">Coach Artie</a>, our AI Studio
            Assistant
          </p>

          <!-- now use flexbox to make a 3-wide of these sections -->
          <div class="flex flex-wrap justify-between mt-8 lg:mt-20 text-stone-300  text-sm">
            <div class="callout-section-item my-4 md:w-1/3">
              <UIcon name="i-pixelarticons-user" class="w-12 h-12 mb-4" />
              <div>
                <!-- <h4 class="text-stone-300 font-bold monospace">Enhancing our collaborations</h4> -->
                <p class="text-balance pr-3 lg:mr-4">
                  Artie, Room 302 Studio's <a href="https://github.com/room302studio/coachartie" class="underline">open
                    source</a> AI, helps
                  organize our teamwork in
                  Discord, using his unique capabilities to support every stage of
                  our creative process and give us more time to focus on what
                  matters.
                </p>
              </div>
            </div>
            <div class="callout-section-item my-4 md:w-1/3">
              <UIcon name="i-pixelarticons-briefcase-account" class="w-12 h-12 mb-4" />
              <div>
                <!-- <h4 class="text-stone-300 dark:text-stone-700 font-bold monospace">Disclaimer</h4> -->
                <p class="text-balance pr-3 lg:mr-4">
                  Information shared with Artie remains confidential, reserved for
                  studio use to safeguard member privacy and project integrity.
                </p>
              </div>
            </div>
            <div class="callout-section-item my-4 md:w-1/3">
              <UIcon name="i-pixelarticons-human-handsup" class="w-12 h-12 mb-4" />
              <div>
                <!-- <h4 class="text-stone-300 dark:text-stone-700 font-bold monospace">Testimonials</h4> -->
                <p class="text-balance pr-3 lg:mr-4">
                  Our members praise Artie for transforming ideas into tangible
                  results and providing invaluable support in crunch time, making
                  it a staple in our creative toolkit.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class="pad text-lg dark:text-stone-200 leading-relaxed md:flex">
          <div class="w-full md:w-1/2 text-gray-700">
            <h2 class="text-stone-600 dark:text-stone-300 font-medium text-4xl leading-tight py-8">
              Available for collaboration
            </h2>
            <div class="border-l-2 pl-4 dark:text-stone-400">
              <p class="leading-loose">
                Beyond traditional client services, the studio serves as a dynamic
                digital workspace, uniting creators to collectively build and
                grow. We build personal projects, contribute to open-source
                initiatives, and engage in impactful pro-bono work.
              </p>

              <p class="pt-8 leading-loose">
                We host livestreams where we learn tools together, show and tell
                our projects, and create educational tools to help others learn
                and grow. We are always looking for new collaborators of all skill
                levels and backgrounds to join us in our mission to make the world
                a better place.
              </p>
            </div>
          </div>

          <div class="w-full md:w-1/2 p-4 md:p-8 lg:p-10">
            <iframe src="https://discord.com/widget?id=932719842522443928&theme=dark" width="100%" height="320"
              allowtransparency="true" frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              class="rounded-lg shadow-lg my-8"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { vIntersectionObserver } from '@vueuse/components'

import { animate, createAnimatable, createTimeline, createTimer, stagger, utils } from "~/anime.esm.js";

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

</script>
<style scoped lang="scss">
p {
  text-wrap: balance;
}

.light #circle path {
  fill: #999 !important;
  opacity: 0.2;
}

.case-study .pad {
  @apply p-2 md:p-8 lg:p-12;
}
</style>
