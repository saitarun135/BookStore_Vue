import Vue from 'vue'
import Router from 'vue-router'
import Register from './Pages/Register.vue'
Vue.use(Router)
export  default new Router({
    mode:'history',
    routes:[
        {
            path:'/register',
            component:Register
        },    
        ]
})