<template>
  <Head>
    <Title>HERmet - Home</Title>
  </Head>

  <main>
    <div class="main-image-container">
      <img class="image" src="/assets/imgs/homepage/homepage.jpg" alt="Error"/>
      <div class="slogan">
        <img class="logo" src="/assets/imgs/Logo.svg"/> <p class="hermet">HERmet</p><br>
        Together We Stand:<br>
        <em>Women Helping Women build the life they aspire to live</em><br>
        <a href="/about_us" class="button">Learn more about us</a>
      </div>
    </div>
    <br><br>

    <div class="links-outer-container">
      <div class="links-inner-container">
        <router-link :to="'/' + type + '/' + activity.activity_id">
          <div class="imageContainer">
            <img class="link-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/${type}/${activity.activity_id}.jpg`" :alt="`Missing Image`" />
          </div>
        </router-link>
        <div class="link-text">
          <strong>{{activity.name}} </strong><br>
          is our newest activity!<br>
          <router-link :to="'/' + type + '/' + activity.activity_id" class="activity-button">Learn more</router-link>
        </div>
      </div>

      <div class="links-inner-container">
        <div class="imageContainer">
          <a href="/contact_us">
            <img class="link-img" src="/assets/imgs/homepage/contacts.jpg" alt="Error" />
          </a>
        </div>
        <div class="link-text">
          Need <strong>help</strong>?<br>
          <small><em>Reach out to us for confidential support and counseling</em></small> <br>
          <a href="/contact_us" class="contacts-button">CONTACT US</a>
        </div>
      </div>

      <div class="links-inner-container">
        <div class="imageContainer">
          <img class="link-img" src="/assets/imgs/homepage/volunteers.jpg" alt="Error"/>
        </div>
        <div class="link-text">
          <strong>Volunteer with us</strong> <br>
          <small><em>and be a part of a supportive community commited to positive change!</em></small><br>
          ✉️: <a class="mail" href="mailto:volunteers@hermet.com">volunteers@hermet.com</a><br>
        </div>
      </div>
    </div>

    <div class="jarvis">
      <h2 class="jarvis-title">Meet Jarvis: your ally against stalking</h2><br>
      <div class="jarvis-inner-container">
        <div class="jarvis-img">
          <img src="/assets/imgs/homepage/jarvis-img.jpg"/>
        </div>
        <div class="jarvis-text">
          <p>Introducing <strong>Jarvis</strong>, our chatbot dedicated to <strong>assisting victims of stalking</strong>.<br>
          Accessible day and night, Jarvis provides essential information, safety tips, and
          guidance on taking protective measures. Reach out to Jarvis for <strong>discreet and immediate
          support</strong> whenever you need it.
          <br><br>
          Jarvis can also help answer any questions you have regarding the center,
          however she cannot respond to unrelated topics.
          <br><br>
          Click on the button on the right and start a conversation with her.
          </p>
        </div>
      </div>
    </div>
  </main>

</template>

<script setup>
const {data: activities} = await useFetch('/api/activities/mostRecentActivity');
const activity = JSON.parse(JSON.stringify(activities.value))[0];
let type;
if (activity.is_service)
  type = "services";
else type = "projects";

</script>

<style scoped>
.main-image-container {
  position: relative;
  width: 100%;
}

.image {
  width: 100%;
  height: auto;
}

.slogan{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4vw;
  text-align: center;
  background-color: rgba(214, 40, 40, 0.5);
  padding: 5%;
  border-radius: 5%;
  font-weight: bold;
  width: 70%;
  font-family: Caveat, sans-serif;
}

.slogan em{
  font-size: 3vw!important;
}

.logo{
  width: 15%;
  display: inline-block;
  -webkit-filter: drop-shadow(1px 1px 0 white) drop-shadow(-1px -1px 0 white);
  filter:drop-shadow(1px 1px 0 white) drop-shadow(-1px -1px 0 white);
}

.hermet{
  font-family: Rubik, sans-serif!important;
  font-size: 5vw!important;
  color: black!important;
  display: inline-block;
  text-shadow:
      -0.01rem -0.01rem 0 white,
      0.01rem -0.01rem 0 white,
      -0.01rem  0.01rem 0 white,
      0.01rem  0.01rem 0 white;
}

.button{
  background-color: white;
  color: #d62828;
  border: 0.3vw solid #d62828;
  border-radius: 10%;
  font-family: Rubik, sans-serif!important;
  font-size: 1.7vw;
  padding: 1%;
}

.activity-button{
  background-color: rgba(214, 40, 40, 0.8);
  color: white;
  border: 0.2vw solid white;
  border-radius: 10%;
  font-family: Rubik, sans-serif!important;
  font-size: 1.2vw;
  padding: 1%;
}

.contacts-button{
  background-color: rgba(214, 40, 40, 0.8);
  color: white;
  border: 0.2vw solid white;
  border-radius: 10%;
  font-family: Rubik, sans-serif!important;
  font-size: 1.8vw;
  padding: 1%;
}

.links-outer-container{
  display:flex;
  align-items: center;
}

.links-inner-container{
  position: relative;
  height: auto;
  padding: 2.5%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1%;
  width: v-bind(imageSize);/*da sistemare*/
}

.imageContainer {
  width: 100%;
  height: v-bind(imageSize);/*da sistemare*/
}

.imageContainer > img {
  width: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 5%;
}

.link-img{
  border-radius: 5%;
}

.link-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 1.8vw;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5%;
  border-radius: 5%;
  width: 70%;

}

.mail{
  font-size: 1.2vw;
  text-decoration: underline;
  font-weight: bold;
}

.jarvis{
  padding: 2% 6%;
  font-size: 1rem;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
  margin: 2% 10%;
  justify-content: center;
  align-items: center;
  text-align: justify;
}

.jarvis-inner-container{
  display:flex;
  gap: 5%;
}

.jarvis-text{
  display:flex;
  flex-direction: column;
}

.jarvis-img{
  display:flex;
  flex-direction: column;
}

.jarvis-title{
  color: #d62828;
  font-size: 1.8vw;
  text-align: center;
  font-weight: bold;
}

@media(max-width: 768px){
  .links-outer-container{
    display:inline;
    align-items: center;
  }
  .imageContainer {
    width: 80%;
    height: v-bind(imageSize);/*da sistemare*/
  }

  .imageContainer > img {
    width: 80%;
    object-fit: cover;
    object-position: top;
    border-radius: 5%;

  }
  .links-inner-container{
    position: relative;
    height: auto;
    align-items:center;
    width: v-bind(imageSize);/*da sistemare*/
  }

  .link-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 1.8vw;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5%;
    border-radius: 5%;
    width: 60%;
  }
}
</style>