<template>
  <admin-layout>
    <div class="mb-8">
      <h2 class="text-2xl font-bold">Budgeting</h2>
      <span class="text-sm text-gray-600 italic">
        Plan your finances by setting budgets for different categories and track your spending
        against them.
      </span>
    </div>

    <div class="flex flex-col gap-2">
      <h2 class="text-lg font-semibold">Income Sources</h2>
      <div
        class="w-full overflow-x-auto rounded-lg border border-gray-300"
        style="max-width: 980px"
      >
        <table class="text-sm text-left" style="table-layout: fixed">
          <thead class="text-sm text-body bg-neutral-100 border-b rounded-2xl">
            <tr>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600 bg-neutral-100 sticky left-0 z-10"
                style="min-width: 160px"
              >
                Income Sources
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                January
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                February
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                March
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                April
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                May
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                June
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                July
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                August
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                September
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                October
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                November
              </th>
              <th
                scope="col"
                class="px-3 py-3 font-semibold text-gray-600"
                style="min-width: 120px"
              >
                December
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="col"
                class="px-3 py-3 font-bold text-gray-900 bg-white sticky left-0 z-10"
                style="min-width: 160px"
              >
                Total
              </th>
              <th scope="col" class="px-3 py-3 font-bold text-gray-900">Rp5.654.174</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </admin-layout>
</template>

<script setup>
import AdminLayout from '@/components/layout/AdminLayout.vue'
</script>
