<template>
  <div class="error">
    <NuxtLink to="/" title="Homepage" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="~/assets/imgs/Logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-white font-semi-bold whitespace-nowrap">HERmet</span>
    </NuxtLink>
    <div>
      <p class="self-center text-white font-semi-bold whitespace-nowrap">The page you were looking for isn't available anymore</p>
      <p class="self-center text-white font-semi-bold whitespace-nowrap">Sorry for the issue...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>
.error{
  background-color: #d62828;
  height: 100vh;
}
</style>