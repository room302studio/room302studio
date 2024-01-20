<template>
  <div class="index">
    <div class="absolute z-0 left-0 top-0 pointer-events-none">
      <TresCanvas window-size alpha shadows>
        <TresPerspectiveCamera ref="cam" :position="[cameraPosition.x, cameraPosition.y, cameraPosition.z]" :fov="50"
          :near="0.4" :far="1000" />



        <!-- add some subtle ambient lights -->
        <TresAmbientLight :intensity="0.5" :position="[0, 0, 0]" />

        <!-- add a directional light to cast shadows -->
        <TresDirectionalLight :position="lightPosition" :intensity="20" color="#fff" />

        <TresGroup :rotation="[sphereGroupRotation.x, sphereGroupRotation.y, sphereGroupRotation.z]">
          <TresMesh v-for="sphere in spheres" :position="[sphere.x, sphere.y, sphere.z]">
            <TresSphereGeometry :args="[sphere.size]" />
            <TresMeshBasicMaterial :color="sphere.color" />
          </TresMesh>
        </TresGroup>

        <TresAmbientLight :intensity="0.5" :position="[0, 0, 0]" />
        />

        <TresDirectionalLight :position="[-10, -10, 3]" :intensity="20" color="#fff" />
        >

        <EffectComposer>
          <Pixelation :granularity="pixelationAmount" />
        </EffectComposer>
      </TresCanvas>
    </div>

    <div class=" z-10 relative">
      <div class="py-5 dark:text-white leading-relaxed text-lg">

        <p class="pad dark:text-white text-4xl w-8/12">
          We are a bespoke innovation lab that guides concepts from ideation to
          implementation<span class="text-primary-500">.</span>
        </p>

        <p class="pad text-lg mt-6 max-w-prose text-balance">
          Innovation is at the heart of everything we do. Our collaborations span
          startups, mature companies, non-profits, and news organizations. We
          provide the tools, expertise, and collaborative environment needed to
          <span class="text-orange">turn ideas into reality.</span> Our team of
          experts thrives on pushing boundaries, experimenting with cutting-edge
          technologies, and driving change.
        </p>

        <p class="pad text-lg mt-6 max-w-prose text-balance">
          We harness the power of over 30 collective years of data visualization
          and prototyping expertise from our founding members.
          <NuxtLink class="underline dark:text-white" to="/members">
            <img src="/member-headshots/curran-headshot.png"
              class="w-4 h-4 rounded-full inline-block mr-1 border border-white" alt="Curran" />
            <img src="/member-headshots/ej-headshot.png"
              class="w-4 h-4 rounded-full inline-block mr-1 border border-white" alt="EJ" />
            <img src="/member-headshots/israel-headshot.png"
              class="w-4 h-4 rounded-full inline-block mr-1 border border-white" alt="Israel" />
            <img src="/member-headshots/ian-headshot.png"
              class="w-4 h-4 rounded-full inline-block mr-1 border border-white" alt="Ian" />
            <img src="/member-headshots/sam-headshot.png"
              class="w-4 h-4 rounded-full inline-block mr-1 border border-white" alt="Sam" />
            <!-- <img src="/member-headshots/elena-headshot.png"
              class="w-4 h-4 rounded-full inline-block mr-1 border border-white" alt="Elena" /> -->
          </NuxtLink>
          We've extended our capabilities to include product development,
          artificial intelligence, and other cutting-edge technologies.
        </p>



        <div class="pad relative flex my-32">
          <div class="w-1/2">
            <h4 class="text-xs font-medium text-gray-500">What we love</h4>
            <h2 class="text-xl font-medium text-primary-500">Turning Complex Problems Into Action</h2>
            <div class="intro-text text-sm my-2 pl-4 border-l-2 border-gray-500">
              <p class="pad max-w-prose text-blance">
                From ideation to execution, our multidisciplinary approach weaves together the latest in tech advancements
                with strategic design thinking.
              </p>

              <p class="pad max-w-prose text-blance">
                Whether it's uncovering trends in huge datasets or crafting intuitive experiences, our work is always
                pushing the envelope on what's possible and shaping a future where data
                becomes actionable knowledge.
              </p>
            </div>
          </div>
          <div class="intro-images-wrapper w-3/6 grid grid-cols-1 grid-rows-1 relative p-12">
            <img src="/our-work-images/unhcr.png" alt="" class="intro-image row-start-1 col-start-1 w-full rounded-sm" />
            <img src="/our-work-images/themargin.png" alt=""
              class="intro-image row-start-1 col-start-1 w-full rounded-sm absolute translate-x-10 translate-y-10 hover:translate-x-11 hover:translate-y-11 transition-transform" />
          </div>
        </div>

        <div
          class="callout-section bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-800 my-24 py-12 lg:py-24 px-16 lg:px-12 rounded-sm shadow-lg">

          <p ref="zeroToSixty" class="text-5xl lg:w-8/12 leading-tight">
            Bringing your ideas from 0 to 60<span class="text-primary-500">.</span>
          </p>

          <!-- now use flexbox to make a 3-wide of these sections -->
          <div class="flex flex-wrap justify-between mt-8 lg:mt-20 text-stone-400 text-sm">
            <div class="callout-section-item my-4 lg:w-1/3">
              <div>
                <h4 class="text-lg leading-tight mb-4 text-stone-300 dark:text-stone-700 font-bold monospace">
                  <UIcon name="i-material-symbols-light:speed-rounded" />
                  Fast-paced prototyping
                </h4>
                <p class="pr-8">
                  We know the best way to make a great ideas is to iterate. A lot. Our focus on rapid prototyping lets
                  us
                  get further, faster, and make sure we're building the right thing.
                </p>
              </div>
            </div>
            <div class="callout-section-item my-4 lg:w-1/3">

              <div>
                <h4 class="text-lg leading-tight mb-4 text-stone-300 dark:text-stone-700 font-bold monospace">
                  <UIcon name="i-material-symbols-light:insert-chart-outline" /> Rooted in data
                </h4>
                <p class="pr-8">
                  Our studio has a deep background in data visualization and analysis. We use data both to inform
                  our product decisions, as well as incorporating data into the DNA of our products.
                </p>
              </div>
            </div>

            <div class="callout-section-item my-4 lg:w-1/3">
              <div>
                <h4 class="text-lg leading-tight mb-4 text-stone-300 dark:text-stone-700 font-bold monospace">
                  <UIcon name="i-fa6-solid-hammer" />
                  Willing to bleed
                </h4>
                <p class="pr-8">
                  Part of being on the cutting edge is being willing to take risks. We're not afraid to try new
                  things,
                  explore uncharted territory, and push the boundaries of what's possible.
                </p>
              </div>
            </div>

            <!-- <div class="callout-section-item my-4 lg:w-1/3">
            <div>
              <h4 class="text-stone-300 dark:text-stone-700 font-bold monospace">
                <UIcon name="i-fa6-solid-hammer" class="w-12 h-12" />
                Focused on impact
              </h4>
              <p class="pad text-balance lg:mr-4">
                We want to make work that makes the world better. We work with non-profits, news organizations, and smart
                collaborators to find places technology can be leveraged to make a difference, where concepts can be
                proven, and momentum can be built.
              </p>
            </div>
          </div> -->


          </div>
        </div>

        <p class="pad text-lg mt-6 max-w-prose text-balance">
          Our diverse backgrounds enable us to approach projects from multiple
          perspectives. We've had the privilege of working with renowned
          organizations such as GitHub, NBC News, The Washington Post, CBS News,
          McKinsey, Stamen, and Google, bringing a wealth of experience and
          expertise to every project.
        </p>

        <p class="pad text-lg mt-6 max-w-prose text-balance">
          Whether you're a startup eager to revolutionize the market, an
          established firm seeking innovation and growth, or a non-profit wanting
          to propel societal change,
          <strong class="text-orange">Room 302 Studio</strong> is your trusted
          collaborator. Let's work together to transform your ideas into tangible
          solutions that make a lasting difference in the world.
        </p>
      </div>

      <!-- we are gonna use mouseX and mousY and some basic CSS transforms to make it so the div is always "looking" at the mouse -->

      <div
        class="callout-section bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-800 my-24 py-24 px-12 text-2xl lg:text-6xl text-balance"
        ref="sayHello">
        <h3 class="m-0 p-0 py-4 leading-tight text-center">
          Say hello:
          <a href="mailto:studio@room302.studio"
            class="font-bold underline dark:text-stone-900 hover:text-primary-500 transition-colors duration-200 dark:hover:text-primary-700">
            <span class="">studio</span><span class="">@room302.studio</span></a>
        </h3>
      </div>


      <div class="p-3 md:p-5 text-lg dark:text-white leading-relaxed max-w-xl mx-auto">
        <h2 class="text-orange text-2xl leading-tight">
          Available for collaboration
        </h2>
        <p>
          Beyond traditional client services,
          <strong class="text-orange">Room 302 Studio</strong> serves as a dynamic
          digital workspace, uniting creators to collectively build and grow. We
          champion personal projects, contribute to open-source initiatives, and
          engage in impactful pro-bono work.
        </p>

        <p>
          By joining our collaborative network, gain exclusive early access to
          resources, partake in stimulating discussions, and contribute to
          projects that make a significant impact.
        </p>
      </div>

      <div
        class="callout-section bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-800 my-24 py-12 lg:py-24 px-16 lg:px-12 rounded-sm shadow-lg">

        <p class=" text-5xl lg:w-8/12 leading-tight">
          Meet Coach Artie, our <span class="text-primary-500">AI</span> Studio Assistant
        </p>

        <!-- now use flexbox to make a 3-wide of these sections -->
        <div class="flex flex-wrap justify-between mt-8 lg:mt-20 text-stone-400 text-sm">
          <div class="callout-section-item my-4 lg:w-1/3">
            <UIcon name="i-heroicons-" class="w-12 h-12" />
            <div>
              <h4 class="text-stone-300 dark:text-stone-700 font-bold monospace">Header text</h4>
              <p class=" text-balance lg:mr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                voluptatum.
              </p>
            </div>
          </div>
          <div class="callout-section-item my-4 lg:w-1/3">
            <UIcon name="i-heroicons-photograph" class="w-12 h-12" />
            <div>
              <h4 class="text-stone-300 dark:text-stone-700 font-bold monospace">Header text</h4>
              <p class=" text-balance lg:mr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                voluptatum.
              </p>
            </div>
          </div>
          <div class="callout-section-item my-4 lg:w-1/3">
            <UIcon name="i-heroicons-photograph" class="w-12 h-12" />
            <div>
              <h4 class="text-stone-300 dark:text-stone-700 font-bold monospace">Header text</h4>
              <p class="text-balance lg:mr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="pad">
        <h2 class="text-sm my-8 leading-relaxed monospace">
          Subscribe for updates on what we're working on...
        </h2>
        <MailchimpSignupForm class="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { animate, createAnimatable, stagger } from '~/anime.esm.min.js'
