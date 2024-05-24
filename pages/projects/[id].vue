<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main class="outerContainer">
    <h1>{{ a.name }}</h1>
    <img class="main-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/services/7.jpg`" :alt="`Missing Image`" />
    <div class="summary-leader">
      <div class="summary">
        <h2>Summary of the project</h2>
        <p>{{summary}}</p>
      </div>
      <div class="person-card">
        <!--h2>Leader of the project</h2-->
        <router-link :to="'/our_women/' + a.leader">
          <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/person_image/${person.name}-${person.surname}.jpg`" :alt="`Missing Image`" />
          <h1 class="name_surname">{{ person.name }} {{ person.surname }}, <br>Leader of the project</h1>
        </router-link>
      </div>
    </div>
    <h2>Description of the project</h2>
    <div v-for="(part, index) in descriptionParts" :key="index" class="description">
      <p>{{ part }}</p>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const activityId = route.params.id;
const {data: project} = await useFetch('/api/activities/' + activityId);
console.log(project[0]);

const a = JSON.parse(JSON.stringify(project.value))[0];
console.log(a.leader);

const lead = a.leader;
const person = await $fetch('/api/our_women/' + lead)

const descriptionParts = a.description.split('<br>').map(part => part.trim());
const summary = descriptionParts[0]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  text-align: justify;
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
}

h2 {
  font-size: 1.5rem;
  color: #d62828;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

.main-img {
  width: 80%;
  height: auto;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  position: center;
}

.summary-leader {
  display: flex;
  flex-direction: row;
  gap: 10%;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.summary, .person-card {
  flex: 1 1 48%;
  box-sizing: border-box;
}

.summary {
  margin-right: 1%;
  text-align: justify;
}

.description {
  margin-bottom: 1rem;
  text-align: justify;
}

.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.person-card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.person-card-img {
  width: 60%;
  alignment: center;
  border-radius: 10%;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.person-card-img:hover {
  transform: scale(1.05);
}

.name_surname {
  font-size: 1.2rem;
  color: #333;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .outerContainer {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  .summary-leader {
    flex-direction: column;
    align-items: center;
  }

  .summary {
    margin-right: 0;
    margin-bottom: 1rem;
    text-align: justify;
  }

  .person-card {
    padding: 1rem;
    max-width: 100%;
  }

  .person-card-img {
    max-width: 150px;
  }

  .name_surname {
    font-size: 1rem;
  }
}
</style>
