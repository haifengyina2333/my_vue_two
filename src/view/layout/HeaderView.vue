<template>
  <div class="header">
    
    <el-button  icon="el-icon-s-fold" v-show="!isShow" @click="ChanIsShow"></el-button>
    <el-button  icon="el-icon-s-unfold" v-show="isShow" @click="ChanIsShow"></el-button>
    <!-- <el-button type="primary" icon="el-icon-search">搜索</el-button> -->
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    data() {
        return {
            isShow:false
        }
    },
    methods:{
        ...mapMutations({
            changeIsCollapse:"NavbarCollapse/changeIsCollapse"
        }),
        ChanIsShow(){
            this.isShow = !this.isShow;
            this.changeIsCollapse();
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    padding: 20px;
    height: 84px;
    box-shadow: 0px 5px 5px #ddd;
    button{
        width: 50px;
        height: 50px;
        margin:0px;
        font-size: 20px;
        padding: 10px 12px;
        border: 0px;
    }
}
</style>