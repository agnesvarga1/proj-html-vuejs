<script>
//components
import CourseCards from "./CourseCards.vue";
import AppHero from "./AppHero.vue";
import Testimonials from "./Testimonials.vue";
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
    Testimonials,
    CourseCards,
  },
};
</script>
<template>
  <main>
    <AppHero />
    <AppSection />
    <Testimonials />
    <CourseCards />
  </main>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
</style>
