import { createRouter, createWebHistory } from 'vue-router'
import StoreView from '../views/StoreView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import SwipesView from '../views/SwipesView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/',
    name: 'sign up',
    component: SignupView
  },
  {
    path: '/store',
    name: 'store',
    component: StoreView
  },
  {
    path: '/store/available-swipes',
    name: 'swipes page',
    component: SwipesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
