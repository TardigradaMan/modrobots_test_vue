import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page-for-form',
    name: 'TestPageForForm',
    component: () => import('../views/TestPage.vue')
  },
  {
    path: '/dropdown',
    name: 'DropDown',
    component: () => import('../components/DropDownMenu.vue')
  },
  {
    path: '/list',
    name: 'SortDate',
    component: () => import('../components/SortDate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
