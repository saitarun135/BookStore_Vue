import Vue from 'vue'
import Router from 'vue-router'
import Register from './Pages/Register.vue'
import Login from './Pages/Login.vue'
import Forgot from './Pages/Forgot.vue'
import Reset from './Pages/Reset.vue'
import Dashboard from './components/Dashboard.vue'
import DisplayBooks from './components/DisplayBooks.vue'
import AdminDashboard from './Admin/AdminDashboard.vue'
import CreateBook from './Admin/CreateBook.vue'
import OrderPlace from './components/OrderPlace.vue'
import Cart from './components/Cart.vue'
import sortBooksLowtoHigh from './components/sortBooksLowtoHigh.vue'
import sortBooksHightoLow from './components/sortBooksHightoLow.vue'

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
            path:'/reset/:token',
            component:Reset
        },
      
       {
           path:'/adminDashboard',
           component:AdminDashboard,
           children:[{
            path:'/createBook',
            component:CreateBook
           }]
       },
      

        {
            path:'/dashboard',
            component:Dashboard,
            children:[{
                path:'/displaybooks',
                component:DisplayBooks
            },
          
            {
                path:'/sortLowtoHigh',
                component:sortBooksLowtoHigh
            },
            {
                path:'/sortHightoLow',
                component:sortBooksHightoLow
            },
            {
                path:'/cart',
                component:Cart
            },        
        ]   
        },
        {
            path:'/ordersuccess',
            component:OrderPlace
        },  
      
    ]      
})