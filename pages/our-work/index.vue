<template>
  <div class="">

    <!-- some paragraphs explaining the difference between our internal and client work -->
    <p class="text-lg mt-6 max-w-prose text-balance">
      We work on a variety of projects, from internal projects to client work. We love to work with clients who are driven
      by a mission to make the world a better place. We also love to work on our own projects, which are often open source
      and free to use.
    </p>

    <section>
      <h2 class="text-4xl my-8">Internal Projects</h2>
      <!-- make 3x3 grid of the projects in cards -->
      <div class="projects grid grid-cols-3 gap-4">
        <UCard v-for="project in internalWork" :key="project.title" :project="project"
          class="hover:shadow-lg transition-all">
          <!-- <pre>{{ project }}</pre> -->
          <NuxtLink :to="project._path" class="text-2xl font-bold monospace tracking-wide">
            {{ project.title }}
          </NuxtLink>
          <p class="text-sm text-stone-600 leading-normal">{{ project.description }}</p>

          <p>
            <UButton :to="project._path" class="mt-4" color="gray">
              View Project
            </UBUtton>
          </p>
        </UCard>
      </div>
    </section>


    <section>
      <h2 class="text-4xl my-8">Client Work</h2>
      <UCard v-for="post in clientWork" :key="post.slug" :post="post" class="mb-6" v-show="post._path !== '/client-work'">
        <NuxtLink :to="post._path">
          <h1>{{ post.title }}</h1>
        </NuxtLink>
      </UCard>
    </section>
  </div>
</template>

<script setup>

// use the default layout
definePageMeta({
  layout: "default",
})

const { data: clientWork } = await useAsyncData("content/our-work/client-work", () =>
  queryContent("our-work/client-work").find(),
);

const { data: internalWork } = await useAsyncData("content/our-work/internal-work", () =>
  queryContent("our-work/internal").find(),
);

</script>
