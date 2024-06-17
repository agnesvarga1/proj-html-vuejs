<script>
export default {
  name: "AppFooter",
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
<template>
  <footer>
    <div class="container">
      <div class="left">
        <h3>Address</h3>
        <span>382 NE 191st St # 87335 Miami,FL-3652</span>
        <span>+1(305) 547-9909 (9am - 5pm EST, Monday - Friday) </span>
        <span>support@maxcoach.com</span>
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
      <div class="mid">
        <div>
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Start here</a></li>
            <li><a href="#">Blog </a></li>
            <li><a href="#">Courses </a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div>
          <h3>Information</h3>
          <ul>
            <li><a href="#">Membership </a></li>
            <li><a href="#"> Purchase guide </a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#"> Terms of services </a></li>
          </ul>
        </div>
      </div>
      <div class="right">
        <h3>
          Instagram <span><a href="#">@maxcoach</a></span>
        </h3>
        <figure>
          <img
            src="../assets/img/120084500_197897808368764_8114555493043279565_n.jpg"
            alt=""
          />
          <img src="../assets/img/artist-event-02-250x300.jpg" alt="" />
          <img src="../assets/img/artist-event-03-250x300.jpg" alt="" />
        </figure>
      </div>
    </div>
    <div class="copy-right">
      <div>
        <span>&copy; {{ getYear() }} Maxcoach. All Rights Reserved </span>
      </div>
      <div class="jump-top">
        <a href="#top">&uarr;</a>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
footer {
  background-color: $white-vari;
}
.container {
  display: flex;
  .left,
  .mid,
  .right {
    width: calc(100% / 3);
    padding: 2rem;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    span,
    li {
      color: $main-gray;
      opacity: 0.7;
    }
    .socials {
      display: flex;
      font-size: 1.5rem;
      gap: 1rem;
    }
  }
  .mid {
    display: flex;
    div {
      width: 50%;
    }

    align-items: center;
    li {
      margin-block: 1rem;
    }
  }

  a {
    color: $main-gray;
    opacity: 0.7;
    &:hover {
      color: $main-orange;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    figure {
      display: flex;
      gap: 1rem;
      img {
        width: calc(100% / 3 - 1rem);
        aspect-ratio: 1;
      }
    }
  }
}
.copy-right {
  display: flex;
  justify-content: center;
  position: relative;
  padding: 3rem 2rem;
  span {
    opacity: 0.7;
  }
  .jump-top {
    background-color: $main-orange;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 100%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      aspect-ratio: 1;
      color: white;
    }
    position: absolute;
    right: 2%;
    bottom: 10%;
  }
}

@media only screen and (max-width: 992px) {
  .container {
    .left,
    .mid,
    .right {
      padding: 0.6rem;
    }
  }
  .copy-right {
    .jump-top {
      padding: 0.3rem;
      font-size: 2rem;
      border-radius: 100%;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1rem;
        aspect-ratio: 1;
        color: white;
      }
      position: absolute;
      z-index: 5;
      top: 0;
      right: 2%;
    }
  }
}

@media only screen and (max-width: 768px) {
  footer {
    padding-top: 1rem;
  }
  .container {
    flex-direction: column;
    .left,
    .mid,
    .right {
      padding: 1rem;
      width: 100%;
      font-size: 14px;
    }
  }
  .copy-right {
    padding: 3rem 0 4rem;
    font-size: 14px;

    .jump-top {
      padding: 0.1rem !important;
      font-size: 16px;

      a {
        width: 2rem;
      }
      right: 5%;
      top: 55%;
    }
  }
}
</style>
