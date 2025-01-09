<template>
  <div
    class="flex flex-col border border-slate-800 rounded-md bg-transparent group hover:bg-blue-600 group-hover: cursor-pointer group-hover:border-0"
  >
    <img :src="pokemon.fronSprite" alt="" class="w-[190px]" />
    <p class="uppercase font-black text-blue-700 group-hover:text-blue-900">
      {{ pokemon.name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces'

interface Props {
  pokemon: Pokemon
}

defineProps<Props>()
</script>
