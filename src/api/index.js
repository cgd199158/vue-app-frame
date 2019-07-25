/*
与后台交互模块 （依赖已封装的ajax函数）
 */
import ajax from './ajax';

let APP_URL;
if (process.env.NODE_ENV === 'development') {
  APP_URL = '/api'; //服务端
} else {
  APP_URL = '';//测试
}

// const APP_URL = config.API;



// 获取任务列表数据
export const reqTaskList = (data) => ajax(APP_URL + '/api/app/index', data, 'GET')
export const reqBudget = (data) => ajax(APP_URL + '/api/expense/budget/getBudget', data, 'POST'); //预算事项数据


