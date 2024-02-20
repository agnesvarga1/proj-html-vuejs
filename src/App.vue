<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/main/AppMain.vue";

import { store } from "./store";
export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
