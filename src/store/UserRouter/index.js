export default{
    namespaced:true,
    state:{
        menuData:[]
    },
    mutations:{
        initMenuData(state,payload){
            state.menuData = payload;
        }
    },
    actions:{

    }
}