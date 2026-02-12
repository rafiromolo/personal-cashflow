<template>
  <admin-layout>
    <div class="grid grid-cols-12 gap-4 md:gap-6">
      <div class="col-span-12 space-y-6 xl:col-span-7">
        <cards title="Income" :amount="income" :percentage="20" trend="up" />
      </div>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from '@/components/layout/AdminLayout.vue'
import Cards from '@/components/display/Cards.vue'

export default {
  name: 'DashboardView',
  components: {
    AdminLayout,
    Cards,
  },
  data() {
    return {
      income: 5654174,
    }
  },
}
</script>
