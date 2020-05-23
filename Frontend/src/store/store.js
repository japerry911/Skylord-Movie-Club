import Vue from 'vue'
import Vuex from 'vuex'
import railsServer from '../api/railsServer'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            username: null,
            token: null
        }
    },
    mutations: {
        authUser (state, userData) {
            state.user.username = userData.username
            state.user.token = userData.token
        }
    },
    actions: {
        login ({ commit }, authData) {
            railsServer.post('/login', {
                user: {
                    username: authData.username,
                    password: authData.password
                }
            })
            .then(response => {
                console.log(response)
                commit('authUser', {
                    token: response.data.user.token,
                    username: response.data.user.username
                })
            })
            .catch(error => console.log(error))
        }
    }
})