<script lang="ts" setup>
import TopBar from '@/shared/components/TopBar.vue'
import NavBar from '@/shared/components/NavBar.vue'
import { adminRoute } from '@/empleados/router'
import type { NavBarLink } from '@/shared/types/navbarLink'

const routeLinks: NavBarLink[] = adminRoute
  .children! // .filter((route) => (route.props as { visible: boolean }).visible)
  .map((route) => {
    return {
      name: route.name as string,
      path: route.path,
      title: (route.props as { title: string; icon: Object }).title,
      icon: (route.props as { title: string; icon: Object }).icon
    }
  })
</script>

<template>
  <!--  Aside Navbar-->
  <NavBar :links="routeLinks" />

  <main class="flex-1">
    <!-- TopBar -->
    <TopBar />
    <!--    Main Section-->
    <div class="flex flex-col p-8">
      <!--      <Suspense>-->
      <RouterView />
      <!--      </Suspense>-->
    </div>
  </main>
</template>

<style scoped></style>