import { TresCanvas, useLoader, extend } from '@tresjs/core'
import { createNoise3D } from 'simplex-noise';
import { EffectComposer, DepthOfField, Glitch, Noise, Outline, Pixelation, Vignette } from '@tresjs/post-processing'

const cameraPosition = ref({ x: 0, y: 0, z: 5 });
const cam = shallowRef(null)

const sphereGroupRotation = ref({ x: 0, y: 0, z: 0 })

const noise3D = createNoise3D();

const spheres = ref([]);

const { onLoop } = useRenderLoop()
const { y } = useWindowScroll()
const { x: mouseX, y: mouseY } = useMouse()

let camAnimation


/* template refs */
const zeroToSixty = ref(null)
const zeroToSixtyVisible = useElementVisibility(zeroToSixty)

const sayHello = ref(null)
const sayHelloVisible = useElementVisibility(sayHello)

// Initialize spheres at 0,0,0
const initSpheres = () => {
  const numSpheres = 900; // Number of spheres to generate

  for (let i = 0; i < numSpheres; i++) {
    const size = 0.025;
    // const color = Math.random() > 0.9 ? '#ff6600' : '#ffffff'
    const color = '#999'

    // const { x, y, z } = getRandom3DPosition(i);

    // place the spheres in huge grid with the center at 0,0
    const gridAmt = 25
    const gridPad = 0.25
    const gridOffset = gridAmt * gridPad / 2
    const x = 5 + (i % gridAmt) * gridPad - gridOffset
    const y = (Math.floor(i / gridAmt) * gridPad - gridOffset) + 8
    const z = -20 + (i % gridAmt) * gridPad - gridOffset


    // spheres.value.push({ x: 0, y: 0, z: 0, size, color });
    spheres.value.push({ x, y, z, size, color });

  }
};

