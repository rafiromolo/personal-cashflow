<template>
  <SidebarProvider>
    <router-view />
  </SidebarProvider>
</template>

<script setup lang="ts">
import type router from './router'
import SidebarProvider from './components/layout/SidebarProvider.vue'
</script>

<style scoped></style>
