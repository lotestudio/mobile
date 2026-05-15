import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Catalog from "@/views/Catalog.vue";
import Settings from "@/views/Settings.vue";
import Product from "@/views/Product.vue";
import More from "@/views/More.vue";
import CarouselView from "@/views/DemoUI/CarouselView.vue";
import Blocks from "@/views/DemoUI/Blocks.vue";
import Lists from "@/views/DemoUI/Lists.vue";

const routes = [
  { path: '/', component: Home, meta: { nav: true }},
  { path: '/catalog', component: Catalog, meta: { nav: true }},
  { path: '/settings', component: Settings, meta: { nav: true }},
  { path: '/more', component: More, meta: { nav: true }},
  { path: '/product/:id', component: Product},
  { path: '/demo_ui/carousel', component: CarouselView},
  { path: '/demo_ui/blocks', component: Blocks},
  { path: '/demo_ui/lists', component: Lists},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


router.beforeEach((to, from) => {

  if(from.meta.nav && !to.meta.nav) {
    to.meta.transition ='slide-left';
    return;
  }

  if(!from.meta.nav && to.meta.nav) {
    to.meta.transition ='slide-right';
    return;
  }


  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  if (toDepth !== fromDepth) {
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }

})

export default router
