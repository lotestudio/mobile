import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Catalog from "@/views/Catalog.vue";
import Settings from "@/views/Settings.vue";
import Product from "@/views/Product.vue";

const routes = [
  { path: '/', component: Home},
  { path: '/catalog', component: Catalog},
  { path: '/product/:id', component: Product},
  { path: '/settings', component: Settings},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  if(toDepth !== fromDepth) {
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
})

export default router
