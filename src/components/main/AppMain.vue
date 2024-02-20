<script>
//components
import CourseCards from "./CourseCards.vue";
import AppHero from "./AppHero.vue";
import Testimonials from "./Testimonials.vue";
import AppSection from "./AppSection.vue";
import StickyComp from "../StickyComp.vue";
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
    StickyComp,
    AppHero,
    AppSection,
    Testimonials,
    CourseCards,
  },
};
</script>
<template>
  <main>
    <div id="stick">
      <StickyComp />
    </div>

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
