<template>
  <div id="app">
    <app-navigation :navLinks='navLinks' />
    <router-view />
    <app-footer :navLinks='navLinks' />
  </div>
</template>

<script>
import ResponsiveNavigation from './components/ResponsiveNavigation.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    appNavigation: ResponsiveNavigation,
    appFooter: Footer
  },
  data () {
    return {
      navLinks: [
        { text: 'Home', path: '/', access: 'both' },
        { text: 'About', path: '/about', access: 'both' },
        { text: 'Contact', path: '/contact', access: 'both' },
        { text: 'Sign In', path: '/sign-in', access: 'non-auth' },
        { text: 'Your Profile', path: '/profile', access: 'auth' },
        { text: 'Movies Dashboard', path: '/dashboard', access: 'auth' }
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

html, body{
    min-height: 100vh;
    max-width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
