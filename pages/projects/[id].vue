<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main class="outerContainer">
    <p>{{ activity.name }}</p>
    <p>{{ activity.description }}</p>

  </main>
</template>

<script setup>
const route = useRoute();
const activityId = route.params.id;

const { data: activity  } = await useFetch(`/api/activities/${activityId}`);
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