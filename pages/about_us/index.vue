<template>
  <Head>
    <Title>HERmet - About us</Title>
  </Head>

  <main class="outerContainer">
    <div class="main-image-container">
      <div class="centered w-full">
        <img src="/assets/imgs/aboutUs/mainimage3.jpg" alt="" id="main_img">
        <div class="title">
          <p>
            About us<br>
            <em><small>How we started and what drives us today</small></em>
          </p>
        </div>
      </div>
    </div>

  <div class="centered w-full flex-wrap">
    <div class="container">
      <div id="mc1" class="image-container">
        <img src="/assets/imgs/aboutUs/stop_violence.jpg" alt="Image of Stylized women asking for No more violence" class="img-about">
      </div>
      <div class="text-container">
        <h2 class="md:pl-8">OUR MISSION</h2>
        <p class="pr-8 md:pr-0 pl-8 justified">The mission of HERmet is to <b>provide comprehensive assistance to women</b> who have experienced
          or perceive themselves as victims of violence, stalking, or abuse of any kind. This non-profit
          organization offers a diverse array of programs aimed at <b>safeguarding victims</b> from multiple perspectives,
          encompassing <b>legal, psychological, and preventive measures,</b> with the ultimate goal of ensuring the safety
          and well-being of all women affected by such circumstances.
        </p>
      </div>
      <div id="mc2" class="image-container">
        <img src="/assets/imgs/aboutUs/stop_violence.jpg" alt="Image of Stylized women asking for No more violence" class="img-about">
      </div>
    </div>

    <div class="container">
      <div class="text-container">
        <h2 class="md:pr-8">OUR HISTORY</h2>
        <p class="pl-8 md:pl-0 pr-8 justified">
          HERmet, established in 2015, emerged <b>from a movement</b> aimed at <b>fighting violence against women</b> and <b>promoting gender equality.</b>
          Since then, the organization has worked tirelessly to provide support, advocacy, and resources for survivors while also advocating for <b>systemic
          change</b> through education and awareness initiatives.<br>With a commitment to empowerment and social justice,HERmet continues to grow and adapt,
          driven by the voices and experiences of survivors and allies, as it strives to create a world <b>free from violence and discrimination</b> for all women and girls.
        </p>
      </div>
      <div class="image-container">
        <img src="/assets/imgs/aboutUs/history.jpg" alt="Image of the First HERmet Reunion"  class="img-about">
      </div>
    </div>

    <div class="container">
      <div id="pc1" class="image-container">
        <img src="/assets/imgs/aboutUs/practical_info.jpg" alt="" class="img-about">
      </div>
      <div class="text-container">
        <h2 class="md:pl-8">PRACTICAL INFORMATION</h2>
        <p class="pr-8 md:pr-0 pl-8 justified">
          HERmet's headquarter is situated at <a href="https://www.google.it/maps/place/Piazza+Leonardo+da+Vinci,+1,+20133+Milano+MI/@45.4785935,9.2246471,17z/data=!3m1!4b1!4m6!3m5!1s0x4786c79bc37bec41:0x7b28618e58d10a3a!8m2!3d45.4785935!4d9.227222!16s%2Fg%2F11v54d4qyw?entry=ttu">Piazza Leonardo da Vinci 1, Milano MI</a>.
          It offers various services 24h per day, but you can find us at the center at these opening hours:
        </p>
        <p class="opening-hours"><b>Monday - Friday: 9:00 AM - 6:00 PM</b></p>
        <p class="opening-hours"><b>Saturday - Sunday: 10:00 AM - 4:00 PM</b></p>
        <NuxtLink to="/activities" class="button">Contact Us</NuxtLink>
      </div>
      <div id="pc2" class="image-container">
        <img src="/assets/imgs/aboutUs/practical_info.jpg" alt=""  class="img-about">
      </div>
    </div>

    <div class="container">
      <div class="text-container">
        <h2>OUR ACTIVITIES</h2>
        <NuxtLink to="/activities" class="button">More Details</NuxtLink>
      </div>
      <div id="default-carousel" class="relative w-3/4 mx-auto" data-carousel="slide">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-80">
          <div v-for="(a, index) in acts" :key="a.activity_id" :data-carousel-item="index" class="hidden duration-1500 ease-in-out">
            <div v-if="a.is_service">
              <router-link :to="'/services/' + a.activity_id">
                <img :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/services/${a.activity_id}.jpg`" class="absolute block w-full h-80 rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="Missing" />
                <div class="absolute bottom-0 left-0 w-full bg-opacity-75 bg-red text-white text-center py-2 hover:bg-red">
                  {{ a.name }}
                </div>
              </router-link>
            </div>
            <div v-else>
              <router-link :to="'/projects/' + a.activity_id">
                <img :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/projects/${a.activity_id}.jpg`" class="absolute block w-full h-80 rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="Missing" />
                <div class="absolute bottom-0 left-0 w-full bg-opacity-75 bg-red text-white text-center py-2 hover:bg-red">
                  {{ a.name }}
                </div>
              </router-link>
          </div>

          </div>
        </div>

        <button v-if="acts.length > 1" type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red bg-opacity-75  dark:bg-gray-800/30 group-hover:bg-red dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button v-if="acts.length > 1" type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red bg-opacity-75  dark:bg-gray-800/30 group-hover:bg-red dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>

    <div class="container">
      <div id="vc1" class="image-container">
        <img src="/assets/imgs/aboutUs/volunteers.jpg" alt="" class="img-about">
      </div>
      <div class="text-container">
        <h2 class="md:pl-8">JOIN THE CAUSE</h2>
        <p class="pr-8 md:pr-0 pl-8 justified">By becoming a <b>volunteer</b>, you'll support women who have experienced violence, stalking,
          or abuse, offering them crucial assistance and hope. Your dedication can help <b>change lives</b>, providing legal, psychological,
          and preventative aid.<br>At our association, you'll be part of a compassionate team committed to <b>making a difference</b>.
          Stand with HERmet and be a beacon of strength and support in our community.
        </p>
        <NuxtLink to="/volunteer" class="button">Volunteer with Us</NuxtLink>
      </div>
      <div id="vc2" class="image-container">
        <img src="/assets/imgs/aboutUs/volunteers.jpg" alt="" class="img-about">
      </div>
    </div>

  </div>
  </main>
