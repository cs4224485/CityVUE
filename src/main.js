// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import "../static/global/global.css"
import '../static/global/gt.js'
import axios from 'axios'
import store from './store'

import * as api from './restful/api'
// 在Vue全局变量设置了$axios =axios
//以后每个组件使用时:this.$axios
Vue.prototype.$axios = axios;
Vue.prototype.$http = api;
Vue.config.productionTip = false;
Vue.use(ElementUI);

// 设置公共URL
axios.defaults.baseURL = 'https://www.luffycity.com/api/v1/';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

// 路由全局守卫
router.beforeEach((to, form, next)=>{
  if(localStorage.getItem("access_token")){
    // 用户登录过了
    let user = {
      access_token: localStorage.getItem("access_token"),
      username: localStorage.getItem("username"),
      avatar: localStorage.getItem("avatar"),
      shop_cart_num: localStorage.getItem("shop_car_num")
    };
    store.dispatch('getUserInfo', user)
  }
  next()
});
