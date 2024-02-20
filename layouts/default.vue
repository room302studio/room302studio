<template>
  <div class="">
    <!-- background texture image, full-width at the top of the page behind everything -->

    <img :src="['/bg_texture.png']" alt="" class="absolute top-0 left-0 w-full -z-10 pointer-events-none dark:hidden" />

    <div class="absolute -z-10 left-0 top-0 pointer-events-none">
      <TresCanvas window-size alpha shadows class="pointer-events-none opacity-50"
        style="pointer-events: none !important">
        <TresPerspectiveCamera ref="cam" :position="[cameraPosition.x, cameraPosition.y, cameraPosition.z]" :fov="50"
          :near="0.4" :far="1000" />

        <!-- add some subtle ambient lights -->
        <!-- <TresAmbientLight :intensity="0.5" :position="[0, 0, 0]" /> -->

        <!-- add a directional light to cast shadows -->
        <!-- <TresDirectionalLight :position="lightPosition" :intensity="20" color="#fff" /> -->

        <TresGroup :rotation="[
          sphereGroupRotation.x,
          sphereGroupRotation.y,
          sphereGroupRotation.z,
        ]">
          <TresMesh v-for="sphere in spheres" :position="[sphere.x, sphere.y, sphere.z]">
            <TresSphereGeometry :args="[sphere.size]" />
            <TresMeshBasicMaterial :color="sphere.color" :opacity="0.5" />
          </TresMesh>
        </TresGroup>

        <EffectComposer>
          <Pixelation :granularity="pixelationAmount" />
        </EffectComposer>
      </TresCanvas>
    </div>
    <SiteNav class="max-w-screen-2xl mx-auto" />
    <div class="max-w-screen-2xl mx-auto">
      <slot />
    </div>
    <GlobalFooter />
  </div>
</template>

<script setup>
import { animate, createAnimatable, stagger } from "~/anime.esm.js";
import { TresCanvas, useLoader, extend } from "@tresjs/core";
import { createNoise3D } from "simplex-noise";
import {
  EffectComposer,
  DepthOfField,
  Glitch,
  Noise,
  Outline,
  Pixelation,
  Vignette,
} from "@tresjs/post-processing";

const cameraPosition = ref({ x: 0, y: 0, z: 1 });
const cam = shallowRef(null);
const sphereGroupRotation = ref({ x: 0, y: 0, z: 0 });
const noise3D = createNoise3D();
const spheres = ref([]);
const { onLoop } = useRenderLoop();
const { y } = useWindowScroll();
const { x: mouseX, y: mouseY } = useMouse();
import { useRoute } from "vue-router";
const route = useRoute();

// Initialize spheres at 0,0,0
const initSpheres = () => {
  const numSpheres = 150; // Number of spheres to generate

  for (let i = 0; i < numSpheres; i++) {

    const color = Math.random() > 0.98 ? '#ff6600' : '#444'
    // const color = "#999";

    const { z: randomZ } = getRandom3DPosition(i);

    // place the spheres in huge grid with the center at 0,0
    const gridAmt = 25;
    const gridPad = 0.5;
    const gridOffset = (gridAmt * gridPad) / 2;
    const x = 5 + (i % gridAmt) * gridPad - gridOffset;
    const y = Math.floor(i / gridAmt) * gridPad - gridOffset + 8;
    // const z = -20 + (i % gridAmt) * gridPad - gridOffset;
    const z = randomZ
    const size = 0.04;
    // const size = Math.sqrt(z) * 5;

    // spheres.value.push({ x: 0, y: 0, z: 0, size, color });
    spheres.value.push({ x, y, z, size, color });
  }
};


const getRandom3DPosition = (index) => {
  const multiplier = 50;
  const x = noise3D(Math.random(), Math.random(), index) * multiplier;
  const y = noise3D(Math.random(), Math.random(), index) * multiplier;
  const z = noise3D(Math.random(), Math.random(), index) * multiplier;

  return { x, y, z };
};

let camAnimation;
onMounted(() => {
  initSpheres();

  camAnimation = createAnimatable(cameraPosition.value, {
    x: 0,
    y: 0,
    z: 0,
    duration: 3200,
    ease: "out(10)",
  });


});


// watch the route and when it changes, push the spheres around a bit
// watch(route, (newRoute, oldRoute) => {
//   distributeSpheresRandomly();
// });

const pixelationAmount = ref(0);

// watch the route and when it changes, animate the pixelation up and down
watch(route, (newRoute, oldRoute) => {
  // animate the pixelation up and down
  animate(pixelationAmount, {
    keyframes: {
      '0%': { value: 0 },
      '50%': { value: 32 },
      '100%': { value: 0 },
    },
    ease: "inOutQuad",
    duration: 700
  })

  // get the current camera Y position
  const currentY = camAnimation.y();
  // spin the camera around vertically too
  camAnimation.y(currentY + 0.5);
});

// watch the scroll and animate the camera using the scroll position
watch(y, (newY, oldY) => {
  // animate the camera position based on the scroll position
  camAnimation.y(newY * 0.00025);
});


// make the pixelation decrease as the y increases
// const pixelationAmount = computed(() => {
//   // return 22 - y.value / 75
//   return 0;
// });

onLoop(({ delta, elapsed }) => {
  // slowly rotate the sphere group on the x axis
  sphereGroupRotation.value = {
    y: elapsed / 250,
    x: 0,
    z: 0,
  };

  // cameraPosition.value = {
  //   x: cameraPosition.value.x + 0.001,
  //   y: cameraPosition.value.y + 0.001 * Math.sin(elapsed / 1000),
  //   z: -elapsed / 25,
  // };



});
</script>

<style scoped>
.bg-with-texture {
  background: url("/bg_texture.png");
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #f5f5f5;
  /* min-height: 100vh; */
  position: relative;
  overflow: hidden;
}
</style>
