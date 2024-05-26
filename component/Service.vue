<template>
  <NuxtLink :to = "link" :aria-label="`Link to ${name} page`" class="personLink">
    <div class="card">
      <div class="imageContainer bg-red rounded-3xl">
        <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/logo/${id}.jpg`"  :alt="`Missing Image`" />
      </div>
      <div class="textContainer">
        <p class="name_surname">{{ name }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps(['id', 'name', 'link']);
</script>

<style scoped>
  .personLink {
    text-decoration-line: none;
    color: inherit;
  }

  .card {
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .imageContainer {
    width: 100%;
    height: 300px;
  }

  .imageContainer > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 16px;
  }

  .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  .textContainer > p {
    margin: 0;
    padding: 0;   
  }

  .textContainer > .name_surname {
    font-size: 24px;
  }

  .textContainer > .role {
    font-size: 18px;
  }


</style>