<template>
  <Head>
    <title>
      {{person.name}} {{person.surname}} - HERmet
    </title>

  </Head>

  <main>

    <p>temp - {{person.person_id}}</p>
    <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/person_image/${person.name}-${person.surname}.jpg`"  :alt="`Missing Image`" />
    <h1 class = "name_surname">{{person.name}} {{person.surname}}</h1>
    <h2 class = "name_surname">{{person.role}}</h2>
    <p class = "name_surname">{{person.description}}</p>
    <p>Dynamic and results-oriented professional with a diverse background in fashion hospitality, and event planning. Known for excellent communication skills, strong attention to detail, and ability to thrive in fast-paced environments.<br> Now she is a Board Member for HERmet.</p>

    <div>
      <p v-if="projects.length > 0">Projects managed by {{person.name}} {{person.surname}}</p>
      <WomenActivities v-for = "act of projects" :id="act.activity_id" :name="act.name" :pic="act.picture"  :link = "'/projects/' + act.activity_id"  />
    </div>
    <div>
      <p v-if="services.length > 0">Services managed by {{person.name}} {{person.surname}}</p>
      <WomenActivities v-for = "act of services" :id="act.activity_id" :name="act.name" :pic="act.picture" :link = "'/services/' + act.activity_id" />
    </div>

    <!--p class="desc">{{person.description}}</p-->

    <div>
      <p v-if="projects.length > 0">Projects managed by {{person.name}} {{person.surname}}  CAROUSEL</p>

      <div id="default-carousel" class="relative w-1/2 mx-auto" data-carousel="slide">
      <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-80">
        <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="~/assets/imgs/carouselTest/1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="~/assets/imgs/carouselTest/2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
          <!-- Item 3 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="~/assets/imgs/carouselTest/3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>

        <!-- Slider controls -->
          <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
      </button>
          <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
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
    const { data: activities } = await useFetch('/api/our_women/activities/' + route.params.id)

    if (activities.value) {
      activities.value.forEach(activity => {
        if (activity.is_service) {
          services.value.push(activity)
        }else {
          projects.value.push(activity)
        }
      })
    }


    onMounted(() => {
      setTimeout(() => {
        initCarousels();
      },100)
    });




</script>

<style scoped>

</style>