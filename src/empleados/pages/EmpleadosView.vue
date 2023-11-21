<template>
  <div class="flex flex-col rounded-lg bg-white p-8 shadow-sm gap-x-6 gap-y-8">
    <!--        Titulo, descripción y botones -->
    <section class="flex items-center justify-between">
      <HeaderEmpleados :show="isLoading" />
      <!--        Esqueleto de botones mientras se carga la data -->
      <TableSkeletonUnit v-if="isLoading" width-class="w-20" />
      <div v-else class="space-x-6 flex">
        <!--  Descargar button-->
        <UtilityButton :icon="FileDownloadIcon" description="Descargar" />

        <!--          Nuevo button-->
        <UtilityButton
          :icon="PlusIcon"
          description="Nuevo"
          button-classes="bg-secondary hover:bg-white hover:text-secondary hover:border-secondary text-white"
        />
      </div>
    </section>
    <!--       search and select inputs-->
    <section>
      <SkeletonUtilityButton v-if="isLoading" />
      <TableFilter v-else />
    </section>
    <!-- Esqueleto de tabla mientras se carga la data -->

    <TableSkeleton v-if="isLoading" :table-headers="tableHeaders" />
    <TableEmpleados v-else :empleados="data?.data" :table-headers="tableHeaders" />

    <ThePagination />
  </div>
</template>

<script lang="ts" setup>
import HeaderEmpleados from '@/empleados/components/HeaderEmpleados.vue'
import ThePagination from '@/empleados/components/ThePagination.vue'
import useEmpleados from '@/empleados/composables/useEmpleados'
import TableSkeleton from '@/empleados/components/TableSkeleton.vue'
import TableSkeletonUnit from '@/empleados/components/TableSkeletonUnit.vue'
import TableFilter from '@/empleados/components/TableFilter.vue'
import TableEmpleados from '@/empleados/components/TableEmpleados.vue'
import UtilityButton from '@/empleados/components/UtilityButton.vue'
import PlusIcon from '@/assets/icons/PlusIcon.vue'
import FileDownloadIcon from '@/assets/icons/FileDownloadIcon.vue'
import SkeletonUtilityButton from '../components/SkeletonUtilityButton.vue'
import { watch } from 'vue'
import router from '@/router'
import type { AxiosError } from 'axios'
import { useAuthUserStore } from '../stores/useAuthUserStore'

const { isLoading, data, error } = useEmpleados()

const authUserStore = useAuthUserStore()

watch(error, () => {
  // Check if error is AxiosError
  const axiosError = error.value as AxiosError
  // If error exists and has status 403, redirect to login
  if (axiosError?.response?.status === 403) {
    router.push({ name: 'Login' })
    // Limpiar la store de Pinia
    authUserStore.logout()
  }
})

const tableHeaders = [
  {
    id: 1,
    name: 'Nombre'
  },
  {
    id: 2,
    name: 'Cargo'
  },
  {
    id: 3,
    name: 'Departamento'
  },
  {
    id: 4,
    name: 'Oficina'
  },
  {
    id: 5,
    name: 'Cuenta'
  },
  {
    id: 6,
    name: 'Acciones'
  }
]
</script>

<style scoped></style>
