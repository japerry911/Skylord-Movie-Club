import Vue from 'vue'
import Vuex from 'vuex'
import railsServer from '../api/railsServer'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            username: null,
            token: null,
            authed: false
        },
        reviews: {
            mostRecentReviews: []
        },
        loading: false
    },
    mutations: {
        authUser (state, userData) {
            state.user.username = userData.username
            state.user.token = userData.token
            state.user.authed = true
        },
        getRecentReviews (state, rawReviewData) {
            state.reviews.mostRecentReviews = rawReviewData
        },
        changeLoading (state, loadingStatus) {
            state.loading = loadingStatus
        }
    },
    actions: {
        login ({ commit }, authData) {
            return railsServer.post('/login', {
                user: {
                    username: authData.username,
                    password: authData.password
                }
            })
            .then(response => {
                commit('authUser', {
                    token: response.data.user.token,
                    username: response.data.user.username
                })
                return true
            })
            .catch(error => {
                console.log(error)
                return false
            })
        },
        signUp ({ commit }, authData) {
            return railsServer.post('/users', {
                user: {
                    username: authData.username,
                    password: authData.password
                }
            })
            .then(response => {
                commit('authUser', {
                    token: response.data.user.token,
                    username: response.data.user.username
                })
                return true
            })
            .catch(error => {
                console.log(error)
                return false
            })
        },
        getMostRecentReviews ({ commit }) {
            commit('changeLoading', true)

            return railsServer.get('/most-recent-reviews')
            .then(response => {
                commit('getRecentReviews', response.data.reviews)
                commit('changeLoading', false)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    getters: {
        isAuthed (state) {
            return state.user.authed
        },
        mostRecentReviews (state) {
            return state.reviews.mostRecentReviews
        },
        loadingStatus (state) {
            return state.loading
        }
    }
})