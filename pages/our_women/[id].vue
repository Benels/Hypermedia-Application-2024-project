<template>
  <Head>
    <title>
      {{person.name}} {{person.surname}} - HERmet
    </title>

  </Head>

  <main>

    <p>temp - {{person.person_id}}</p>
    <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/person_image/${person.name}-${person.surname}.jpg`"  :alt="`Missing Image`" />
    <h1 class = "name_surname">{{person.name}} {{person.surname}}</h1>
    <h2 class = "name_surname">{{person.role}}</h2>

    <div>
      <WomenActivities v-for = "act of activities" :id="act.activity_id" :name="act.name" :pic="act.picture"/>
    </div>

    <!--p class="desc">{{person.description}}</p-->



  </main>


</template>



<script setup>

    import WomenActivities from "~/component/WomenActivities.vue";


    const route = useRoute()
    const person = await $fetch('/api/our_women/' + route.params.id) //get the specific person from their id

    const projects = ref([])
    const services = ref([])
    const { data: activities } = await useFetch('/api/our_women/activities/' + route.params.id)


    /*for (let project of person.Projects) {
      for(let entry of person.Participations) {
        if (project.id == entry.project_id && entry.is_project_supervisor) {
          supervised_proj.value.push(project)
        } else if (project.id == entry.project_id && !entry.is_project_supervisor) {
          team_proj.value.push(project)
        }
      }
    }*/




</script>

<style scoped>

</style>