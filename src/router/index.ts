import CounterView from '@/counter/views/CounterView.vue'
import { pokemonRoutes } from '@/pokemons/router/indeX'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CounterView,
    },
    {
      //& OJO!!!! es importante el orden de esta asignacion, al reves de como esta ahora noi funciona
      ...pokemonRoutes,
      path: '/pokemons',
    },
    {
      path: '/:pathMatch(.*)',
      name: 'redirect',
      redirect: () => {
        //& Logica de lo que sea
        console.log('Ruta no existe')
        return { name: 'home' }
      },
    },
  ],
})

export default router
