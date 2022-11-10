<script lang="ts" setup>
import type { WeatherHourItem } from '@/model'

export interface Props {
  items: WeatherHourItem[]
}
const props = defineProps<Props>()

const dayItemWidth = 80 //px
const graphHeight = 150 //px
const graphWidth = props.items.length * dayItemWidth
const tempers = props.items.map((item) => item.temperature)
const minTemper = Math.min(...tempers)
const maxTemper = Math.max(...tempers)
const deltaTemper = maxTemper - minTemper || 1
const graphHeightRatio = (graphHeight - 8) / deltaTemper
const graphShift = maxTemper * graphHeightRatio + 4
const graphVerticalPoints = tempers.map((t) => t * graphHeightRatio * -1 + graphShift)
const points = graphVerticalPoints
  .map((point, index) => `${index * dayItemWidth + dayItemWidth / 2}, ${point}`)
  .join(' ')
</script>

<template>
  <div class="root w-full">
    <div class="flex-grow flex flex-nowrap mb-4">
      <div
        v-for="item in items"
        class="flex flex-col justify-center whitespace-nowrap"
        :class="`w-[${dayItemWidth}px] min-w-[${dayItemWidth}px]`"
      >
        <span class="text-xs text-zinc-500 self-center">
          {{ item.hour }}
        </span>
        <img alt="Weather logo" src="@/assets/weather.svg" class="w-8 h-8 self-center" />
        <div class="self-center">{{ item.temperature }}°C</div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" :height="graphHeight" :width="graphWidth">
      <polyline :points="points" fill="none" stroke="black" />
    </svg>
  </div>
</template>

<style scoped>
.root {
  overflow-x: auto;
  scrollbar-width: none;
}

.root::-webkit-scrollbar {
  display: none;
}
</style>
