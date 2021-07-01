import Vue from 'vue'
import Router from 'vue-router'
import Register from './Pages/Register.vue'
import Login from './Pages/Login.vue'
import Forgot from './Pages/Forgot.vue'
import Reset from './Pages/Reset.vue'
import Dashboard from '../components/Dashboard.vue'
Vue.use(Router)
export  default new Router({
    mode:'history',
    routes:[
        {
            path:'/register',
            component:Register
        },  
        {
            path:'/login',
            component:Login
        },
        {
            path:'/forgot',
            component:Forgot
        },
        {
            path:'/reset',
            component:Reset
        },
        {
            path:'/dashboard',
            component:Dashboard
        }  
        ]
})