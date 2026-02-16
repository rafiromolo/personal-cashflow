<template>
  <admin-layout>
    <div class="mb-8">
      <h2 class="text-2xl font-bold">Expenses</h2>
      <span class="text-sm text-gray-600 italic"
        >You can record and track your daily expenses here!</span
      >
    </div>

    <div class="flex justify-between mb-4">
      <div class="flex gap-2">
        <input
          type="date"
          name="filter-date"
          id="filter-date"
          class="py-1.5 px-3 rounded-lg text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400"
        />

        <select
          name="filter-category"
          id="filter-category"
          class="py-1.5 px-3 rounded-lg text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 focus:bg-gray-100"
        >
          <option value="all">All Categories</option>
          <option value="fnb">Foods and Beverages</option>
          <option value="transportation">Transportation</option>
        </select>
      </div>

      <button
        class="py-1.5 px-3 rounded-lg text-sm text-white bg-green-700 border border-green-800 hover:bg-green-800 hover:border-green-900"
      >
        Add Expense
      </button>
    </div>

    <div class="relative overflow-x-auto rounded-lg border">
      <table class="w-full text-sm text-left">
        <thead class="text-sm text-body bg-neutral-400 border-b rounded-2xl">
          <tr>
            <th class="px-6 py-3 font-medium"></th>
            <th scope="col" class="px-6 py-3 font-medium">Date</th>
            <th scope="col" class="px-6 py-3 font-medium">Description</th>
            <th scope="col" class="px-6 py-3 font-medium">Category</th>
            <th scope="col" class="px-6 py-3 font-medium">Amount</th>
            <th scope="col" class="px-6 py-3 font-medium">Account</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="px-6 py-3">
              <div class="flex flex-col items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M.54 3.87L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"
                  />
                </svg>
                <p class="text-sm">No data found.</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </admin-layout>
</template>

<script>
import AdminLayout from '@/components/layout/AdminLayout.vue'

export default {
  name: 'TransactionExpenseView',
  components: {
    AdminLayout,
  },
}
</script>
