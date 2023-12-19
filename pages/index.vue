<template>
  <div class="index">

    <div class="py-5 dark:text-white leading-relaxed">


      <p class="dark:text-white text-4xl w-8/12">
        We are a bespoke innovation lab that guides concepts from ideation to implementation<span
          class="text-primary-500">.</span>
      </p>

      <p class="text-lg mt-6 max-w-prose text-balance">
        Innovation is at the heart of everything we do. Our collaborations span startups, mature companies, non-profits,
        and news
        organizations. We provide the tools, expertise, and collaborative environment
        needed to <span class="text-orange">turn ideas into reality.</span> Our team of experts thrives on pushing
        boundaries,
        experimenting with
        cutting-edge technologies, and driving change.
      </p>



      <div class="intro-wrapper relative flex my-32 max-w-2xl">
        <div class="intro-text-wrapper w-1/2">
          <h4 class="text-xs font-medium text-gray-500">Toptop</h4>
          <h2 class="text-xl font-medium text-primary-500">Biggy metus</h2>
          <div class="intro-text text-sm my-2 pl-4 border-l-2 border-gray-500">
            <p class="max-w-prose text-blance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.</p>

            <p class="max-w-prose text-blance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.</p>
          </div>

        </div>
        <div class="intro-images-wrapper w-3/6 grid grid-cols-1 grid-rows-1 relative p-12">
          <img src="https://via.placeholder.com/900" alt=""
            class="intro-image row-start-1 col-start-1 w-full shadow-lg rounded-sm" />
          <img src="https://via.placeholder.com/900" alt=""
            class="intro-image row-start-1 col-start-1 w-full shadow-lg rounded-sm absolute translate-x-10 translate-y-10 hover:translate-x-11 hover:translate-y-11 transition-transform" />
        </div>
      </div>







      <p class="text-lg mt-6 max-w-prose text-balance">
        We harness the power of over 30 collective years of data visualization and prototyping expertise from our founding
        members.
        <NuxtLink class="underline dark:text-white" to="/members">
          <img src="/member-headshots/curran-headshot.png"
            class="w-4 h-4 rounded-full inline-block mr-1 border border-white" alt="Curran" />
          <img src="/member-headshots/ej-headshot.png" class="w-4 h-4 rounded-full inline-block mr-1 border border-white"
            alt="EJ" />
          <img src="/member-headshots/israel-headshot.png"
            class="w-4 h-4 rounded-full inline-block mr-1 border border-white" alt="Israel" />
          <img src="/member-headshots/ian-headshot.png" class="w-4 h-4 rounded-full inline-block mr-1 border border-white"
            alt="Ian" />
        </NuxtLink>
        We've extended our capabilities to include product development, artificial intelligence, and other cutting-edge
        technologies.
      </p>

      <p class="text-lg mt-6 max-w-prose text-balance">
        Our diverse backgrounds enable us to approach projects from multiple perspectives. We've had the
        privilege of working with renowned organizations such as GitHub, NBC News, The Washington Post, CBS News,
        McKinsey, Stamen, and Google, bringing a wealth of experience and expertise to every project.
      </p>

      <p class="text-lg mt-6 max-w-prose text-balance">
        Whether you're a startup eager to revolutionize the market, an established firm seeking innovation and growth, or
        a non-profit wanting to propel societal change, <strong class="text-orange">Room 302 Studio</strong> is your
        trusted
        collaborator. Let's work together
        to transform your ideas into tangible solutions that make a lasting difference in the world.
      </p>
    </div>


    <div class="p-3 md:p-5 text-3xl md:text-5xl dark:text-white leading-relaxed bg-orange">
      <h3 class="m-0 p-0 py-4 leading-tight text-center">Say hello: <a href="mailto:studio@room302.studio"
          class="font-bold underline dark:text-white">
          <span class="hidden md:inline-block">studio</span><span
            class="hidden md:inline-block">@room302.studio</span></a>
      </h3>
    </div>


    <div class="p-3 md:p-5 text-lg dark:text-white leading-relaxed max-w-xl mx-auto">
      <h2 class="text-orange text-2xl leading-tight">Available for collaboration</h2>
      <p>Beyond traditional client services, <strong class="text-orange">Room 302 Studio</strong> serves as a dynamic
        digital
        workspace, uniting creators to collectively build and grow. We champion personal projects, contribute to
        open-source
        initiatives, and engage in impactful pro-bono work.</p>

      <p>By joining our collaborative network, gain exclusive early access to resources, partake in stimulating
        discussions, and contribute to projects that make a significant impact.</p>
    </div>

    <MailchimpSignupForm class="p-0 md:p-5 max-w-xl mx-auto" />

  </div>
