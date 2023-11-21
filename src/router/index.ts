import { createRouter, createWebHistory } from 'vue-router'
import { useAuthUserStore } from '@/empleados/stores/useAuthUserStore'
import { adminRoute } from '../empleados/router/index'

import LoginView from '@/pages/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Public
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { requiresAuth: false }
    },

    //Admin
    {
      ...adminRoute,
      path: '/admin',
      meta: { requiresAuth: true }
    },

    // Redirigir a la vista "empleados" cuando la ruta es inválida y el usuario está autenticado
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        const authUserStore = useAuthUserStore()
        return authUserStore.token ? { name: 'empleados' } : { name: 'Login' }
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const authUserStore = useAuthUserStore()
  const token = authUserStore.token

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token) {
      // TODO: verify token
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
