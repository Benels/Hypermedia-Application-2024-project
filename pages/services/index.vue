<template>
  <Head>
    <Title>HERmet - Our Services</Title>
  </Head>

  <!-- Services page: contains the list of services offered by HERmet, displayed exploiting the "Activity" component -->

  <main>
    <h1 class="text-4xl text-center mt-6 md:mt-10">Our Services</h1>
    <div class="flex flex-wrap justify-center w-full mx-auto gap-6 gap-y-4 md:gap-16 md:gap-y-10 mt-4 md:mt-6 pb-8 lg:pb-0 px-20 md:px-6 lg:w-[70vw]">
      <Activity v-for = "x of services" :id = "x.activity_id" :name = "x.name" :link = "'/services/' + x.activity_id" :isService="true" />
    </div>
  </main>
</template>

<script setup>

import Activity from "~/component/Activity.vue";
import {ref} from "vue";

//API call to retrieve all the services offered by HERmet
const { data: services } = await useFetch("/api/activities/services");

//Search Engine Optimization
const description = ref('This page contains a list of HERmet services')
const keywords = ref('Services')

useHead({
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords }
  ]
})
</script>


<style scoped>

h1{
  color: #d62828;
}
</style>