<script setup>
import { ref } from 'vue'
import { useFetch } from '@vueuse/core'

const project = ref(null)

const { isFetching, error, data } = useFetch('https://api.harvestapp.com/v2/projects/' + project.value.id)

if (data.value) {
  project.value = {
    id: data.value.id,
    name: data.value.name,
    status: data.value.status,
    budget: data.value.budget,
    hoursWorked: data.value.hours
  }
}

</script>

<template>
  <div class="card" v-if="project.value">
    <h2>{{ project.value.name }}</h2>
    <p>Status: {{ project.value.status }}</p>
    <p>Budget: {{ project.value.budget }}</p>
    <p>Hours Worked: {{ project.value.hoursWorked }}</p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
