<script>
import { store } from "../../store";
export default {
  name: "TestimonialCard",
  data() {
    return {
      store,
    };
  },
  props: ["propsCards"],
};
</script>
<template>
  <div class="card">
    <strong>{{ propsCards.highlightedText }}</strong>
    <p>{{ propsCards.normal }}</p>
    <figure>
      <img :src="`../../../src/assets/img/${propsCards.avatar}`" alt="" />
      <div>
        <span>{{ propsCards.fullName }}</span>
        <span>/{{ propsCards.occupation }}</span>
      </div>
    </figure>
  </div>
</template>
<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 2rem;
  margin: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  strong,
  p {
    font-size: 1.2rem;
  }
  figure {
    display: flex;
    align-items: flex-end;
    width: 100%;
    img {
      width: 18%;
      border-radius: 100%;
    }
    span {
      display: block;
      margin-left: 1rem;
    }
  }
}

@media only screen and (max-width: 400px) {
  p {
    font-size: 14px !important;
  }
  span {
    font-size: 12px;
  }
}
</style>
