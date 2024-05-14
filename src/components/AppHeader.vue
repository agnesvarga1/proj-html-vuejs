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
    };
  },

  methods: {
    timer() {
      let nowInMs = new Date().getTime();

      let endDateInMs = new Date("May 14, 2024 19:40:00").getTime();

      let diff = endDateInMs - nowInMs;

      let diffInS = diff / 1000;
      if (diffInS === 0) {
        end = true;
        return;
      }
      let mTotal = Math.floor(diffInS / 60);

      let h = Math.floor(mTotal / 60);

      let d = Math.floor(h / 24);
      let hdis = Math.floor(h % 24);
      let m = Math.floor(mTotal - h * 60);
      let s = Math.floor(diffInS - mTotal * 60);

      if (d === 0 && hdis === 0 && m === 0 && s === 0) {
        end = true;
        clearInterval(countDown);
      } else {
        hdis < 10 ? (hdis = `0${hdis}`) : hdis;
        d < 10 ? (d = `0${d}`) : d;
        m < 10 ? (m = `0${m}`) : d;
        s < 10 ? (s = `0${s}`) : d;

        this.display = `${d} : ${hdis} : ${m} : ${s}`;
      }
    },
    countDown() {
      this.countDowEnd = setInterval(this.timer, 1000);
    },
    handleScroll(event) {
      if (window.scrollY > 50) {
        this.isScrolled = true;
      } else if (window.scrollY < 50) {
        this.isScrolled = false;
      }
      console.log(this.scrollPos);
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
    <div class="wrapper">
      <div
        v-show="end === false || isScrolled === false"
        class="count-down-container"
      >
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
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;
header {
  position: relative;
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
    font-size: 1.3rem;
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
</style>
