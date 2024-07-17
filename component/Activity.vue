<template>
  <NuxtLink :to = "link" :aria-label="`Link to ${name} page`" class="activityLink">
    <div class="card">
      <div class="imageContainer bg-red rounded-3xl">
        <img :src="imageLink" :alt="`Missing Image`" />
      </div>
      <div class="textContainer">
        <p class="name">{{ name }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
  // THE COMPONENT IS USED FOR BOTH TYPE OF ACTIVITIES => SERVICES, PROJECTS

  // define the required props 
  const props = defineProps(['id', 'name', 'role', 'link', 'isService']);
  // based on the isService, compute the proper suffix to be used to compute the complete URL to get the image of this particular activity
  var imageSuffix = props.isService ? "/logo/"+props.id+".PNG" : "/projects/"+props.id+".jpg";
  //console.log(imageSuffix);
  const imageLink = "https://qpznxdvtbsibmwyurkfl.supabase.co/storage/v1/object/public"+imageSuffix;
  //console.log(imageLink);
  
</script>

<style scoped>
  .activityLink {
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
    text-align: center;
  }

  .textContainer > .name {
    font-size: 24px;
  }

  .textContainer > .role {
    font-size: 18px;
  }


</style>