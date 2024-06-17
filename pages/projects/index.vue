<template>
  <Head>
    <Title>HERmet - Our Projects</Title>
  </Head>

  <main>
    <h1 class="text-4xl text-center mt-6 md:mt-10">Our Projects</h1>
    <div class="flex flex-wrap justify-center w-full mx-auto gap-6 gap-y-4 md:gap-16 md:gap-y-10 mt-4 md:mt-6 pb-8 lg:pb-0 px-20 md:px-6 lg:w-[70vw]">
      <Activity v-for = "x of projects" :id = "x.activity_id" :name = "x.name" :link = "'/projects/' + x.activity_id" :isService="false" />
    </div>
  </main>
</template>

<script setup>

  import Activity from '~/component/Activity.vue';
  import {ref} from "vue";

  const { data: projects } = await useFetch("/api/activities/projects");

  //Search Engine Optimization
  const description = ref('This page contains a list of HERmet projects')
  const keywords = ref('Projects')

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