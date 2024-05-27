<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main class="flex flex-col lg:flex-row w-[100vw] gap-8 mt-4">
    <div class="sectionContainer flex flex-col gap-4 min-w-fit">
      <!-- Section for the MD screen -->
      <Section class="hidden lg:flex" v-for="s of sections" :name="s.name" :color="s.color" @click="changeSection(s)" :active="currentSection.name === s.name" />
      
      <!-- Section for the small screens -->
      <div class="lg:hidden flex flex-col gap-2 px-2 w-full sm:max-w-[648px] mx-auto">
        <div class="activeSection flex flex-row gap-1 items-center">
          <Section :name="currentSection.name" :color="currentSection.color" class="flex-grow" />
          <div class="dropdownIcon h-10 rounded-full" @click="handleSectionDropdown">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
          </div>
        </div>
        <Transition name="otherSections">
          <div class="notDisplayed" v-if="displaySections" >
            <Section v-for="s of sections.filter((x) => x.name !== currentSection.name)" :name="s.name" :color="s.color" @click="changeSection(s)" :active="currentSection.name === s.name" />
          </div>
        </Transition>
      </div>
    </div>
    <!-- people container for small screens -->
    <div class="peopleContainer lg:hidden flex flex-col items-center w-full">
      <p class="text-6xl self-center hidden">{{ currentSection.name }}</p>
      <div class="flex items-center min-h-[60vh]">
        <div class="flex flex-wrap px-8 gap-8 gap-y-4 justify-center peopleList ">
          <TransitionGroup name="list">
            <Person v-for = "person of currentSection.people" :imageSize="'300px'" :key = "person.person_id" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
          </TransitionGroup>
        </div>
        
      </div>
    </div>
    <!-- people container for LG -->
    <div class="peopleContainer hidden lg:flex flex-col flex-grow items-center justify-center flex-grow px-10 calcHeight">
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
    displaySections.value = false;
  }

  const displaySections = ref(false);
  
  function handleSectionDropdown(event) {
    displaySections.value = !displaySections.value;
  }


</script>

<style scoped>

  .peopleList {
    align-items: flex-start;
  }

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
    transition: opacity 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
  }

  /* ensure leaving items are taken out of layout flow so that moving
    animations can be calculated correctly. */
  .list-leave-active {
    position: absolute;
  }

    /* we will explain what these classes do next! */
  .otherSections-enter-active {
    transition: opacity 0.8s ease;
  }

  .otherSections-enter-from,
  .otherSections-leave-to {
    opacity: 0;
  }


  .notDisplayed {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.5rem;
    row-gap: 0.5rem;
  }

  .dropdownIcon {
    aspect-ratio: 1/1;
    background-color: rgb(173, 173, 173);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropdownIcon > svg {
    width: 60%;
  }

</style>