import { defineStore } from 'pinia'

export const useBreadcrumbStore = defineStore('test', {
    state: () => ({
        sections: null,
        currentSection: null,
        currentPerson: null,
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
  