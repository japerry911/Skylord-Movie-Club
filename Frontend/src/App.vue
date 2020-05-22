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
figure {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 10px;
	margin-inline-end: 0;
}
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
