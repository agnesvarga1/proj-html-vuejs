<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <h1>Hello</h1>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
