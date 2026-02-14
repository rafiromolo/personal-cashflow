<template>
  <admin-layout>
    <div class="grid grid-cols-12 gap-4 md:gap-6">
      <div class="col-span-12 space-y-6 xl:col-span-6">
        <cards title="Income" :amount="income" :percentage="20" trend="up" />
      </div>
      <div class="col-span-12 space-y-6 xl:col-span-6">
        <cards title="Expense" :amount="expense" :percentage="12" trend="down" />
      </div>

      <div class="col-span-12">
        <LineChartCards title="Expense Trend" />
      </div>

      <div class="col-span-8">
        <budget-realization title="Budget Realization" />
      </div>

      <div class="col-span-12 xl:col-span-4">
        <recent-transaction title="Recent Transactions" />
      </div>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from '@/components/layout/AdminLayout.vue'
import Cards from '@/components/display/Cards.vue'
import BarChart from '@/components/charts/BarChart.vue'
import BarChartCards from '@/components/display/BarChartCards.vue'
import LineChartCards from '@/components/display/LineChartCards.vue'
import RecentTransaction from '@/components/dashboard/RecentTransaction.vue'
import BudgetRealization from '@/components/dashboard/BudgetRealization.vue'

export default {
  name: 'DashboardView',
  components: {
    AdminLayout,
    Cards,
    LineChartCards,
    RecentTransaction,
    BudgetRealization,
  },
  data() {
    return {
      income: 5654174,
      expense: 3000000,
    }
  },
}
</script>
