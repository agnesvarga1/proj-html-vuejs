<script>
export default {
  name: "AppHero",
};
</script>
<template>
  <div class="wrapper">
    <div class="left-side">
      <figure>
        <img src="../../assets/img/artist-hero-image-03.png" alt="design" />
      </figure>
      <div class="pics"></div>
    </div>
    <div class="right-side">
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(241, 194, 0, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(241, 194, 0, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M15.8,-26.9C19,-22.5,19.1,-15.6,23.7,-9.6C28.3,-3.6,37.4,1.5,38.8,7C40.2,12.4,33.9,18.2,27.9,22.9C21.8,27.7,16.1,31.5,10.2,31.9C4.4,32.2,-1.7,29.2,-9,28.2C-16.4,27.2,-25.2,28.3,-29.7,24.8C-34.2,21.3,-34.5,13.1,-35.9,5C-37.3,-3.1,-39.8,-11.2,-37.5,-17.5C-35.2,-23.8,-28.1,-28.3,-21.1,-30.9C-14,-33.5,-7,-34.2,-0.4,-33.6C6.3,-33.1,12.6,-31.3,15.8,-26.9Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
      <img src="../../assets/img/artist-shape-05.png" alt="" />
    </div>
    <div class="jumbo-container">
      <div class="jumbo jumbo-left">
        <div class="top-left"></div>
        <div class="inner">
          <figure class="left-left">
            <img src="../../assets/img/artist-hero-image-01.jpg" alt="" />
          </figure>
          <figure class="right-left">
            <img
              src="../../assets/img/artist-hero-image-02.jpg"
              alt="artistic"
            />
          </figure>
        </div>
      </div>
      <div class="jumbo jumbo-middle">
        <div class="cta">
          <h1 class="script">Hello, Im Martin</h1>
          <h2>
            Artist Coaching And Mentoring <br />
            Might Be for You.
          </h2>
          <button>Get started today</button>
        </div>
      </div>
      <div class="jumbo jumbo-right">
        <div class="top-right">
          <img src="../../assets/img/artist-shape-04.png" alt="" />
        </div>
        <div class="bottom-right">
          <figure>
            <img src="../../assets/img/artist-hero-image-04.jpg" alt="artist" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
.wrapper {
  height: 60vh;
  display: flex;
  background-color: #fbf9f6;
  position: relative;
  .left-side,
  .right-side {
    width: 50%;
    background-repeat: no-repeat;
    height: inherit;
    padding-top: 5rem;
    padding-bottom: 2rem;
  }

  .left-side {
    background-image: url("../../assets/img/artist-shape-02.png");
    background-size: 100% 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 1rem;
    figure {
      margin-right: 15rem;
      height: 70%;
      img {
        height: 100%;
      }
    }
  }
  .right-side {
    background-image: url("../../assets/img/artist-shape-01.png");
    background-size: 80%;
    background-position: top;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 2rem;
    svg {
      width: 25%;
    }
    img {
      width: 40%;
    }
  }

  .jumbo-container {
    width: 100%;
    position: absolute;
    height: inherit;

    display: flex;
    .jumbo {
      width: calc(100% / 3);

      display: flex;
    }
    .jumbo-left {
      background-image: url("../../assets/img/blob.svg");
      background-repeat: no-repeat;
      background-size: 80%;
      background-position-x: -50%;
      background-position-y: 5rem;
      display: flex;
      position: relative;
      align-items: center;
      .top-left {
        z-index: 2;

        width: 50%;
        aspect-ratio: 1;
        background-image: url("../../assets/img/artist-shape-03.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .inner {
        width: 70%;
        height: 100%;
        display: flex;
        position: absolute;
        z-index: 2;
        left: 50%;
        transform: translateX(-50%);

        figure.right-left {
          padding-top: 3rem;
          width: 60%;
          img {
            width: 100%;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
        }
        figure.left-left {
          width: 40%;

          align-self: flex-end;
          padding-bottom: 5rem;
          img {
            width: inherit;
            position: absolute;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            bottom: 2rem;
          }
        }
      }
    }
    .jumbo-middle {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height: $line;
      h2 {
        font-size: 2rem;
      }
      button {
        @include btn-default;
        padding-block: 1.5rem;
        margin-top: 2rem;
      }
    }
    .jumbo-right {
      display: flex;
      flex-direction: column;

      justify-content: space-between;

      align-content: space-around;
      .bottom-right,
      .top-right {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .top-right {
        justify-content: flex-end;
        padding-top: 2rem;
        padding-right: 10rem;
        img {
          height: 100%;
        }
      }
      .bottom-right {
        position: relative;

        background-image: url("../../assets/img/maxcoach-shape-12.png");
        background-repeat: no-repeat;
        background-size: 30%;
        background-position-x: 0rem;
        background-position-y: 4rem;

        figure {
          margin-bottom: 15rem;
          height: 120%;
          img {
            height: 100%;
            margin-right: 5rem;
          }
        }
      }
    }
  }
}

/*************************************BREAKPOINT TO LG************************************************** */
@media only screen and (max-width: 992px) {
  .wrapper {
    .left-side {
      figure {
        height: 40%;
        margin-bottom: 15rem;
      }
    }
    .jumbo-container {
      padding-top: 2rem;
      flex-direction: column;
      .jumbo-left,
      .jumbo-right {
        width: 50%;
      }

      .jumbo-left {
        background-size: 35%;
        background-position-x: -5%;
        background-position-y: -4%;
        .top-left {
          background-image: none;
        }
        .left-left {
          img {
            margin-bottom: -2rem;
            width: 35% !important;
          }
        }
        figure.right-left {
          padding: 0 !important;
          margin-top: 2rem;
          margin-left: 2rem;
          width: 28% !important;

          img {
            width: 100%;
          }
        }
      }

      .jumbo-middle {
        button {
          padding-block: 14px;
        }
      }
      .jumbo-right {
        position: absolute;
        right: 0;
        bottom: -10rem;
        .top-right {
          // justify-content: flex-end;
          padding-right: 0;
          padding-top: 5rem;
          img {
            height: 10rem;
            margin-right: 5rem;
            margin-bottom: -15rem;
          }
        }

        .bottom-right {
          position: relative;

          background-image: url("../../assets/img/maxcoach-shape-12.png");
          background-repeat: no-repeat;
          background-size: 20%;
          background-position-x: 10rem;
          background-position-y: 45%;

          figure {
            height: 15rem;
            margin-left: 8rem;
            margin-bottom: 12rem;
            img {
              height: 100%;
              margin-right: 0;
            }
          }
        }
      }

      .jumbo:nth-child(2) {
        padding-top: 2rem;
        //margin-bottom: 3rem;
        order: -1;
        width: 100%;
      }
    }
  }
}
/***********************************************BREAKPOINT MD ***************************************************************************************************************** */
@media only screen and (max-width: 768px) {
  .wrapper {
    .left-side {
      figure {
        height: 30%;
        margin-right: 8rem;
        margin-bottom: 15rem;
      }
    }
    .jumbo-container {
      padding-top: 3rem;
      .jumbo-middle {
        h1 {
          font-size: 2.2rem;
        }
        h2 {
          font-size: 1.8rem;
        }
      }
      .jumbo-right {
        .top-right {
          justify-content: flex-end;
          padding-right: 0;
          img {
            height: 8rem;
            margin-right: 5rem;
            margin-bottom: 2rem;
          }
        }
        .bottom-right {
          figure {
            img {
              margin-right: 3.2rem;
            }
          }
        }
      }
    }
  }
}
/////////******************************SMALL SCREEN******************************************* */
@media only screen and (max-width: 576px) {
  .wrapper {
    padding-top: 0;
    height: 40vh;
    .left-side {
      figure {
        height: 30%;
        margin-right: 8.5rem;
        margin-bottom: 12rem;
      }
    }
    .jumbo-container {
      padding-top: 0;
      .jumbo-left {
        .left-left {
          img {
            margin-bottom: -2rem;
            width: 45% !important;
          }
        }
      }
      .jumbo-middle {
        .cta {
          h1 {
            font-size: 1.5rem;
          }
          h2 {
            font-size: 0.7rem;
          }
          button {
            padding: 0.6rem 2.1rem;
            font-size: 0.7rem;
          }
        }
      }
      .jumbo-right {
        position: absolute;
        right: 0;
        bottom: 0;
        .top-right {
          justify-content: flex-end;
          padding-right: 0;
          img {
            height: 6rem;
            margin-right: 6rem;
            margin-bottom: 1rem;
          }
        }

        .bottom-right {
          figure {
            height: 10rem;
            padding-top: 2rem;
            margin-left: 0rem;
            margin-bottom: 2rem;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 420px) {
  .wrapper {
    padding-top: 0;
    height: 70vh;
  }
}
</style>
