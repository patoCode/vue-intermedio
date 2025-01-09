import type { Pokemon } from '@/pokemons/interfaces'
import { reactive } from 'vue'

interface Store {
  //& Interface del state
  pokemons: {
    list: Pokemon[]
    count: number
    isLoading: boolean
    hasError: boolean
    errorMessage?: string
  }
  //& Actions Methods
  startLoadingPokemons: () => void
  loadedPokemons: (data: Pokemon[]) => void
  loadPokemonsFailed: (error: string) => void
}

const store = reactive<Store>({
  pokemons: {
    list: [],
    count: 0,
    isLoading: false,
    hasError: false,
    errorMessage: undefined,
  },
  startLoadingPokemons: function (): void {
    throw new Error('Function not implemented.')
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loadedPokemons: function (data: Pokemon[]): void {
    throw new Error('Function not implemented.')
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loadPokemonsFailed: function (error: string): void {
    throw new Error('Function not implemented.')
  },
})

export default store
