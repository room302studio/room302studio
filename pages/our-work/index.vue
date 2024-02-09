<template>
  <div class="min-h-screen pad">
    <!-- some paragraphs explaining the difference between our internal and client work -->
    <h1 class="text-6xl font-light mb-8">Our Work</h1>
    <p class="text-lg mt-6 max-w-lg text-balance">
      At Room 302 Studio, our work is all about innovation with impact. Whether
      we're collaborating with mission-driven clients or building our own
      open-source platforms, each project is a step towards a better future. Our
      portfolio spans environmental activism to artificial intelligence, all
      crafted with passion and purpose– and this is just the stuff we are
      allowed to show you.
    </p>

    <!-- Filter buttons for categories -->
    <!-- <section class="flex justify-end mt-8">
      <div v-for="category in categories" :key="category.slug" class="inline-block mr-4">
        <span @click="filterWorkTo(category.slug)" class="mt-4 py-2 px-4 bg-zinc-100 rounded-lg font-light"
          :color="activeWorkFilter === category.slug ? 'orange' : 'gray'" variant="solid">
          {{ category.name }}
        </span>
      </div>
    </section> -->

    <section class="my-12 lg:my-24">
      <h2 class="text-4xl my-8">Client Work</h2>
      <!-- make 3x3 grid of the projects in cards -->
      <div class="projects text-sm leading-tight grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-32">
        <div v-for="project in clientWork" :key="project.title" :project="project"
          class="hover:shadow-lg transition-all flex rounded-lg bg-stone-100 dark:bg-stone-900">
          <div class="flex-1 min-w-24">
            <!-- Assuming you have an image url 'backgroundUrl' -->
            <div class="h-full bg-cover bg-center" :style="{ backgroundImage: `url(${project.image})` }"></div>
          </div>

          <div class="flex-1 flex p-4 justify-between flex-col">
            <NuxtLink :to="project._path" class="text-lg font-normal tracking-wide leading-tight text-stone-700 flex-1">
              {{ project.title }}
            </NuxtLink>
            <p class="text-xs text-stone-800 tracking-wider font-semibold my-1">
              {{ project.client }}
            </p>

            <p class="text-xs text-stone-500 leading-normal font-light">
              {{ project.role }}
            </p>

            <!-- <UButton :to="project._path" class="mt-4" color="gray">
              View Project
            </UBUtton> -->
          </div>
        </div>
      </div>
    </section>

    <section class="mt-24 lg:mt-36">
      <h2 class="text-4xl my-8">Internal Projects</h2>
      <!-- make 3x3 grid of the projects in cards -->
      <div class="projects text-sm leading-tight grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-32">
        <div v-for="project in internalWork" :key="project.title" :project="project"
          class="hover:shadow-lg transition-all flex rounded-lg bg-stone-100 dark:bg-stone-900">
          <div class="flex-1 min-w-24">
            <!-- Assuming you have an image url 'backgroundUrl' -->
            <div class="h-full bg-cover bg-center" :style="{ backgroundImage: `url(${project.image})` }"></div>
          </div>

          <div class="flex-1 p-4">
            <NuxtLink :to="project._path" class="text-lg font-bold tracking-wide leading-tight text-stone-800">
              {{ project.title }}
            </NuxtLink>
            <p class="text-sm text-stone-600 leading-normal">
              {{ project.description }}
            </p>

            <!-- <UButton :to="project._path" class="mt-4" color="gray">
              View Project
            </UBUtton> -->
          </div>
        </div>
      </div>
    </section>

    <!-- <section>
      <h2 class="text-4xl my-8">Client Work</h2>
      <UCard v-for="post in clientWork" :key="post.slug" :post="post" class="mb-6" v-show="post._path !== '/client-work'">
        <NuxtLink :to="post._path">
          <h1>{{ post.title }}</h1>
        </NuxtLink>
      </UCard>
    </section> -->
  </div>
</template>

<script setup>
const categories = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "Environment & Climate",
    slug: "environment",
  },
  {
    name: "News Organizations",
    slug: "news",
  },
  {
    name: "Nonprofits",
    slug: "nonprofits",
  },
  {
    name: "AI",
    slug: "ai",
  },
];

const activeWorkFilter = ref("all");

const filteredWork = ref([]);
const filterWorkTo = (category) => {
  activeWorkFilter.value = category;
  filteredWork.value = internalWork.filter((project) => {
    return project.categories.includes(category);
  });
};

watch(activeWorkFilter, (newVal) => {
  if (newVal === "all") {
    filteredWork.value = internalWork;
  } else {
    filteredWork.value = internalWork.filter((project) => {
      return project.categories.includes(newVal);
    });
  }
});

// use the default layout
definePageMeta({
  layout: "default",
});

const { data: clientWork } = await useAsyncData(
  "content/our-work/client-work",
  () => queryContent("our-work/client-work").find(),
);

const { data: internalWork } = await useAsyncData(
  "content/our-work/internal-work",
  () => queryContent("our-work/internal").find(),
);
</script>
