<template>
  <div>Pokemon List ({{ count }})</div>
  <span v-if="isLoading">Cargando</span>
  <ul v-else>
    <li v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.name }}</li>
  </ul>
</template>
<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons'

const { isLoading, count, pokemons } = usePokemons()
</script>
