<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-6">
    <div class="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
      <h2 class="text-lg font-bold">{{ title }}</h2>

      <div class="mt-2">
        <line-chart />
      </div>
    </div>
  </div>
</template>

<script setup>
import LineChart from '../charts/LineChart.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
