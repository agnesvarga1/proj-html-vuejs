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
  methods: {
    closeModal() {
      store.isMenuOpen = false;
    },
  },
};
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
