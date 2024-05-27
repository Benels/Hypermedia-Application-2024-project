<template>
  <Transition>
    <div class="h-12 rounded-full flex items-center section" :class="active ? 'closed' : '' ">
      <p class="w-full text-center text-xl text-red-500" :class="active ? 'opacity-0' : '' "> {{ name }} </p>
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
}

.closed {
  width: 10%;
}

</style>