/*
ajax 请求函数模块
*/
import axios from "axios";
import _ from 'lodash';
import Qs from "qs";
import { Toast } from 'vux';
/**
 * 向外部暴漏一个函数 ajax
 * @param {*} url 请求路径，默认为空
 * @param {*} data 请求参数，默认为空对象
 * @param {*} type 请求方法，默认为GET
 * @param {*} header 请求头配置
 */
export default function ajax(url = "", data = {}, type = "GET", header) {
  const l = JSON.parse(localStorage.getItem("loginInfo"));
  //加上公共的值
  data.token = l ? l.token : '';
  data.appid = 100000;
  data.deviceId = '';
  data.deviceType = 'APP';
  let defaultHeader = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
  // 返回值 Promise对象 （异步返回的数据是response.data，而不是response）
  return new Promise(function (resolve, reject) {
    // （利用axios）异步执行ajax请求
    let promise; // 这个内部的promise用来保存axios的返回值(promise对象)
    if (type === "GET") {
      // 准备 url query 参数数据
      let dataStr = ""; // 数据拼接字符串，将data连接到url
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      // 发送 get 请求
      if (header) {
        promise = axios.get(url, { headers: { ...defaultHeader, header } });
      } else {
        promise = axios.get(url, { headers: defaultHeader });
      }
    } else {
      if (header) {
        promise = axios.post(url, Qs.stringify(data), { headers: { ...defaultHeader, header } });
      } else {
        promise = axios.post(url, Qs.stringify(data), { headers: defaultHeader });
      }
      // 发送 post 请求
    }
    promise
      .then(response => {
        // 成功回调resolve()
        if (response.data.code != 1) {
          // console.log('案例是就放了!')
        }
        resolve(response.data);
      })
      .catch(error => {
        // 失败回调reject()
        reject(error);
        Indicator.close();
        if (error.response.status == "401") {
          Toast.text('请登录后操作');
          localStorage.removeItem("loginInfo");
          window.vueObj.$router.replace('/login');
        } else {
          Toast.text('系统出错了,请联系管理员!');
        }
      });
  });
}
