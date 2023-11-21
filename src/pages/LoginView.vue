<template>
  <!-- Onboarding Section -->
  <div class="flex w-1/2 flex-col">
    <!-- Image Section-->
    <div class="relative flex h-2/3 items-center justify-center">
      <img
        alt="Culqi Login Cover"
        class="absolute h-full w-full object-cover"
        src="@/assets/images/culqi-login-cover.png"
      />
    </div>
    <!--      Separator-->
    <!--            <div class="flex items-center justify-between">-->
    <!--              <hr class="w-full border-4 border-primary" />-->
    <!--            </div>-->
    <!--          Text Section-->
    <div
      class="items-left flex h-1/3 flex-col justify-center border-t-8 border-primary bg-secondary px-20"
    >
      <div class="h-auto w-24 pb-4">
        <!-- <img alt="Culqi Logo" src="@/assets/images/culqi_logo_white.svg" /> -->
      </div>
      <div class="text-left">
        <span class="text-3xl font-bold text-gray-50">
          Dale más power ⚡ a tus empleados hoy 💪
        </span>
        <p class="py-4 font-light leading-7 text-gray-50">
          Te ayudamos a gestionarlos de manera más sencilla
        </p>
      </div>
    </div>
  </div>
  <!-- Sign In Section -->
  <div class="flex w-1/2 flex-col justify-center">
    <div class="my-auto flex flex-col justify-center px-8 lg:px-14 xl:px-24">
      <!--        Content Section-->
      <div class="pt-40">
        <h1 class="whitespace-nowrap text-center text-3xl font-bold leading-loose tracking-wide">
          Inicia sesión
        </h1>
        <form @submit.prevent="handleLogin">
          <div class="pt-6">
            <label class="font-medium" for="email"
              >Correo Electrónico <span class="text-red-500">*</span>
            </label>
            <div
              class="mt-2 flex w-full items-center overflow-hidden rounded-xl border border-gray-300 transition-all focus-within:border-success"
            >
              <input
                id="email"
                v-model="email"
                autofocus
                class="w-full border-0 p-4 font-light focus:outline-none focus:ring-0"
                name="email"
                placeholder="Ingresa el correo electrónico"
                type="text"
                autocomplete="email"
              />
            </div>
          </div>
          <div class="pt-6">
            <label class="font-medium" for="password"
              >Contraseña<span class="text-red-500">*</span></label
            >
            <div
              class="mt-2 flex w-full items-center overflow-hidden rounded-xl border border-gray-300 transition-all focus-within:border-success"
            >
              <input
                id="password"
                v-model="password"
                class="w-full border-0 p-4 font-light focus:outline-none focus:ring-0"
                name="password"
                placeholder="Ingresa la contraseña"
                type="password"
                autocomplete="current-password"
              />
            </div>

            <div v-if="apiError" class="flex items-center pt-6 text-error">
              <ErrorIcon class="h-5 w-5 fill-current" />
              <span class="ml-2">{{ apiError }}</span>
            </div>
          </div>
          <div class="pt-8">
            <button
              class="w-full flex items-center space-x-6 justify-center rounded-xl bg-secondary px-8 py-4 text-white shadow-lg hover:bg-secondary/80 focus:outline-none focus:ring-4 focus:ring-primary"
              type="submit"
            >
              <span class="text-lg">Iniciar Sesión</span>
              <div v-if="isLoading" role="status">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </div>
        </form>
        <div class="pt-8">
          <div class="text-center font-light text-gray-500">
            ¿Eres nuevo aquí?
            <a class="font-semibold text-primary hover:text-primary/80" href="#">
              Crea una cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Terms Section -->
    <div class="flex flex-col items-center justify-center whitespace-nowrap p-10 text-center">
      <span class="text-gray-500">© 2023 Culqi. Todos los derechos reservados.</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import handleAxiosApi from '@/api/handleAxiosApi'
import router from '@/router'
import ErrorIcon from '@/assets/icons/ErrorIcon.vue'
import type { ApiErrorResponse, APILoginSuccessResponse } from '@/shared/types'
import { useAuthUserStore } from '@/empleados/stores/useAuthUserStore'

const email = ref('')
const password = ref('')
const apiError = ref<string | null>(null)
const isLoading = ref(false)

const handleLogin = async () => {
  const authUserStore = useAuthUserStore()
  try {
    isLoading.value = true
    const response = await handleAxiosApi.post<APILoginSuccessResponse>('/auth/login', {
      correo: email.value,
      password: password.value
    })

    const token = response.data.data.token
    authUserStore.setUser(response.data.data.user) // Almacena el usuario en el store
    authUserStore.setToken(token) // Almacena el usuario en el store
    localStorage.setItem('jwt_token', token)
    localStorage.setItem('user', JSON.stringify(response.data.data.user))

    await router.push({ name: 'empleados' })
  } catch (error: any) {
    if (error.isAxiosError && error.response) {
      // Error de la API con respuesta
      apiError.value = (error.response.data as ApiErrorResponse).message
      console.error('Error de inicio de sesión:', apiError.value)
    } else {
      // Error de red o error no relacionado con la API
      console.error('Error de inicio de sesión (no relacionado):', error.message)
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped></style>
@/shared/types/responseApi @/empleados/api/handleAxiosApi
