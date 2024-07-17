<template>
  <Head>
    <Title>Volunteer</Title>
  </Head>


  <!-- Page that contains the volunteering form, after a brief introduction
       This page exploits the "FormVolunteering" component, with its structure and API calls -->

  <div class="container">
    <h1>Volunteer</h1>
    <div class="intro">
        <p><strong>Volunteer with us and be a part of a supportive community committed to positive change!</strong></p>
        <br>
        <p>Thank you for your interest in volunteering with us! Our organization thrives on the passion and dedication of volunteers like you, who are committed to making a positive impact in our community. By joining our team, you will have the opportunity to contribute your skills, meet like-minded individuals, and make a real difference in the lives of those we serve.</p>
        <br>
        <p>Whether you have a few hours a week or can commit to a longer-term project, we welcome volunteers from all backgrounds and with a variety of skills. Our volunteer roles range from administrative support to hands-on activities, and we strive to match you with opportunities that align with your interests and expertise.</p>
        <br>
        <p>Please fill out the form below to get started. We ask for some basic information to better understand your interests and availability. Once we receive your application, our volunteer coordinator will reach out to discuss the next steps and find the best fit for you within our organization.</p>
        <br>
        <p>Together, we can achieve great things. Thank you for considering joining our volunteer team!</p>

    </div>

    <hr>

    <div class="form">
      <FormVolunteering></FormVolunteering>
    </div>
  </div>

</template>

<script setup>
import FormVolunteering from "~/component/FormVolunteering.vue";
import {ref} from "vue";

//Search Engine Optimization
const description = ref('This page contains the volunteer application form for who aims to join HERmet')
const keywords = ref('Women, People, Team, Volunteer, Application, HERmet, Join, Work,Us, Form')

useHead({
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords }
  ]
})
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  text-align: justify-all;
  align-items: center;
}

.container{
  max-width: 1200px;
  margin: auto;
  padding: 4rem;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  align-items: center;
}

.intro, form{
  margin: auto;
  padding: 2rem;
  text-align: justify;
}

form{
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
}


h1 {
  font-size: 2rem;
  color: #d62828;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}

p{
  text-align: justify;
  padding-left: 2rem;
  padding-right: 2rem;
}

.form{

}

hr{
  border: 0;
  border-top: 1px solid #d62828;
  margin: 2rem 4rem;
}

@media (max-width: 768px) {

  .container{
    max-width: 1200px;
    margin: auto;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    align-items: center;
  }

  p{
    text-align: justify;
    padding-left: 0;
    padding-right: 0;
  }
}

</style>