<template>
  <div class="wrapper">
    <h3 class="script">Testimonials</h3>
    <h2>Why do people love me?</h2>
    <swiper
      :slides-per-view="3"
      :centered-slides="true"
      :space-between="30"
      :loop="true"
      :breakpoints="{
        992: {
          slidesPerView: 2,
        },
        300: {
          slidesPerView: 1,
        },
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      ref="swiper"
    >
      <swiper-slide
        v-for="(item, index) in store.testimonials"
        :key="index"
        :class="{ 'active-slide': currentImg === index }"
      >
        <TestimonialCard :propsCards="item" />
      </swiper-slide>
    </swiper>
    <div class="slider-handler">
      <div
        @click="goToSlide(i)"
        v-for="(_, i) in store.testimonials.length"
        class="dot"
        :class="{ 'dot-active': currentImg === i }"
        :key="i"
      ></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard.vue";
import { store } from "../../store";

export default {
  name: "Testimonials",
  components: {
    Swiper,
    SwiperSlide,
    TestimonialCard,
  },
  data() {
    return {
      store,
      currentImg: 0,
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    onSlideChange(swiper) {
      this.currentImg = swiper.realIndex;
    },
    goToSlide(index) {
      this.swiperInstance.slideToLoop(index);
      this.currentImg = index;
    },
  },
};
</script>

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
  .swiper {
    width: 100%;
    padding: 20px 0;
  }
  .swiper-slide {
    transition: opacity 0.5s;
    &.active-slide {
      opacity: 1 !important;
    }
  }
  .swiper-slide-prev,
  .swiper-slide-next {
    opacity: 0.5;
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
  }
}
</style>
