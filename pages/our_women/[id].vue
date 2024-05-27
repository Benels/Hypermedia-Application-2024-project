<template>
  <Head>
    <title>{{ person.name }} {{ person.surname }} - HERmet</title>
  </Head>
  <main>
    <div class="container"></div>
    <div class="person-card">
      <div class="left-section">
        <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/person_image/${person.name}-${person.surname}.jpg`" :alt="`Missing Image`"/>
      </div>
      <div class="right-section">
        <h1 class="name_surname">{{ person.name }} {{ person.surname }}</h1>
        <h2 class="role">{{ person.role }}</h2>
        <div class="personal_info">
          <h2 class="contact">Contacts:</h2>
          <a class="mail" href="mailto:10727489@polimi.it">✉️ {{ person.name }}.{{ person.surname }}@hermet.com</a>
          <div class="social">
            <h2 class="contact">Socials:</h2>
            <a href="https://www.instagram.com" class="social_logo" target="_blank" aria-label="Link to Instagram"><img src="/assets/imgs/social/instagram2.png"/></a>
            <a href="https://www.facebook.com" class="social_logo" target="_blank" aria-label="Link to Facebook"><img src="/assets/imgs/social/facebook.png"/></a>
            <a href="https://twitter.com/home" class="social_logo" target="_blank" aria-label="Link to Twitter"><img src="/assets/imgs/social/twitter.png"/></a>
            <a href="https://www.linkedin.com" class="social_logo" target="_blank" aria-label="Link to LinkedIn"><img src="/assets/imgs/social/linkedin.png"/></a>
          </div>
        </div>
        <nuxt-link :to="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/cv/${person.name}${person.surname}.pdf`" target="_blank" class="cv_box">{{ person.name }} {{ person.surname }}'s CV</nuxt-link>
      </div>
    </div>
    <div style="align-self: center">
      <div class="description-box">
        <div v-for="(part, index) in descriptionParts" :key="index" class="description">
          <p style="font-size: 1.2rem; text-align: justify">{{ part }}</p>
        </div>
      </div>
    </div>
    <br />

    <div v-if="projects.length > 0">
      <div style="text-align: center; font-family: Arial, sans-serif; font-size: 2rem; color: #d62828">Projects managed by {{ person.name }} {{ person.surname }}</div>
      <div id="default-carousel" class="relative w-1/2 mx-auto" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-80">
          <div v-for="(project, index) in projects" :key="project.activity_id" :data-carousel-item="index" class="hidden duration-700 ease-in-out">
            <router-link :to="'/projects/' + project.activity_id">
              <img class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/projects/${project.activity_id}.jpg`" :alt="project.name"/>
              <div class="absolute bottom-0 left-0 w-full bg-opacity-75 bg-red text-white text-center py-2">
                {{ project.name }}
              </div>
            </router-link>
          </div>
        </div>
        <button
            v-if="projects.length > 1"
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
        >
          <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
            v-if="projects.length > 1" type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
        >
          <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>

    <div v-if="services.length > 0">
      <div style="text-align: center; font-family: Arial, sans-serif; font-size: 2rem; color: #d62828">Service managed by {{ person.name }} {{ person.surname }}</div>
      <div id="default-carousel" class="relative w-1/2 mx-auto" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-80">
          <div v-for="(service, index) in services" :key="service.activity_id" :data-carousel-item="index" class="hidden duration-700 ease-in-out">
            <router-link :to="'/services/' + service.activity_id">
              <img :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/services/${service.activity_id}.jpg`" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="service.name"/>
              <div class="absolute bottom-0 left-0 w-full bg-opacity-75 bg-red text-white text-center py-2">
                {{ service.name }}
              </div>
            </router-link>
          </div>
        </div>
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
    <br />
  </main>
</template>

<script setup>
import WomenActivities from '~/component/WomenActivities.vue';
import { initCarousels } from 'flowbite';
import { onMounted, ref } from 'vue';

const route = useRoute();
const person = await $fetch('/api/our_women/' + route.params.id); //get the specific person from their id

const projects = ref([]);
const services = ref([]);
const { data: activities } = await useFetch('/api/activities/leader/' + route.params.id);

if (activities.value) {
  activities.value.forEach(activity => {
    if (activity.is_service) {
      services.value.push(activity);
    } else {
      projects.value.push(activity);
    }
  });
}

const descriptionParts = person.description.split('<br>').map(part => part.trim());

onMounted(() => {
  setTimeout(() => {
    initCarousels();
  }, 100);
});
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.person-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  width: 85%;
  max-width: 60rem;
  border-radius: 1rem;
  margin: auto; /* Center the card within the body */
}

.left-section,
.right-section {
  display: flex;
  flex-direction: column;
}

.person-card-img {
  max-height: 50rem;
  max-width: 20rem;
  border-radius: 10%;
  margin-bottom: 1rem;
}

.name_surname {
  margin: 0.5rem 0;
  font-size: 2rem;
  font-weight: bold;
  color: #d62828;
}

.role {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  color: #555;
}

.contact {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.social_logo {
  display: inline-block;
  margin-right: 10px;
}

.social_logo img {
  width: 30px;
  height: 30px;
}

.social_logo:hover {
  transform: translateY(-0.5rem);
}

.cv_box {
  padding: 0.5rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  margin-top: 1rem;
  max-width: fit-content;
}

.description-box {
  max-width: 70%;
  margin-left: 15%;
  padding: 1rem;
  font-size: 1rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
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

.activities {
  color: red;
  font-size: x-large;
}

.activities h1{
  position: center;
}

@media (max-width: 768px) {
  .person-card {
    flex-direction: column;
    padding: 1rem;
  }

  .left-section,
  .right-section {
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .person-card-img {
    margin-bottom: 1rem;
  }

  .right-section {
    padding-left: 0;
  }

  .description-box {
    margin-top: 1rem;
  }
}
</style>
