export type ApiErrorResponse = {
  status: string
  message: string
}

export type APILoginSuccessResponse = {
  status: string
  data: Data
}

export type Data = {
  token: string
  user: User
}

export type User = {
  id: number
  nombre: string
  correo: string
  cargo: string
  departamento: string
  oficina: string
  estadoCuenta: string
}
