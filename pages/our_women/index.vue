<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main class="flex flex-col w-[100vw] gap-8 mt-4">
    <div class="sectionContainer flex flex-col gap-4 min-w-fit justify-center">

      <div class="flex flex-col gap-2 px-2 w-full sm:max-w-[648px] mx-auto">
        <div class="activeSection flex flex-row gap-1 items-center">
          <Section :name="peopleStore.currentSection.name" :color="peopleStore.currentSection.color" :active="true" class="current-section" />
          <div class="dropdownIcon h-10 rounded-full" @click="handleSectionDropdown">
            <svg :class="{'rotated': rotated}" id="arrow" class="rotatable" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100" height="100">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
        <Transition name="otherSections">
          <div class="notDisplayed" v-if="displaySections">
            <Section v-for="s of peopleStore.sections.filter((x) => x.name !== peopleStore.currentSection.name)" :name="s.name" :active="false" @click="changeSection(s)" />
          </div>
        </Transition>
      </div>
    </div>
    <!-- people container for small screens -->
    <div class="peopleContainer flex flex-col items-center w-full">
      <p class="text-6xl self-center hidden">{{ peopleStore.currentSection.name }}</p>
      <div class="flex items-center min-h-[60vh]">
        <div class="flex flex-wrap px-8 gap-8 gap-y-4 justify-center peopleList ">
          <TransitionGroup name="list">
            <Person v-for = "person of peopleStore.currentSection.people" @click="peopleStore.setCurrentPerson(person)" :imageSize="'300px'" :key = "person.person_id" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role"  :link = "'/our_women/' + person.person_id"  />
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
import { usePeopleStore } from '~/stores/peopleStore';

const peopleStore = usePeopleStore();

const { data: response  } = await useFetch('/api/our_women/');
const sections = response.value.sections;
const defaultSection = response.value.defaultSection;

if(!peopleStore.sections) {
  peopleStore.setSections(sections);
}

if(!peopleStore.currentSection) {
  peopleStore.setCurrentSection(defaultSection);
}

function changeSection(newSection) {
  peopleStore.setCurrentSection(newSection);
  displaySections.value = false;
  rotated.value = !rotated.value;
}

const displaySections = ref(false);
const rotated = ref(false);

function handleSectionDropdown(event) {
  displaySections.value = !displaySections.value;
  rotated.value = !rotated.value;
}

//Search Engine Optimization
const description = ref('This page contains the entire HERmet team, divided by their role in the association')
const keywords = ref('Women, People, Team, Member, President, Board, Manager, Lawyer, Psychologist, Educator, Medical Personnel, Call Center, Vocational Trainer, Social Worker')

useHead({
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords }
  ]
})
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
  background-color: rgb(214, 40, 40);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdownIcon > svg {
  width: 60%;
}

.current-section {
  display: flex;
  width: 100%;
  background-color: #d62828;
}

.other-section:hover {
  background-color: #f0f0f0;
}

.rotatable {
  transition: transform 0.5s ease;
  cursor: pointer;
}

.rotated {
  transform: rotate(180deg);
}

</style>