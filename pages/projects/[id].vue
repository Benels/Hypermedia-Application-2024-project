<template>
  <Head>
    <Title>HERmet - {{a.name}}</Title>
  </Head>

  <main class="outerContainer">
    <h1>{{ a.name }}</h1>
    <div class="image-summary">
      <img class="main-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/projects/${a.activity_id}.jpg`" :alt="`Missing Image`" />
      <div class="summary-leader">
        <div class="summary">
          <h2 v-html="summary"></h2>
        </div>
        <!--<div class="person-card">
          <router-link :to="'/our_women/' + a.leader">
            <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/person_image/${person.name}-${person.surname}.jpg`" :alt="`Missing Image`" style="justify-content: center;" />
            <h1 class="name_surname">{{ person.name }} {{ person.surname }}, <br>Leader of the project</h1>
          </router-link>
        </div>-->
        <div class="info-container">
          <p class="info">
            <br><hr><br>
            Leader of the project: <router-link :to="'/our_women/' + a.leader">{{person.name}} {{person.surname}}</router-link><br>
            {{a.statistics}} <br>
            Places: {{a.places}} <br>
            Started in {{a.started}} <br>
            ✉️ <a class="mail" href="mailto:10727489@polimi.it">{{a.email}}</a><br>
            📞 <strong>{{ a.phone_number}}</strong>
          </p>
        </div>
      </div>
    </div>
    <div class = "description_container">
      <div v-html="a.description" class="description">
      </div>
    </div>

  </main>
</template>

<script setup>
const route = useRoute()
const activityId = route.params.id;
const {data: project} = await useFetch('/api/activities/' + activityId);


const a = JSON.parse(JSON.stringify(project.value))[0];

const lead = a.leader;
const person = await $fetch('/api/our_women/' + lead)

const descriptionParts = a.description.split('<br>').map(part => part.trim());
const summary = a.summary;
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

h2{
  color: #8c1b1b;
  text-align: center;
  font-size:  1.2rem!important;
  font-weight: normal;
}

p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

.info{
  font-size: 1rem;
  text-align: justify;

}


a{
  color: #d62828;
  font-weight: bold;
  text-decoration: underline;
}
hr{
  color: #d62828;
}

.image-summary{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.main-img {
  /*width: 80%;*/
  max-width: 40%;
  height: auto;
  /*position: center;*/
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

.summary-leader {
  display: flex;
  /*flex-direction: row;*/
  gap: 10%;
  /*width: 80%;
  margin-left: 10%;*/
  /*margin-right: 10%;*/
  justify-content: space-between;
  /*align-items: flex-start;*/
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  width: 55%;
  font-size: 1rem;
}

.summary, .person-card {
  flex: 1 1 48%;
  box-sizing: border-box;
  align-items: center;
  align-self: center;
}

.summary {
  margin-right: 1%;
  text-align: justify;
}

.description_container{
  margin-left: 7.5%;
  margin-right: 7.5%;
}

.description {
  box-sizing: border-box;
  margin-bottom: 1rem;
  text-align: justify;

}

.person-card {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*padding-left: 2rem;
  padding-right: 2rem;*/
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #d62828;
}

.person-card:hover {
  transform: translateY(-0.5rem);
}

.person-card-img {
  width: 25%;
  height: 25%;
  /*alignment: center;*/
  transition: transform 0.3s ease;
  align-self: center;
  justify-content: center;
  margin-left: 37.5%;
  border-radius: 50%;
}

.person-card-img:hover {
  transform: scale(1.05);
}

.name_surname {
  font-size: 1.2rem;
  color: #d62828;
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
    max-width: 90%;
  }

  .person-card-img {
    max-width: 150px;
  }

  .name_surname {
    font-size: 1rem;
  }
}
</style>
