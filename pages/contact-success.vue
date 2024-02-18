<template>
  <div class="flex flex-col items-center justify-center h-screen" id="thanks">
    <h1 class="text-4xl lg:text-8xl text-center font-bold">Thank you for reaching out!</h1>
    <p class="text-lg mt-32">We'll be in touch soon.</p>
  </div>
</template>

<script setup>
import { animate, createAnimatable, stagger } from "~/anime.esm.min.js";

function animatePushIn(e) {
  // console.log('animatePushIn')
  // console.log(e)
  // const targetEl = e[0].target
  // console.log(targetEl)

  const targetMap = e.map((el) => el.target)


}

onMounted(() => {
  animate(
    '#thanks h1', {

    rotate: [-10, 10],
    duration: 10000,
    // ease: 'inOutQuad',
    loop: true,
    alternate: true,
  });

  animate(
    '#thanks p', {
    keyframes: [

      { translateY: 10 },
      { translateY: -10 },
      { translateY: 0 },
    ],
    duration: 1000,
    // ease: 'inOutQuad',
    ease: 'linear',

    loop: false
  });
});
</script>

<style scoped></style>