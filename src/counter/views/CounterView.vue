<template>
  <h1>Counter is {{ counter }}</h1>
  <div class="flex">
    <button class="bg-indigo-400 p-2 rounded-md m-2" @click="increment">ADD</button>
    <br />
    <button class="bg-indigo-400 p-2 rounded-md m-2" @click="increment">ADD</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const counter = ref(9)
const increment = () => {
  counter.value++
}
</script>
