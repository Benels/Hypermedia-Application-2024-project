import { defineStore } from 'pinia'


// define the available filters/sorting to be applied on the"All" section
const filterList = [{
    "name": "Alphabetic",
    "algorithm": alphabeticOrder
},{
    "name": "Reverse alphabetic",
    "algorithm": reverseAlphabetic
}]


// define the filtering functions
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


// the pinia store object and export it (it will be used in the "our_women" -> ([id] , index) pages)
export const usePeopleStore = defineStore('people', {
    state: () => ({
        // each element in sections corresponds to a vector representing a section ("All", "Board",...)
        sections: undefined,
        // defines what is the latest section selected (= the one to display)
        currentSection: undefined,
        
        // since we cannot transfer "code" we define the list of filters as the list of the names of the filters
        filters: filterList.map((f) => f.name),
        // what is the chosen filter (if any)
        currentFilter: undefined,
        // used by vue to decide if it needs to display the "toggle filter" icon
        displayFilterIcon: false,
    }),
    actions: {
        // define the set of available actions on the store

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
        // change the currentFilter and sort the people in the "All" section based on that chosen sorting
        setCurrentFilter(newFilterName) {
            this.currentFilter = newFilterName;
            // first find the sorting algorithm based on the filter name
            const sorting = filterList.filter((f) => f.name === newFilterName)[0].algorithm;
            //console.log("OLD",this.sections.filter((s) => s.name === "All")[0].people);
            // then sort the people based on the found algorithm
            this.sections.filter((s) => s.name === "All")[0].people.sort(sorting); 
            //console.log("NEW",this.sections.filter((s) => s.name === "All")[0].people);
        },
        setDisplayFilterIcon(state) {
            this.displayFilterIcon = state;
        }
    }
  })
  