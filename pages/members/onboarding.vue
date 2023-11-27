<script setup>
import { ref } from 'vue'

const tasks = ref([
  { id: 1, title: 'Task 1', completed: false, image: '/path/to/image1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Task 2', completed: false, image: '/path/to/image2.jpg', description: 'Nulla ac ante euismod, ultricies nunc quis, ultrices nisl.' },
  { id: 3, title: 'Task 3', completed: false, image: '/path/to/image3.jpg', description: 'Sed euismod, nisl quis lacinia ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl vitae nisl.' },
  { id: 4, title: 'Task 4', completed: false, image: '/path/to/image4.jpg', description: 'Sed euismod, nisl quis lacinia ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl vitae nisl.' },
  { id: 5, title: 'Task 5', completed: false, image: '/path/to/image5.jpg', description: 'Sed euismod, nisl quis lacinia ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl vitae nisl.' },
  { id: 6, title: 'Task 6', completed: false, image: '/path/to/image6.jpg', description: 'Sed euismod, nisl quis lacinia ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl vitae nisl.' },
])

const activeTask = ref(tasks.value[0])

const completeTask = (task) => {
  task.completed = true
  const nextTaskIndex = tasks.value.findIndex(t => t.id === task.id) + 1
  if (nextTaskIndex < tasks.value.length) {
    activeTask.value = tasks.value[nextTaskIndex]
  }
}
</script>

<template>
  <div class="flex">
    <div class="w-1/2">
      <ul>
        <li v-for="task in tasks" :key="task.id" :class="['task', { completed: task.completed, active: task === activeTask }]">
          {{ task.title }}
          <img :src="task.image" :alt="task.title">
          <p>{{ task.description }}</p>
          <button @click="completeTask(task)" v-if="!task.completed">Complete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.task {
  transition: all 0.5s ease;
}
.task.completed {
  transform: scale(1.2);
  opacity: 0;
}
.task.active {
  transform: scale(1.1);
}
</style>



