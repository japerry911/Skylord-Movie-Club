<template>
  <nav :style="{ background: background || '#333' }">
    <ul :style="{ background: background || '#333' }">
      <figure>
        <img
          alt='Skylord Movie Club Logo'
          src='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
        />
      </figure>
      <div class='list-links'>
        <li
          v-for="(link, index) in navLinks"
          :key="index"
          @mouseenter="$event.currentTarget.style.background = hoverbackground || '#999'"
          @mouseleave="$event.currentTarget.style.background = background || '#333'"
        >
          <router-link
            :to="link.path"
            :style="{ color: linkColor || '#DDD' }"
          >
            {{ link.text }}
          </router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navLinks: Array,
    background: String,
    linkColor: String,
    hoverBackground: String
  }
}
</script>

<style scoped lang='scss'>
nav {
  height: 70px;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    figure {
      width: 10%;
      height: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }

    .list-links {
      display: flex;
      width: 50%;
      height: 100%;

      li {
        list-style-type: none;
        height: 100%;
        width: 100%;

        a {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
      }
    }
  }
}

@media screen and (max-width: 759px) {
  nav {
    ul {
      position: absolute;
      width: 300px;
      flex-direction: column;

      figure {
        width: 100%;
        height: auto;
      }

      .list-links {
        flex-direction: column;
        width: 100%;

        li {
          width: 100%;
        }
      }
    }
  }
}
</style>