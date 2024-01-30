<template>
  <main class="f4 lh-copy prose dark:prose-invert">
    <!-- big hero image -->
    <div v-if="data?.image" :style="{
      backgroundImage: `url(${data.image})`,
    }" class="min-h-96 bg-cover bg-center rounded-lg shadow-md">
      <!-- <img :src="data.image" alt="" class="w-full rounded-lg shadow-md" /> -->
    </div>

    <!-- project metadata -->
    <div class="flex">
      <div class="w-1/2">
        <h4 class="text-gray-400 uppercase text-xs font-medium">Project Description</h4>
        <p>
          {{ data?.description }}
        </p>
      </div>

      <div class="w-1/2 flex">
        <div class="w-1/3">
          <h4 class="text-gray-400 uppercase text-xs font-medium">Client</h4>
          <p>
            {{ data?.client }}
          </p>
        </div>

        <div class="w-1/3">
          <h4 class="text-gray-400 uppercase text-xs font-medium">Services</h4>
          <p>
            {{ data?.role }}
          </p>
        </div>

        <div class="w-1/3">
          <h4 class="text-gray-400 uppercase text-xs font-medium">Technology</h4>
          <p>
            {{ data?.technology }}
          </p>
        </div>
      </div>
    </div>

    <ContentRenderer :value="data">
      <template #empty>
        <div>
          <p>We couldn't find this blog post.</p>

          <UButton to="/" class="mt-4">
            Back home
          </UButton>
        </div>
      </template>
    </ContentRenderer>

    <!-- make a related work section (just 3 random client works -->
    <section class="w-full">
      <h4 class="my-8">Related Work</h4>
      <!-- make 3x3 grid of the projects in cards -->
      <div class="projects grid grid-cols-3 gap-4">
        <div v-for="project in clientWork" :key="project.title" :project="project"
          class="hover:shadow-lg transition-all flex rounded-lg bg-zinc-100 ">
          <div class="flex-1 min-w-24">
            <!-- Assuming you have an image url 'backgroundUrl' -->
            <div class="h-full bg-cover bg-center" :style="{ backgroundImage: `url(${project.image})` }"></div>
          </div>

          <div class="flex-1 p-4">
            <NuxtLink :to="project._path" class="tracking-wide leading-snug no-underline">
              {{ project.title }}
            </NuxtLink>

            <!-- <UButton :to="project._path" class="mt-4" color="gray">
              View Project
            </UBUtton> -->
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
definePageMeta({
  layout: "work",
});

const route = useRoute();

// const { data } = await useAsyncData(async () => {
//   return queryContent("our-work/client-work", route.params.slug[0]).findOne();
// });

const { data: clientWork } = await useAsyncData("content/our-work/client-work", () =>
  queryContent("our-work/client-work").find(),
);

const { data: internalWork } = await useAsyncData("content/our-work/internal-work", () =>
  queryContent("our-work/internal").find(),
);

// make data a computed where we find the right client work item
const data = computed(() => {
  if (!clientWork.value) return
  const slug = route.params.slug[0]
  const item = clientWork.value.find((item) => item._path === `/our-work/client-work/${slug}`)
  return item
})
</script>
