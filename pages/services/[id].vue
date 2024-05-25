<template>
  <Head>
    <Title>HERmet - {{ service.name }}</Title>
  </Head>

  <div class="container">
    <h1>{{ service.name }}</h1>
    <div class="image-logo">
      <img class="main-image" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/services/${service.activity_id}.jpg`" :alt="`error`"/>
      <div class="logo-section">
        <h2>{{briefSummary}}</h2>
        <img class="logo" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/logo/${service.activity_id}.jpg`" :alt="`Missing Image`" />
        <div class="text-section">
          <div v-for="(part, index) in practicalInfoParts" :key="index">
            <p>{{ part }}</p>
          </div>
          <p>Phone number: <bold>{{service.phone_number}}</bold></p>
          <p>Email: <bold><a href="mailto:{{service.email}}">{{service.email}}</a></bold></p>
          <p>Person in charge: <bold> <router-link :to="'/our_women/' + leader.person_id">{{leader.name}} {{leader.surname}}</router-link></bold> - {{leader.role}}</p>
          <p class="italic">{{service.additional_info}}</p>
        </div>
      </div>
    </div>
    <div class="description">
      <div v-for="(part, index) in descriptionParts" :key="index" class="description">
        <div v-if="index !== 0">
          <p>{{ part }}</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="testimonial-section">
      <div class="testimonial-title">
        <h3>Our impact in <bold>their words</bold></h3>
        <img src="assets/imgs/testimonials.jpg" :alt="`Error`" class="testimonial-image">
      </div>
      <br>
      <br>
      <div class="testimonial-container">
        <div class="testimonials">
          <div v-for="(t, i) in testimonials" :key="i" class="testimonial-box">
            <!--<div class="testimonial-box">-->
              <p class="testimonial-quote">"{{t.quote}}"</p>
              <hr>
              <p class="testimonial-author">{{t.author}}</p>
           <!-- </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute()
  const id = route.params.id;
  const {data: services} = await useFetch('/api/activities/' + id);
  const service = JSON.parse(JSON.stringify(services.value))[0];
  const leader = await $fetch('/api/our_women/' + service.leader);

  const descriptionParts = service.description.split('<br>').map(part => part.trim());

  const practicalInfoParts = service.opening_hours.split('<br>').map(part => part.trim());
  const briefSummary = descriptionParts[0];

  const testimonials = await $fetch('/api/testimonials/' + id);

</script>

<style scoped>
body {
  background-color: white;
  color: #333;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #d62828;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.3em;
}
h2{
  color: #8c1b1b;
  text-align: center;
  margin-bottom: 20px;
  font-size:  1.2em!important;
  font-weight: normal;
}

.image-logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.main-image {
  max-width: 40%;
  height: auto;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  width: 55%;
  font-size: 1em;
}

.logo {
  border-radius: 50%;
  width: 40%;
  object-fit: cover;
  margin-bottom: 10px;
}

.text-section {
  text-align: center;
}

.text-section p {
  margin: 5px 0;
}

.text-section a {
  color: #d62828;
  text-decoration: none;
}

.text-section a:hover {
  text-decoration: underline;
}

.description {
  text-align: justify;
}

.description p {
  margin: 0;
}

bold {
  font-weight: bold;
}

.italic{
  font-style: italic;
}

.testimonial-container {
  width: 55%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

.testimonials{
  display:flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: hidden;
}

.testimonial-box {
  top: 20vh;
  border: 1px solid #d62828;
  padding: 20px;
  background-color: white;
  color: #d62828;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.testimonial-author {
  font-weight: bold;
  margin:0;
  padding: 0;
  text-align: right;
  font-family: "Indie Flower",serif;
}

.testimonial-quote {
  margin:0;
  padding: 0;
  font-size: 1.2em;
  font-family: "Indie Flower",serif;
  color: black;
  font-weight: bold;
}

h3{
  font-size: 1.8em;
  color: #d62828;
  text-align: center;
  margin-bottom: 20px;
  grid-column: 1;
  align-self: flex-start;
}

.testimonial-section{
  display: flex;
  height: 110vh;
  overflow-y: hidden;
}

.testimonial-title{
  width: 40%;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  position: sticky;
  top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.testimonial-image{
  max-width: 100%;
  height: auto;
}

hr{
  border: 0;
  border-top: 1px solid #d62828;
  margin: 10px 0;
}

</style>