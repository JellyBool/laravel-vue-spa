
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import router from './routes'
import App from './components/App'
import VeeValidate from 'vee-validate';

Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.component('app',App)

 new Vue({
    el: '#app',
    router
});
