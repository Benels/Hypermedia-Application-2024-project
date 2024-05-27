<template>
  <Transition>
    <div class="h-12 rounded-full lg:rounded-r-full lg:rounded-l-none flex items-center lg:pr-12 section" :class="active ? 'closed' : '' ">
      <p class="w-full text-center lg:w-fit text-xl lg:pl-4 text-gray-200" :class="active ? 'opacity-0' : '' "> {{ name }} </p>
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