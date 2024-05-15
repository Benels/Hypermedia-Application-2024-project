<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  // initialize components based on data attribute selectors
  onMounted(() => {
      initFlowbite();
  })
</script>
