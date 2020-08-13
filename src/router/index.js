import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/form-text',
    name: 'formText',
    component: () => import(/* webpackChunkName: "formText" */ '../views/FormText.vue')
  },
  {
    path: '/form-radio',
    name: 'formRadio',
    component: () => import(/* webpackChunkName: "formRadio" */ '../views/FormRadio.vue')
  },
  {
    path: '/form-select',
    name: 'formSelect',
    component: () => import(/* webpackChunkName: "formSelect" */ '../views/FormSelect.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
