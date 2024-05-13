<script>
import TestimonialCard from "./TestimonialCard.vue";
import { store } from "../../store";
export default {
  name: "Testimonials",
  data() {
    return {
      store,
      currentImg: 0,
      prevUti: false,
      nextUti: false,
      clicked: false,
      outUti: false,
    };
  },
  components: {
    TestimonialCard,
  },
  methods: {
    getI(i) {
      this.currentImg = i;
      i === 0 ? (this.prevUti = true) : 0;
      i === store.testimonials.length ? (this.nextUti = true) : 0;
    },
    clickEvent() {
      this.clicked = true;
    },
    clickRelease() {
      this.clicked = false;
    },
    handleMouseEvent(e) {
      console.log(this.currentImg);
      console.log(e.clientX);
    },
  },
};
</script>
<template>
  <div class="wrapper">
    <h3 class="script">Testimonials</h3>
    <h2>Why do people love me?</h2>
    <div class="slider" @mousedown="clickEvent" @mouseup="clickRelease">
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
            : '' || 'out'
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
      transition: all 0.5s linear;
      background-color: white;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      margin: 2rem;
      opacity: 0.5;
    }
    .out {
      display: none;
    }
    .prev {
      transform: translateX(-150%);
    }
    .next {
      transform: translateX(50%);
    }
    .active {
      opacity: 1;
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
