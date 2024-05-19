<template>

  <Navbar />
  <slot />


  <div class="fixed bottom-12 right-14 w-20 h-20 overflow-hidden bg-gray-300 rounded-full z-100 flex justify-center items-center">
      <!-- dimensions of the svg must be +2 w.r.t. the dimensions of the above div -->
      <img class="h-[105%] w-auto ml-[8px] mb-[15px]" src="~/assets/imgs/bender.png" />
  </div>

  <div class="socialContainer fixed bottom-12 left-12 flex flex-col-reverse gap-2 items-center">
    <div class="w-20 h-20 bg-gray-300 rounded-full ">
      <img class="p-3 -ml-[2px]" src="~/assets/imgs/social/share.png" alt="Bordered avatar" @click="handleSocialListDisplay">
    </div>
    <div class="transition-display duration-300 ease flex flex-col-reverse gap-2" v-if="displaySocialList">
      <img class="w-14 h-14 rounded-full hover:cursor-pointer" src="~/assets/imgs/social/linkedin.png" alt="Bordered avatar">
      <img class="w-14 h-14 rounded-full hover:cursor-pointer" src="~/assets/imgs/social/instagram.png" alt="Bordered avatar">
      <img class="w-14 h-14 rounded-full hover:cursor-pointer" src="~/assets/imgs/social/facebook.png" alt="Bordered avatar">
      <img class="w-14 h-14 rounded-full hover:cursor-pointer" src="~/assets/imgs/social/twitter.png" alt="Bordered avatar">
    </div>
    
  </div>
  <!-- <img class="absolute w-14 h-14 bottom-12 left-12" src="~/assets/imgs/icons8-futurama-bender.svg" alt="Bordered avatar"> -->


</template>

<script lang="ts" setup>

import Navbar from "~/component/Navbar.vue";
import { ref } from "vue";

const displaySocialList = ref(false);
function handleSocialListDisplay(event: any) {
  // write the javascript to toggle the 
  displaySocialList.value = !displaySocialList.value;
}

</script>

<style>
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(235, 235, 235);
    color: black;
    font-family: 'Rubik';
}


</style>