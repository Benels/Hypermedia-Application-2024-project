<template>

  <Navbar @closeChatBot="closeChatbot" ref="navbar" />
  <div class="content-container">
    <slot />
  </div>
  <div class="chatbotContainer fixed bottom-8 right-8 flex flex-col-reverse gap-2">
    <div class="z-32 w-20 h-20 overflow-hidden bg-gray-300 rounded-full flex justify-center items-center" @click="handleChatbot">
      <!-- dimensions of the svg must be +2 w.r.t. the dimensions of the above div -->
      <img class="h-[105%] w-auto ml-[8px] mb-[15px]" src="~/assets/imgs/bender.png" alt="Bordered avatar">
    </div>
    <div class="z-33 chatbot fixed right-10" ref="chatbotContainer">
      <Chatbot @handle="handleChatbot" />
    </div>
  </div>
  <div class="hidden md:flex socialContainer fixed bottom-8 left-8 flex-col-reverse gap-2 items-center">
    <div class="w-20 h-20 bg-gray-300 rounded-full ">
      <img class="p-3 -ml-[2px]" src="~/assets/imgs/social/share.png" alt="Bordered avatar" @click="handleSocialListDisplay">
    </div>
    <div class="socialLinks flex-col-reverse gap-2" ref="socialContainer">
      <a href="https://www.linkedin.com" target="_blank" aria-label="Link to Linkedin"><img class="w-12 h-12 rounded-full hover:cursor-pointer hoverEffectX" src="~/assets/imgs/social/linkedin.png" alt="Bordered avatar"></a>
      <a href="https://www.instagram.com" target="_blank" aria-label="Link to Instagram"><img class="w-12 h-12 rounded-full hover:cursor-pointer hoverEffectX" src="~/assets/imgs/social/instagram2.png" alt="Bordered avatar"></a>
      <a href="https://www.facebook.com" target="_blank" aria-label="Link to Facebook"><img class="w-12 h-12 rounded-full hover:cursor-pointer hoverEffectX" src="~/assets/imgs/social/facebook.png" alt="Bordered avatar"></a>
      <a href="https://www.twitter.com" target="_blank" aria-label="Link to Twitter"><img class="w-12 h-12 rounded-full hover:cursor-pointer hoverEffectX" src="~/assets/imgs/social/twitter.png" alt="Bordered avatar"></a>
    </div>
  </div>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <NuxtLink to="/" title="Homepage" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="~/assets/imgs/Logo.svg" alt="Logo" class="footer-img"/>
          <span class=" self-center text-2xl font-semibold whitespace-nowrap">HERmet</span>
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
    <div class="md:hidden socialPhone">
      <a href="https://www.linkedin.com" target="_blank" aria-label="Link to Linkedin"><img class="w-10 h-10 rounded-full hover:cursor-pointer hoverEffectY" src="~/assets/imgs/social/linkedin.png" alt="Bordered avatar"></a>
      <a href="https://www.instagram.com" target="_blank" aria-label="Link to Instagram"><img class="w-10 h-10 rounded-full hover:cursor-pointer hoverEffectY" src="~/assets/imgs/social/instagram2.png" alt="Bordered avatar"></a>
      <a href="https://www.facebook.com" target="_blank" aria-label="Link to Facebook"><img class="w-10 h-10 rounded-full hover:cursor-pointer hoverEffectY" src="~/assets/imgs/social/facebook.png" alt="Bordered avatar"></a>
      <a href="https://www.twitter.com" target="_blank" aria-label="Link to Twitter"><img class="w-10 h-10 rounded-full hover:cursor-pointer hoverEffectY" src="~/assets/imgs/social/twitter.png" alt="Bordered avatar"></a>
    </div>
    <div class="credits">
      <p>Credits: Benelle Francesco, Cavicchioli Michele, Lo Presti Irene, Lodelli Riccardo</p>
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
    closeNavbar();
    displayChat.value = !displayChat.value;
    chatbotContainer.value.classList.add("displayBlock");
    setTimeout(() => {
      chatbotContainer.value.classList.add("setOpacity");
    }, 50);
    document.body.classList.add("no-scroll");
  }else{
    closeChatbot();
  }
}

function closeChatbot() {
  displayChat.value = false;
  //displayChat.value = !displayChat.value;
  chatbotContainer.value.classList.remove("setOpacity");
  setTimeout( () => {
    chatbotContainer.value.classList.remove("displayBlock");
    document.body.classList.remove("no-scroll");
  }, 700);
}

const navbar = ref();

function closeNavbar() {
  console.log("provo a chiudere navbar");
  navbar.value.closeNavbar();
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
  background: linear-gradient(
      to bottom,
      rgb(235 235 235 / 94%),
      rgb(235 235 235 / 94%)
  ), url('assets/imgs/our_women_bg.jpg') repeat;  color: black;
  font-family: 'Rubik';
  -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
}

.content-container {
  margin-top: 72px;
}


.socialPhone {
  display: none;
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
  width: 500px;
}

.chatbotContainer,
.socialContainer {
  z-index: 31;
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
  padding: 1rem;
  position: relative;
  width: 100%;
  flex-shrink: 0; /* Ensure footer doesn't shrink */
  z-index: 1;
  margin-top: 2rem;
}

.footer-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 9rem;
  width: 80%;
}

.footer-logo {
  display: flex;
  align-items: center;
  right: 4rem;

}

.footer-img {
  height: 5rem;
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
  font-size: smaller;
  text-align: right;
}

.external{
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      to bottom,
      rgb(235 235 235 / 98%),
      rgb(235 235 235 / 95%)
  ), url('assets/imgs/our_women_bg.jpg') repeat;
  position: relative;
}

.no-scroll {
}

@media (max-width: 768px) {
  .chatbot {
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

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: normal;
    justify-content: left;
    position: relative;
    width: 100%;
    height: 18rem;
    gap: 1rem;
  }
  .footer-img {
    height: 3rem;
  }
  .socialPhone {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin: 0;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  .credits {
    max-width: 40%;
  }

  .no-scroll {
    overflow: hidden;
    height: 100%;
  }
}

</style>