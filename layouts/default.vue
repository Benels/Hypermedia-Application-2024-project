<template>

  <Navbar />
  <slot />

</template>

<script lang="ts" setup>

import Navbar from "~/component/Navbar.vue";
</script>

<style>
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    color: white;
    font-family: 'Rubik';
}
</style>