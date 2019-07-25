/*
Action:通过操作mutation间接更新state的多个方法的对象
 */

// 注意要引入api接口函数
// import {
// } from '../api'
import {
    SET_LOGIN
} from './mutation-types'
export default {
    // 保存当前要跳转的路由
    setLoginStatus({ commit, state }, { data }, callback) {
        console.log('action', data)
        commit(SET_LOGIN, data)
    }
}