<script>
//components

import FeaturedCard from "./FeaturedCard.vue";

//store
import { store } from "../../store";

export default {
  data() {
    return {
      store,
      videoVisible: false,
      iframeHtml: "",
    };
  },
  name: "AppSection",
  components: {
    FeaturedCard,
  },
  methods: {
    openModal() {
      this.videoVisible = true;
      this.iframeHtml = `
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/ROa9p2f2jjE?si=vWVWhkU3GhSrKIiN"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
`;
    },
    closeModal() {
      this.videoVisible = false;
      this.iframeHtml = "";
    },
  },
};
</script>
<template>
  <div class="wrap-all">
    <div class="wrapper">
      <h3 class="script">Artist Coaching</h3>
      <h2>
        I understand what it takes to create. <br />
        I can help you with
      </h2>
      <div class="container">
        <FeaturedCard
          v-for="(item, index) in store.features"
          :key="index"
          :propsFeature="item"
        />
      </div>
    </div>
    <section class="top">
      <div class="left">
        <img src="../../assets/img/artist-quote-icon.png" alt="double-quote" />
        <h2>
          I coach and mentor visual artists, like you, to Create Like You Mean
          It
        </h2>
        <h3 class="script">Martin Yannix</h3>
      </div>

      <div class="right">
        <p>
          As a coach and mentor, my ultimate goal is to motivate visual artists
          toward inspired action. help you get you back on track to being the
          productive, creative, meaningful and authentic artist you truly want
          to bel support artists in crafting and living a creative fe as well as
          feeling good about themselves and their art.
        </p>
        <p>
          As an artist and an educator for nearly 30 years, understand what it
          takes to create.
        </p>
        <button>Get started today</button>
      </div>
    </section>
    <section class="bottom">
      <div class="wrap">
        <figure>
          <img src="../../assets/img/artist-video-poster.jpg" alt="artist" />
          <img
            id="yt"
            src="../../assets/img/icon-youtube-play.png"
            alt="icon youtube"
            @click="openModal()"
          />
        </figure>
      </div>
      <div v-show="videoVisible === true" class="video-container">
        <div v-html="iframeHtml"></div>
        <!-- <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ROa9p2f2jjE?si=vWVWhkU3GhSrKIiN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> -->
        <div @click="closeModal()" id="close-btn">X</div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;
.wrap-all {
  .wrapper {
    background: url("../../assets/img/maxcoach-shape-14-1536x343.png"),
      url("../../assets/img/blob-02.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0, 80% 0;

    text-align: center;
    h3 {
      font-size: 4rem;
      margin-block: 1rem;
    }
    h2 {
      font-size: 2.5rem;
      margin-block: 1rem;
    }
    .container {
      padding-block: 2rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 1.5rem;

      @include container-setup;
    }
  }
  section.top {
    display: flex;
    @include container-setup;
    padding: 3rem;
    line-height: $line;
    .left,
    .right {
      width: 50%;
      display: flex;
      gap: 2rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .left {
      padding: 2rem 6rem;

      h2 {
        text-align: center;
        font-size: 3rem;
      }
      h3 {
        font-size: 2rem;
      }
    }
    .right {
      align-items: flex-start;
      padding-top: 4rem;
      padding-right: 8rem;
      p {
        font-size: 1.3rem;
      }
      button {
        @include btn-sub;
      }
    }
  }
  section.bottom {
    position: relative;
    background: url("../../assets/img/artist-shape-33-300x162.png") repeat-x
      bottom left;
    background-size: 50% 40%;

    padding-top: 2rem;

    .video-container {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1%;
      background-color: #000;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 10;
      padding-block: 2rem;
      iframe {
        width: 100%;
        height: 100%;
      }
      #close-btn {
        background-color: $main-orange;
        position: absolute;
        top: -2%;
        right: 5%;
        border-radius: 50%;
        padding: 0.6rem 0.8rem;
        text-align: center;
        vertical-align: middle;
        font-size: 1rem;
        z-index: 10;
        color: #fff;
        cursor: pointer;
      }
    }
    .wrap {
      width: 60%;

      margin: 0 auto;
      background: url("../../assets/img/maxcoach-shape-05-100x100.png")
          no-repeat,
        url("../../assets/img/blob.svg") no-repeat,
        url("../../assets/img/maxcoach-shape-12-150x150.png") no-repeat;
      background-size: 20%, 35%, 20%;
      background-position: left top, 0% -40%, right bottom;

      padding: 1rem;

      figure {
        width: 80%;
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
        }
        #yt {
          position: absolute;
          width: 10%;
          cursor: pointer;
        }
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .wrap-all {
    section.top {
      flex-direction: column;

      .left,
      .right {
        width: 100%;
      }
      .left {
        h2 {
          font-size: 2.5rem;
        }
      }
      .right {
        align-items: center;
        padding: 0;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .wrap-all {
    .wrapper {
      .container {
        flex-wrap: wrap;
      }
    }
    section.top {
      flex-direction: column;

      .left {
        h2 {
          font-size: 1.9rem;
        }
      }
    }
    section.bottom {
      .wrap {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
}
@media only screen and (max-width: 576px) {
  .wrap-all {
    section.top {
      .left {
        padding-inline: 0;
        h2 {
          font-size: 1.8rem;
        }
      }
      .right {
        p {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
