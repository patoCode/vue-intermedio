<template>
  <div class="m-3">
    <NavBar :links="routerLinks" />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavBar from './pokemons/shared/components/NavBar.vue'
import { routerLinks } from './pokemons/router/list-routes'
</script>
