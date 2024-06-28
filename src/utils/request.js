import axios from "axios";
import { BaseURL, TIMEOUT } from "./config";
const loginURL = '';//登录URL
const registerURL = '';//注册URL

axios.defaults.timeout = TIMEOUT;//配置axios超时时间
axios.defaults.baseURL = BaseURL;//配置axios默认url

// 定义一个函数来检查请求是否需要携带token
function shouldAddToken(url) {
    // 如果请求的URL不是登录和注册的URL，则需要添加token
    return url !== loginURL && url !== registerURL;
}

//请求拦截器
axios.interceptors.request.use(config => {
    // 检查当前请求是否需要添加token
    if (shouldAddToken(config.url)) {
        // 假设你存储的token在localStorage中，以Bearer方式添加到Authorization头部
        const token = window.localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;//返回配置对象
}, error => {
    return Promise.reject(error)
});

//响应拦截器
axios.interceptors.response.use(response => {
    //处理响应数据
    return Promise.resolve(response.data);
}, error => {
    return Promise.reject(error);
})

//处理请求并返回Promise对象
export default function (fetch, url, params, config) {
    return new Promise((resolve, reject) => {
        switch (fetch) {
            case "get":
                Get(url, config).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
                break;
            case "post":
                Post(url, params, config).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                })
                break;
            default:
                break;
        }
    })
}

//封装get请求
const Get = (url, config) => {
    return new Promise((resolve, reject) => {
        axios.get(url, config).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}

//封装post请求
const Post = (url, data, config) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, config).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}