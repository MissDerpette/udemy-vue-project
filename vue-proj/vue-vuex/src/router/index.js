import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FamilyView from '../views/FamilyView.vue'
import TodoListView from '../views/TodoListView.vue'
import SkillsView from '../views/SkillsView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import ProjectView from '../views/ProjectView.vue'



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
  },
  {
    path: '/skills',
    name: 'techSkills',
    component: SkillsView
  },
  {
    path: '/aboutme',
    name: 'aboutMe',
    component: AboutMeView
  },
  {
    path: '/projects',
    name: 'project',
    component: ProjectView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
