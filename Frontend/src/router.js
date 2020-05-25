import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Home
        },
        {
            path: '/sign-in',
            name: 'Sign In',
            component: SignIn
        },
        {
            path: '/sign-up',
            name: 'Sign Up',
            component: SignUp
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})