<template>

  <div class = "a">
    <p>{{id}}</p>
    <p>{{name}}</p>
    <p>_______</p>
  </div>


</template>

<script setup>
  const props = defineProps(['id', 'name']);
</script>

<style scoped>
p{
  font-size: 30px;
  color: black;
}
</style>