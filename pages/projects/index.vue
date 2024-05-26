<template>
  <Head>
    <Title>HERmet - Our Projects</Title>
  </Head>

  <main>
    <h1 class="text-4xl text-center mt-6 md:mt-10">Our Projects</h1>
    <div class="flex flex-wrap justify-center w-full mx-auto gap-6 gap-y-4 md:gap-16 md:gap-y-10 mt-4 md:mt-6 pb-8 lg:pb-0 px-20 md:px-6 lg:w-[70vw]">
      <Project v-for = "x of projects" :id = "x.activity_id" :name = "x.name" :link = "'/projects/' + x.activity_id" />
    </div>
  </main>
</template>

<script setup>

  import Project from '~/component/Project.vue';

  const { data: projects } = await useFetch("/api/activities/projects");

</script>

<style scoped>

h1{
  color: #d62828;
}

</style>