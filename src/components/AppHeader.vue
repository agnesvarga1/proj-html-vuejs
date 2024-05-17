<script>
export default {
  name: "AppHeader",

  data() {
    return {
      countDownEnd: null,
      display: "",
      end: false,
      isScrolled: false,
      scrollPos: 0,
      isMenuOpen: false,
    };
  },

  methods: {
    timer() {
      let nowInMs = new Date().getTime();

      let endDateInMs = new Date("May 17, 2024 23:40:00").getTime();

      let diff = endDateInMs - nowInMs;

      let diffInS = diff / 1000;

      let mTotal = Math.floor(diffInS / 60);

      let h = Math.floor(mTotal / 60);

      let d = Math.floor(h / 24);
      let hdis = Math.floor(h % 24);
      let m = Math.floor(mTotal - h * 60);
      let s = Math.floor(diffInS - mTotal * 60);

      if (diff <= 0) {
        this.end = true;
        clearInterval(this.countDown);
      } else {
        hdis < 10 ? (hdis = `0${hdis}`) : hdis;
        d < 10 ? (d = `0${d}`) : d;
        m < 10 ? (m = `0${m}`) : d;
        s < 10 ? (s = `0${s}`) : d;

        this.display = `${d} : ${hdis} : ${m} : ${s}`;
      }
    },
    countDown() {
      this.countDownEnd = setInterval(this.timer, 1000);
    },
    handleScroll(event) {
      if (window.scrollY > 50) {
        this.isScrolled = true;
      } else if (window.scrollY < 50) {
        this.isScrolled = false;
      }
    },
    toggleMenu() {
      this.isMenuOpen = true;
    },
  },
  mounted() {
    this.timer();
    this.countDown();

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<template>
  <header>
    <div v-show="isScrolled === false && end === false" class="wrapper">
      <div class="count-down-container">
        <h4>Starts TOMORROW! Our biggest event of the year...</h4>
        <div>
          <div class="display-clock">
            <i class="fa-regular fa-clock"></i>
            <span>{{ display }}</span>
          </div>
        </div>
        <button>Get Ticket</button>
      </div>
    </div>

    <div class="nav-bar" :class="isScrolled === true ? 'sticky-nav' : ''">
      <figure><img src="../assets/img/dark-logo.png" alt="logo" /></figure>

      <!-- NAV BAR LINKS -->
      <ul class="nav-bar-links">
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
      <ul class="socials">
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
      <div class="nav-modal" :class="isMenuOpen ? 'visible' : ''">
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
      <div
        @click="toggleMenu()"
        v-show="isMenuOpen === false"
        class="menu-icon-container"
      >
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

header {
  position: relative;
  .nav-modal {
    display: none;
  }
  .wrapper {
    background-color: $white-vari;
  }
  .count-down-container {
    @include container-setup;
    display: flex;
    justify-content: center;

    align-items: center;
    gap: 1.5rem;
    padding-block: 1rem;
    font-size: 1rem;
    h4 {
      opacity: 0.7;
      font-weight: 400;
    }
    .display-clock {
      i,
      span {
        margin-inline: 0.3rem;
      }
      .display {
        font-weight: bold;
      }
    }
    button {
      @include btn-default;
    }
  }

  .nav-bar {
    @include container-setup;

    padding-block: 1.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
    text-transform: capitalize;
    .fa-angle-down {
      font-size: 0.8rem;
    }

    figure {
      width: 12%;
      img {
        width: 100%;
      }
    }

    ul {
      display: flex;
      gap: 2rem;
      li {
        a {
          color: $main-gray;
          &:hover {
            color: $main-orange;
          }
          &::after {
            content: "";
            display: block;
            width: 0;
            height: 1px;
            background: $main-orange;
            transition: width 1s;
          }

          &:hover::after {
            width: 100%;
          }
        }
      }
    }
    .socials {
      gap: 1rem;
    }
  }
  .sticky-nav {
    position: fixed;
    background-color: #fff;
    z-index: 10;
    top: 0;
    width: 100%;
    padding-inline: 5%;
  }
}

@media only screen and (max-width: 992px) {
  .nav-bar ul.nav-bar-links,
  .nav-bar .socials {
    display: none;
  }
  .nav-modal {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 20;
    .links-sm {
      display: flex;
    }
  }

  .menu-icon-container {
    display: block;
    width: 5%;
    .bar {
      width: 80%;
      height: 1px;
      background: #000;
      margin: 5px auto;
    }
  }
  .visible {
    display: block;
  }
}
</style>
