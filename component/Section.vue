<template>
  <Transition>
    <div class="h-12 rounded-full flex items-center section hover:cursor-pointer" :class="active ? 'bg-red text-gray-200' : 'bg-white text-red border-2 border-red hover:bg-red hover:text-white' ">
      <p class="w-full text-center text-xl " > {{ name }} </p>
    </div>
  </Transition>
  
</template>

<script lang="ts" setup>
  const props = defineProps(["name","active"]);

</script>

<style>

.section {
    transition: all 500ms ease-in-out;
}

.closed {
  width: 10%;
}

</style>