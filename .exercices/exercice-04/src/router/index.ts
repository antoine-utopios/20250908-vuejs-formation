import { createRouter, createWebHistory } from 'vue-router'
import HomePokedex from '../views/pokemon/HomePokedex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomePokedex', component: HomePokedex }
  ],
})

export default router
