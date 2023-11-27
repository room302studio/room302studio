<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const projects = ref([
  { id: 1, name: 'Project 1', type: 'internal', members: ['John', 'Jane', 'Doe'], slug: 'project-1' },
  { id: 2, name: 'Project 2', type: 'client', members: ['John', 'Doe'], slug: 'project-2' },
  // Add more projects as needed
])

const router = useRouter()

const navigateToProject = (slug) => {
  router.push(`/members/project/${slug}`)
}
</script>

<template>
  <div class="flex flex-wrap">
    <div v-for="project in projects" :key="project.id" class="w-1/2 p-4">
      <div class="card">
        <h2>{{ project.name }}</h2>
        <p>Members: {{ project.members.join(', ') }}</p>
        <button @click="navigateToProject(project.slug)">Go to project</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
