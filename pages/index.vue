<template>
  <div class="index">
    <div class="z-10 relative">
      <div class="dark:text-stone-200 leading-relaxed text-lg">
        <p class="pad text-4xl md:text-5xl lg:w-8/12 text-stone-600 dark:text-stone-200 text-balance leading-snug">
          We are a bespoke
          <span class="text-stone-800 dark:text-stone-200">innovation lab</span>
          that guides concepts from ideation to implementation<span class="text-primary-500">.</span>
        </p>

        <p class="pad text-lg mt-6 text-balance text-stone-700 dark:text-stone-400">
          Innovation is at the heart of everything we do. Our collaborations
          span startups, mature companies, non-profits, and news organizations.
          We provide the tools, expertise, and collaborative environment needed
          to
          <span class="font-bold text-stone-950 dark:text-stone-50 tracking-wider">turn ideas into reality.</span>
          Our team of experts thrives on pushing boundaries, experimenting with
          cutting-edge technologies, and driving change.
        </p>

        <HomepageCaseStudy />

        <HomepageCaseStudy />

        <HomepageCaseStudy />

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

        <div class="callout-section my-24 px-12 text-2xl lg:text-6xl text-balance backdrop-blur-sm md:flex"
          ref="sayHello">
          <div class="w-full md:w-1/2 lg:w-2/3 pb-16 md:py-0">
            <h3 class="text-3xl">Say hello:</h3>

            <div class="intro-text text-lg my-2 border-l-2 text-gray-700 border-gray-500">
              <p class="pl-4 max-w-prose leading-relaxed">
                Lorem ipsum
                <a href="mailto:studio@room302.studio"
                  class="font-bold underline transition-colors duration-200 dark:hover:text-primary-700">
                  <span class="">studio</span><span class="">@room302.studio</span></a>
              </p>
            </div>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/3">
            <MailchimpSignupForm />
          </div>
        </div>

        <div
          class="pad callout-section bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-800 my-24 py-12 md:rounded-sm shadow-lg">
          <p class="text-5xl lg:w-8/12 leading-tight">
            Meet
            <a href="http://coachartiebot.com"
              class="text-primary-500 underline hover:text-primary-700 transition-all">Coach Artie</a>, our AI Studio
            Assistant
          </p>

          <!-- now use flexbox to make a 3-wide of these sections -->
          <div class="flex flex-wrap justify-between mt-8 lg:mt-20 text-stone-300 dark:text-stone-500 text-sm">
            <div class="callout-section-item my-4 md:w-1/3">
              <UIcon name="i-pixelarticons-user" class="w-12 h-12 mb-4" />
              <div>
                <!-- <h4 class="text-stone-300 font-bold monospace">Enhancing our collaborations</h4> -->
                <p class="text-balance pr-3 lg:mr-4">
                  Artie, Room 302 Studio's AI, helps organize our teamwork in
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
            <div class="border-l-2 pl-4">
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
<script setup></script>
<style scoped lang="scss">
p {
  text-wrap: balance;
}

.light #circle path {
  fill: #999 !important;
  opacity: 0.2;
}
</style>
