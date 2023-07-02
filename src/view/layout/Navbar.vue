<template>
  <div class="navbar" :class="isCollapse ? 'nolong' : ''">
    <h1 class="mainlogo">
      <img src="../../assets/img/logo.jpg" alt="" width="32">
      <span v-show="!isCollapse">
        通用后台管理系统
      </span>
    </h1>
    <el-menu default-active="0" class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition="false"
      background-color="#2f90b9" text-color="#fff" :unique-opened="true" active-text-color="#ffd04b"
      :router="true">
      <!-- @open="handleOpen" @close="handleClose" -->
      <div v-for="item, idx in menuData" :key="idx">

        <!-- 如果有子菜单 -->
        <el-submenu :index="item.path" v-if="item.children" >

          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.title}}</span>
          </template>


          <el-menu-item :index="sitem.path" v-for="sitem,sidx in item.children" :key="sidx">{{sitem.title}}</el-menu-item>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
        </el-submenu>

        <!-- 没有子菜单 -->
        <el-menu-item :index="item.path" v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>

      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex"
import {getUserRouterAPI} from '../../request/api.js';
export default {

  data() {
    return {
      menuData: [
        {
          title: "首页",
          path:'/'
        },
        {
          title: "客户管理",
          path:"/customer",
          children: [{
            title: "客户档案",
            path:"/customer/customer"
          }, {
            title: "拜访记录",
            path:"/customer/visit"
          }]
        }, {
          title: "修养预约",
          path:"/business",
          children: [
            { title: "预约信息",
            path:"/business/appointment",
           },
            { title: "服务项",
            path:"/business/service",
           },
            { title: "结算单",
            path:"/business/statement",
           },
          ]
        }, {
          title: '流程管理',
          path:"/flow",
          children: [{
            title: "审核流程定义",
            path:"/flow/definition"
          }]
        }
      ]
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.NavbarCollapse.isCollapse
    })
  }
}
</script>

<style lang="less" scoped>
.navbar {
  width: 240px;
  // width: 64px;
  height: 100%;
  // 解决header的阴影覆盖问题
  position: relative;
  background-color: #2f90b9;
  box-shadow: 6px 0px 5px #ccc;
  transition: all .3s;

  .el-menu {
    border: 0px;
  }

  &.nolong {
    width: 64px;
    .el-submenu__title span {
      display: none!important;;
    }

    // 多一个东西，给它去掉
    ::v-deep .el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
      display: none;
    }
  }

  .mainlogo {
    padding: 10px 16px;
    position: relative;

    img {
      vertical-align: middle;
    }

    span {
      min-width: 130px;
      color: #fff;
      font-weight: 600;
      position: absolute;
      top: 18px;
      left: 62px;
    }
  }
}
</style>