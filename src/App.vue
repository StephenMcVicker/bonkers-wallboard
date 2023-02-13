<template lang="pug">
main
  nav
    router-link(to="/") Home
    router-link(to="/about") About
  router-view
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
