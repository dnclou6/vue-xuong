import { createRouter, createWebHistory } from 'vue-router'
import ProductList from './components/ProductList.vue'
import CategoryList from './components/CategoryList.vue'
import ProductDetail from './components/ProductDetail.vue'
import CartList from './components/CartList.vue'

const routes = [
  {
    path: '/',
    name: 'Default',
    component: ProductList,
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/categories',
    name: 'CategoryList',
    component: CategoryList,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true,
  },
  {
    path: '/cart',
    name: 'CartList',
    component: CartList,
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
