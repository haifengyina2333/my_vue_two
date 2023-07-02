import VueRouter from "vue-router"
import Home from '../view/Home.vue'
import Vue from 'vue'
import {getUserRouterAPI} from '../request/api.js';
import store from "../store/index"
Vue.use(VueRouter)

const routes = [{
    path:'/',
    name:'lauout',
    component:()=>import("../view/layout/Main.vue")
    
},{
    path:'/login',
    name:'login',
    component: ()=> import("../view/Login/Login.vue")
}];

const router = new VueRouter({
    model:history,
    routes
})

router.beforeEach( async (to,from,next)=>{
    const token = localStorage.getItem("db-auth-token")
    if(to.path == '/login' && token){
        next("/")
        return
    }
    if(to.path!= "/login" && !token){
        next("/login")
        return
    }
    if(token && store.state.UserRouter.menuData.length == 0 ){

        let getUserRouterAPIRes = await getUserRouterAPI();
        console.log("在全局路由前z守卫发生的请求",getUserRouterAPIRes);

    }
    

    next();
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => { })
}

export default router
