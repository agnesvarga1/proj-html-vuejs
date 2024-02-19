<script>
export default {
  name: "AppHeader",
};
</script>
<template>
  <header>
    <div class="wrapper">
      <div class="count-down-container">
        <h4>Starts TOMORROW! Our biggest event of the year...</h4>
        <div>
          <div class="display-clock">
            <i class="fa-regular fa-clock"></i>
            <span class="display display-day">00</span> :
            <span class="display display-hrs">00</span> :
            <span class="display display-mins">00</span> :
            <span class="display display-sec">00</span>
          </div>
        </div>
        <button>Get Ticket</button>
      </div>
    </div>

    <div class="nav-bar">
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
  .container {
    display: flex;
    justify-content: center;
  }
  .nav-bar {
    @include container-setup;
    padding-block: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    text-transform: capitalize;
    .fa-angle-down {
      font-size: 1rem;
    }

    figure {
      width: 15%;
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
        }
      }
    }
    .socials {
      gap: 1rem;
    }
  }
}
</style>
