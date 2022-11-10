<script lang="ts" setup>
import CurrentWidget from '@/components/CurrentWidget.vue'
import HourByHourWidget from '@/components/HourByHourWidget.vue'
import type { WeatherHourItem } from '@/model'

const data: WeatherHourItem[] = [
  {
    hour: '5 a.m.',
    temperature: -17,
  },
  {
    hour: '6 a.m.',
    temperature: -17,
  },
  {
    hour: '7 a.m.',
    temperature: -16,
  },
  {
    hour: '8 a.m.',
    temperature: -15,
  },
  {
    hour: '9 a.m.',
    temperature: -13,
  },
  {
    hour: '10 a.m.',
    temperature: -9,
  },
]
</script>

<template>
  <main>
    <div class="sm:flex sm:mr-4">
      <div class="flex justify-center mb-8 sm:mb-0 sm:mr-4">
        <CurrentWidget></CurrentWidget>
      </div>
      <HourByHourWidget :items="data" />
    </div>
  </main>
</template>
