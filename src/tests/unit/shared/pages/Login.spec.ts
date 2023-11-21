import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginViewVue from '@/pages/LoginView.vue'

describe('LoginPage page', () => {
  it('should render', () => {
    const wrapper = mount(LoginViewVue)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
