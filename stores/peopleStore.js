import { defineStore } from 'pinia'

const filterList = [{
    "name": "Alphabetic",
    "algorithm": alphabeticOrder
},{
    "name": "Reverse alphabetic",
    "algorithm": reverseAlphabetic
}]

function alphabeticOrder(a,b) {
    if(a.surname > b.surname)
        return +1;
    if(a.surname < b.surname)
        return -1;
    return 0;
}

function reverseAlphabetic(a,b) {
    if(a.surname > b.surname)
        return -1;
    if(a.surname < b.surname)
        return +1;
    return 0;
}

var allSection = undefined;

export const usePeopleStore = defineStore('people', {
    state: () => ({
        sections: undefined,
        currentSection: undefined,
        filters: filterList.map((f) => f.name),
        currentFilter: undefined,
        displayFilterIcon: false,
    }),
    actions: {
        setSections(sections) {
            this.sections = sections;
            // allSection = this.sections.filter((s) => s.name === "All")[0];
        },
        setCurrentSection(newCurrent) {
            this.currentSection = newCurrent;
            if(newCurrent.name === "All")
                this.setDisplayFilterIcon(true);
            else
                this.setDisplayFilterIcon(false);
        },
        setCurrentFilter(newFilterName) {
            this.currentFilter = newFilterName;
            const sorting = filterList.filter((f) => f.name === newFilterName)[0].algorithm;
            this.sections.filter((s) => s.name === "All")[0].people.sort(sorting); 
        },
        setDisplayFilterIcon(state) {
            this.displayFilterIcon = state;
        }
    }
  })
  