<template>
  <h1>Counter is {{ counter }}</h1>
  <button class="bg-indigo-400" @click="increment">ADD</button>
  <br />
  <button class="bg-indigo-400" @click="increment">ADD</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const counter = ref(9)
const increment = () => {
  counter.value++
}
</script>
