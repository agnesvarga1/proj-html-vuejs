<script>
//components
import CourseCards from "./CourseCards.vue";
import AppHero from "./AppHero.vue";
import Testimonials from "./Testimonials.vue";
import AppSection from "./AppSection.vue";
import StickyComp from "../StickyComp.vue";
import BlogComp from "./BlogComp.vue";
import EventsComp from "./EventsComp.vue";
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
    BlogComp,
    EventsComp,
  },
};
</script>
<template>
  <main>
    <StickyComp />
    <AppHero />
    <AppSection />
    <Testimonials />
    <CourseCards />
    <BlogComp />
    <EventsComp />
  </main>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
</style>
