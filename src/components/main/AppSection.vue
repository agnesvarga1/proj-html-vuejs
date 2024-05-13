<script>
//components

import FeaturedCard from "./FeaturedCard.vue";

//store
import { store } from "../../store";

export default {
  data() {
    return {
      store,
    };
  },
  name: "AppSection",
  components: {
    FeaturedCard,
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
          />
        </figure>
      </div>
      <div class="video-container">
        <iframe
          src="https://maxcoach.thememove.com/main/artist/#lg=1&slide=0"
          frameborder="0"
        ></iframe>
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
    h3,
    h2 {
      font-size: 3rem;
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
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 3;
      padding-block: 2rem;
      iframe {
        width: 100%;
        height: 100%;
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
</style>
