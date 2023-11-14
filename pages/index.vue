<script setup lang="ts">
const authUser = useAuthUser();
</script>

<template>
  <div class="">
    <div v-if="authUser" class="">
      {{ authUser }}
    </div>
    <div v-else class="">
      <div class="">guest user</div>
      <div class="">
        <nuxt-link to="/login">Login page</nuxt-link>
      </div>
    </div>
  </div>
</template>
