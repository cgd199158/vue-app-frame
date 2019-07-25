import _ from "lodash";
import moment from "moment";

export const getIndex = function (items, value, key) {
    if (!items || !value || items.length < 1) return;
    var key = key || "id",
        items = items,
        itemKey;
    for (var i = 0; i < items.length; i++) {
        if (items[i][key] == value) {
            itemKey = i;
        }
    }
    return itemKey;
};

export const delItemByKey = function (items, value, key) {
    console.log("value"), value;
    if (!items || !value || items.length < 1) return;
    var key = key || "id",
        items = items,
        itemKey;
    for (var i = 0; i < items.length; i++) {
        if (items[i][key] == value) {
            itemKey = i;
        }
    }
    items.splice(itemKey, 1);
    return items;
};

/**
 * 数组格式转树状结构
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    pid
 * @param   {String}    children
 * @return  {Array}
 */
export const arrayToTree = function (
    array,
    id = "id",
    pid = "pid",
    children = "children"
) {
    let data = lodash.cloneDeep(array);
    let result = [];
    let hash = {};
    data.forEach((item, index) => {
        hash[data[index][id]] = data[index];
    });
    data.forEach(item => {
        let hashVP = hash[item[pid]];
        if (hashVP) {
            !hashVP[children] && (hashVP[children] = []);
            hashVP[children].push(item);
        } else {
            result.push(item);
        }
    });
    return result;
};
/**
 *将树状结构转换成数组格式
 *
 * @param {Array} tree
 * @returns
 */
export const treeToArray = function (tree) {
    let result = [];
    const change = (data, pid) => {
        for (let i = 0; i < data.length; i++) {
            let d = { id: data[i].id, text: data[i].text, pid: pid };
            result.push(d);
            if (data[i].children && data[i].children.length > 0) {
                change(data[i].children, data[i].id);
            }
        }
    };
    change(tree);
    return result;
};

export const loginCheck = function (that) {
    const l = JSON.parse(localStorage.getItem("loginInfo"));
    const d = new Date().getTime(); //当前时间
    const curPath = that.$router.history.current.fullPath;
    console.log("储存的token", l);
    console.log('path', that.$router.history.current.fullPath);
    if (l) {
        //存在token,判断token是否过期
        const diff = l.expireAt * 1000 - d;
        if (diff > 1000 * 60 * 60 * 24) {
            //还未失效
            console.log("token还未失效,");
            return true;
        } else {
            //token失效
            console.log("token已失效,请重新登录!", curPath);
            localStorage.removeItem("loginInfo");
            that.$router.push({ path: "/login" });
            return false;
        }
    } else {
        //不存在token则跳转登录页面
        console.log("token不存在,请先登录!");
        that.$router.push({ path: "/login" });
        return false;
    }
};

export const getUrlAllParams = function () {
    // 解决乱码问题
    var url = decodeURI(window.location.href);
    var res = {};
    var url_data = _.split(url, "?").length > 1 ? _.split(url, "?")[1] : null;
    if (!url_data) return null;
    var params_arr = _.split(url_data, "&");
    _.forEach(params_arr, function (item) {
        var key = _.split(item, "=")[0];
        var value = _.split(item, "=")[1];
        res[key] = value;
    });
    return res;
};

export const getTime = function (date) {
    const diff = moment().diff(moment(date), "days");
    if (diff === 0) {
        console.log("moment(date)", moment(date).format("HH:mm"));
        return moment(date).format("HH:mm");
    }
    if (diff === 1) {
        return "昨天  " + moment(date).format("HH:mm");
    }
    return moment(date).format("YYYY-MM-DD HH:mm");
};

// 时间展示转换
export const timestampFormat = function (timestamp) {
    function zeroize(num) {
        return (String(num).length == 1 ? "0" : "") + num;
    }
    var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

    var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
    var tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

    var Y = tmDate.getFullYear(),
        m = tmDate.getMonth() + 1,
        d = tmDate.getDate();
    var H = tmDate.getHours(),
        i = tmDate.getMinutes(),
        s = tmDate.getSeconds();

    if (timestampDiff < 60) {
        // 一分钟以内
        return "刚刚";
    } else if (timestampDiff < 3600) {
        // 一小时前之内
        return Math.floor(timestampDiff / 60) + "分钟前";
    } else if (
        curDate.getFullYear() == Y &&
        curDate.getMonth() + 1 == m &&
        curDate.getDate() == d
    ) {
        return "今天" + zeroize(H) + ":" + zeroize(i);
    } else {
        var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
        if (
            newDate.getFullYear() == Y &&
            newDate.getMonth() + 1 == m &&
            newDate.getDate() == d
        ) {
            return "昨天" + zeroize(H) + ":" + zeroize(i);
        } else if (curDate.getFullYear() == Y) {
            return (
                zeroize(m) + "月" + zeroize(d) + "日 " + zeroize(H) + ":" + zeroize(i)
            );
        } else {
            return (
                Y +
                "年" +
                zeroize(m) +
                "月" +
                zeroize(d) +
                "日 " +
                zeroize(H) +
                ":" +
                zeroize(i)
            );
        }
    }
};

//判断是否是微信环境
export const isWeiXin = function () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}


// 转为unicode 编码  
export const encodeUnicode = function (str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}

// 解码  
export const decodeUnicode = function (str) {
    str = str.replace(/\\/g, "%");
    //转换中文
    str = unescape(str);
    //将其他受影响的转换回原来
    str = str.replace(/%/g, "\\");
    //对网址的链接进行处理
    str = str.replace(/\\/g, "");
    return str;
}

// 根据索引删除数组的内容
export const removeItemByIndex = function (array, index) {
    if (index <= (array.length - 1)) {
        for (var i = index; i < array.length; i++) {
            array[i] = array[i + 1];
        }
    } else {
        throw new Error('超出最大索引！');
    }
    array.length = array.length - 1;
    console.log('array', array);
    return array;
}

// 覆盖console, debug环境不使用
export const debug = function (bool) {
    if (!bool) {
        consoleHolder = console;
        console = {};
        Object.keys(consoleHolder).forEach(function (key) {
            console[key] = function () { };
        })
    } else {
        console = consoleHolder;
    }
}
