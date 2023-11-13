import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FamilyView from '../views/FamilyView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/family',
    name: 'family',
    component: FamilyView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
