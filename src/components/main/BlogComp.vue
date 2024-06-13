<script>
export default {
  name: "BlogComp",
};
</script>
<template>
  <div class="wrapper">
    <h3 class="script">Artists and Tips</h3>
    <h2>Latest From The Blog</h2>

    <div class="container">
      <div class="col">
        <div class="left"></div>
        <div class="right left-left">
          <figure>
            <img
              src="../../assets/img/artist-blog-03-480x356.jpeg"
              alt="blog"
            />
          </figure>
          <div class="footer-card">
            <h3 class="artist">Artist</h3>
            <h2>Brush Strokes Energize Trees in Paintings</h2>
            <div class="details-r">
              <span><i class="fa-regular fa-calendar"></i> May 15, 2020</span>
              <span><i class="fa-regular fa-eye"></i>688 views</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-mid">
        <div class="bottom">
          <h3 class="artist">Artist</h3>
          <h2>Connection Between Self- Portraitsiand Identity</h2>
          <div class="details-m">
            <span><i class="fa-regular fa-calendar"></i> May 15, 2020</span>
            <span><i class="fa-regular fa-eye"></i>321 views</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="left right-right">
          <figure>
            <img src="../../assets/img/artist-blog-01-480x356.jpg" alt="blog" />
          </figure>
          <div class="footer-card">
            <h3 class="artist">Artist</h3>
            <h2>Pocket-Sized Notebooks Hold Miniature Paintings</h2>
            <div class="details-r">
              <span><i class="fa-regular fa-calendar"></i> May 15, 2020</span>
              <span><i class="fa-regular fa-eye"></i>603 views</span>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
    <h3 class="blog-link">
      Get into details now?
      <span><a href="#">View all posts &rarr; </a> </span>
    </h3>
  </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.wrapper {
  min-height: 80vh;
  background-color: $white-vari;
  padding: 3rem 0;
  background-image: url("../../assets/img/blob.svg");
  background-repeat: no-repeat;
  background-size: 25%;
  background-position-x: 50%;
  background-position-y: 110%;

  h2,
  h3 {
    font-size: 3rem;
    text-align: center;
  }
  .container {
    background-image: url("../../assets/img/maxcoach-shape-03.png"),
      url("../../assets/img/maxcoach-shape-05-100x100.png");
    background-repeat: no-repeat;
    background-size: contain, 10%;
    background-position: center, 35% 0;
    min-height: inherit;

    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    .col {
      width: calc(100% / 3);
      display: flex;
      padding: 2rem;
      .left-left {
        align-self: center;
      }
      .left,
      .right {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
        img {
          width: 100%;
        }
        .footer-card {
          line-height: $line;
          padding: 0.5rem;
          background-color: #fff;

          .details-r,
          .details-l {
            opacity: 0.7;
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
          }

          h2 {
            font-size: 1rem;
            text-align: left;
            margin-top: 1.5rem;
          }
        }
      }
    }
    .col-mid {
      flex-direction: column;
      background-image: url("../../assets/img/artist-blog-02-500x680.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      color: #fff;
      padding-block: 1.5rem;
      justify-content: flex-end;
      .bottom {
        h2 {
          text-align: left;
          margin-top: 1rem;
          font-size: 2rem;
        }
        .details-m {
          display: flex;
          gap: 4rem;
          margin-top: 1rem;
        }
      }
    }
  }
}

h3.blog-link {
  display: block;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  opacity: 0.7;
  a {
    color: $main-orange;
    border-bottom: 1px solid rgba(128, 128, 128, 0.567);
  }
}
h3.artist {
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  opacity: 0.7;
  text-align: left;
}

@media only screen and (max-width: 992px) {
  .wrapper {
    .container {
      flex-direction: column;
      padding: 2rem;
      .col {
        width: 100%;

        .left {
          display: none;
        }
        .right.left-left {
          width: 80%;
          margin: 0 auto;
          figure {
            width: 100%;
          }
          .footer-card {
            width: 100%;
            padding: 1rem;
          }
        }
        .right {
          width: 0;
        }
        .left.right-right {
          display: block;
          width: 100%;
          margin: 0 auto;
          figure {
            width: 100%;
          }
          .footer-card {
            width: 100%;
            padding: 1rem;
          }
        }
      }

      .col-mid {
        height: 60vh;
        width: 80%;
        margin: 0 auto;
      }
    }
  }
}
</style>
