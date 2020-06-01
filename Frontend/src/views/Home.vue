<template>
  <div class="home">
    <div class='intro-header-div'>
      <h1 class='home-header-h1'>
        Welcome to Skylord Movie Club.
      </h1>
      <h5 class='home-header-h5'>
        Only the Best Movies.
      </h5>
      <h5 class='home-header-h5 orange'>
        Ruff! Ruff! Ruff!
      </h5>
      <figure>
        <img
          alt='Skylord Movie Club Logo'
          src='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Logos/white_logo_transparent_background.png'
        />
      </figure>
      <router-link tag='button' to='about' class='cta-btn'>Learn More</router-link>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang='scss'>
div.home {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://skylord-movie-club.s3.us-east-2.amazonaws.com/Home/joe-caione-qO-PIF84Vxg-unsplash.jpg');
  height: 1000px;
  width: 100%;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-attachment: fixed;

  .intro-header-div {
    padding-left: 10rem;
    height: auto;
    width: 60%;

    .home-header-h1 {
      color: #F67743;
      font-size: 2.5rem;
    }

    .home-header-h5 {
      color: #fff;
      font-size: 1.5rem;
    }

    .orange {
      color: #F67743;
    }

    figure {
      width:70%;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }
    }

    .cta-btn {
      width: 25%;
      height: 70px;
      background-color: #F67743;
      border: 1pt solid #fff;
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
      border-radius: 12pt;
    }

    .cta-btn:hover {
      background-color: #fff;
      color: #F67743;
      border-color: #F67743;
    }
  }
}

@media screen and (min-width: 650px) and (max-width: 768px) {
}
</style>