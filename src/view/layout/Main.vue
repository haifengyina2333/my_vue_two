<template>
  <div class="layout">
    <Navbar/>
    <div class="layout-right"> 
    <HeaderView/>
    <ContentView/>
  </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import HeaderView from './HeaderView.vue'
import ContentView from './ContentView.vue'
export default {
    components:{
        Navbar,HeaderView,ContentView
    }
}
</script>

<style lang="less" scoped>
.layout{
  width: 100%;
  height: 100%;
  display: flex;
  .layout-right{
    flex:1;
    padding-left: 240px;
    width: 70%;
  }
}
</style>
