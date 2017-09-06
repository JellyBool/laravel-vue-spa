
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter)

 new Vue({
    el: '#app',
    router
});
