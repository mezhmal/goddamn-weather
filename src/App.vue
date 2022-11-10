<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavItem from '@/components/NavItem.vue'
</script>

<template>
  <div class="container mx-auto max-w-screen-lg p-8">
    <header class="mb-8 text-center">
      <p class="text-2xl sm:text-4xl md:text-6xl">GD Weather</p>
      <nav class="mt-4 grid grid-flow-col gap-1">
        <NavItem>
          <RouterLink to="/">Home</RouterLink>
        </NavItem>
        <NavItem>
          <RouterLink to="/today">Today</RouterLink>
        </NavItem>
        <NavItem>
          <RouterLink to="/tomorrow">Tomorrow</RouterLink>
        </NavItem>
        <NavItem>
          <RouterLink to="/week">Week</RouterLink>
        </NavItem>
      </nav>
    </header>
    <RouterView />
  </div>
</template>
