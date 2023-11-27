import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FamilyView from '../views/FamilyView.vue'
import TodoListView from '../views/TodoListView.vue'


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
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoListView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
