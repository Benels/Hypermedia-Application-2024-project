<template>
  <!--NuxtLink :to = "link" :aria-label="`Link to ${name} ${surname} page`"-->
    <div class="card">
      <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/person_image/${name}-${surname}.jpg`" :alt="`${name} ${surname}'s photo`" />
      <span class="name_surname">{{ surname }} {{ name }}</span>
      <span class="role">{{ role }}</span>
    </div>
  <!--/NuxtLink-->
</template>

<script>
export default {
  name: "Person"
}
</script>

<style scoped>

</style>