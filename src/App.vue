<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/main/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

import { store } from "./store";
export default {
  name: "App",
  data() {
    return {
      store,
      isModalOpen: false,
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    handleClickOutside(event) {
      this.closeModal();
    },
  },
};
</script>

<template>
  <AppHeader :state="isModalOpen" @clickToOpen="openModal()" />
  <AppMain />
  <AppFooter />
  <div
    class="nav-modal"
    v-click-outside="handleClickOutside"
    v-scroll-lock="isModalOpen"
    v-if="isModalOpen"
    :class="isModalOpen ? 'visible-f' : ''"
    ref="modal"
  >
    <div><span @click="closeModal()">X</span></div>
    <ul class="links-sm">
      <li>
        <a href="#">Home<i class="fa-solid fa-angle-down"></i></a>
      </li>
      <li>
        <a href="#">Pages<i class="fa-solid fa-angle-down"></i></a>
      </li>
      <li>
        <a href="#">courses<i class="fa-solid fa-angle-down"></i></a>
      </li>
      <li>
        <a href="#">Features<i class="fa-solid fa-angle-down"></i></a>
      </li>
      <li>
        <a href="#">Blog<i class="fa-solid fa-angle-down"></i></a>
      </li>
      <li>
        <a href="#">shop<i class="fa-solid fa-angle-down"></i></a>
      </li>
    </ul>
    <!-- SOCIAL LINKS -->
    <ul class="social-sm">
      <li>
        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "./styles/partials/variables" as *;
@use "./styles/general.scss";

.nav-modal {
  overflow: auto;
  padding: 1rem;
  position: fixed;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 20;
  background-color: #ffffffdb;
  font-size: 2rem;
  flex-direction: column;

  div {
    display: flex;
    justify-content: end;
    padding: 1rem;

    span {
      cursor: pointer;
      padding: 10px;
      background-color: $main-orange;
      color: #fff;
      border-radius: 10px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .social-sm,
  .links-sm {
    li {
      a {
        color: $main-gray;
        text-transform: capitalize;
        &:hover {
          color: $main-orange;
        }
      }
    }
  }
  .links-sm {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    //  height: 100%;
  }
  .social-sm {
    display: flex;
    justify-self: flex-end;
    gap: 1rem;
    margin-top: 2rem;
  }
}

@media only screen and (max-width: 768px) {
  .nav-modal {
    width: 100%;
    height: 100%;

    .links-sm {
      gap: 3rem;
    }
  }
}
</style>
