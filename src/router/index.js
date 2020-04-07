import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HR',
    component: () => import( '../views/hr.vue')
    // component: () => import( '../views/About.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import( '@/views/applicationform.vue')
    // component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
