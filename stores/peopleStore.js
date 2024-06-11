import { defineStore } from 'pinia'

const filterList = [{
    "name": "Alphabetic",
    "algorithm": alphabeticOrder
},{
    "name": "Reverse alphabetic",
    "algorithm": reverseAlphabetic
}]

function alphabeticOrder(a,b) {
    if(a.name > b.name)
        return +1;
    if(a.name < b.name)
        return -1;
    return 0;
}

function reverseAlphabetic(a,b) {
    if(a.name > b.name)
        return -1;
    if(a.name < b.name)
        return +1;
    return 0;
}



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
            // console.log(this.sections.filter((s) => s.name === "All")[0].people);
            this.sections.filter((s) => s.name === "All")[0].people.sort(sorting); 
            // console.log(this.sections.filter((s) => s.name === "All")[0].people);
        },
        setDisplayFilterIcon(state) {
            this.displayFilterIcon = state;
        }
    }
  })
  