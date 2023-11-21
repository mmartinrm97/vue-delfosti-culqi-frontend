import handleApiAxios from '@/api/handleAxiosApi'
import type { ApiEmpleadoResponse } from '../types'

export const getEmpleados = async (page: number, limit: number): Promise<ApiEmpleadoResponse> => {
  const response = await handleApiAxios.get<ApiEmpleadoResponse>(
    `/empleados?page=${page}&limit=${limit}`
  )
  return response.data
}
