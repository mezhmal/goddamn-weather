<script lang="ts" setup>
import CurrentWidget from '@/components/CurrentWidget.vue'
import HourByHourWidget from '@/components/HourByHourWidget.vue'
import type { WeatherHourItem } from '@/model'

const data: WeatherHourItem[] = [
  {
    hour: '1 a.m.',
    temperature: -16,
  },
  {
    hour: '2 a.m.',
    temperature: -17,
  },
  {
    hour: '3 a.m.',
    temperature: -18,
  },
  {
    hour: '4 a.m.',
    temperature: -19,
  },
  {
    hour: '5 a.m.',
    temperature: -19,
  },
  {
    hour: '6 a.m.',
    temperature: -18,
  },
  {
    hour: '7 a.m.',
    temperature: -16,
  },
  {
    hour: '8 a.m.',
    temperature: -14,
  },
  {
    hour: '9 a.m.',
    temperature: -12,
  },
  {
    hour: '10 a.m.',
    temperature: -10,
  },
  {
    hour: '11 a.m.',
    temperature: -8,
  },
  {
    hour: '12 a.m.',
    temperature: -7,
  },
  {
    hour: '1 p.m.',
    temperature: -9,
  },
  {
    hour: '2 p.m.',
    temperature: -10,
  },
  {
    hour: '3 p.m.',
    temperature: -13,
  },
  {
    hour: '4 p.m.',
    temperature: -17,
  },
]
</script>

<template>
  <main>
    <div class="sm:flex sm:mr-4">
      <div class="flex justify-center mb-8 sm:mb-0 sm:mr-4">
        <CurrentWidget></CurrentWidget>
      </div>
      <HourByHourWidget :items="data"></HourByHourWidget>
    </div>
  </main>
</template>
