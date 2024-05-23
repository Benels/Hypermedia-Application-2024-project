<template>

  <NuxtLink :to = "link" :aria-label="`Link to ${name} page`" class="activityLink">

    <div class = "a">
      <p>{{name}}</p>
      <p>______</p>
    </div>
  </NuxtLink>


</template>

<script setup>
  const props = defineProps(['id', 'name', 'pic', 'link']);
</script>

<style scoped>
p{
  font-size: 30px;
  color: black;
}
</style>