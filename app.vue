<template>
  <div class="">
    <!-- <div class="pa5 f3 near-white">  
    <img src="/logo1.r2.svg" alt="Room 302 Studio" class="w-100"/>
  </div> -->
    <!-- use tachyons flex to vertically and horizontally center the logo -->
    <div class="flex items-center justify-center w-100 overflow-hidden">
      <img src="/logo1.r2.svg" id="logo" alt="Room 302 Studio" class="w-100 pa6-ns" />
    </div>

    <div class="pa3 pa5-ns f3 near-white lh-copy measure center">
      <p>
        <span class="orange">Room 302 Studio</span> is where our team creates projects that make a real impact. Our top-tier consulting services focus on cultivating joyful development and open-source tools that contribute to a better world.
      </p>
    </div>

    <div class="pa3 pa5-ns f3 white lh-copy bg-orange">
      <h3 class="ma0 pa0 pv4 lh-title tracked tc">Say hello: <a href="mailto:studio@room302.studio" class="fw8 link underline white">studio@room302.studio</a></h3>
    </div>

    <div class="pa3 pa5-ns f3 near-white lh-copy measure center">
      <h2 class="orange lh-title f2">Available to hire</h2>
      <p>
        Our skilled data visualization and prototyping experts work diligently to shape your vision into reality. We pride ourselves on our ability to create innovative, joy-driven solutions that make a positive impact on the world.
      </p>

      <p>
        With our diverse skill set and collaborative approach, we'll transform your data or idea into a prototype that tells your story, engages your audience, and exceeds your expectations.
      </p>
    </div>

    <div class="pa3 pa5-ns f3 near-white lh-copy measure center">
      <h2 class="orange lh-title f2">Available for collaboration</h2>
      <p>
        Room 302 Studio is a vibrant space where passionate creators, innovators, and visionaries come together to collaborate, learn, and grow. As a member of our community and Discord, you'll have access to invaluable resources, thought-provoking discussions, and opportunities to work on projects that make a meaningful difference.
      </p>

      <p>
        Whether you're a seasoned professional or just starting your creative journey, Room 302 Studio is the place to expand your horizons, nurture your talents, and make lasting connections.
      </p>
    </div>



  </div>


</template>
<style>
body {
  background-color: #2A3A44;
  font-family: 'Source Code Pro', monospace;
}

h1 {
  /* font-size: 9.9rem; */
}

#logo {
  max-height: 50vh;
}

.monospace {
  font-family: 'Source Code Pro', monospace !important;
}

.near-white {
  color: #D1DCE3 !important;
}

.orange {
  color: #E17055 !important;
}

.bg-orange {
  background-color: #E17055 !important;
}
</style>
