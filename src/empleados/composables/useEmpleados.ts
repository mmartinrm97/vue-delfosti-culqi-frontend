import { useQuery } from '@tanstack/vue-query'
import { computed, ref, watch } from 'vue'
import { getEmpleados } from './useEmpleadosApi'
// import type { AxiosError } from 'axios'
// import { useRouter } from 'vue-router'

// const router = useRouter()

const totalEmpleados = ref<number>(0)
const currentPage = ref<number>(1)
const totalPages = ref<number>(5)
const limit = ref<number>(10)

const setPage = (page: number) => {
  if (currentPage.value === page) return
  if (page <= 0) return
  currentPage.value = page
}

const useEmpleados = () => {
  // Usar el hook useQuery para obtener los empleados
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['empleados?page=', currentPage, '?limit=', limit],
    queryFn: () => getEmpleados(currentPage.value, limit.value)
  })

  // watch(error, () => {
  //   // Check if error is AxiosError
  //   const axiosError = error.value as AxiosError
  //   // If error exists and has status 403, redirect to login
  //   if (axiosError?.response?.status === 403) {
  //     // Redirect to login
  //     router.push({ name: 'Login' })
  //   }
  // })

  // Obtener el número total de empleados que est
  watch(data, () => {
    totalEmpleados.value = data.value?.total || totalEmpleados.value
  })

  // Calcular el número total de páginas inicialmente
  watch(limit, () => {
    totalPages.value = Math.ceil(totalEmpleados.value / limit.value)
  })

  return {
    //Propeties
    totalEmpleados,
    isLoading,
    data,
    isError,
    error,
    currentPage,
    totalPages,
    limit,
    //Methods
    getPage(page: number) {
      setPage(page)
    },
    // Getters
    totalPageNumbers: computed(
      () => [...new Array(totalPages.value)].map((value, index) => index + 1)
      //   [...new Array(Math.ceil(totalEmpleados.value / limit.value))].map((value, index) => index + 1)
    )
  }
}

export default useEmpleados
