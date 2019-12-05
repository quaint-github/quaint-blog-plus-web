import axios from "axios"

const dev = 'http://localhost:8081';
const webPrefix = dev;

const axiosInstance = axios.create({
    headers: {'Content-Type': 'application/json;charset=utf-8'},// 设置传输内容的类型和编码
    withCredentials: true // 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
});

// 获取首页展示文章
export const getHomeArticle = (params) => {
    return axiosInstance({
        url: webPrefix + "/home/article/list",
        method: "get",
        data: params
    })
};
// 获取文章列表展示
export const getArticleList = (params) => {
    return axiosInstance({
        url: webPrefix + "/article/list",
        method: "post",
        data: params
    })
};
// 获取搜索的文章列表
export const getSearchArticle = (params) => {
    return axiosInstance({
        url: webPrefix + "/article/search",
        method: "post",
        data: params
    })
};

// 获取文章详情展示
export const getArticleInfo = (params) => {
    return axiosInstance({
        url: webPrefix + "/article/id",
        method: "post",
        data: params
    })
};

// 文章点击排行列表
export const getArticleClickRank = (params) => {
    return axiosInstance({
        url: webPrefix + "/article/click/rank",
        method: "post",
        data: params
    })
};

// export default {
//     checkLogin: "http://localhost:8080/member/check/login",
//
// }