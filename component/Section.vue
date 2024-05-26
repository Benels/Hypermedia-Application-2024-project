<template>
  <Transition>
    <div class="h-12 rounded-r-full flex items-center pr-12 section" :class="active ? 'closed' : '' ">
      <p class="text-xl pl-4 text-gray-200" :class="active ? 'opacity-0' : '' "> {{ name }} </p>
    </div>
  </Transition>
  
</template>

<script lang="ts" setup>
  const props = defineProps(["name","color","active"]);

</script>

<style>

.section {
    background-color: v-bind(color);
    transition: all 500ms ease-in-out;
    width: fit-content;
}

.closed {
  width: 10%;
}

</style>