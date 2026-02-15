<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-6">
    <div class="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
      <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="text-lg font-bold">{{ title }}</h2>
        </div>

        <div class="flex items-center gap-3">
          <button
            class="inline-flex text-sm text-gray-700 font-semibold border border-gray-300 px-4 py-2.5 rounded-lg shadow-xs hover:bg-gray-100 hover:text-gray-800"
          >
            See all
          </button>
        </div>
      </div>

      <div class="mt-2">
        <BaseTable :columns="columns" :rows="rows" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseTable from './BaseTable.vue'

const columns = [
  { key: 'description', label: 'Description' },
  { key: 'date', label: 'Date' },
  { key: 'amount', label: 'Amount' },
  { key: 'account', label: 'Account' },
]

const rows = [
  {
    description: 'Nasi Uduk',
    category: 'Foods & Beverages',
    date: '2026-02-02',
    amount: 7000,
    account: 'Cash',
  },
  {
    description: 'Gorengan',
    category: 'Snacks',
    date: '2026-02-02',
    amount: 5000,
    account: 'Cash',
  },
]

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
