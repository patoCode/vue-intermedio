<template>
  <div>Pokemon List ({{ count }})</div>
  <span v-if="isLoading">Cargando</span>
  <ul v-else>
    <li v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.name }}</li>
  </ul>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'

const { isLoading, data: pokemons } = useQuery({ queryKey: ['pokemons'], queryFn: getPokemons })

const count = computed(() => pokemons.value?.length ?? 0)

// import { usePokemons } from '../composables/usePokemons'

// const { isLoading, count, pokemons } = usePokemons() -->
</script>
