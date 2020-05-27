import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import Profile from './views/Profile.vue'
import Dashboard from './views/Dashboard.vue'
import ViewMovies from './views/ViewMovies.vue'
import store from './store/store'

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
            path: '/profile',
            name: 'Profile',
            component: Profile,
            async beforeEnter (to, from, next) {
                try {
                    const hasPermission = await store.getters.isAuthed
                    if (hasPermission) {
                        next()
                    }
                } catch (error) {
                    next({
                        name: 'Sign In',
                        query: { redirectFrom: to.fullPath }
                    })
                }
            }
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            async beforeEnter (to, from, next) {
                try {
                    const hasPermission = await store.getters.isAuthed
                    if (hasPermission) {
                        next()
                    }
                } catch (error) {
                    next({
                        name: 'Sign In',
                        query: { redirectFrom: to.fullPath }
                    })
                }
            }
        },
        {
            path: '/view-movies',
            name: 'View Movies',
            component: ViewMovies,
            async beforeEnter (to, from, next) {
                try {
                    const hasPermission = await store.getters.isAuthed
                    if (hasPermission) {
                        next()
                    }
                } catch (error) {
                    next({
                        name: 'Sign In',
                        query: { redirectFrom: to.fullPath }
                    })
                }
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})