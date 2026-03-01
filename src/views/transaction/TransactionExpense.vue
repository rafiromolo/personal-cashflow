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
        @click="open = true"
        class="py-1.5 px-3 rounded-lg text-sm text-white bg-green-700 border border-green-800 hover:bg-green-800 hover:border-green-900"
      >
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                d="M3 10V8a2 2 0 0 1 2-2h2m-4 4c1.333 0 4-.8 4-4m-4 4v4m18-4V8a2 2 0 0 0-2-2h-2m4 4c-1.333 0-4-.8-4-4m4 4v2M7 6h10M3 14v2a2 2 0 0 0 2 2h2m-4-4c1.333 0 4 .8 4 4m0 0h4"
              />
              <circle cx="12" cy="12" r="2" />
              <path d="M18 15v3m0 3v-3m0 0h-3m3 0h3" />
            </g>
          </svg>
          Add Expense
        </div>
      </button>
    </div>

    <div class="relative overflow-x-auto rounded-lg border border-gray-300">
      <table class="w-full text-sm text-left">
        <thead class="text-sm text-body bg-neutral-100 border-b rounded-2xl">
          <tr>
            <th class="px-3 py-3 font-medium"></th>
            <th scope="col" class="px-3 py-3 font-semibold text-gray-600">Date</th>
            <th scope="col" class="px-3 py-3 font-semibold text-gray-600">Description</th>
            <th scope="col" class="px-3 py-3 font-semibold text-gray-600">Category</th>
            <th scope="col" class="px-3 py-3 font-semibold text-gray-600">Amount</th>
            <th scope="col" class="px-3 py-3 font-semibold text-gray-600">Account</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-3 py-3">
              <div class="flex gap-1">
                <button
                  class="py-1.5 px-3 rounded-lg text-sm text-white bg-blue-700 border border-blue-800 hover:bg-blue-800 hover:border-blue-900"
                >
                  <edit-icon />
                </button>
                <button
                  class="py-1.5 px-3 rounded-lg text-sm text-white bg-red-600 border border-red-700 hover:bg-red-700 hover:border-red-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                      />
                      <path
                        fill="currentColor"
                        d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2l-.003.071l-.867 12.143A3 3 0 0 1 16.138 22H7.862a3 3 0 0 1-2.992-2.786L4.003 7.07L4 7a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zm3.717 5H6.003l.862 12.071a1 1 0 0 0 .997.929h8.276a1 1 0 0 0 .997-.929zM10 10a1 1 0 0 1 .993.883L11 11v5a1 1 0 0 1-1.993.117L9 16v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m.28-6H9.72l-.333 1h5.226z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </td>
            <td class="px-3 py-3">14 February 2026</td>
            <td class="px-3 py-3">Bubur Ayam</td>
            <td class="px-3 py-3">Foods and Beverages</td>
            <td class="px-3 py-3">Rp27.000</td>
            <td class="px-3 py-3">Bank Jago</td>
            <!-- <td colspan="6" class="px-6 py-3">
              <div class="flex flex-col items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M.54 3.87L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"
                  />
                </svg>
                <p class="text-sm">No data found.</p>
              </div>
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </admin-layout>
  <div v-if="open" class="fixed inset-0 bg-black/50 flex items-center justify-center z-999999">
    <div class="bg-white rounded-2xl shadow-xl w-xl p-8 relative">
      <h2 class="text-lg font-semibold mb-4">Add Expense</h2>

      <form action="">
        <div class="grid grid-cols-1 gap-4 mb-8">
          <div class="flex flex-col gap-1">
            <label for="expense-date">Date</label>
            <input
              type="date"
              name="expense-date"
              id="expense-date"
              class="w-full py-1.5 px-3 rounded-lg text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label for="expense-category">Category</label>
            <select
              name="expense-category"
              id="expense-category"
              class="w-full py-1.5 px-3 rounded-lg text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 focus:bg-gray-100"
            >
              <option value="all">All Categories</option>
              <option value="fnb">Foods and Beverages</option>
              <option value="transportation">Transportation</option>
            </select>
          </div>
          <div class="flex flex-col gap-1">
            <label for="expense-amount">Amount</label>
            <input
              type="text"
              name="expense-amount"
              id="expense-amount"
              placeholder="Ex: 5000, 100000"
              class="w-full py-1.5 px-3 rounded-lg text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label for="expense-account">Account</label>
            <select
              name="expense-account"
              id="expense-account"
              class="w-full py-1.5 px-3 rounded-lg text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 focus:bg-gray-100"
            >
              <option value="cash">Cash</option>
              <option value="mandiri">Bank Mandiri</option>
              <option value="jago">Bank Jago</option>
            </select>
          </div>
          <div class="flex flex-col gap-1">
            <label for="expense-description">Description</label>
            <input
              type="text"
              name="expense-description"
              id="expense-description"
              placeholder="(Optional)"
              class="w-full py-1.5 px-3 rounded-lg text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:border-gray-400"
            />
          </div>
        </div>

        <div class="flex justify-end gap-2">
          <button
            type="button"
            @click="open = false"
            class="py-1.5 px-3 rounded-lg text-sm text-white bg-red-600 border border-red-700 hover:bg-red-700 hover:border-red-800"
          >
            Cancel
          </button>
          <button
            type="button"
            @click="open = false"
            class="py-1.5 px-3 rounded-lg text-sm text-white bg-blue-600 border border-blue-700 hover:bg-blue-700 hover:border-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import EditIcon from '@/icons/EditIcon.vue'

const open = ref(false)
</script>
