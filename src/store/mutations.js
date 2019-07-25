/*
vuex 的 mutations 模块
*/
import Vue from 'vue'
import {
  SET_LOGIN
} from './mutation-types'
// [方法名](state,{param}){}
export default {
  [SET_LOGIN](state, data){
    state.isLogin = data;
  }
}
