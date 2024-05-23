<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main class="flex flex-col">
    <p class="text-5xl p-10 hidden">Our Women</p>

    <!-- <div class="peopleContainer">
      <Person v-for = "person of people" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
    </div> -->

    <div class="calcHeight w-full flex flex-col justify-center items-center">
      <div id="sectionName" class="">
        <p class="text-3xl uppercase text-center">Board</p>
      </div>
      <div id="sectionCards" class="flex flex-wrap gap-8 mt-4 w-2/3 justify-center items-start">
        <Person v-for = "person of board" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>

    <div v-for="s of sections" class="min-h-[100vh] w-full flex flex-col justify-center items-center" :class="s.id % 2 !== 0 ? 'bg-red': '' ">
      <div id="sectionName" class="">
        <p class="text-3xl uppercase text-center">{{ s.name }}</p>
      </div>
      <div id="sectionCards" class="flex flex-wrap gap-8 mt-4 w-2/3 justify-center items-start">
        <Person v-for = "person of s.people" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>


    <!--COMPLETE LIST -->
    <!-- <div v-for="s of sections" class="text-center w-full flex flex-col justify-center p-20" :class="s.id % 2 !== 0 ? 'bg-red' : 'bg-gray-300'">
      <h1 class="text-3xl uppercase">{{ s.name }}</h1>
      <div class="flex flex-row justify-center items-top gap-4 mt-4">
        <Person v-for = "person of s.people" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div> -->

  </main>
</template>

<script setup>
  import Person from "~/component/Person.vue";

  const { data: response  } = await useFetch('/api/our_women/');
  const people = JSON.parse(JSON.stringify(response.value))

  const board = people.filter((p) => { return (p.role === "CEO" || p.role === "Board Member") }).sort(boardSorting);
  const attorney = people.filter((p) => { return p.role === "Attorney" });
  const call_center = people.filter((p) => { return p.role === "Call center operator" });
  const manager = people.filter((p) => { return (p.role === "Manager" || p.role === "Safe House Manager") });
  const medical_personel = people.filter((p) => { return p.role.startsWith("Medical Personel") });
  const psychologist = people.filter((p) => { return p.role === "Psychologist" });
  const social_worker = people.filter((p) => { return p.role === "Social worker" });
  const vocational_trainer = people.filter((p) => { return p.role === "Vocational Trainer" });
  const educator = people.filter((p) => { return p.role === "Educator" });
  
  function boardSorting(a,b) {
    if(a.name > b.name)
      return +1;
    if(a.name < b.name)
      return -1;
    return 0;
  }

  const sections = [
    {
      "id": 1,
      "name": "attorney",
      "people": attorney
    },
    {
      "id": 2,
      "name": "call_center",
      "people": call_center
    },
    {
      "id": 3,
      "name": "manager",
      "people": manager
    },
    {
      "id": 4,
      "name": "medical_personel",
      "people": medical_personel
    },
    {
      "id": 5,
      "name": "psychologist",
      "people": psychologist
    },
    {
      "id": 6,
      "name": "social_worker",
      "people": social_worker
    },
    {
      "id": 7,
      "name": "vocational_trainer",
      "people": vocational_trainer
    },
    {
      "id": 8,
      "name": "social_worker",
      "people": educator
    }
  ]

</script>

<style scoped>
  

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

  .calcHeight {
    min-height: calc(100vh - 72px);
  }

</style>