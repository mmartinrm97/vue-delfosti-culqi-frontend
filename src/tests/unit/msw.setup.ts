import { HttpHandler, HttpResponse, http } from 'msw'
import { afterAll, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { empleadosMockData } from './mock-data/empleados'

const apiUri = import.meta.env.VITE_API_BASE_URL

// ?page=5&limit=10
const handlers: HttpHandler[] = [
  http.get(`${apiUri}/empleados`, () => {
    return HttpResponse.json(empleadosMockData)
  })
]
const server = setupServer(...handlers)

beforeAll(() => server.listen())

afterAll(() => server.close())
