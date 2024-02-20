<script>
//components
import AppHero from "./AppHero.vue";

import AppSection from "./AppSection.vue";
//store
import { store } from "../../store";

export default {
  data() {
    return {
      store,
    };
  },
  name: "AppMain",
  components: {
    AppHero,
    AppSection,
  },
};
</script>
<template>
  <main>
    <AppHero />
    <AppSection />
  </main>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
</style>
