<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-6">
    <div class="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
      <h2 class="text-lg font-bold">Expense Trend</h2>

      <div class="mt-2">
        <bar-chart />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '../charts/BarChart.vue'

export default {
  name: 'BarChartCards',
  components: {
    BarChart,
  },
}
</script>
