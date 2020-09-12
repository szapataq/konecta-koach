import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Seguimiento from '../views/Seguimiento.vue'
import Notificaciones from '../views/Notificaciones.vue'
import Perfil from '../views/Perfil.vue'
import DetailAsesores from '../views/DetailAsesores.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/inicio/:id',
    name: 'inicio',
    component: DetailAsesores
  },
  {
    path: '/seguimiento',
    name: 'seguimiento',
    component: Seguimiento
  },
  {
    path: '/notificaciones',
    name: 'notificaciones',
    component: Notificaciones
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
