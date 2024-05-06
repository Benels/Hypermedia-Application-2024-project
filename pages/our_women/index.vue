<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main>
    <h1>Our People</h1>

    <div id="people-container">
      <Person v-for = "person of people" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
    </div>

  </main>
</template>

<script setup>
  import Person from "~/component/Person.vue";
  const { data: people  } = await useFetch('/api/our_women/')
</script>

<style scoped>
</style>