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
  },
  {
    path: '/datePicker',
    name: 'datePicker',
    component: () => import('../views/datePicker.vue')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import('../views/count.vue')
  },
  {
    path: '/tablePopover',
    name: 'tablePopover',
    component: () => import('../views/tablePopover.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
