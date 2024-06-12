<template>


  <nav class="bg fixed w-full z-[9998]">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:py-6 md:pb-4">
      <NuxtLink @click="closeNavbarChatbot" to="/" title="Homepage" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="~/assets/imgs/Logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap">HERmet</span>
      </NuxtLink>
      <button @click="toggleNavbar" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>   
      <div ref="navbarMenu" class="shadow-md md:shadow-none hidden w-full md:block md:w-auto rounded-xl z-20 bg-dropdownMenu">
        <ul class="text-lg flex flex-col font-medium px-4 pb-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <NuxtLink @click="closeNavbar" to="/about_us" :class="currentRoute === 'about_us' ? 'text-red underline underline-offset-4 decoration-2' : ''" class="hover:text-red block pb-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">About us</NuxtLink>
          </li>
          <li class="activities_link flex flex-col">
            <button :class="currentRoute === 'activities' ? 'text-red underline underline-offset-4 decoration-2' : ''" class="hover:text-red flex items-center justify-between w-full py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto">
              <NuxtLink  @click="closeNavbar" to="/activities">Our Activities</NuxtLink> <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
            </button>
            <!-- Dropdown menu -->
            <div class="activities_dropdown rounded-lg shadow-xl border border-gray-300 w-32 self-center mt-7">
                <ul class="py-2 text-md text-center" aria-labelledby="dropdownLargeButton">
                  <li class="">
                    <NuxtLink  @click="closeNavbar" to="/services" class="block px-4 py-2 hover:text-red">Services</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink  @click="closeNavbar" to="/projects" class="block px-4 py-2 hover:text-red">Projects</NuxtLink>
                  </li>
                </ul>
                <!-- commented only because it has a pretty style and we might want to use it later
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div> -->
            </div>
          </li>
          <li>
            <NuxtLink  @click="closeNavbar" to="/our_women" :class="currentRoute === 'our_women' ? 'text-red underline underline-offset-4 decoration-2' : '' " class="hover:text-red block py-2 px-3 rounded md:border-0 md:p-0">Our Women</NuxtLink>
          </li>
          <li>
            <NuxtLink  @click="closeNavbar" to="/contact_us" :class="currentRoute === 'contact_us' ? 'text-red underline underline-offset-4 decoration-2' : '' " class="hover:text-red block py-2 px-3 rounded md:border-0 md:p-0">Contact Us</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
    
  
  
  </template>
  
  <script setup>
  
  import { ref, watch } from "vue";
  import { useRoute } from "vue-router";
  
  const emit = defineEmits(['closeChatBot']);

  const route = useRoute();
  const navbarMenu = ref();
  const currentRoute = ref("index");

  watch(() => route.name, (newName, oldName) => {
    currentRoute.value = newName.split("-")[0];
  })

  function closeNavbar() {
    console.log("navbar chiusa");
    navbarMenu.value.classList.add("hidden");
  }

  function toggleNavbar(event) {
    emit("closeChatBot");
    navbarMenu.value.classList.toggle("hidden");
  }

  function closeNavbarChatbot(){
    emit("closeChatBot");
    navbarMenu.value.classList.add("hidden");
  }

  
  defineExpose({
    closeNavbar
  });
  </script>
  
  <style scoped>

  .bg{
    background-color: #ebebeb;
    top: 0;
  }
  .activities_dropdown {
    display: none;
    z-index: 9999;
    position: absolute;
    background-color: #ebebeb;
  }
  
  .activities_link:hover .activities_dropdown {
    display: block;
  }
  
  </style>