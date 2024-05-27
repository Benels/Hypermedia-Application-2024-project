<template>

  <Navbar @closeChatBot="closeChatbot" />
  <slot />
  <div class="chatbot md:fixed md:bottom-14 md:right-14" ref="chatbotContainer">
      <Chatbot @handle="handleChatbot"></Chatbot>
  </div>
  <div class="chatbotContainer fixed bottom-12 right-14 flex flex-col-reverse gap-2">
    <div class="w-20 h-20 overflow-hidden bg-gray-300 rounded-full z-100 flex justify-center items-center" @click="handleChatbot">
        <!-- dimensions of the svg must be +2 w.r.t. the dimensions of the above div -->
        <img class="h-[105%] w-auto ml-[8px] mb-[15px]" src="~/assets/imgs/bender.png" alt="Bordered avatar">
    </div>
  </div>

  <div class="socialContainer fixed bottom-12 left-12 flex flex-col-reverse gap-2 items-center">
    <div class="w-20 h-20 bg-gray-300 rounded-full ">
      <img class="p-3 -ml-[2px]" src="~/assets/imgs/social/share.png" alt="Bordered avatar" @click="handleSocialListDisplay">
    </div>
    <div class="socialLinks flex-col-reverse gap-2" ref="socialContainer">
      <a href="https://www.linkedin.com" target="_blank" aria-label="Link to Linkedin"><img class="w-14 h-14 rounded-full hover:cursor-pointer hoverEffect" src="~/assets/imgs/social/linkedin.png" alt="Bordered avatar"></a>
      <a href="https://www.instagram.com" target="_blank" aria-label="Link to Instagram"><img class="w-14 h-14 rounded-full hover:cursor-pointer hoverEffect" src="~/assets/imgs/social/instagram2.png" alt="Bordered avatar"></a>
      <a href="https://www.facebook.com" target="_blank" aria-label="Link to Facebook"><img class="w-14 h-14 rounded-full hover:cursor-pointer hoverEffect" src="~/assets/imgs/social/facebook.png" alt="Bordered avatar"></a>
      <a href="https://www.twitter.com" target="_blank" aria-label="Link to Twitter"><img class="w-14 h-14 rounded-full hover:cursor-pointer hoverEffect" src="~/assets/imgs/social/twitter.png" alt="Bordered avatar"></a>
    </div>

  </div>
  <!-- <img class="absolute w-14 h-14 bottom-12 left-12" src="~/assets/imgs/icons8-futurama-bender.svg" alt="Bordered avatar"> -->

</template>

<script lang="ts" setup>

import Navbar from "~/component/Navbar.vue";
import { ref } from "vue";

const displaySocialList = ref(false);
const socialContainer = ref();
function handleSocialListDisplay(event: any) {
  // write the javascript to toggle the
  //displaySocialList.value = !displaySocialList.value;

  if(!displaySocialList.value) {
    displaySocialList.value = !displaySocialList.value;
    socialContainer.value.classList.add("displayBlock");
    setTimeout(() => {
      socialContainer.value.classList.add("setOpacity");
    }, 100);
  } else {
    displaySocialList.value = !displaySocialList.value;
    socialContainer.value.classList.remove("setOpacity");
    setTimeout(() => {
      socialContainer.value.classList.remove("displayBlock");
    }, 700);
  }
}

import Chatbot from "~/component/Chatbot.vue";
const displayChat = ref(false);
const chatbotContainer = ref();

function handleChatbot(event :any){
  if(!displayChat.value){
    displayChat.value = !displayChat.value;
    chatbotContainer.value.classList.add("displayBlock");
    setTimeout(() => {
      chatbotContainer.value.classList.add("setOpacity");
    }, 50);
  }else{
    closeChatbot();
  }
}

function closeChatbot() {
    displayChat.value = false;
    chatbotContainer.value.classList.remove("setOpacity");
    setTimeout( () => {
      chatbotContainer.value.classList.remove("displayBlock");
    }, 700);
}

</script>

<style>

::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(235, 235, 235);
    color: black;
    font-family: 'Rubik';
}


.socialLinks {
  transition: opacity 1s ease;
  opacity: 0;
  display: none;
}


.hoverEffect:hover {
  transform: translateX(0.5rem);
}

/*.socialLinks:hover{
  transform: translateX(0.5rem);
}*/

.chatbot{
  transition: opacity 1s ease;
  opacity: 0;
  display: none;
  width: 500px;
}

.setOpacity {
  opacity: 1 !important;
}

.displayBlock {
  display: flex !important;
}

@media (max-width: 768px) {

  .chatbot {
    position: absolute;
    top: 72px;
    z-index: 10;
    width: 100vw;
    max-width: 500px;
    height: calc(100vh - 72px);
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

}



</style>