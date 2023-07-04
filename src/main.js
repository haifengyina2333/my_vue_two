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

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
