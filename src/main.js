import Vue from 'vue'
// 清除边距
import 'reset-css';

import App from './App.vue'
import store  from './store'
import router from "./route"
import './plugins/element.js'
// 过滤器
import "@/uitls/fittlers"
Vue.config.productionTip = false

// 数据可视化边框
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

// v-charts 的使用
import {VePie}  from 'v-charts';
Vue.component(VePie.name,VePie);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
