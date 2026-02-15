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
        <table class="min-w-full">
          <thead>
            <tr class="border-t border-gray-100">
              <th v-for="column in columns" :key="column.key" class="py-3 text-left">
                <p class="font-bold text-gray-500 text-xs">{{ column.label }}</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transaction, index) in rows" :key="index" class="border-t border-gray-100">
              <td class="py-3 whitespace-nowrap">
                <div class="flex items-center gap-3">
                  <div>
                    <p class="font-bold text-gray-800 text-sm">{{ transaction.category }}</p>
                  </div>
                </div>
              </td>
              <td class="py-3 whitespace-nowrap">
                <p class="font-semibold text-gray-500 text-sm">
                  Rp{{ transaction.budget.toLocaleString('id-ID') }}
                </p>
              </td>
              <td class="py-3 whitespace-nowrap">
                <p class="font-semibold text-gray-500 text-sm">
                  Rp{{ transaction.actual.toLocaleString('id-ID') }}
                </p>
              </td>
              <td class="py-3 whitespace-nowrap">
                <p class="font-semibold text-gray-500 text-sm">
                  Rp{{ transaction.remaining.toLocaleString('id-ID') }}
                </p>
              </td>
              <td class="py-3 whitespace-nowrap">
                <p class="font-semibold text-gray-500 text-sm">{{ transaction.usage }}%</p>
              </td>
              <td class="py-3 whitespace-nowrap">
                <p class="font-semibold text-gray-500 text-sm">
                  {{ transaction.status }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const columns = [
  { key: 'category', label: 'Category' },
  { key: 'budget', label: 'Budget' },
  { key: 'actual', label: 'Actual' },
  { key: 'remaining', label: 'Remaining' },
  { key: 'usage', label: 'Usage %' },
  { key: 'status', label: 'Status' },
]

const rows = [
  {
    category: 'Foods & Beverages',
    budget: 700000,
    actual: 258600,
    remaining: 441400,
    usage: 37,
    status: 'In Range',
  },
  {
    category: 'Transportation',
    budget: 1300000,
    actual: 1188000,
    remaining: 112000,
    usage: 91,
    status: 'Warning',
  },
  {
    category: 'Charity',
    budget: 198000,
    actual: 549000,
    remaining: -351000,
    usage: 277,
    status: 'Over',
  },
]

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
