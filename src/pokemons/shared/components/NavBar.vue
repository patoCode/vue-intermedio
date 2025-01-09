<template>
  <nav class="p-4 bg-blue-700 rounded-md font-black uppercase my-2">
    <p class="text-slate-300">{{ title }}</p>
    <hr />
    <ul class="flex items-center justify-start mt-3 gap-2">
      <RouterLink
        class="border border-blue-500 p-2 rounded-md hover:text-blue-900 hover:bg-blue-200"
        v-for="link of links"
        :key="link.path"
        :to="link.path"
      >
        {{ link.name }}
      </RouterLink>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { RouterLink } from '@/pokemons/router/list-routes'

interface Props {
  title?: string
  links: RouterLink[]
}

withDefaults(defineProps<Props>(), {
  title: 'titulo por defecto',
})
</script>
