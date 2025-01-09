import { computed, ref } from 'vue'
import { getPokemons } from '../helpers/get-pokemons'
import type { Pokemon } from '../interfaces'

// export const usePokemons = () => {
//   const pokemons = ref<Pokemon[]>([])
//   const isLoading = ref(true)

//   getPokemons().then((data) => {
//     pokemons.value = data
//     isLoading.value = false
//   })

//   return {
//     pokemons,
//     isLoading,
//     // & ESTO lo hacemos con una computada porque vamos a estar al pendiente del cambio del valor, de lo contrario el valor del length nunca cambiaria en la "VISTA"
//     count: computed(() => pokemons.value.length),
//   }
// }
