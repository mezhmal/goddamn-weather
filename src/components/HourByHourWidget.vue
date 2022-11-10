<script lang="ts" setup>
import type { WeatherHourItem } from '@/model'

export interface Props {
  items: WeatherHourItem[]
}
const props = defineProps<Props>()
</script>

<template>
  <div class="root w-full flex-grow flex flex-nowrap overflow-x-auto">
    <div v-for="item in items" class="p-4 flex flex-col justify-center whitespace-nowrap">
      <span class="text-xs text-zinc-500 self-center">
        {{ item.hour }}
      </span>
      <img alt="Weather logo" src="@/assets/weather.svg" class="w-8 h-8 self-center" />
      <div class="self-center">{{ item.temperature }}°C</div>
    </div>
  </div>
</template>

<style scoped>
.root {
  scrollbar-width: none;
}

.root::-webkit-scrollbar {
  display: none;
}
</style>
