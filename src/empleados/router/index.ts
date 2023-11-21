import type { RouteRecordRaw } from 'vue-router'

import AdminLayout from '@/layouts/AdminLayout.vue'
import EmpleadosView from '@/empleados/pages/EmpleadosView.vue'
import ReclutamientoView from '@/empleados/pages/ReclutamientoView.vue'
import UsersIcon from '@/assets/icons/UsersIcon.vue'
import BriefCaseIcon from '@/assets/icons/BriefCaseIcon.vue'

export const adminRoute: RouteRecordRaw = {
  path: '/admin',
  redirect: { name: 'empleados' },
  component: AdminLayout,
  children: [
    {
      path: 'empleados',
      name: 'empleados',
      props: { title: 'Empleados', icon: UsersIcon },
      component: EmpleadosView
    },
    {
      path: 'reclutamiento',
      name: 'reclutamiento',
      props: { title: 'Reclutamiento', icon: BriefCaseIcon },
      component: ReclutamientoView
    }
  ]
}