</template>
<script setup>
  import { initCarousels } from 'flowbite';
  import { onMounted } from 'vue'

  const { data: activities } = await useFetch('/api/activities/')
  const acts = ref([])
  if (activities.value) {
    activities.value.forEach(activity => {
      acts.value.push(activity)
    })
  }

  onMounted(() => {
    setTimeout(() => {
      initCarousels();
    },100)
  });

  //Search Engine Optimization
  const description = ref('This page contains details about HERmet mission, its history, some practical information and a preview of activities')
  const keywords = ref('About Us, Mission, History, Practical Information, Activities')

  useHead({
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords }
    ]
  })
</script>
<style scoped>

.title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4vw;
  text-align: center;
  background-color: rgba(214, 40, 40, 0.5);
  padding: 5%;
  border-radius: 2rem;
  font-weight: bold;
  width: 70%;
  font-family: Caveat, sans-serif;
  align-content: center;
}

.main-image-container{
  position:relative;
}

#main_img {
  width: 95%;
  border-radius: 2rem;
}

.container {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  width: 95%;
  margin-top: 5%;
}

.image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#mc2,
#pc2,
#vc2 {
  display: none;
}

.img-about {
  border-radius: 0.5rem;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #d62828;
}

a{
  color: #d62828;
  font-weight: bold;
  text-decoration: underline;
}

.button{
  background-color: white;
  color: #d62828;
  border: 0.1rem solid #d62828;
  border-radius: 1rem;
  font-family: Rubik, sans-serif!important;
  font-size: 1.5rem;
  white-space: nowrap;
  display: inline-block;
  padding: 3px 10px;
  margin-top: 1%;
  text-align: center;
  text-decoration: none;
}

.button:hover{
  background-color:#d62828;
  color: white;
  border: 0.1rem solid white;
}

.justified {
  text-align: justify;
  font-size: 1.2rem;
}
.opening-hours {
  text-align: center;
  font-size: 1.2rem;
}

.centered {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: none;
  }
  .image-container{
    margin-top: 10px;
    width: 90%;
  }
  #mc1, #pc1, #vc1 {
    display: none;
  }
  #mc2, #pc2, #vc2 {
    display: inherit;
  }
  .opening-hours {
    font-size: 1.1rem;
  }
}
</style>