<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavItem from './components/NavItem.vue'
</script>

<template>
  <div class="container mx-auto max-w-screen-lg p-8">
    <header class="mb-8 flex">
      <img
        alt="Weather logo"
        src="@/assets/weather.svg"
        class="mr-2 h-16 w-16 flex-none sm:h-20 sm:w-20 md:h-24 md:w-24"
      />
      <div class="flex-grow text-center">
        <p class="text-2xl sm:text-4xl md:text-6xl">GD Weather</p>
        <nav class="mt-4 grid grid-flow-col">
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
      </div>
    </header>
    <RouterView />
  </div>
</template>
