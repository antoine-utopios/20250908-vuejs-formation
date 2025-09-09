import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import ProductDetails from '@/views/product/ProductDetails.vue'
import ProductList from '@/views/product/ProductList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/products', component: ProductList },
    { path: '/products/:productId(\\d+)', component: ProductDetails },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ],
})

export default router
