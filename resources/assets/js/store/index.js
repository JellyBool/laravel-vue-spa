import Vue from 'vue'
import Vuex from 'vuex'

import AuthUser from './modules/auth-user'
import Login from './modules/login'
import EditProfile from './modules/edit-profile'
import EditPassword from './modules/edit-password'
import Notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        AuthUser,
        Login,
        EditProfile,
        EditPassword,
        Notification
    },
    strict: true
})