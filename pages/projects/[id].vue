<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main class="outerContainer">
    <h1>{{ a.name }}</h1>
    <h2>Summary of the project</h2>
    <p>{{summary}}</p>

    <h2>Description of the project</h2>
    <div v-for="(part, index) in descriptionParts" :key="index" class="description">
      <p>{{ part }}</p>
    </div>

    <h2>Leader of the project</h2>
    <div class="person-card">
      <router-link :to="'/our_women/' + a.leader">
        <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/person_image/${person.name}-${person.surname}.jpg`" :alt="`Missing Image`" />
        <h1 class="name_surname">{{ person.name }} {{ person.surname }}</h1>
      </router-link>
    </div>
  </main>
</template>

<script setup>
  const route = useRoute()
  const activityId = route.params.id;
  const {data: project} = await useFetch('/api/activities/' + activityId);
  console.log(project[0]);

  const a = JSON.parse(JSON.stringify(project.value))[0];
  console.log(a.leader);

  const lead = a.leader;
  const person = await $fetch('/api/our_women/' + lead)

  const descriptionParts = a.description.split('<br>').map(part => part.trim());
  const summary = descriptionParts[0]
</script>

<style scoped>

h1{  font-size: 1.5rem;
  color: #d62828;
  font-weight: bold;
}

h2{  font-size: 1.2rem;
   color: #d62828;
 }

.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  max-width: 40rem;
  margin: 2rem auto;
  background-color: #fff;
}

.person-card-img {
  width: 100%;
  max-width: 20rem;
  border-radius: 10%;
  margin-bottom: 1rem;
}

.name_surname {
  text-align: center;
  margin: 0.5rem 0;
}

</style>