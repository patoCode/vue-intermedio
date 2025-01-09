<template>
  <div>Pokemon List Native ({{ store.pokemons.count }})</div>
  <span v-if="store.pokemons.isLoading">Cargando</span>
  <span v-if="store.pokemons.hasError">Falla</span>
  <PokemonCardList :pokemons="store.pokemons.list" />
</template>
<script setup lang="ts">
import store from '@/store/pokemon.store'
</script>
