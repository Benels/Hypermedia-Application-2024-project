import {createClient} from "@supabase/supabase-js";

function boardSorting(a,b) {

    /**
     * Sorting function for the employees, given their names.
     */

    if(a.name > b.name)
      return +1;
    if(a.name < b.name)
      return -1;
    return 0;
  }

export default defineEventHandler(async (event) => {


    /**
     * API call to supabase in order to retrieve the list of employees of HERmet.
     * The employees will then be clustered with respect to their role and sorted.
     */

    const supabaseUrl = 'https://qpznxdvtbsibmwyurkfl.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    let { data: person , error } = await supabase
        .from('person')
        .select('*')
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    const people = JSON.parse(JSON.stringify(person));
    const board = {
    "name": "Board",
    "people": people.filter((p) => { return (p.role === "President" || p.role === "Board Member") }).sort(boardSorting),
    "color": "#d62828"
    };

    const attorney = {
    "name": "Lawyers",
    "people": people.filter((p) => { return p.role === "Attorney" }),
    "color": "#d62828"
    };

    const call_center = {
    "name": "Call Center",
    "people": people.filter((p) => { return p.role === "Call center operator" }),
    "color": "#d62828"
    }

    const manager = {
    "name": "Managers",
    "people": people.filter((p) => { return (p.role === "Manager" || p.role === "Safe House Manager") }),
    "color": "#d62828"
    }

    const medical_personnel = {
    "name": "Medical Personnel",
    "people": people.filter((p) => { return p.role.startsWith("Medical Personnel") }),
    "color": "#d62828"
    }

    const psychologist = {
    "name": "Psychologists",
    "people": people.filter((p) => { return p.role === "Psychologist" }),
    "color": "#d62828"
    }

    const social_worker = {
    "name": "Social Workers",
    "people": people.filter((p) => { return p.role === "Social worker" }),
    "color": "#d62828"
    }

    const vocational_trainer = {
    "name": "Vocational Trainers",
    "people": people.filter((p) => { return p.role === "Vocational Trainer" }),
    "color": "#d62828"
    }

    const educator = {
    "name": "Educators",
    "people": people.filter((p) => { return p.role === "Educator" }),
    "color": "#d62828"
    }

    const allPeople = {
      "name": "All",
      "people": people,
      "color": "#d62828"
    }

    const sections = [board, attorney, call_center, vocational_trainer, psychologist, educator, manager, medical_personnel, social_worker, allPeople];

    return { sections }
})
