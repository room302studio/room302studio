<template>
  <main class="f4 lh-copy">
    <div v-if="data?.image" :style="{
      backgroundImage: `url(${data.image})`,
    }" class="min-h-96 md:min-h-auto bg-cover bg-center rounded-lg shadow-md">
      <!-- <img :src="data.image" alt="" class="w-full rounded-lg shadow-md" /> -->
    </div>

    <!-- project metadata -->
    <div class="flex mt-4 mb-8">
      <div class="w-1/2">
        <h4 class="text-gray-400 uppercase font-medium">
          Project Brief
        </h4>
        <p class="tracking-tight text-gray-700 dark:text-gray-300 pt-0 mt-0 pr-2 lg:pr-8 text-2xl leading-relaxed">
          {{ data?.description }}
        </p>
      </div>

      <div class="w-1/2 flex">
        <div class="w-1/3">
          <h4 class="text-gray-400 uppercase font-medium">Client</h4>
          <p class="monospace tracking-tight text-gray-700 dark:text-gray-300 pt-0 mt-0 pr-2">
            {{ data?.client }}
          </p>
        </div>

        <div class="w-1/3">
          <h4 class="text-gray-400 uppercase font-medium">Services</h4>
          <p class="monospace tracking-tight text-gray-700 dark:text-gray-300 pt-0 mt-0 pr-2">
            {{ data?.role }}
          </p>
        </div>

        <div class="w-1/3">
          <h4 class="text-gray-400 uppercase font-medium">
            Technology
          </h4>
          <p class="monospace tracking-tight text-gray-700 dark:text-gray-300 pt-0 mt-0 pr-2">
            {{ data?.technology }}
          </p>
        </div>
      </div>
    </div>

    <div class="pad prose">
      <ContentRenderer :value="data">
        <template #empty>
          <div>
            <p>We couldn't find this blog post.</p>

            <UButton to="/" class="mt-4"> Back home </UButton>
          </div>
        </template>
      </ContentRenderer>
    </div>

    <!-- make a related work section (just 3 random client works -->
    <section class="w-full">
      <UDivider class="my-8 md:my-12 lg:my-24" />
      <h4 class="my-8">Related Work</h4>
      <!-- make 3x3 grid of the projects in cards -->
      <div class="projects grid grid-cols-2 gap-4 lg:gap-8">
        <div v-for="project in clientWork" :key="project.title" :project="project"
          class="hover:shadow-lg transition-all flex rounded-lg bg-stone-100 min-h-32">
          <div class="flex-1 min-w-24" v-if="project.image">
            <!-- Assuming you have an image url 'backgroundUrl' -->
            <div class="h-full bg-cover bg-center" :style="{ backgroundImage: `url(${project.image})` }"></div>
          </div>

          <div class="flex-1 p-4">
            <NuxtLink :to="project._path" class="tracking-wide leading-snug no-underline">
              {{ project.title }}
            </NuxtLink>
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

const { data: clientWork } = await useAsyncData(
  "content/our-work/client-work",
  () => queryContent("our-work/client-work").find(),
);

const { data: internalWork } = await useAsyncData(
  "content/our-work/internal-work",
  () => queryContent("our-work/internal").find(),
);

// make data a computed where we find the right client work item
const data = computed(() => {
  if (!clientWork.value) return;
  const slug = route.params.slug[0];
  const item = clientWork.value.find(
    (item) => item._path === `/our-work/client-work/${slug}`,
  );
  return item;
});
</script>
