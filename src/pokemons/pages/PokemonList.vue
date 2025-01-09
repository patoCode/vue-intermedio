<template>
  <div>Pokemon List ({{ count }})</div>
  <span v-if="isLoading">Cargando</span>
  <span v-if="isError">Falla</span>
  <PokemonCardList :pokemons="pokemons ?? []" />
</template>
<script setup lang="ts">
import PokemonCardList from '../components/PokemonCardList.vue'
import { usePokemons } from '../composables/usePokemons'

const { isLoading, isError, count, pokemons } = usePokemons()
</script>
