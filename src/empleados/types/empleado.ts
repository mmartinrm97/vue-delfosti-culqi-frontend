export type ApiEmpleadoResponse = {
  status: string
  data: Empleado[]
  total: number
}

export type Empleado = {
  id: number
  nombre: string
  correo: string
  cargo: string
  departamento: string
  oficina: string
  estadoCuenta: EstadoCuenta
}

export enum EstadoCuenta {
  Activada = 'Activada',
  Desactivada = 'Desactivada'
}
