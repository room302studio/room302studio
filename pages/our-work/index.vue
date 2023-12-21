<template>
  <div class="">

    <section>
      <h2 class="text-4xl my-8">Internal Projects</h2>
      <!-- make 3x3 grid of the projects in cards -->
      <div class="projects grid grid-cols-3 gap-4">
        <UCard v-for="project in internalWork" :key="project.title" :project="project"
          class="hover:shadow-lg transition-all">
          <NuxtLink :to="project.link" class="text-2xl font-bold monospace tracking-wide">
            {{ project.title }}
          </NuxtLink>
          <p class="text-sm text-stone-600 leading-normal">{{ project.description }}</p>

          <p>
            <UButton :to="project.link" class="mt-4" color="gray">
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
const { data: clientWork } = await useAsyncData("content/client-work", () =>
  queryContent("client-work").find(),
);

const { data: internalWork } = await useAsyncData("content/internal-work", () =>
  queryContent("internal-work").find(),
);

</script>
