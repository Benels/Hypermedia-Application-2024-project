<template>
  <Head>
    <Title>HERmet - Our People</Title>
  </Head>

  <main>
    <h1>Our People</h1>



    <div id="people-container">
      <!--h1 v-if="people.length!=0">ciao</h1-->
      <!--Person v-for = "person of people" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role" :link = "'/our_women/' + person.person_id" /-->
      <Person v-for = "person of people" :id = "person.person_id" :name = "person.name" :surname = "person.surname" :role = "person.role" />
    </div>

  </main>
</template>

<script setup>

  console.log("c")

  import Person from "~/component/Person.vue";

  const { data: people  } = await useFetch('/api/our_women/')


  if(people != null){
    console.log("if")
    console.log(people)
  }else{
    console.log("k")
  }

  console.log("default")


</script>

<style scoped>

</style>