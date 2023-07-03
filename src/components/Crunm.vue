<template>
    <div class="crumb">
        <el-breadcrumb separator="/">
            <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item> -->
            <el-breadcrumb-item v-for="item,index in titles" :key="index">{{item}}</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
 data() {
    return {
        // titles和当前所在的路由相关
        titles:[]
    }
 },
 watch:{
    $route:{
        immediate:true, // 立刻监听
        handler(val,oldval){
            this.titles = this.$route.meta.titles
        }
    }
 }
}
</script>

<style lang="less" scoped>
    .crumb .el-breadcrumb {
        font-size: 14px;
        line-height: 50px;
    }

</style>