import VueRouter from 'vue-router'

let routes = [
    {
        path : '/',
        component: require('./components/pages/Home')
    },
    {
        path : '/about',
        component: require('./components/pages/About')
    },
    {
        path : '/posts/:id',
        name : 'posts',
        component: require('./components/posts/Post')
    }
]

export default new VueRouter({
    mode:'history',
    routes
})