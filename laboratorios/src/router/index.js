import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/general',
    name: 'general',
    component: () => import(/* webpackChunkName: "general" */ '../views/General.vue')
  },
  {
    path: '/laboratorios',
    name: 'laboratorios',
    component: () => import(/* webpackChunkName: "laboratorios" */ '../views/Laboratorios.vue')
  },
  {
    path: '/datos',
    name: 'datos',
    component: () => import(/* webpackChunkName: "datos" */ '../views/Datos.vue')
  },
  {
    path: '/reservar',
    name: 'reservar',
    component: () => import(/* webpackChunkName: "reservar" */ '../views/Reservar.vue')
  },
  {
    path: '/horarios',
    name: 'horarios',
    component: () => import(/* webpackChunkName: "general" */ '../views/horarios.vue')
  },
  {
    path: '/observaciones',
    name: 'observaciones',
    component: () => import(/* webpackChunkName: "datos" */ '../views/Observaciones.vue')
  },
  {
    path: '/sesion',
    name: 'sesion',
    component: () => import(/* webpackChunkName: "iniciarsesion" */ '../views/Sesion.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router