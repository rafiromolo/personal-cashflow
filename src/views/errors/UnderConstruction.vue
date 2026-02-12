<template>
  <admin-layout>
    <div class="flex justify-center">
      <img
        src="../../assets/images/maintenance/under-construction.svg"
        width="400"
        alt="Under Construction"
      />
    </div>
    <h2 class="text-center text-xl font-bold">Halaman ini sedang dalam pengembangan.</h2>
  </admin-layout>
</template>

<script>
import AdminLayout from '@/components/layout/AdminLayout.vue'

export default {
  components: {
    AdminLayout,
  },
  name: 'UnderConstructionView',
}
</script>
