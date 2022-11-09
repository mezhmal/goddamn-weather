<script lang="ts" setup>
import CurrentWidget from '@/components/CurrentWidget.vue'
import HourByHourWidget from '@/components/HourByHourWidget.vue'
</script>

<template>
  <main>
    <div class="sm:flex sm:mr-4">
      <div class="flex justify-center">
        <CurrentWidget></CurrentWidget>
      </div>
      <HourByHourWidget></HourByHourWidget>
    </div>
  </main>
</template>
