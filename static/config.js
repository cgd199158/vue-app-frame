// 全局的配置文件

window.global = {
    //PC端签名socket地址
    socketAddr: 'ws://47.98.190.190:8283',
    // 上传文件地址
    updateAddr: 'http://xgj.n3.cn/api/upload/index',
    // 微信登录参数(服务器)
    weChart: {
        appId: 'wx81d5b3c03820d30a',
        appSecret: '394ee932ff760ad8f0cb5ef1286c660b',
        token: 'co5ZdIVAzfMwyby7fo1uxJYcFqCjZKqu',
        encodingAesKey: '0OkxIbL9jFDh0nIzzIw0lvH3b1164o6ObvF7JD805I8',
        redirect_uri: 'http%3a%2f%2fdubian.cloudletsoft.com%2fmobile%2f%23%2flogin',
        redirect_uri_register: 'http%3a%2f%2fdubian.cloudletsoft.com%2fmobile%2f%23%2fregister',
        redirect_uri_pay: 'http%3a%2f%2fdubian.cloudletsoft.com%2fmobile%2f%23%2fwechartpay',
    },
    // 签名的配置文件
    dialogOption: {
        penColor: 'rgb(0, 0, 0)',
        minWidth: 3,
        maxWidht: 8,
    },
};
