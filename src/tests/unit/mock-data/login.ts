import type { APILoginSuccessResponse } from '@/shared/types'
import { ref } from 'vue'

export const successLoginMockData = ref<APILoginSuccessResponse>({
  status: 'success',
  data: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAwNjA4MjYzLCJleHAiOjE3MDA2MTE4NjN9.bIbMPJthNmw3no2wnl3D7-kFcoZrzUwt-v-s1Mb2iUk',
    user: {
      id: 1,
      nombre: 'Christian Quispe',
      correo: 'c.quispe@culqi.com',
      cargo: 'System Administrator',
      departamento: 'IT Team',
      oficina: 'Culqi Office',
      estadoCuenta: 'Activada'
    }
  }
})
