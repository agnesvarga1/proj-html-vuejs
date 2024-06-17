<script>
export default {
  name: "StickyComp",
};
</script>
<template>
  <div>
    <i class="fa-solid fa-ruler-combined"></i>
    <i class="fa-solid fa-circle-plus"></i>
    <i class="fa-solid fa-book"></i>
    <i class="fa-solid fa-cart-shopping"></i>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3rem;
  i {
    margin-block: 5px;
    &:hover {
      color: $main-orange;
      cursor: pointer;
    }
  }
  border-radius: 3px;
  background-color: $white-vari;
  position: fixed;
  right: 0;
  top: 10rem;
  padding: 1.2rem;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 3;
}

@media only screen and (max-width: 992px) {
  div {
    width: 1.2rem;
    font-size: 15px;
  }
}
</style>
