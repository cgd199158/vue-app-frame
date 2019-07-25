<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <FooterTabbar v-show="$route.meta.showFooter"></FooterTabbar>
  </div>
</template>

<script>
import FooterTabbar from "../src/components/FooterTabbar/FooterTabbar";
export default {
  name: "app",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  },
  async mounted() {
    window.vueObj = this; //vue暴露到全局
    
  },
  components: {
    FooterTabbar
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import "../src/util/theme.less";

html,
body,
#app {
  background-color: #fbf9fe;
  .be-full();
  font-size: 14px;
  line-height: 1.6;
}

// 页面切换动画
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.empty-middle {
  flex: 1;
  .list:first-child {
    margin-top: 10px;
  }
}
</style>
