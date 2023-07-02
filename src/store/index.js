import Vue from "vue"
import Vuex from 'vuex'
import NavbarCollapse from './NavbarCollapse/index';
import UserRouter  from "./UserRouter";
Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        NavbarCollapse,UserRouter
    }
})