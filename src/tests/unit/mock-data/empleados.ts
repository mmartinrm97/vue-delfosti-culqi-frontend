import { EstadoCuenta, type Empleado } from '@/empleados/types/empleado'
import { ref } from 'vue'

export const empleadosMockData = ref<Empleado[]>([
  {
    id: 2,
    nombre: 'Pristia Candra',
    correo: 'pristia@culqi.com',
    cargo: 'UI UX Designer',
    departamento: 'Team Product',
    oficina: 'Culqi Office',
    estadoCuenta: EstadoCuenta.Activada
  },
  {
    id: 3,
    nombre: 'Hanna Baptista',
    correo: 'hanna@culqi.com',
    cargo: 'Graphic Designer',
    departamento: 'Team Product',
    oficina: 'Culqi Office',
    estadoCuenta: EstadoCuenta.Activada
  },
  {
    id: 4,
    nombre: 'Miracle Geidt',
    correo: 'miracle@culqi.com',
    cargo: 'Finance',
    departamento: 'Team Finance',
    oficina: 'Culqi Office',
    estadoCuenta: EstadoCuenta.Desactivada
  },
  {
    id: 5,
    nombre: 'Rayna Torff',
    correo: 'rayna@culqi.com',
    cargo: 'Project Manager',
    departamento: 'Team Management',
    oficina: 'Culqi Office',
    estadoCuenta: EstadoCuenta.Activada
  },
  {
    id: 6,
    nombre: 'Giana Lipshutz',
    correo: 'giana@culqi.com',
    cargo: 'Creative Director',
    departamento: 'Team Creative',
    oficina: 'Culqi Office',
    estadoCuenta: EstadoCuenta.Desactivada
  },
  {
    id: 7,
    nombre: 'James George',
    correo: 'james@culqi.com',
    cargo: 'Lead Designer',
    departamento: 'Team Design',
    oficina: 'Culqi Office',
    estadoCuenta: EstadoCuenta.Activada
  }
])
