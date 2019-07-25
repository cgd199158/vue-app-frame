// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import { ToastPlugin, ConfirmPlugin, LoadingPlugin } from 'vux'; //vux的全局注册组件
import router from './router/index'; //router组件
import store from './store'; //vux store
// import './util/reset.css'; //初始化样式

Vue.use(ToastPlugin, { position: 'middle', type: 'text' });
Vue.use(LoadingPlugin);
Vue.use(ConfirmPlugin);

// 路由拦截
router.beforeEach(async (to, from, next) => {
  // const l = localStorage;
  // if (!l.selectedProject && to.name !== 'pickProject') {
  //   router.push({ path: '/pickProject' });
  // }
  next();
});


FastClick.attach(document.body);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
