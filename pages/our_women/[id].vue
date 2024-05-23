<template>
  <Head>
    <title>
      {{person.name}} {{person.surname}} - HERmet
    </title>

  </Head>
  <main>
    <div class="person-card">
      <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/person_image/${person.name}-${person.surname}.jpg`" :alt="`Missing Image`" />
      <h1 class="name_surname">{{ person.name }} {{ person.surname }}</h1>
      <h2 class="name_surname">{{ person.role }}</h2>
      <div class="description-box">
        <div v-for="(part, index) in descriptionParts" :key="index" class="description">
          <p>{{ part }}</p>
        </div>
      </div>
      <nuxt-link :to="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/cv/${person.name}${person.surname}.pdf`" target="_blank">{{ person.name }} {{ person.surname }}'s CV</nuxt-link>
    </div>





    <div v-if="projects.length > 0">
      <p>Projects managed by {{ person.name }} {{ person.surname }}</p>

      <div id="default-carousel" class="relative w-1/2 mx-auto" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-80">
          <div v-for="(project, index) in projects" :key="project.activity_id" :data-carousel-item="index" class="hidden duration-700 ease-in-out">
            <router-link :to="'/projects/' + project.activity_id">
              <img :src="project.picture" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="project.name" />
              <div class="absolute bottom-0 left-0 w-full bg-opacity-75 bg-black text-white text-center py-2">
                {{ project.name }}
              </div>
            </router-link>
          </div>
        </div>

        <!-- Slider indicators -->
        <!--div v-if="projects.length > 1" class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button v-for="(project, index) in projects" :key="index" type="button" class="w-3 h-3 rounded-full" :aria-current="index === 0" :aria-label="'Slide ' + (index + 1)" :data-carousel-slide-to="index"></button>
        </div-->

        <!-- Slider controls -->
        <button v-if="projects.length > 1" type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button v-if="projects.length > 1" type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>


    <div v-if="services.length > 0">
      <p>Services managed by {{ person.name }} {{ person.surname }}</p>

      <div id="default-carousel" class="relative w-1/2 mx-auto" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-80">
          <div v-for="(service, index) in services" :key="service.activity_id" :data-carousel-item="index" class="hidden duration-700 ease-in-out">
            <router-link :to="'/services/' + service.activity_id">
              <img :src="service.picture" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="service.name" />
              <div class="absolute bottom-0 left-0 w-full bg-opacity-75 bg-black text-white text-center py-2">
                {{ service.name }}
              </div>
            </router-link>
          </div>
        </div>

        <!-- Slider indicators -->
        <!--div v-if="services.length > 1" class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button v-for="(service, index) in services" :key="index" type="button" class="w-3 h-3 rounded-full" :aria-current="index === 0" :aria-label="'Slide ' + (index + 1)" :data-carousel-slide-to="index"></button>
        </div-->

        <!-- Slider controls -->
        <button v-if="services.length > 1" type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button v-if="services.length > 1" type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>




  </main>


</template>



<script setup>

    import WomenActivities from "~/component/WomenActivities.vue";
    import { initCarousels } from 'flowbite';
    import { onMounted } from 'vue'

    const route = useRoute()
    const person = await $fetch('/api/our_women/' + route.params.id) //get the specific person from their id

    const projects = ref([])
    const services = ref([])
    const { data: activities } = await useFetch('/api/activities/leader/' + route.params.id)

    if (activities.value) {
      activities.value.forEach(activity => {
        if (activity.is_service) {
          services.value.push(activity)
        }else {
          projects.value.push(activity)
        }
      })
    }

    const descriptionParts = person.description.split('<br>').map(part => part.trim());



    onMounted(() => {
      setTimeout(() => {
        initCarousels();
      },100)
    });



</script>

<style scoped>

.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-width: 40rem;
  margin: 2rem auto;
  background-color: #fff;
}

.person-card-img {
  width: 100%;
  max-width: 20rem;
  border-radius: 10%;
  margin-bottom: 1rem;
}

.name_surname {
  text-align: center;
  margin: 0.5rem 0;
}

.name_surname:first-of-type {
  font-size: 2rem;
  font-weight: bold;
}

.name_surname:last-of-type {
  font-size: 1.5rem;
  color: #555;
}

.description-box {
  width: 100%;
  padding: 1rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  box-sizing: border-box;
}

.description {
  margin-bottom: 1rem;
}

.description p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #333;
}

</style>