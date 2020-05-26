<template>
  <div class="about-main-div">
    <div class='about-content-div'>
      <h1>About Skylord Movie Club</h1>
      <h6>Est. May 2020</h6>
      <p>
        Have you ever wanted to rate and review movies? Do you currently watch movies all alone? Well not anymore, welcome to your future, this
        is Skylord Movie Club, where dogs and humans coexist and discuss their favorite films. Whether it's a thriller, horror, comedy, or documentary movie,
        we have active dogs and humans who review and discuss all of these movies. Come join the club, it's free! What are you waiting for?
      </p>
      <div class='btn-div'>
        <router-link
          tag='button'
          to='/sign-up'
        >
          Join the Fun!
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='scss'>
div.about-main-div {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('https://skylord-movie-club.s3.us-east-2.amazonaws.com/About/nathalie-spehner-UQVQpSiNyYc-unsplash.jpg');
  background-position: center;
  background-attachment: fixed;
  height: 1000px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .about-content-div {
    width: 35%;
    margin-right: 5rem;
    margin-top: 15rem;

    h1 {
      color: $primaryOrange;
    }

    h6 {
      color: $accentMedGray;
    }

    p {
      color: #fff;
    }

    .btn-div {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      button {
        width: 14rem;
        height: 3rem;
        font-size: 1.5rem;
        background-color: $primaryOrange;
        border: 1pt solid #000;
        border-radius: 12pt;
        color: #000;
        cursor: pointer;
        transition: 250ms ease-in;
      }

      button:hover {
        background-color: $accentLightGray;
        border: 1pt solid $primaryOrange;
        color: $primaryOrange;
      }
    }
  }
}
</style>
