<template>
  <nav :style="{ background: background || '#333' }">
    <figure @click="toggleNav">
        <img
          alt='Skylord Movie Club Logo'
          src='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
        />
      </figure>
    <ul :style="{ background: background || '#333' }" ref="nav">
      <!-- <figure @click="toggleNav">
        <img
          alt='Skylord Movie Club Logo'
          src='https://skylord-movie-club.s3.us-east-2.amazonaws.com/Logos/logo_transparent_background.png'
        />
      </figure> -->
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
  },
  methods: {
    toggleNav (event) {
      const nav = this.$refs.nav.classList
      nav.contains('active') ? nav.remove('active') : nav.add('active')
    }
  }
}
</script>

<style scoped lang='scss'>
nav {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  figure {
    width: auto;
    height: 100%;

    img {
      width: auto;
      height: 100%;
    }
  }

  ul {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

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
    flex-direction: row-reverse;

    figure {
      width: auto;
      height: 100%;

      img {
        width: auto;
        height: 100%;
      }
    }

    ul {
      position: absolute;
      width: 300px;
      flex-direction: column;
      left: -300px;
      transition: 300ms ease all;

      &.active {
        left: 0px;
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