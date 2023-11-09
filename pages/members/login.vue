<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const rememberMe = ref(false)
const loginError = ref(false)

</script>

<template>
  <div>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <label>
      <input type="checkbox" v-model="rememberMe" />
      Remember me
    </label>
    <button @click="login">Login</button>
    <p v-if="loginError" style="color: red;">Invalid username or password</p>
  </div>
</template>
