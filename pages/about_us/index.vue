<template>
  <Head>
    <Title>HERmet - About us</Title>
  </Head>

  <main class="outerContainer">

    <div class="centered hidden">
      <p class="self-center text-6xl font-semibold whitespace-nowrap hidden">HERmet</p>
    </div>
    <div class="centered w-full">
      <img src="/assets/imgs/aboutus_big_2.jpeg" width="100%">
    </div>

    <div class="container">
      <div class="image-container">
        <img src="/assets/imgs/aboutUs/stop_violence.jpg" class="img-about">
      </div>
      <div class="text-container">
        <h2>OUR MISSION</h2>
        <p class="justified">The mission of HERmet is to provide comprehensive assistance to women who have experienced
          or perceive themselves as victims of violence, stalking, or abuse of any kind. This non-profit
          organization offers a diverse array of programs aimed at safeguarding victims from multiple perspectives,
          encompassing legal, psychological, and preventive measures, with the ultimate goal of ensuring the safety
          and well-being of all women affected by such circumstances.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="text-container">
        <h2>OUR HISTORY</h2>
        <p class="justified">
          HERmet, established in 2015, emerged from a grassroots movement aimed at combatting violence against women and promoting gender equality.
          Since then, the organization has worked tirelessly to provide support, advocacy, and resources for survivors while also advocating for systemic
          change through education and awareness initiatives. With a commitment to empowerment and social justice,
          HERmet continues to grow and adapt, driven by the voices and experiences of survivors and allies, as it strives to create a world free
          from violence and discrimination for all women and girls.
        </p>
      </div>
      <div class="image-container">
        <img src="/assets/imgs/aboutUs/history.jpg" class="img-about">
      </div>
    </div>

    <div class="container">
      <div class="image-container">
        <img src="/assets/imgs/aboutUs/stop_violence.jpg" class="img-about">
      </div>
      <div class="text-container">
        <h2>PRACTICAL INFORMATION</h2>
        <p class="justified">
          HERmet's headquarter is situated in Milan, at Città Studi.
          It offers various services 24h per day, but you can find someone at the center at these opening hours
        </p>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 4:00 PM</p>
      </div>
    </div>

    <div class="container">
      <div class="text-container">
        <h2>OUR ACTIVITIES</h2>
      </div>
      <div class="w-full flex flex-col items-center justify-center gap-4 z-0">
        <div id="default-carousel" class="relative w-full mx-auto" data-carousel="slide">
          <!-- Carousel wrapper -->
          <div class="relative h-100 overflow-hidden rounded-lg md:h-80">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/assets/imgs/carouselTest/1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/assets/imgs/carouselTest/2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/assets/imgs/carouselTest/3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
          </div>
          <!-- Slider indicators -->
          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          </div>
          <!-- Slider controls -->
          <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  <span class="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span class="sr-only">Next</span>
              </span>
          </button>
        </div>
      </div>

    </div>

  </main>
</template>
<script setup>
</script>
<style scoped>

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 85%;
  height: 80%;
  margin-left: 7.5%;
  margin-right: 7.5%;
  margin-top: 5%;
}

.image-container,
.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.img-about {
  border-radius: 0.5rem;
}

h2 {
  font-size: 35px;
}

.justified {
  text-align: center;
  padding-left: 7%;
  padding-right: 7%;
}

.centered {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>