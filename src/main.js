// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import { Toast } from 'vux'; //vux的全局注册组件
import router from './router/index'; //router组件

Vue.component('toast', Toast); //全局注册toast


FastClick.attach(document.body);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
