<template>
  <ul class="list ma0 pv2 pv4-l ph2 ph5-l f4 tc sans-serif fw8">
    <li class="pa1 lh-copy dib mr2 mr4-l mv0">
      <NuxtLink class="link black underline dim" to="/">Home</NuxtLink>
    </li>
    <!-- <li class="pa1 lh-copy dib mr2 mr4-l mv0">
    <NuxtLink class="link black underline dim" to="/our-work">Our Work</NuxtLink>
  </li> -->
    <li class="pa1 lh-copy dib mr2 mr4-l mv0">
      <NuxtLink class="link black underline dim" to="/members">Members</NuxtLink>
    </li>

    <li class="pa1 lh-copy dib mr2 mr4-l mv0">
      <NuxtLink class="link black underline dim" to="/our-work">Previous Work</NuxtLink>
    </li>

    <li class="pa1 lh-copy dib mr2 mr4-l mv0">
      <NuxtLink class="link black underline dim" to="/events">Events</NuxtLink>
    </li>

    <li class="pa1 lh-copy dib mr2 mr4-l mv0">
      <NuxtLink class="link black underline dim" to="/blog">Blog</NuxtLink>
    </li>
  </ul>
</template>
<script setup>

</script>
<style scoped>
li {
  margin-right: 8vw;
}

li a {
  transition: opacity 1.5s cubic-bezier(0.5, 1, 0.89, 1);
}

/* make the non router-active links opacity 25% */
li>a.router-link-exact-active {
  opacity: 1;
  text-decoration: underline;
}

li>a.router-link-active {
  opacity: 1;
}

li>a {
  opacity: 0.25;
  text-decoration: none;
}

li>a:hover {
  opacity: 1;
}
</style>