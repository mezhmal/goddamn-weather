<script lang="ts" setup>
import CurrentWidget from '@/components/CurrentWidget.vue'
import HourByHourWidget from '@/components/HourByHourWidget.vue'
import type { WeatherHourItem } from '@/model'

const data: WeatherHourItem[] = [
  {
    hour: '10 a.m.',
    temperature: -23,
  },
  {
    hour: '11 a.m.',
    temperature: -22,
  },
  {
    hour: '12 a.m.',
    temperature: -17,
  },
  {
    hour: '1 p.m.',
    temperature: -16,
  },
  {
    hour: '2 p.m.',
    temperature: -15,
  },
  {
    hour: '3 p.m.',
    temperature: -17,
  },
  {
    hour: '4 p.m.',
    temperature: -19,
  },
  {
    hour: '5 p.m.',
    temperature: -20,
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
