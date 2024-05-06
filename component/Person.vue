<template>
  <NuxtLink :to = "link" :aria-label="`Link to ${name} ${surname} page`">
    <div class="card">
      <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/person_image/${name}-${surname}.jpg`"  :alt="`Missing Image`" />
      <p class="name_surname">{{ surname }} {{ name }}</p>
      <p class="role">{{ role }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps(['id', 'name', 'surname', 'role', 'link']);
</script>

  <style scoped>
  .person-card-img {
    height: 200px;
    width: 200px;
    aspect-ratio: auto;
  }

  .card {
    display: flex;
    flex-flow: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
  }

</style>