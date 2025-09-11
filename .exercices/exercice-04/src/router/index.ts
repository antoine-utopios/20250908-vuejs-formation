import { createRouter, createWebHistory } from 'vue-router'
import HomePokedex from '../views/pokemon/HomePokedex.vue'
import PokemonDisplay from '../views/pokemon/PokemonDisplay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: { name: 'HomePokedex', params: { generation: 2 } } },
    {
      path: '/pokedex/:generation(\\d+)', name: 'HomePokedex', component: HomePokedex, children: [
        { path: 'pokemon/:pokemonId(\\d+)', name: 'PokemonDisplay', component: PokemonDisplay }
      ]
    }
  ]
})

export default router
