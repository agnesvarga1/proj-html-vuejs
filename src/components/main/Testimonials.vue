<script>
import TestimonialCard from "./TestimonialCard.vue";
import { store } from "../../store";
export default {
  name: "Testimonials",
  data() {
    return {
      store,
    };
  },
  components: {
    TestimonialCard,
  },
};
</script>
<template>
  <div class="wrapper">
    <h3 class="script">Testimonials</h3>
    <h2>Why do people love me?</h2>
    <div class="slider">
      <div
        class="slider-elem"
        v-for="(item, index) in store.testimonials"
        :key="index"
        :class="item.active ? 'active' : 0"
      >
        <TestimonialCard :propsCards="item" />
      </div>
    </div>
    <div class="slider-handler">
      <div class="dot"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  background-color: #fefaf7;
  text-align: center;
  padding-top: 2rem;
  h3 {
    font-size: 3rem;
    margin-top: 2rem;
  }
  h2 {
    font-size: 3rem;
  }
  .slider {
    position: relative;
    min-height: 60vh;

    .slider-elem {
      width: calc(100% / 4);
      background-color: white;
      border: 1px solid green;
      position: absolute;
      margin: 2rem;
      opacity: 0.5;
    }
    .active {
      opacity: 1;
      left: 50%;
      transform: translateX(-50%);
    }
    .next {
      left: 100%;
    }
  }
}
</style>
