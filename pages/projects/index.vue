<template>
  <Head>
    <Title>HERmet - Our Projects</Title>
  </Head>

  <main>
    <h1>Our Projects</h1>
    <div class="flex flex-wrap gap-16 gap-y-12 justify-center mx-auto mt-10 max-w-[60vw] h-auto bg-gray-300">
      <Project v-for = "x of projects" :id = "x.activity_id" :name = "x.name" :link = "'/projects/' + x.activity_id" />
      <Project v-for = "x of projects" :id = "x.activity_id" :name = "x.name" :link = "'/projects/' + x.activity_id" />
    </div>
  </main>
</template>

<script setup>

  import Project from '~/component/Project.vue';

  const { data: projects } = await useFetch("/api/activities/projects");

</script>

<style scoped>


</style>