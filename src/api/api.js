import axios from "axios"


const dev = 'http://localhost:8081/quaint-service';
// const prod = 'https://quaint-aini.com/quaint-service';

const webPrefix = dev;


const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'accessToken': localStorage.getItem('accessToken')
    },// 设置传输内容的类型和编码
    withCredentials: true // 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
});

// 定义接口开始


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
// 获取标签云 列表
export const getLabelCloud = (params) => {
    return axiosInstance({
        url: webPrefix + "/label/list",
        method: "post",
        data: params
    })
};
// 通过标签云id 搜索文章列表
export const getArticleByLabelId = (params) => {
  return axiosInstance({
      url: webPrefix + '/label/article/id',
      method: "post",
      data: params
  })
};
// 通过文章id 获取留言和评论
export const getCommentByArticleId = (params) => {
    return axiosInstance({
        url: webPrefix + '/article/comment/list',
        method: "post",
        data: params
    })
};
// 校验登录
export const checkLogin = (params) => {
    return axiosInstance({
        url: webPrefix + "/member/check/login",
        method: "post",
        data: params
    })
};
// 用户注册
export const registerMember = (params) => {
    return axiosInstance({
        url: webPrefix + "/member/register/in",
        method: "post",
        data: params
    })
};
// 用户评论
export const articleAddComment = (params) => {
    return axiosInstance({
        url: webPrefix + "/article/comment/add",
        method: "post",
        data: params
    })
};
// 用户评论
export const getMemberInfo = (params) => {
    return axiosInstance({
        url: webPrefix + "/member/info",
        method: "post",
        data: params,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'accessToken': params.accessToken
        }
    })
};











// export default {
//     checkLogin: "http://localhost:8080/member/check/login",
//
// }