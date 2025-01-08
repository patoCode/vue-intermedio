<template>
  <div>Pokemon List</div>
</template>
<script setup lang="ts">
import { getPokemons } from '../helpers/get-pokemons'
const pokemons = getPokemons()

console.log('Pokemons', pokemons)
</script>
