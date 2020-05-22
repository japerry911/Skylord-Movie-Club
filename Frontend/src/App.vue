<template>
  <div id="app">
    <app-navigation :navLinks="navLinks" />
    <router-view></router-view>
  </div>
</template>

<script>
import ResponsiveNavigation from './components/ResponsiveNavigation.vue'

export default {
  components: {
    appNavigation: ResponsiveNavigation
  },
  data () {
    return {
      navLinks: [
        { text: 'Home', path: '/' },
        { text: 'About', path: '/about' },
        { text: 'Contact', path: '/contact' },
        { text: 'Sign In', path: '/sign-in' }
      ]
    }
  }
}
</script>

<style lang="scss">
* {
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: 'Avenir';
  padding: 0;
  margin: 0;
}

html, body, #app {
    height: 100vh;
    max-width: 100%;
}

figure {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 10px;
	margin-inline-end: 0;
}
body {
  margin: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
