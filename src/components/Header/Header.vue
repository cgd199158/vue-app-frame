/**
* Copyright (c) 2018-present, Chen Guodong
* All rights reserved.
*
* @flow
*/
<template>
  <div class="navBar">
    <div class="box">
      <div class="left">
        <!-- 插槽是父组件与子组件的通讯方式，子组件中的slot可以显示父组件传递给子组件的内容 -->
        <slot name="left"></slot>
      </div>
      <div class="middle" v-if="title">{{title}}</div>
      <div class="middle" v-else>
        <slot name="middle"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: [String, Boolean]
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>
<style lang='less' scoped>
@import "../../util/theme.less";
.type_box {
  padding: 0 15%;
  .be-full();
  .mix-flex-center();
  li {
    flex: 1;
    .mix-flex-center();
  }
}

.navBar {
  color: @font-title;
  height: 46px;
  padding-top: 0px;
  line-height: 46px;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 0.267rem rgba(0, 0, 0, 0.3);
  z-index: 99;
  .header-bg();
  .box {
    flex-direction: row;
    height: 46px;
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    overflow: hidden;

    .left {
      flex: 0 0 60px;
      justify-content: center;
      align-items: center;
      width: 100%;
      display: flex;

      a {
        color: @font-title;
      }
    }

    .middle {
      justify-content: center;
      align-items: center;
      flex: 1;
      font-weight: 500;
      text-align: center;
      .mix-text-overflow();
      font-size: 16px;
      color: @white;
    }

    .right {
      flex: 0 0 60px;
      display: flex;
      align-items: center;
      width: 100%;
    }
  }
}
</style>