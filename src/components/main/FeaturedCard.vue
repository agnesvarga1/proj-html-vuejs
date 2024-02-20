<script>
import { store } from "../../store";
export default {
  data() {
    return {
      store,
    };
  },
  name: "FeaturedCard",
  props: ["propsFeature"],
};
</script>
<template>
  <div class="card" :class="!propsFeature.even ? ' even' : 0">
    <div class="card-top">
      <figure>
        <img
          :src="`../../../src/assets/img/${propsFeature.img}`"
          alt="drawing"
        />
      </figure>
    </div>
    <div class="card-bottom">
      <h3>{{ propsFeature.title }}</h3>
      <p>{{ propsFeature.text }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .card-bottom {
    text-align: left;
    padding-block: 1rem;
  }
  .even {
    align-self: flex-start;
  }
}
</style>
