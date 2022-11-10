<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { format } from 'date-fns'

const date = computed(() => format(new Date(), 'iii, MMM d, h:mm aaaa'))
</script>

<template>
  <div>
    <div class="text-xs text-right">{{ date }}</div>
    <div class="flex my-4">
      <div class="h-16 w-16 mr-4">
        <img alt="Weather logo" src="@/assets/weather.svg" />
      </div>
      <div class="flex">
        <span class="text-6xl">-15</span>
        <span class="text-2xl">°C</span>
      </div>
    </div>
    <div class="flex text-xs whitespace-nowrap">
      <div class="mr-4">
        <div>Precipitation: 2%</div>
        <div>Humidity: 90%</div>
        <div>Wind: 4 m/s</div>
      </div>
      <div>
        <div>Fills like: -12°C</div>
        <div>Sunrise: 7:42 a.m.</div>
        <div>Sunset: 4:57 p.m.</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
