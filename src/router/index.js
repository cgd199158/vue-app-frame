import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue';

const Login = () => import('../pages/Login/Login.vue'); //异步引入的示例

Vue.use(Router)

export default new Router({
  /**
   * {
   *  path: '/login', //路由地址
   *  name: 'login', //路由名称
   *  component: Login, //路由组件
   *  meta: {
   *    showFooter: false, //是否显示底部导航
   *    index: 0, //页面层级
   *    keepAlive: true, //是否缓存页面及goback的时候不再刷新页面
   *  },
   * }
   */
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: { index: 0 },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        showFooter: false, //是否显示底部导航
        index: 0, //页面层级
        keepAlive: true, //是否缓存页面及goback的时候不再刷新页面
      },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        showFooter: true, //是否显示底部导航
        index: 0, //页面层级
        keepAlive: true, //是否缓存页面及goback的时候不再刷新页面
      },
    },
  ]
})
