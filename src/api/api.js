import axios from "axios"

const dev = 'http://localhost:8081';
const webPrefix = dev;

const axiosInstance = axios.create({
    headers: {'Content-Type': 'application/json;charset=utf-8'},// 设置传输内容的类型和编码
    withCredentials: true // 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
});

// 校验用户登陆 用于测试
export const checkLogin = (params) => {
    return axiosInstance({
        url: webPrefix + "/member/check/login",
        method: "post",
        data: params
    })
};

// export default {
//     checkLogin: "http://localhost:8080/member/check/login",
//
// }