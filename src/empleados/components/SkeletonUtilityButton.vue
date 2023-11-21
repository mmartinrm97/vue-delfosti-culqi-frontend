<template>
  <div class="grid grid-cols-3 gap-x-6">
    <SkeletonUnit v-for="index in 3" :key="index" height-class="h-11" />
  </div>
</template>

<script lang="ts" setup>
import SkeletonUnit from '@/empleados/components/SkeletonUnit.vue'
</script>

<style scoped></style>
