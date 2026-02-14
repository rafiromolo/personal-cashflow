<template>
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
        <tr v-for="(transaction, index) in rows" :key="index" class="border-t border-gray-100">
          <td class="py-3 whitespace-nowrap">
            <div class="flex items-center gap-3">
              <div>
                <p class="font-bold text-gray-800 text-sm">{{ transaction.description }}</p>
                <span class="font-semibold text-gray-500 text-xs">{{ transaction.category }}</span>
              </div>
            </div>
          </td>
          <td class="py-3 whitespace-nowrap">
            <p class="font-semibold text-gray-500 text-sm">{{ transaction.date }}</p>
          </td>
          <td class="py-3 whitespace-nowrap">
            <p class="font-semibold text-gray-500 text-sm">
              Rp{{ transaction.amount.toLocaleString('id-ID') }}
            </p>
          </td>
          <td class="py-3 whitespace-nowrap">
            <p class="font-semibold text-gray-500 text-sm">
              {{ transaction.account }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  columns: Array,
  rows: Array,
})
</script>
