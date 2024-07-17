<template>

  <!-- Component that defines the visual aspect of the Personal Card for the "Our Women" page -->
  <NuxtLink :to = "link" :aria-label="`Link to ${name} ${surname} page`" class="personLink">
    <div class="card">
      <div class="imageContainer">
        <img class="person-card-img" :src="`https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public/person_image/${name}-${surname}.jpg`"  :alt="`Missing Image`" />
      </div>
      <div class="textContainer">
        <p class="name_surname">{{ surname }} {{ name }}</p>
        <p class="role">{{ role }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps(['id', 'name', 'surname', 'role', 'link', 'imageSize']);
</script>

<style scoped>
  .personLink {
    text-decoration-line: none;
    color: inherit;
  }

  .card {
    width: v-bind(imageSize);
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .imageContainer {
    width: 100%;
    height: v-bind(imageSize);
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
    text-align: center;
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