import { getEmpleados } from '@/empleados/composables'
import { describe, expect, it } from 'vitest'

describe('useEmpleados', () => {
  it('should fetch empleados', async () => {
    const result = await getEmpleados(5, 10)
    expect(result)
  })
})
