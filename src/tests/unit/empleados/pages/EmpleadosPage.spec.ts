import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue'
import EmpleadosViewVue from '@/empleados/pages/EmpleadosView.vue'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'

describe('EmpleadosView page', () => {
  it('should render', () => {
    const queryClient = new QueryClient()
    const app = createApp(EmpleadosViewVue)
    app.use(VueQueryPlugin, { queryClient })
    const wrapper = mount(app.component)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
