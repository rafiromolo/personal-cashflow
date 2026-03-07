<template>
  <admin-layout>
    <div class="mb-8">
      <h2 class="text-2xl font-bold">Setup</h2>
      <span class="text-sm text-gray-600 italic">
        Setup your accounts, categories, and other configurations to get started with Personal
        Cashflow.
      </span>
    </div>

    <div class="w-full bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 class="text-xl font-bold mb-2">Account Information</h2>

      <form action="#">
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col mb-4">
            <label for="account-name" class="text-sm font-normal mb-1">User Name</label>
            <input
              type="text"
              id="account-name"
              class="bg-gray-100 text-shadow-gray-900 py-1 px-4 rounded-sm border border-gray-300"
              placeholder="Enter your name"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="account-email" class="text-sm font-normal mb-1">Email</label>
            <input
              type="email"
              id="account-email"
              class="bg-gray-100 text-shadow-gray-900 py-1 px-4 rounded-sm border border-gray-300"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </form>
    </div>
  </admin-layout>
</template>

<script setup>
import AdminLayout from '@/components/layout/AdminLayout.vue'
</script>
