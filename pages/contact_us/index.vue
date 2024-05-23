<template>
  <Head>
    <Title>HERmet - Contact Us</Title>
  </Head>

  <main>

    <div class="container">


      <div class="map">
        <p class="map_text">You can find our centre at:</p>
        <p class="address"> METTERE L'INDIRIZZO POI </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.601809805199!2d9.224601711791445!3d45.477824632408876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f232436f25%3A0x636222c502d7acd!2sPiazza%20Leonardo%20da%20Vinci%2C%20Milano%20MI!5e0!3m2!1sit!2sit!4v1716133852793!5m2!1sit!2sit"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="map_embed"></iframe>
        <div class="opening_hours">
          <p>Opening Hours:</p>
            <div class="weekday_hours">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
            <div class="weekend_hours">
              <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
            </div>
        </div>
      </div>


      <div class="contact_social">
        <div class = "contacts">
          <p>Call us now at: </p>
          <a class="number" href="tel:123-456-7890">123-456-7890</a>

          <br><br>

          <p>Or write as an email at: </p>
          <a class="mail" href="mailto:10727489@polimi.it">hermet@hermet.com</a>

          <img src="/assets/imgs/contactus.jpg">
        </div>

        <div class="social">
          <p>Follow us on:</p>
          <a href="https://www.instagram.com" class = "social_logo" target="_blank" aria-label="Link to Instagram"><img src="/assets/imgs/social/instagram2.png"></a>
          <a href="https://www.facebook.com" class = "social_logo" target="_blank" aria-label="Link to Facebook"><img src="/assets/imgs/social/facebook.png"></a>
          <a href="https://twitter.com/home" class = "social_logo" target="_blank" aria-label="Link to Twitter"><img src="/assets/imgs/social/twitter.png"></a>
          <a href="https://www.linkedin.com" class = "social_logo" target="_blank" aria-label="Link to LinkedIn"><img src="/assets/imgs/social/linkedin.png"></a>
        </div>
      </div>




    </div>
  </main>
</template>

<script setup>

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


.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5%;
  width: 85%;
  height: 80%;
  margin-left: 7.5%;
  margin-right: 7.5%;
  margin-top: 5%;

}

.contact_social,
.map {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}

.map_embed{
  margin-top: 15px;
  width: 500px;
  height: 360px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.contact_social {
  justify-content: space-between;
}

.social_logo {
  display: inline-block;
  margin-right: 10px;
}

.social_logo img {
  width: 50px;
  height: 50px;
}

.opening_hours{
  margin-top: 15px;
}

.weekday_hours p, .weekend_hours p{
  color: black;
  font-size: 18px;
}

p{
  color: #d62828;
  font-size: 25px;
  font-weight: 550;
}

.address{
  color: black;
}

.number, .mail, .address{
  font-size: 25px;
}
</style>