
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import router from './routes'
import store from './store/index'
import jwtToken from './helpers/jwt'
import App from './components/App'

import zh_CN from './locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

axios.interceptors.request.use(function (config) {
    if(jwtToken.getToken()) {
        config.headers['Authorization'] = 'Bearer '+ jwtToken.getToken();
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


Validator.addLocale(zh_CN);

Vue.use(VueRouter)

Vue.use(VeeValidate, {
    locale: 'zh_CN'
});

Vue.component('app',App)

 new Vue({
    el: '#app',
    router,
    store
});
