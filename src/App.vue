<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/main/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

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
    AppFooter,
  },
  methods: {},
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
