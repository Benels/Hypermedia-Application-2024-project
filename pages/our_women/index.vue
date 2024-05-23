<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main class="flex flex-col justify-center items-center">
    <p class="text-5xl p-10 hidden">Our Women</p>

    <!-- <div class="peopleContainer">
      <Person v-for = "person of people" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
    </div> -->

    <div class="text-center w-full flex flex-col justify-center h-[95vh]">
      <h1 class="text-4xl uppercase">Board</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of board" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>

    <div class="scrollIcon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg>
    </div>

    <div class="text-center w-full flex flex-col justify-center h-[100vh] bg-red text-white">
      <h1 class="text-4xl uppercase">Managers</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of manager" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>
    <div class="text-center w-full flex flex-col justify-center h-[100vh]">
      <h1 class="text-4xl uppercase">Lawyers</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of attorney" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>
    <div class="text-center w-full flex flex-col justify-center h-[100vh] bg-red text-white">
      <h1 class="text-4xl uppercase">Psychologists</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of psychologist" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>
    <div class="text-center w-full flex flex-col justify-center items-center h-[100vh]">
      <h1 class="text-4xl uppercase">Medical Personel</h1>
      <div class="flex flex-row flex-wrap w-2/3 justify-center items-top gap-8 mt-8">
        <Person v-for = "person of medical_personel" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>
    <div class="text-center w-full flex flex-col justify-center h-[100vh] bg-red text-white">
      <h1 class="text-4xl uppercase">Social Workers</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of social_worker" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>
    <div class="text-center w-full flex flex-col justify-center h-[100vh]">
      <h1 class="text-4xl uppercase">Vocational Trainers</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of vocational_trainer" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>
    <div class="text-center w-full flex flex-col justify-center h-[100vh] bg-red text-white">
      <h1 class="text-4xl uppercase">Educators</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of educator" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>
    <div class="text-center w-full flex flex-col justify-center h-[100vh]">
      <h1 class="text-4xl uppercase">Call Center</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of call_center" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>

    <!-- BOARD -->
    <!-- <div class="text-center w-full flex flex-col justify-center pb-20">
      <h1 class="text-4xl uppercase">Board</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of board" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div> -->
    <!--
    <div class="text-center w-full flex flex-row justify-center py-10">
      <div class="flex flex-col items-center w-[60vw]">
        <h1 class="text-4xl uppercase">board</h1>
        <div class="flex flex-row justify-center items-top gap-8 mt-8">
          <Person v-for = "person of board" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
        </div>
      </div>
      <div class="flex flex-col w-[40vw]">
        <div class="self-start">
          <h1 class="text-4xl uppercase text-center">manager</h1>
          <div class="flex flex-row justify-center items-top gap-8 mt-8">
            <Person v-for = "person of manager" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
          </div>
        </div>
      </div>
    </div>

    <div class="text-center w-full flex flex-row justify-center px-20 py-10 bg-red text-white">
      <div class="flex flex-col justify-center w-[40vw]">
        <h1 class="text-4xl uppercase">Lawyers</h1>
        <div class="flex flex-row justify-center items-top gap-8 mt-8">
          <Person v-for = "person of attorney" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
        </div>
      </div>
      <div class="flex flex-col justify-center w-[40vw]">
        <h1 class="text-4xl uppercase">Psychologists</h1>
        <div class="flex flex-row justify-center items-top gap-8 mt-8">
          <Person v-for = "person of psychologist" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
        </div>
      </div>
    </div>
    <div class="text-center w-full flex flex-col justify-center py-10">
      <h1 class="text-4xl uppercase">Call Center</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of call_center" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>

    <div class="text-center w-full flex flex-col justify-center py-10 bg-red text-white">
      <h1 class="text-4xl uppercase">Medical Personel</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of medical_personel" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
      </div>
    </div>

    <div class="text-center w-full flex flex-row justify-center px-20 py-10">
      <div class="flex flex-col justify-center w-[40vw]">
        <h1 class="text-4xl uppercase">Vocational Trainers</h1>
        <div class="flex flex-row justify-center items-top gap-8 mt-8">
          <Person v-for = "person of vocational_trainer" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
        </div>
      </div>
      <div class="flex flex-col justify-center w-[40vw]">
        <h1 class="text-4xl uppercase">Educators</h1>
        <div class="flex flex-row justify-center items-top gap-8 mt-8">
          <Person v-for = "person of educator" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
        </div>
      </div>
    </div>

    <div class="text-center w-full flex flex-col justify-center py-10 bg-red text-white">
      <h1 class="text-4xl uppercase">Social workers</h1>
      <div class="flex flex-row justify-center items-top gap-8 mt-8">
        <Person v-for = "person of social_worker" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
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
      "id": 0,
      "name": "board",
      "people": board
    },
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

</style>