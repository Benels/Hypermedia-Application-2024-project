<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main class="flex flex-col justify-center items-center mt-8 mb-0 mx-0 p-0 gap-8">

    <div class="w-full flex flex-col items-center justify-center gap-4 z-0">
        <NuxtLink to="/services" class="text-3xl">Our Services</NuxtLink>


        <div id="default-carousel" class="relative w-1/2 mx-auto" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-80">
          <div v-for="(service, index) in services" :key="service.activity_id" :data-carousel-item="index" class="hidden duration-1500 ease-in-out">
            <router-link :to="'/services/' + service.activity_id">
              <img :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/services/${service.activity_id}.jpg`" class="absolute block w-full object-cover rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="service.name" />
              <div class="absolute bottom-0 left-0 w-full bg-opacity-75 bg-red text-white text-center py-2 hover:bg-red">
                {{ service.name }}
              </div>
            </router-link>
          </div>
        </div>
        <!-- Slider controls -->
        <button v-if="services.length > 1" type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red bg-opacity-75 dark:bg-gray-800/30 group-hover:bg-red dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button v-if="services.length > 1" type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red bg-opacity-75 dark:bg-gray-800/30 group-hover:bg-red dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

    </div>

    <br>

    
    <div class="w-full flex flex-col items-center justify-center gap-4 z-0">
      <NuxtLink to="/projects" class="text-3xl">Our Projects</NuxtLink>

      <div id="default-carousel" class="relative w-1/2 mx-auto" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-80">
          <div v-for="(project, index) in projects" :key="project.activity_id" :data-carousel-item="index" class="hidden duration-1500 ease-in-out">
            <router-link :to="'/projects/' + project.activity_id">
              <img :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/projects/${project.activity_id}.jpg`" class="absolute block w-full h-80 object-cover rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="project.name" />
              <div class="absolute bottom-0 left-0 w-full bg-opacity-75 bg-red text-white text-center py-2 hover:bg-red">
                {{ project.name }}
              </div>
            </router-link>
          </div>
        </div>

        <!-- Slider controls -->
        <button v-if="projects.length > 1" type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red bg-opacity-75 dark:bg-gray-800/30 group-hover:bg-red dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button v-if="projects.length > 1" type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red bg-opacity-75 dark:bg-gray-800/30 group-hover:bg-red dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

    </div>

    <br>
</main>
</template>

<script setup>

import { initCarousels } from 'flowbite';
import { onMounted } from 'vue'

const projects = ref([])
const services = ref([])
const { data: activities } = await useFetch('/api/activities/')

if (activities.value) {
activities.value.forEach(activity => {
  if (activity.is_service) {
    services.value.push(activity)
  }else {
    projects.value.push(activity)
  }
})
}

// initialize components based on data attribute selectors
onMounted(() => {
  setTimeout(() => {
      initCarousels();
  },100)
});

//Search Engine Optimization
const description = ref('This page contains a preview of all HERmet activities, divided into services and projects')
const keywords = ref('Activities, Projects, Services')

useHead({
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords }
  ]
})
</script>

<style scoped>


.text-3xl{
  color: #d62828;
}
</style>