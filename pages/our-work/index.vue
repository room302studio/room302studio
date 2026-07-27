<template>
  <div>
    <section>
      <p class="eyebrow">Room 302 Studio</p>
      <h1>Our Work</h1>
      <p class="measure">
        Selected projects from our portfolio — data visualization, interactive maps, and tools for
        the AP, Wildlife Conservation Society, The Plotline, and more.
      </p>
      <p class="muted measure">This is just the stuff we're allowed to show you.</p>
    </section>

    <section>
      <h2>Client Work</h2>
      <table>
        <thead>
          <tr><th>Project</th><th>Client</th><th>Role</th></tr>
        </thead>
        <tbody>
          <tr v-for="project in clientWork" :key="project.path">
            <td><NuxtLink :to="project.path">{{ project.title }}</NuxtLink></td>
            <td>{{ project.client }}</td>
            <td>{{ project.role }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Internal Projects</h2>
      <table>
        <thead>
          <tr><th>Project</th><th>Type</th><th>Description</th></tr>
        </thead>
        <tbody>
          <tr v-for="project in internalWork" :key="project.path">
            <td><NuxtLink :to="project.path">{{ project.title }}</NuxtLink></td>
            <td>{{ project.type || 'Internal' }}</td>
            <td class="muted">{{ project.description }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Contact</h2>
      <p>Have a project in mind? <a href="mailto:studio@room302.studio">studio@room302.studio</a></p>
    </section>
  </div>
</template>

<script setup>
// use the default layout
definePageMeta({
  layout: "default",
  scrollToTop: true
});

useHead({ title: 'Our Work — Room 302 Studio' })
useSeoMeta({
  title: 'Our Work — Room 302 Studio',
  description: 'Selected projects from Room 302 Studio — data visualization, interactive maps, and tools for the AP, Wildlife Conservation Society, The Plotline, and more.',
  ogTitle: 'Our Work — Room 302 Studio',
  ogDescription: 'Selected projects from Room 302 Studio — data visualization, interactive maps, and tools for the AP, Wildlife Conservation Society, The Plotline, and more.',
})

const { data: clientWork } = await useAsyncData(
  "content/our-work/client-work",
  () => queryCollection("clientWork").all(),
);

const { data: internalWork } = await useAsyncData(
  "content/our-work/internal-work",
  () => queryCollection("internalWork").all(),
);
</script>
