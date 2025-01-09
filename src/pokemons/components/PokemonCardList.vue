<template>
  <div class="grid grid-cols-4 items-center justify-start gap-3 p-4">
    <PokemonCard
      class="bg-blue-700 border p-2 flex items-center justify-center"
      v-for="(pokemon, index) of pokemons"
      :key="index"
      :pokemon="pokemon"
    />
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces'
import PokemonCard from './PokemonCard.vue'

interface Props {
  pokemons: Pokemon[]
}

defineProps<Props>()
</script>
