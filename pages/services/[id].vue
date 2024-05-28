<template>
  <Head>
    <Title>HERmet - {{ service.name }}</Title>
  </Head>

  <div class="container">
    <h1>{{ service.name }}</h1>
    <div class="image-logo">
      <img class="main-image" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/services/${service.activity_id}.jpg`" :alt="`error`"/>
      <div class="logo-section">
        <!--<h2>{{briefSummary}}</h2>-->
        <h2 v-html="briefSummary"></h2>
        <img class="logo" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/logo/${service.activity_id}.PNG`" :alt="`Missing Image`" />
        <div class="text-section">
          <!--<div v-for="(part, index) in practicalInfoParts" :key="index">
            <p>{{ part }}</p>
          </div>-->
          <p v-html="openingHours"></p>
          <p>📞: <strong><a class="tel-number" href="tel:{{service.phone_number}}">{{service.phone_number}}</a></strong></p>
          <p>✉️: <strong><a href="mailto:{{service.email}}">{{service.email}}</a></strong></p>
          <p>Person in charge: <strong> <router-link :to="'/our_women/' + leader.person_id">{{leader.name}} {{leader.surname}}</router-link></strong> - {{leader.role}}</p>
          <p class="italic">{{service.additional_info}}</p>
        </div>
      </div>
    </div>
    <div class="description">
      <!--<div v-for="(part, index) in descriptionParts" :key="index" class="description">
        <div v-if="index !== 0">
          <p>{{ part }}</p>
        </div>
      </div>-->
      <div v-html="description"></div>
    </div>
    <br>
    <div class="testimonial-section">
      <div class="testimonial-title">
        <h3>Our impact in <strong>their words</strong></h3>
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
  import sanitizeHtml from 'sanitize-html';

  const route = useRoute()
  const id = route.params.id;

  const {data: services} = await useFetch('/api/activities/' + id);
  const service = JSON.parse(JSON.stringify(services.value))[0];
  const leader = await $fetch('/api/our_women/' + service.leader);

  const openingHours = sanitizeHtml(service.opening_hours);
  const briefSummary = sanitizeHtml(service.summary);

  const testimonials = await $fetch('/api/testimonials/' + id);

  const description = sanitizeHtml(service.description);

</script>

<style scoped>
body {
  background-color: white;
  color: #333;
  margin: 0;
  padding: 0;
}

.container {
  margin: 0 auto;
  background-color: #fffffa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  align-items: center;
  padding-right: 7rem;
  padding-left: 7rem;
  padding-top: 3.5rem;
}

h1 {
  color: #d62828;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.3rem;
  font-weight: bold;
}
h2{
  color: #8c1b1b;
  text-align: center;
  margin-bottom: 20px;
  font-size:  1.2rem!important;
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
  border-radius: 2.5%;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  width: 55%;
  font-size: 1rem;
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
  color: #333;
}

.text-section a {
  color: #d62828;
  text-decoration: none;
}

.text-section a:hover {
  text-decoration: underline;
}

.tel-number{
  color: #333!important;
}

.description {
  padding: 1rem;
  font-size: 1rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  text-align: justify;
}

.description p {
  margin: 0;

}

.italic{
  font-style: italic;
}

.testimonial-container {
  width: 55%;
  height: 95%;
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
  font-size: 1.2rem;
  font-family: "Indie Flower",serif;
  color: black;
  font-weight: bold;
}

h3{
  font-size: 1.8rem;
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
  border-radius: 2.5%;
}

hr{
  border: 0;
  border-top: 1px solid #d62828;
  margin: 10px 0;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .image-logo {
    flex-direction: column;
    align-items: center;
  }

  .main-image {
    max-width: 100%;
  }

  .logo-section {
    width: 100%;
    margin-left: 0;
  }

  .text-section {
    width: 100%;
  }

  .testimonial-section {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .testimonial-title {
    width: 100%;
    position: static;
  }

  .testimonial-container {
    width: 100%;
  }

  .testimonials {
    width: 100%;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2{
    font-size: 0.8rem!important;
  }

  p{
    font-size: 0.7rem;
  }

  .testimonial-box {
    width: 100%;
  }
}

</style>