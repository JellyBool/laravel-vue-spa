import * as types from './../mutation-type'

export default {
    state : {
        authenticated: false,
        name: null,
        email: null
    },
    mutations:{
        [types.SET_AUTH_USER](state, payload) {
            state.authenticated = true
            state.name = payload.user.name
            state.email = payload.user.email
        }
    },
    actions : {
        setAuthUser({commit,dispatch}) {
            axios.get('/api/user').then(response => {
                commit({
                    type: types.SET_AUTH_USER,
                    user: response.data
                })
            })
        }
    }
}