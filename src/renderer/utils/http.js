import axios from 'axios';
import { Message } from 'element-ui';

const http = axios.create({
    baseURL: process.env.BASE_URL || '',
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    timeout: 5000,
    withCredentials: true,
});
// 请求发送前
http.interceptors.request.use(config => {
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
// 请求收到后
http.interceptors.response.use(res => {
    const data = res.data;
    console.log(res.data);
    if (data.errcode === 0) {
        return data;
    } else {
        Message({
            message: data.errmsg,
            type: 'error',
            duration: 3* 1000
        });
        return Promise.reject(data);
    }
}, error => {
    console.log(error);
    Message({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
    })
    return Promise.reject(error);
});
export default http;