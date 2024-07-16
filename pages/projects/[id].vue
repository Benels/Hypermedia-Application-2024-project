<template>
  <Head>
    <Title>HERmet - {{a.name}}</Title>
  </Head>

  <main class="outerContainer">

    <!-- BREADCRUMBS -->
    <ol class="inline-flex gap-4 text-xl">
      <div class="relative w-fit">
        <a class="breadcrumbs-ourprojects" id="pc" href="/projects/">Our Projects</a>

        <!--shorter version for smaller devices-->
        <a class="breadcrumbs-ourprojects" id="mobile" href="/projects/">PRJs</a>
      </div>

      <li>
        <p> > </p>
      </li>

      <li class="flex flex-col items-center projectItem hover:cursor-pointer">
        <div class="relative">
          <p> {{ a.name }} </p>
          <div class="bg projectDropdown rounded-lg shadow-xl border border-gray-300 self-center absolute text-center px-2">
            <ul class="grid grid-cols-1 divide-y divide-gray-300">
              <li v-for="s of allProjects.filter((x) => x.activity_id !== a.activity_id)" class="p-2 hover:text-red"><router-link :to="'/projects/' + s.activity_id">{{ s.name }}</router-link></li>
            </ul>
          </div>
        </div>
      </li>
    </ol>

    <br><br><h1>{{ a.name }}</h1><br>
    <div class="image-summary">
      <!--decorative image retrieved from database-->
      <img class="main-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/projects/${a.activity_id}.jpg`" :alt="`Missing Image`" />

      <div class="summary-leader">
        <div class="summary">
          <!--brief summary of the description of the project retrieved from the database-->
          <h2 v-html="summary"></h2>
        </div>

        <!--info and statistics of the project-->
        <div class="info-container">
          <p class="info">
            <br><hr><br>
            <!--Link to the personal page of the employee in charge of the project-->
            Leader of the project: <u><router-link class="contacts" :to="'/our_women/' + a.leader">{{person.name}} {{person.surname}}</router-link></u><br>
            {{a.statistics}} <br>
            Places: {{a.places}} <br>
            Started in {{a.started}} <br>
            <!--contacts-->
            ✉️: <u><a class="contacts" href="mailto:10727489@polimi.it">{{a.email}}</a></u><br>
            📞: <strong><a class="contacts" href="tel:{{ a.phone_number}}">{{ a.phone_number}}</a></strong>
          </p>
        </div>
      </div>
    </div>

    <!--complete description of the project-->
    <div class = "description_container">
      <div v-html="description" class="description">
      </div>
    </div>

  </main>
</template>

<script setup>
import {ref} from "vue";
import sanitizeHtml from 'sanitize-html';

const route = useRoute()
const activityId = route.params.id;//id of the project

//retrieve project's info from db using the correct id
const {data: project} = await useFetch('/api/activities/' + activityId);
const a = JSON.parse(JSON.stringify(project.value))[0];

//retrieve info about the employee in charge of the project from the db
const person = await $fetch('/api/our_women/' + a.leader)

//text containing html tags
const summary = sanitizeHtml(a.summary);
const description = sanitizeHtml(a.description);

//retrieve all projects from db for breadcrumbs
const { data: allProjects } = await useFetch("/api/activities/projects");

//Search Engine Optimization
const page_description = ref('This page contains all the details of HERmet project ' + a.name)
const keywords = ref('Project, ' + a.name)

useHead({
  meta: [
    { name: 'description', content: page_description },
    { name: 'keywords', content: keywords }
  ]
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  text-align: justify;
  align-items: center;
}

.outerContainer {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  align-items: center;
}

h1 {
  font-size: 2rem;
  color: #d62828;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}

h2 {
  color: #8c1b1b;
  text-align: center;
  font-size: 1.2rem!important;
  font-weight: normal;
}

p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

.info {
  font-size: 1rem;
  text-align: justify;
  margin: auto;
}

.contacts {
  color: #d62828;
  font-weight: bold;
}

hr {
  color: #d62828;
}

.image-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.main-img {
  max-width: 40%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

.summary-leader {
  display: flex;
  gap: 10%;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 55%;
  font-size: 1rem;
  text-align: center;
}

.summary {
  flex: 1 1 48%;
  box-sizing: border-box;
  align-items: center;
  align-self: center;
  text-align: center;
  margin-right: 7.5%;
  margin-left: 7.5%;
}

.description_container {
  margin-left: 7.5%;
  margin-right: 7.5%;
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
  box-sizing: border-box;
  margin-bottom: 1rem;
  text-align: justify;
}

.projectDropdown {
  display: none;
  background-color: white;
}

.projectItem:hover .projectDropdown {
  display: block;
}

.breadcrumbs-ourprojects:hover{
  color: #d62828;
}

.breadcrumbs-ourprojects,
.projectItem p {
  font-size: inherit;
}

#mobile{
  display: none;
}

@media (max-width: 768px) {

  #mobile{
    display: inherit;
  }

  #pc{
    display: none;
  }

  .outerContainer {
    padding: 0;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.2rem;
  }
  .summary-leader {
    display: flex;
    margin-right: 10%;
    margin-left: 10%;
    width: 80%;
  }

  .image-summary {
    flex-direction: column;
    align-items: center;
  }


  .summary {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 1rem;
    text-align: center;
  }

  .main-img {
    max-width: 80%;
    margin-bottom: 1rem;
  }
}
</style>
