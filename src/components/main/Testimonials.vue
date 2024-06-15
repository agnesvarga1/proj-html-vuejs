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
@media only screen and (max-width: 992px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    height: fit-content !important;
    padding-bottom: 2rem;
    .slider {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 1rem;

      .slider-elem {
        width: 80% !important;

        margin: -7rem auto 0;
        transform: none;

        left: 10%;
      }
      .prev {
        transform: translateX(-250%) !important;
      }
      .next {
        transform: translateX(160%) !important;
      }
    }
    .slider-handler {
      margin-top: -10rem;
    }
  }
}

@media only screen and (max-width: 576px) {
  .wrapper {
    width: 100% !important;
    display: block;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    padding-bottom: 0;
    .slider {
      display: block;
      //margin-top: 1.5rem;
      height: 100% !important;
      min-height: 0 !important;
      background-color: red;

      .slider-elem {
        width: fit-content !important;
        position: static;
        margin: 0 auto;
        transform: none;

        height: fit-content;
        // left: 0%;
      }
      .prev {
        transform: translateX(-250%) !important;
        display: none;
      }
      .next {
        transform: translateX(160%) !important;
        display: none;
      }
    }
    .slider-handler {
      margin-top: 0;
    }
  }
}
</style>
