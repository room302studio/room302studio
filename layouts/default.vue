<template>
  <div class="">
    <!-- background texture image, full-width at the top of the page behind everything -->

    <img :src="['/bg_texture.png']" alt="" class="absolute top-0 left-0 w-full -z-10 pointer-events-none dark:hidden" />

    <div class="absolute -z-10 left-0 top-0 pointer-events-none">
      <TresCanvas window-size alpha shadows class="pointer-events-none" style="pointer-events: none !important;">
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
    <SiteNav />
    <div class="p-8 md:px-12 lg:px-24">
      <slot />
    </div>
    <GlobalFooter />
  </div>
</template>

<script setup>
import { animate, createAnimatable, stagger } from '~/anime.esm.js'
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

// Initialize spheres at 0,0,0
const initSpheres = () => {
  const numSpheres = 500; // Number of spheres to generate

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
  console.log('Distriubting spheres randomly')
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
    ease: 'inOutBounce',
    // ease: 'inOutQuad',
    delay: stagger(2),
    duration: 80
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

const lightPosition = ref([-10, -10, 3])

import { useRoute } from 'vue-router'
const route = useRoute()

// watch the route and when it changes, push the spheres around a bit
watch(route, (newRoute, oldRoute) => {
  console.log('route changed')
  console.log(oldRoute, newRoute)
  distributeSpheresRandomly()
})

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

  // camAnimation.y.to(-y.value / 100)
  // camAnimation.x.to(y.value / 1000)
  // camAnimation.z.to(y.value / 700)
})


</script>

<style scoped>
.bg-with-texture {
  background: url('/bg_texture.png');
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #f5f5f5;
  /* min-height: 100vh; */
  position: relative;
  overflow: hidden;
}
</style>