<template>

  <Navbar />
  <slot />

  <div class="chatbotContainer fixed bottom-20 right-14 flex flex-col-reverse gap-2">
    <div class="w-20 h-20 overflow-hidden bg-gray-300 rounded-full z-100 flex justify-center items-center" @click="handleChatbot">
      <!-- dimensions of the svg must be +2 w.r.t. the dimensions of the above div -->
      <img class="h-[105%] w-auto ml-[8px] mb-[15px]" src="~/assets/imgs/bender.png" alt="Bordered avatar">
    </div>
    <div class="chatbot fixed right-14 mr-24" ref="chatbotContainer">
      <Chatbot></Chatbot>
    </div>
  </div>
  <div class="hidden lg:flex socialContainer fixed bottom-20 left-12 flex-col-reverse gap-2 items-center">
    <div class="w-20 h-20 bg-gray-300 rounded-full ">
      <img class="p-3 -ml-[2px]" src="~/assets/imgs/social/share.png" alt="Bordered avatar" @click="handleSocialListDisplay">
    </div>
    <div class="socialLinks flex-col-reverse gap-2" ref="socialContainer">
      <a href="https://www.linkedin.com" target="_blank" aria-label="Link to Linkedin"><img class="w-14 h-14 rounded-full hover:cursor-pointer hoverEffectX" src="~/assets/imgs/social/linkedin.png" alt="Bordered avatar"></a>
      <a href="https://www.instagram.com" target="_blank" aria-label="Link to Instagram"><img class="w-14 h-14 rounded-full hover:cursor-pointer hoverEffectX" src="~/assets/imgs/social/instagram2.png" alt="Bordered avatar"></a>
      <a href="https://www.facebook.com" target="_blank" aria-label="Link to Facebook"><img class="w-14 h-14 rounded-full hover:cursor-pointer hoverEffectX" src="~/assets/imgs/social/facebook.png" alt="Bordered avatar"></a>
      <a href="https://www.twitter.com" target="_blank" aria-label="Link to Twitter"><img class="w-14 h-14 rounded-full hover:cursor-pointer hoverEffectX" src="~/assets/imgs/social/twitter.png" alt="Bordered avatar"></a>
    </div>

  </div>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <NuxtLink to="/" title="Homepage" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="~/assets/imgs/Logo.svg" alt="Logo" class="footer-img"/>
          <span class="self-center text-2xl font-semibold whitespace-nowrap">HERmet</span>
        </NuxtLink>
      </div>
      <div>
          <span class="footer-text">We are here for you, contacs us as far as you need:<br>call us at
          <a class="number" href="tel:123-456-7890">123-456-7890</a> or send an email to <a class="mail" href="mailto:10727489@polimi.it">frontdesk@hermet.com</a></span>
      </div>
      <div>
        <span class="footer-text">&copy 2024 HERmet ODV,<br>All rights reserved</span>
      </div>
    </div>
    <div class="lg:hidden social_phone">
      <a href="https://www.linkedin.com" target="_blank" aria-label="Link to Linkedin"><img class="w-10 h-10 rounded-full hover:cursor-pointer hoverEffectY" src="~/assets/imgs/social/linkedin.png" alt="Bordered avatar"></a>
      <a href="https://www.instagram.com" target="_blank" aria-label="Link to Instagram"><img class="w-10 h-10 rounded-full hover:cursor-pointer hoverEffectY" src="~/assets/imgs/social/instagram2.png" alt="Bordered avatar"></a>
      <a href="https://www.facebook.com" target="_blank" aria-label="Link to Facebook"><img class="w-10 h-10 rounded-full hover:cursor-pointer hoverEffectY" src="~/assets/imgs/social/facebook.png" alt="Bordered avatar"></a>
      <a href="https://www.twitter.com" target="_blank" aria-label="Link to Twitter"><img class="w-10 h-10 rounded-full hover:cursor-pointer hoverEffectY" src="~/assets/imgs/social/twitter.png" alt="Bordered avatar"></a>
    </div>
    <div class="credits">
      <p id="credits">Credits: Benelle Francesco, Cavicchioli Michele, Lo Presti Irene, Lodelli Riccardo</p>
    </div>
  </footer>
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
    displayChat.value = !displayChat.value;
    chatbotContainer.value.classList.remove("setOpacity");
    setTimeout( () => {
      chatbotContainer.value.classList.remove("displayBlock");
    }, 700);
  }
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

.chatbotContainer,
.socialContainer {
  z-index: 2;
}
.social_phone {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 0;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}

.socialLinks {
  transition: opacity 1s ease;
  opacity: 0;
  display: none;
}

.hoverEffectX:hover {
  transform: translateX(0.5rem);
}

.hoverEffectY:hover {
  transform: translateY(-0.5rem);
}
/*.socialLinks:hover{
  transform: translateX(0.5rem);
}*/

.chatbot{
  transition: opacity 1s ease;
  opacity: 0;
  display: none;

}

.setOpacity {
  opacity: 1 !important;
}

.displayBlock {
  display: flex !important;
}


.footer {
  background-color: #d62828;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  width: 100%;
  flex-shrink: 0; /* Ensure footer doesn't shrink */
  z-index: 1;
}

.footer-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  max-width: 1200px;
  position: relative;
  gap: 30px;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.footer-img {
  height: 3rem;
  margin-right: 0.5rem;
}

.footer-text {
  text-align: center;
  font-family: sans-serif;
}

.credits {
  display: flex;
  position: absolute;
  bottom: 0;
  right: 1rem;
  max-width: 40%;
}

#credits {
  font-size: smaller;
  text-align: right;
}

@media (min-width: 768px) {
  .footer-container {
    height: 9rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .footer-img {
    height: 5rem;
  }
  .social_phone {
    display: none;
  }
}

</style>