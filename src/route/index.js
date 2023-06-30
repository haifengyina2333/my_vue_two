import VueRouter from "vue-router"
import Home from '../view/Home.vue'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [{
    path:'/',
    component:Home
    
},{
    path:'/login',
    component: ()=> import("../view/Login/Login.vue")
}];

const router = new VueRouter({
    model:history,
    routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => { })
}

export default router
