import VueRouter from "vue-router"
import Home from '../view/Home.vue'
import Vue from 'vue'
import { getUserRouterAPI } from '../request/api.js';
import store from "../store/index"
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'lauout',
    component: () => import("../view/layout/Main.vue"),
    redirect: "/home",
    children: [{
            path: '/home',
            name: 'home',
            // component:()=>import(" "),
            component: () => import("../view/Home.vue")
        },
    ]

}, {
    path: '/login',
    name: 'login',
    component: () => import("../view/Login/Login.vue")
}];

const router = new VueRouter({
    model: history,
    routes
})

router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem("db-auth-token")
    // 访问登录页面，有token 回到首页
    if (to.path == '/login' && token) {
        next("/")
        return
    }
    // 访问不是登录页面，没有token 回到登录
    if (to.path != "/login" && !token) {
        next("/login")
        return
    }
    // 先请求用户路由，再确定用户的权限，究竟能不能跳转
    if (token && store.state.UserRouter.menuData.length == 0) {
        let getUserRouterAPIRes = await getUserRouterAPI();
        console.log("在全局前置守卫发生的请求--用户菜单/路由i数据", getUserRouterAPIRes);
        if (!getUserRouterAPIRes) return
        // 保存数据
        // vuex里的数据是空的，不会留存老数据
        let newUserMenuData = [{ title: "首页", path: "/" }];
        let ret = getUserRouterAPIRes.data.map(item => {
            if (item.children) {
                return {
                    title: item.meta.title,
                    path: item.path,
                    icon: item.meta.icon,
                    children: item.children.map(sitem => {
                        return {
                            title: sitem.meta.title,
                            path: item.path + "/" + sitem.path,

                        }
                    })
                }
            } else {
                return {
                    title: item.meta.title,
                    path: item.path,
                }
            }
        })
        newUserMenuData = [...newUserMenuData, ...ret];
        console.log(newUserMenuData);
        store.commit("UserRouter/initMenuData", newUserMenuData);
        //↑ 生成菜单数据

        //↓ 生成路由数据    --- 动态路由

        let newChildrenRouters=[{
            path:"/home",
            component:()=>import('../view/Home.vue')
        }]
        getUserRouterAPIRes.data.forEach(item=>{
            let ret = item.children.map(sitem=>{
                return{
                    path:item.path + "/" + sitem.path,
                    component:()=>import(`../view${item.path}/${sitem.name}.vue`)
                }
            })
            newChildrenRouters = [...newChildrenRouters,...ret];
        })
        console.log("sdasdasd",newChildrenRouters);

        // 添加到路由表里
        newChildrenRouters.forEach(item=>{
            router.addRoute("lauout",item)
        })
        // 重新进入路由守卫 (右路径)
        next(to.path)
        return
    }

    next();
})

// 解决路由重复点击的控制台报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
    return originalPush.call(this, location).catch(err => { })
}

export default router
