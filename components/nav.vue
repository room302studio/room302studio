<template>
  <ul class="list ma0 py-2 lg:py-4 px-2 lg:px-5 text-xl lg:text-2xl text-center font-extrabold">
    <li class="inline-block px-1 leading-loose mr-2 lg:mr-4 my-0">
      <NuxtLink
        class="link text-black dark:text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/">Home</NuxtLink>
    </li>
    <!-- <li class="inline-block px-1 leading-loose mr-2 lg:mr-4 my-0">
    <NuxtLink class="link text-black dark:text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100" to="/our-work">Our Work</NuxtLink>
  </li> -->
    <li class="inline-block px-1 leading-loose mr-2 lg:mr-4 my-0">
      <NuxtLink
        class="link text-black dark:text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/members">Members</NuxtLink>
    </li>

    <li class="inline-block px-1 leading-loose mr-2 lg:mr-4 my-0">
      <NuxtLink
        class="link text-black dark:text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/our-work">Previous Work</NuxtLink>
    </li>

    <li class="inline-block px-1 leading-loose mr-2 lg:mr-4 my-0">
      <NuxtLink
        class="link text-black dark:text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/events">Events</NuxtLink>
    </li>

    <li class="inline-block px-1 leading-loose mr-2 lg:mr-4 my-0">
      <NuxtLink
        class="link text-black dark:text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/blog">Blog</NuxtLink>
    </li>

    <li class="inline-block px-1 leading-loose mr-2 lg:mr-4 my-0">
      <NuxtLink
        class="link text-black dark:text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/contact">Get in touch</NuxtLink>
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