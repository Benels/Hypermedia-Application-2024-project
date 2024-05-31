import { defineStore } from 'pinia'

export const usePeopleStore = defineStore('people', {
    state: () => ({
        sections: undefined,
        currentSection: undefined,
        currentPerson: undefined,
    }),
    actions: {
        setSections(sections) {
            this.sections = sections;
        },
        setCurrentSection(newCurrent) {
            this.currentSection = newCurrent;
        },
        setCurrentPerson(newPerson) {
            this.currentPerson = newPerson;
        }
    }
  })
  