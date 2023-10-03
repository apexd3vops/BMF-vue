<template>
  <div class="">
    <Navbar />
    <router-view />
    <EndNote />
  </div>
</template>

<script setup>
import EndNote from './components/EndNote.vue';
import Navbar from './components/Navbar.vue';


</script>

<style scoped></style>
