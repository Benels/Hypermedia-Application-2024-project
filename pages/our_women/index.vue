<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main class="outerContainer">
    <h1>Our People</h1>

    <div class="peopleContainer">
      <Person v-for = "person of people" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
    </div>

  </main>
</template>

<script setup>
  import Person from "~/component/Person.vue";
  const { data: people  } = await useFetch('/api/our_women/');
</script>

<style scoped>
  .outerContainer {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  /* GRID
  .peopleContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 128px;
    row-gap: 32px;
  }*/

  .peopleContainer {
    /* gapSize * 2 + personCardWidth * 3 */
    max-width: calc(128px * 2 + 240px * 3);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 128px;
    row-gap: 32px;
  }

</style>