</template>
<script setup>
// import animejs
// import anime from 'animejs/lib/anime.es.js'
import { animate, stagger, createTimeline } from '/Users/ejfox/code/anime-beta/lib/anime.esm.min.js'



onMounted(() => {
  // animate('.intro-wrapper img', {
  //   // translateX: 320,
  //   // scaleZ: { from: 0, to: 1 },
  //   // scale: { from: 0.2, to: 1 },
  //   keyframes: [
  //     { rotateX: 0 },
  //     { rotateY: 22 },
  //     { rotateX: 22 },
  //   ],
  //   scale: [0.9, 1],
  //   duration: 2000,
  //   // delay: stagger(250),
  //   // ease: 'inOutQuad',
  //   // ease: 'outElastic(1, 1)',
  //   ease: 'linear',
  //   loop: true,
  //   alternate: true

  // })

  const tl = createTimeline({
    loop: true,
  })

  // tl.add('.intro-wrapper img', {
  //   rotateX: { from: -100, to: 100 },
  // })

  tl.add('.intro-wrapper img', {
    keyframes: [
      { rotateX: 8, duration: 100, ease: 'inOutQuad' },
      { rotateY: -8, translateX: 1, duration: 900, ease: 'outQuad' },
    ],
    delay: stagger(2000),
    endDelay: 2500,
  })

  // tl.add('.intro-wrapper img', {
  //   scale: 1.1,
  //   delay: stagger(2000)
  // })

  tl.add('.intro-wrapper img', {
    keyframes: [
      { rotateX: 0, rotateY: 0, translateX: 0, duration: 3000 },
    ],
    delay: stagger(2000),
    ease: 'inOutQuad'
  })

  // tl.add('.intro-wrapper img', {
  //   scale: 1,
  //   delay: stagger(2000)
  // })
})

// animate logo on mounted
// onMounted(() => {

//   const animStepDuration = 500

//   const tl = anime.timeline({
//     easing: 'easeInOutQuad',
//     duration: animStepDuration,
//     delay: 200
//   })

//   // anime room in
//   tl.add({
//     targets: 'svg #room',
//     opacity: [0, 1],
//     translateY: [-100, 0],
//     duration: animStepDuration * 1.2,
//   })

//   // animate 302 in
//   // tl.add({
//   //   targets: 'svg #threeohtwo302',
//   //   opacity: [0, 1],
//   //   // animate the letters in a bit slower than the rest of the animation
//   //   duration: animStepDuration,
//   // }, '-=' + animStepDuration * 0.72)

//   const letterEasing = 'spring(1, 80, 10, 0)'
//   const letterDurationScalar = 0.04
//   const letterAppearScalar = 3.3

//   // // animate #three in
//   tl.add({
//     targets: 'svg #three',
//     opacity: [0, 1],
//     translateY: [-25, 0],
//     translateX: [-25, 0],
//     rotateX: [-90, 0],
//     // rotateY: [45, 0],
//     // easing: 'spring(1, 80, 10, 0)',
//     // even looser springier spring, but same duration
//     easing: letterEasing,
//     duration: animStepDuration * letterDurationScalar,
//   }, '-=' + animStepDuration * 0.6)

//   // animate #oh in
//   tl.add({
//     targets: 'svg #oh',
//     opacity: [0, 1],
//     translateY: [-25, 0],
//     // translateX: [-25, 0],
//     rotateX: [90, 0],
//     // rotateY: [180, 0],
//     easing: letterEasing,
//     duration: animStepDuration * letterDurationScalar,
//   }, '-=' + animStepDuration * letterAppearScalar)

//   // animate #two in
//   tl.add({
//     targets: 'svg #two',
//     opacity: [0, 1],
//     translateY: [-25, 0],
//     translateX: [25, 0],
//     rotateX: [180, 0],
//     // rotateY: [90, 0],
//     easing: letterEasing,
//     duration: animStepDuration * letterDurationScalar,
//   }, '-=' + animStepDuration * letterAppearScalar)



//   // animate the circle in
//   tl.add({
//     targets: 'svg #circle',
//     opacity: [0, 1],
//     duration: animStepDuration * 1.9,
//   }, '-=' + animStepDuration * 2.2)

//   // tl.add({
//   //   targets: 'svg #circle',
//   //   rotate: [0,360],
//   //   duration: 3000,
//   //   easing: 'linear',
//   //   loop: true,
//   // })

//   // animate the text
//   // tl.add({
//   //   targets: 'svg #text',
//   //   opacity: [0, 1],
//   //   duration: 500,
//   //   // delay: 500,
//   // })

//   // make the circle rotate forever
//   // anime({
//   //   targets: 'svg #circle',
//   //   rotate: [0,360],
//   //   duration: 192000,
//   //   easing: 'linear',
//   //   loop: true,
//   // })



// })
</script>
<style scoped>
p {
  text-wrap: balance;
}
</style>
```