
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import router from './routes'
import App from './components/App'

Vue.use(VueRouter)
Vue.component('app',App)

 new Vue({
    el: '#app',
    router
});
