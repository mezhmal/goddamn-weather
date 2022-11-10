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

const curveHorizontalLengh = 20

const dCurve = graphVerticalPoints
  .map((point, index) => {
    const graphHorizontalPoint = index * dayItemWidth + dayItemWidth / 2
    if (index === 0) {
      return `M ${graphHorizontalPoint - dayItemWidth / 4} ${point} L ${graphHorizontalPoint} ${point}`
    }

    const prevPoint = graphVerticalPoints[index - 1]
    const startControlPointX = graphHorizontalPoint - dayItemWidth + curveHorizontalLengh
    const startControlPointY = index === 1 ? prevPoint : prevPoint + (point - prevPoint) / 4
    const endControlPointX = graphHorizontalPoint - curveHorizontalLengh
    let endControlPointY = point
    const endLineX = graphHorizontalPoint
    const endLineY = point
    let tail = `L ${endLineX + dayItemWidth / 4} ${endLineY}`

    if (index + 1 < graphVerticalPoints.length) {
      const nextPoint = graphVerticalPoints[index + 1]
      endControlPointY = point - (nextPoint - point) / 4
      tail = ''
    }

    return `C ${startControlPointX} ${startControlPointY}, ${endControlPointX} ${endControlPointY}, ${endLineX} ${endLineY} ${tail}`
  })
  .join(' ')
const coordinatesForPoints = graphVerticalPoints.map((point, index) => ({
  x: index * dayItemWidth + dayItemWidth / 2,
  y: point,
}))
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
      <path :d="dCurve" fill="none" stroke="#bfdbfe" stroke-width="3" />
      <g v-for="coordinate in coordinatesForPoints">
        <circle :cx="coordinate.x" :cy="coordinate.y" r="3" fill="#3b82f6" />
      </g>
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
