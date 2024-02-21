<script>
export default {
  name: "EventsComp",
  data() {
    return {
      events: [
        {
          img: "artist-event-04-250x300.jpg",
          event: "Storytelling workshop",
          location: "Texas, US",
          date: `NOV 22, `,
          top: true,
        },
        {
          img: "artist-event-03-250x300.jpg",
          event: "Painting art Contest",
          location: "New York, US",
          date: `OCT 22, `,
          top: true,
        },
        {
          img: "artist-event-02-250x300.jpg",
          event: "International Art Fair",
          location: "Hamburg, Germany",
          date: `NOV 23, `,
        },
        {
          img: "artist-event-01-250x300.jpg",
          event: "Street Performance: Call for Artist",
          location: "Illinois, US",
          date: `DEC 21, `,
        },
      ],
    };
  },
  methods: {
    getYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
<template>
  <div class="wrapper">
    <h3 class="script">Upcoming Events</h3>
    <h2>Let's work together</h2>
    <div class="container">
      <div class="left"></div>
      <div class="mid">
        <div class="row">
          <div
            v-for="(item, index) in events"
            :key="index"
            class="card"
            :class="item.top ? 'tops' : 0"
          >
            <div class="text">
              <h5>{{ `${item.date}${getYear()}` }}</h5>
              <h3>{{ item.event }}</h3>
              <span
                ><i class="fa-solid fa-location-dot"></i>
                {{ item.location }}</span
              >
            </div>
            <figure>
              <img :src="`../../../src/assets/img/${item.img}`" alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>

  <div class="container sign-up">
    <div class="left news-letter"></div>
    <div class="mid news-letter">
      <h2>Newsletter to get in touch</h2>
      <div class="input-field">
        <input type="email" placeholder="Your email" />
        <span id="helper">&rarr;</span>
      </div>
    </div>
    <div class="right news-letter"></div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.wrapper {
  padding-bottom: 3rem;
}
h2,
h3 {
  font-size: 3rem;
  text-align: center;
}
h3 {
  margin-top: 2rem;
}
.container {
  display: flex;
  margin-top: 1rem;
  .left,
  .right {
    width: 20%;
  }
  .mid {
    width: 60%;

    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      .card {
        h3 {
          text-align: left;
          font-size: 2rem;
        }
        width: calc(50% - 1.5rem);
        display: flex;
        .text,
        figure {
          width: 50%;
          padding: 1rem;
          img {
            width: 100%;
          }
        }
        .text {
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
          span,
          h5 {
            opacity: 0.7;
          }
          span {
            padding-top: 1.5rem;
          }
        }
      }
      .tops {
        flex-direction: row-reverse;
      }
    }
  }
}
.sign-up {
  background-color: #244186;
  color: #fff;

  .rightnews-letter,
  .left.news-letter,
  .mid.news-letter {
    padding-block: 3rem;
  }
  .left.news-letter {
    background: url("../../assets/img/artist-shape-color-paint-top-left-300x170.png")
      no-repeat;
    background-size: contain;
  }

  .right.news-letter {
    background: url("../../assets/img/artist-shape-color-paint-bottom-right.png")
      no-repeat right;
  }
  .mid.news-letter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 2rem;
    .input-field {
      position: relative;
      width: 60%;
      input {
        background: transparent;
        border: none;
        border-bottom: 2px solid #fff;
        width: 90%;
        height: 2rem;
        padding: 0.5rem;
        &:focus {
          background-color: #244186;
          border: 1px solid #fff;
        }

        &::placeholder {
          color: #fff;
          font-size: 2rem;
        }
        &:hover {
          background-color: #fff;
        }
      }
      #helper {
        position: absolute;
        font-size: 1.8rem;
        right: 10%;
      }
    }
  }
  h2 {
    font-family: "Times New Roman", Times, serif;
    width: 30%;
    text-align: left;
  }
}
</style>
