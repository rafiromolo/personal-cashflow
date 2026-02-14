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
            See details
          </button>
        </div>
      </div>

      <div class="mt-2">
        <div class="max-w-full overflow-x-auto custom-scrollbar">
          <table class="min-w-full">
            <thead>
              <tr class="border-t border-gray-100">
                <th v-for="column in columns" :key="column.key" class="py-3 text-left">
                  <p class="font-bold text-gray-500 text-xs">{{ column.label }}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(transaction, index) in rows"
                :key="index"
                class="border-t border-gray-100"
              >
                <td class="py-3 whitespace-nowrap">
                  <div class="flex items-center gap-3">
                    <div>
                      <p class="font-bold text-gray-800 text-sm">{{ transaction.description }}</p>
                      <span class="font-semibold text-gray-500 text-xs">{{
                        transaction.category
                      }}</span>
                    </div>
                  </div>
                </td>
                <td class="py-3 whitespace-nowrap">
                  <p class="font-semibold text-gray-500 text-sm">
                    Rp{{ transaction.amount.toLocaleString('id-ID') }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const columns = [
  { key: 'description', label: 'Description' },
  { key: 'amount', label: 'Amount' },
]

const rows = [
  {
    id: 1,
    description: 'Nasi Uduk',
    category: 'Foods & Beverages',
    date: '2026-02-02',
    amount: 7000,
    account: 'Cash',
  },
  {
    id: 2,
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
