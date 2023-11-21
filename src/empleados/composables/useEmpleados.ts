import { useQuery } from '@tanstack/vue-query'
import { computed, ref, watch } from 'vue'
import { getEmpleados } from './useEmpleadosApi'

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
    totalPageNumbers: computed(() =>
      [...new Array(totalPages.value)].map((value, index) => index + 1)
    )
  }
}

export default useEmpleados
