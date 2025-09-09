import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProductCreateView from '@/views/products/ProductCreateView.vue'
import ProductDeleteView from '@/views/products/ProductDeleteView.vue'
import ProductDetailsView from '@/views/products/ProductDetailsView.vue'
import ProductEditView from '@/views/products/ProductEditView.vue'
import ProductFormView from '@/views/products/ProductFormView.vue'
import ProductListView from '@/views/products/ProductListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/products', component: ProductListView },
    { path: '/products/create', component: ProductCreateView },
    { path: '/products/details/:productId', component: ProductDetailsView },
    { path: '/products/delete/:productId', component: ProductDeleteView },
    { path: '/products/edit/:productId', component: ProductEditView },
    { path: '/products/bis', component: ProductFormView },
    { path: '/products/bis/:productId', component: ProductFormView },
    { path: '/:pathMatch(.*)*', component: NotFoundView }
  ],
})

export default router
