import { computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-pokemons'

export const usePokemons = () => {
  const { isLoading, data: pokemons } = useQuery({ queryKey: ['pokemons'], queryFn: getPokemons })

  return {
    pokemons,
    isLoading,

    count: computed(() => pokemons.value?.length ?? 0),
  }
}
