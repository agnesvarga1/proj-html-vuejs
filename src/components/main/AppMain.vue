<script>
import AppHero from "./AppHero.vue";
export default {
  name: "AppMain",
  components: {
    AppHero,
  },
};
</script>
<template>
  <main>
    <AppHero />
  </main>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
</style>
