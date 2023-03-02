<template lang="pug">
main
  nav
    router-link(to="/") Home
    router-link(to="/wallboard") Wallboard
  router-view
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>

<style lang="scss" scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>
