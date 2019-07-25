<template>
  <footer class="footer_guide border-1px">
    <div
      class="guide_item"
      @click="goto(item.path)"
      :class="{on: isCurrent(item.path)}"
      v-for="(item,index) in menu"
      :key="index"
    >
      <span class="item_icon">
        <img :src="isCurrent(item.path) ? item.icon_active : item.icon" alt />
      </span>
      <span>{{item.name}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "首页",
          path: "/home",
          icon_active: require("../../assets/imgs/footerbar/home_s.png"),
          icon: require("../../assets/imgs/footerbar/home.png")
        },
        {
          name: "发现",
          path: "/news",
          icon_active: require("../../assets/imgs/footerbar/news_s.png"),
          icon: require("../../assets/imgs/footerbar/news.png")
        },
        {
          name: "我的",
          path: "/mine",
          icon_active: require("../../assets/imgs/footerbar/mine_s.png"),
          icon: require("../../assets/imgs/footerbar/mine.png")
        }
      ]
    };
  },
  computed: {},
  methods: {
    goto(data) {
      this.$router.replace(data);
    },
    isCurrent(data) {
      // console.log(this.$route.path)
      return this.$route.path === data;
    }
  }
};
</script>

<style lang='less' scoped>
/* 引入公共样式 */
@import "../../util/theme.less";

.footer_guide {
  // 顶部有白色的边框
  position: fixed !important;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fefefe;
  width: 100%;
  height: 50px;
  display: flex;
  // .top-border-1px(@border-base);
  box-shadow: 0px 0px 10px 0px rgba(11, 109, 255, 0.08);
  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;
    &.on {
      color: @red;
    }

    span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;
    }
  }
}

.item_icon {
  width: 18px;
  height: 18px;
  margin: 2px 0;
  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    margin: auto;
  }
}
</style>
