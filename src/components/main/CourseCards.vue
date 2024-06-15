<script>
export default {
  name: "CourseCards",
  data() {
    return {
      courses: [
        {
          img: "artist-course-01-480x480.jpg",
          price: "$18.00",
          courseName: "The Acrylic Painting Academy",
          lessons: 4,
          studets: 50,
        },
        {
          img: "artist-course-07-480x480.jpg",
          price: "$21.00",
          courseName: "Drawing and shading: complete course",
          lessons: 14,
          studets: 50,
        },
        {
          img: "artist-course-06-480x480.jpg",
          price: "$19.00",
          courseName: "The Color Theory for Digital Artist ",
          lessons: 7,
          studets: 50,
        },
        {
          img: "artist-course-05-480x480.jpg",
          price: "$35.00",
          courseName: "Ultimate Guide to Digital Sketching for Beginner",
          lessons: 14,
          studets: 50,
        },
        {
          img: "artist-course-04-480x480.jpg",
          price: "$19.00",
          courseName: "Portrait Drawing The Smart Way ",
          lessons: 2,
          studets: 50,
        },
        {
          img: "artist-course-03-480x480.jpg",
          price: "$19.00",
          courseName: "Portrait Drawing The Smart Way ",
          lessons: 9,
          studets: 50,
        },
        {
          img: "artist-course-02-480x480.jpg",
          price: "$25.00",
          courseName: "The Art & Science of Drawing",
          lessons: 4,
          studets: 50,
        },
        {
          img: "artist-course-08-480x480.jpg",
          price: "$22.00",
          courseName: "The Colored Pencil Drawing Course",
          lessons: 6,
          studets: 50,
        },
      ],
    };
  },
};
</script>
<template>
  <div class="wrapper">
    <h3 class="script">Artist Coaching</h3>
    <h2>Latest Online Courses</h2>
    <div class="container">
      <div class="side-l"></div>
      <div class="cards">
        <div class="side"></div>
        <div class="row">
          <div v-for="(item, index) in courses" class="card">
            <figure>
              <img
                :src="`../../../src/assets/img/${item.img}`"
                alt="course image"
              />
            </figure>
            <div class="card-footer">
              <h4 class="price">{{ item.price }}</h4>
              <h4>{{ item.courseName }}</h4>
              <div>
                <span
                  ><i class="fa-regular fa-file-lines"></i
                  >{{ item.lessons }} Lessons</span
                >
                <span
                  ><i class="fa-regular fa-user"></i
                  >{{ item.studets }} Studets</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="side-r"></div>
    </div>
    <div class="helper">
      <button>View all courses &rarr;</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
.wrapper {
  padding-top: 3rem;
  h2,
  h3 {
    text-align: center;
    font-size: 3rem;
  }
  .container {
    display: flex;
    margin-top: 2rem;
    .side-l {
      width: 10rem;
    }
    .side-r {
      width: 10rem;
    }
    .cards {
      width: calc(100% - 20rem);
      .row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        .card {
          width: calc(100% / 4 - 0.8rem);
          position: relative;
          figure {
            img {
              width: 100%;
            }
          }
          .card-footer {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            padding: 1.2rem;
            h4 {
              font-size: 1.2rem;
            }
            div span {
              opacity: 0.5;
              margin: 0.2rem;
              i {
                margin-right: 5px;
              }
            }
            .price {
              color: $main-orange;
            }
            &:hover {
              border: 2px solid $main-orange;
              position: absolute;
              background-color: #fff;
              transform: scaleX(0.9);
              left: -1.2rem;
              bottom: 2.2rem;
            }
          }
        }
      }
    }
  }
  .helper {
    display: flex;
    padding: 3rem;
    justify-content: center;
    button {
      @include btn-sub;
    }
  }
}
@media only screen and (max-width: 992px) {
  .wrapper {
    .container {
      .side-l {
        width: 3rem;
      }
      .side-r {
        width: 3rem;
      }
      .cards {
        width: 100%;
        .row {
          .card {
            .card-footer {
              padding: 0.2rem;
              h4 {
                font-size: 1.1rem;
              }
              div span {
                font-size: 14px;
              }
              &:hover {
                border: none;
                position: static;
                background-color: #fff;
                transform: none;
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .wrapper {
    .container {
      .side-l {
        width: 1rem;
      }
      .side-r {
        width: 1rem;
      }
      .cards {
        width: 100%;
        .row {
          .card {
            width: calc(100% / 2 - 0.8rem);
            .card-footer {
              padding: 0.5rem;
              h4 {
                font-size: 1.5rem;
              }
              div span {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 576px) {
  .wrapper {
    h2 {
      font-size: 1.8rem;
    }
    .container {
      .side-l {
        width: 2rem;
      }
      .side-r {
        width: 2rem;
      }
      .cards {
        width: 100%;
        .row {
          .card {
            width: 100%;
            .card-footer {
              padding: 0.5rem;
              h4 {
                font-size: 1.5rem;
              }
              div span {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
