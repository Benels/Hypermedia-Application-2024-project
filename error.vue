<template>
  <div class="error">
    <NuxtLink to="/" title="Homepage" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="~/assets/imgs/Logo.svg" class="h-36" alt="Flowbite Logo" />
      <span class="name"><strong>HERmet  </strong></span>
    </NuxtLink>
    <br>
    <div>
      <p class="message"><strong>Lost in the Digital World?</strong></p>
    </div>
    <div>
      <p class="message2">
        This page isn't here, but we are. <br>Please try searching for what you need or return to the homepage. <br>Your safety and support are our priority.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>
.name {
  font-size: 3rem;
  color: black;
}

.message, .message2 {
  font-size: 1.5rem;
}

.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: #d62828;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
