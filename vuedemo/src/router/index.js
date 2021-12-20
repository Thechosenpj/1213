import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('../views/watch.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('../views/computed.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
