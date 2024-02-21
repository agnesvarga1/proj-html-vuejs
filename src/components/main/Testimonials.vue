<script>
import TestimonialCard from "./TestimonialCard.vue";
import { store } from "../../store";
export default {
  name: "Testimonials",
  data() {
    return {
      store,
      currentImg: 0,
      clicked: false,
    };
  },
  components: {
    TestimonialCard,
  },
  methods: {
    getI(i) {
      this.currentImg = i;
      console.log(this.currentImg);
    },
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
        :class="
          currentImg === index
            ? ' active'
            : '' || currentImg + 1 === index
            ? 'next'
            : '' || currentImg - 1 === index
            ? 'prev'
            : ''
        "
      >
        <TestimonialCard :propsCards="item" />
      </div>
    </div>
    <div class="slider-handler">
      <div
        @click="getI(i)"
        v-for="(_, i) in store.testimonials.length"
        class="dot"
        :class="currentImg === i ? 'dot-active' : 0"
        :key="i"
      ></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

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
      height: 400px;
      width: calc(100% / 4);
      background-color: white;

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
      left: 70%;
    }
    .prev {
      left: 5%;
    }

    .out {
      left: 100%;
    }
  }
  .slider-handler {
    display: flex;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
    .dot {
      cursor: pointer;
      width: 1rem;
      aspect-ratio: 1;
      background-color: $main-gray;
      border-radius: 50%;
      opacity: 0.4;
    }
    .dot-active {
      opacity: 1;
      background-color: #000;
    }
  }
}
</style>
