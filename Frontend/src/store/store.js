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
        movies: [],
        showMovie: {},
        genres: [],
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
        },
        getMovies (state, moviesData) {
            state.movies = moviesData
        },
        getMovie (state, movieData) {
            state.showMovie = movieData
        },
        getGenres (state, genresData) {
            state.genres = genresData
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
        },
        getMovies ({ commit }) {
            commit('changeLoading', true)

            return railsServer.get('/movies')
            .then(response => {
                commit('getMovies', response.data.movies)
                commit('changeLoading', false)
            })
            .catch(error => {
                console.log(error)
            })
        },
        getMovie ({ commit }, movieId) {
            commit('changeLoading', true)

            return railsServer.get(`/movies/${movieId}`)
            .then(response => {
                commit('getMovie', response.data.movie)
                commit('changeLoading', false)
            })
            .catch(error => {
                console.log(error)
            })
        },
        getGenres ({ commit }) {
            commit('changeLoading', true)

            return railsServer.get('/genres')
            .then(response => {
                commit('getGenres', response.data.genres)
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
        },
        movies (state) {
            return state.movies
        },
        showMovie (state) {
            return state.showMovie
        },
        genres (state) {
            return state.genres
        }
    }
})