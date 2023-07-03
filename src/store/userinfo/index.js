import {getUserInfoAPI} from "@/request/api"
export default{
    namespaced:true,
    state:{
        userinfo:JSON.parse(localStorage.getItem("db-userInfo"))||{
            permissions:null,
            roles:null,
            user:null
        }
    },
    mutations:{
        changUserInfo(state,payload){
            state.userinfo = payload
            localStorage.setItem("db-userInfo",JSON.stringify(state.userinfo))
        }
    },
    actions:{
        async asyncChangUserInfo({commit},payload){
            let res = await getUserInfoAPI();
            console.log("用户信息请求",res);
            if(!res) return 
            commit("changUserInfo",{
                permissions:res.permissions,
                roles:res.roles,
                user:res.user
            })
        }
    }

}