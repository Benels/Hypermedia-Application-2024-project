<template>


<nav>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:py-6 md:pb-4">
    <NuxtLink to="/" title="Homepage" class="flex items-center space-x-3 rtl:space-x-reverse">
        <!--<img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />-->
        <img src="~/assets/imgs/Logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap">HERmet</span>
    </NuxtLink>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="shadow-md md:shadow-none hidden w-full md:block md:w-auto z-5 rounded-xl" id="navbar-dropdown">
      <ul class="text-lg flex flex-col font-medium px-4 pb-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        <li>
          <NuxtLink to="/about_us" class="hover:text-red block pb-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">About us</NuxtLink>
        </li>
        <li>
          <button id="dropdownNavbarLink" data-dropdown-trigger="hover" data-dropdown-toggle="dropdownNavbar" data-dropdown-delay="100" class="hover:text-red flex items-center justify-between w-full py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto">
            <NuxtLink to="/activities">Our Activities</NuxtLink> <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownNavbar" class="z-10 hidden rounded-lg shadow-xl border border-gray-300 w-32 bg-dropdownMenu">
              <ul class="py-2 text-md text-center" aria-labelledby="dropdownLargeButton">
                <li class="">
                  <NuxtLink to="/projects" class="block px-4 py-2 hover:text-red">Projects</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services" class="block px-4 py-2 hover:text-red">Services</NuxtLink>
                </li>
              </ul>
              <!-- commented only because it has a pretty style and we might want to use it later
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </div> -->
          </div>
        </li>
        <li>
          <NuxtLink to="/our_women" class="hover:text-red block py-2 px-3 rounded md:border-0 md:p-0">Our Women</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact_us" class="hover:text-red block py-2 px-3 rounded md:border-0 md:p-0">Contact Us</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  


</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
</style>