// Generate spheres using Perlin noise
const distributeSpheresRandomly = () => {
  let newSpheres = [];
  for (let i = 0; i < spheres.value.length; i++) {
    const { x, y, z } = getRandom3DPosition(i);
    // const color = spheres.value[i].color;
    let color = Math.random() > 0.9 ? '#ff6600' : '#ffffff'

    // 8 in 10 chance of making it #999
    if (Math.random() > 0.8) {
      color = '#999'
    }

    newSpheres.push({ x, y, z, color });
  }
  // spheres.value = newSpheres;
  animate(spheres.value, {
    x: (el, i) => newSpheres[i].x,
    y: (el, i) => newSpheres[i].y,
    z: (el, i) => newSpheres[i].z,
    color: (el, i) => newSpheres[i].color,
    // ease: 'inOutQuart',
    // ease: 'outBounce',
    ease: 'inOutQuad',
    delay: stagger(10),
    duration: 999
  })
};

const distributeSpheresIntoSphere = () => {
  let newSpheres = [];
  const radius = 1; // Set the radius of the outer sphere
  const sphereCount = spheres.value.length;

  for (let i = 0; i < sphereCount; i++) {
    // Evenly distribute the angles
    const phi = Math.acos(-1 + (2 * i) / sphereCount);
    const theta = Math.sqrt(sphereCount * Math.PI) * phi;

    // Convert spherical coordinates to Cartesian coordinates
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    let color = Math.random() > 0.9 ? '#ff6600' : '#ffffff';
    if (Math.random() > 0.8) {
      color = '#999';
    }

    newSpheres.push({ x, y, z, color });
  }
};

