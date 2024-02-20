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
      <div class="side-r">
        <div class="outline-font">Course</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
.wrapper {
  h2,
  h3 {
    text-align: center;
    font-size: 3rem;
  }
  .container {
    display: flex;
    .side-l,
    .side-r {
      width: 20%;
      display: flex;

      div {
        font-size: 10rem;
        color: $main-orange;
        opacity: 0.2;
        transform: rotate(90deg);
      }
    }
    .cards {
      width: 60%;
      .row {
        display: flex;
        width: 100%;
        gap: 0.5rem;
        flex-wrap: wrap;
        .card {
          width: calc(100% / 4 - 0.5rem);
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
              font-size: 1.5rem;
            }
            div span {
              opacity: 0.5;
              margin: 0.2rem;
            }
            .price {
              color: $main-orange;
            }
          }
        }
      }
    }
  }
}
</style>
