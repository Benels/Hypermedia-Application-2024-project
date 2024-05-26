<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main class="flex flex-row w-[100vw] gap-8 test">
    <div class="sectionContainer flex flex-col gap-4 w-[15vw]">
      <Section v-for="s of sections" :name="s.name" :color="s.color" @click="changeSection(s)" :active="currentSection.name === s.name" />
    </div>
    <div class="peopleContainer flex flex-col flex-grow items-center justify-center flex-grow px-10 calcHeight">
      <p class="text-6xl self-center hidden">{{ currentSection.name }}</p>
      <div class="h-full flex px-8" :class="currentSection.name === 'Medical Personel' ? 'items-end max-w-[50vw]' : 'items-center max-w-[60vw]'">
        <div class="flex flex-wrap flex-row items-start justify-evenly w-full gap-8 gap-y-8">
          <TransitionGroup name="list">
            <Person v-for = "person of currentSection.people" :imageSize="currentSection.name === 'Medical Personel' ? '250px' : '300px'" :key = "person.person_id" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
          </TransitionGroup>
        </div>
        
      </div>
    </div>
  </main>
</template>

<script setup>
  import Person from "~/component/Person.vue";
  import Section from "~/component/Section.vue";
  import { ref } from "vue";

  const { data: response  } = await useFetch('/api/our_women/');
  const people = JSON.parse(JSON.stringify(response.value))

  const board = {
    "name": "Board",
    "people": people.filter((p) => { return (p.role === "CEO" || p.role === "Board Member") }).sort(boardSorting),
    "color": "#1F77B4"
  };

  const attorney = {
    "name": "Lawyers",
    "people": people.filter((p) => { return p.role === "Attorney" }),
    "color": "#2CA02C"
  };

  const call_center = {
    "name": "Call Center",
    "people": people.filter((p) => { return p.role === "Call center operator" }),
    "color": "#E377C2"
  }

  const manager = {
    "name": "Managers",
    "people": people.filter((p) => { return (p.role === "Manager" || p.role === "Safe House Manager") }),
    "color": "#7F7F7F"
  } 

  const medical_personel = {
    "name": "Medical Personel",
    "people": people.filter((p) => { return p.role.startsWith("Medical Personel") }),
    "color": "#BCBD22"
  }

  const psychologist = {
    "name": "Psychologists",
    "people": people.filter((p) => { return p.role === "Psychologist" }),
    "color": "#FF7F0E"
  } 

  const social_worker = {
    "name": "Social Workers",
    "people": people.filter((p) => { return p.role === "Social worker" }),
    "color": "#9467BD"
  }

  const vocational_trainer = {
    "name": "Vocational Trainers",
    "people": people.filter((p) => { return p.role === "Vocational Trainer" }),
    "color": "#8C564B"
  } 

  const educator = {
    "name": "Educators",
    "people": people.filter((p) => { return p.role === "Educator" }),
    "color": "#D62728"
  } 
  
  const sections = [board, attorney, call_center, vocational_trainer, psychologist, educator, manager, medical_personel, social_worker];

  const currentSection = ref(board);

  function boardSorting(a,b) {
    if(a.name > b.name)
      return +1;
    if(a.name < b.name)
      return -1;
    return 0;
  }

  function changeSection(newSection) {
    // perform check on the update
    currentSection.value = newSection;
    console.log("test");
  }

</script>

<style scoped>

  .sectionContainer {
    margin-top: auto;
    margin-bottom: auto;
  }
  .calcHeight {
    height: calc(90vh - 72px);
  }

  .list-move, /* apply transition to moving elements */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* ensure leaving items are taken out of layout flow so that moving
    animations can be calculated correctly. */
  .list-leave-active {
    position: absolute;
  }

</style>