const getRandom3DPosition = (index) => {
  const multiplier = 50;
  const x = noise3D(Math.random(), Math.random(), index) * multiplier;
  const y = noise3D(Math.random(), Math.random(), index) * multiplier;
  const z = noise3D(Math.random(), Math.random(), index) * multiplier;

  return { x, y, z };
};

onMounted(() => {
  initSpheres()

  camAnimation = createAnimatable(cameraPosition.value, {
    x: 0,
    y: 0,
    z: 0,
    duration: 2700,
    ease: 'out(10)'
  })
})

const spheresDistributed = ref(false)

watch(zeroToSixtyVisible, (visible) => {
  if (visible && spheresDistributed.value === false) {
    distributeSpheresRandomly()
    spheresDistributed.value = true
  }
})

const lightPosition = ref([-10, -10, 3])



// make the pixelation decrease as the y increases
const pixelationAmount = computed(() => {
  // return 22 - y.value / 75
  return 0
})


// watch the window scroll, and when it gets above 100, distribute the spheres randomly
watch(y, (scrollY) => {
  if (scrollY > 1980) {
    // distributeSpheresRandomly()
    distributeSpheresIntoSphere()
  }
})

onLoop(({ delta, elapsed }) => {
  // slowly rotate the sphere group on the x axis
  sphereGroupRotation.value = {
    y: -elapsed / 150,
    x: 0,
    z: 0
  }

  camAnimation.y.to(-y.value / 100)
  // camAnimation.x.to(y.value / 1000)
  camAnimation.z.to(y.value / 700)
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

.pad {
  @apply p-8 md:p-12 lg:p-24;
}
</style>