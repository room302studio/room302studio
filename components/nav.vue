<template>
  <ul
    class="flex flex-col md:flex-row list py-4 lg:py-6 px-2 lg:px-5 md:text-center font-extrabold leading-none bg-black text-white">
    <li class="inline-block p-1 mr-1 md:mr-2 lg:mr-4 my-0 md:my-1 flex-1 justify-center">
      <NuxtLink class="link text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100" to="/">
        Home
      </NuxtLink>
    </li>
    <!-- <li class="inline-block p-1 mr-1 md:mr-2 lg:mr-4 my-0">
    <NuxtLink class="link text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100" to="/our-work">Our Work</NuxtLink>
  </li> -->
    <li class="inline-block p-1 mr-1 md:mr-2 lg:mr-4 my-0 md:my-1 flex-1">
      <NuxtLink class="link text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/members">Members
      </NuxtLink>
    </li>

    <li class="inline-block p-1 mr-1 md:mr-2 lg:mr-4 my-0 md:my-1 flex-1">
      <NuxtLink class="link text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/our-work">
        Our Work</NuxtLink>
    </li>

    <!-- <li class="inline-block p-1 mr-1 md:mr-2 lg:mr-4 my-0 md:my-1 flex-1">
      <NuxtLink class="link text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/events">Events
      </NuxtLink>
    </li> -->

    <li class="inline-block p-1 mr-1 md:mr-2 lg:mr-4 my-0 md:my-1 flex-1">
      <NuxtLink class="link text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/blog">Blog
      </NuxtLink>
    </li>

    <li class="inline-block p-1 mr-1 md:mr-2 lg:mr-4 my-0 md:my-1 flex-1">
      <NuxtLink class="link text-white underline transition-opacity duration-150 ease-in-out hover:opacity-100"
        to="/contact">Contact</NuxtLink>
    </li>
  </ul>
</template>

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