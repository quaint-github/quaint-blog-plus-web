import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        status: '',
        token: localStorage.getItem('token') || '',
        memberInfo:{
            id:0,
            nickName:'null',
            headImgUrl:'http://qzapp.qlogo.cn/qzapp/100410602/9C15C6F8B2408C836063FDBBA72B92DC/100'
        }
    },
    mutations: {
        auth_success(state, data) {
            // window.console.info("nickName:"+data.nickName);
            state.status = 'success';
            state.token = data.token;
            state.memberInfo = data.memberInfo;
        },
        auth_logout(state) {
            state.status = '';
            state.token = '';
            state.memberInfo = {
                id:0,
                nickName:'null',
                headImgUrl:'http://qzapp.qlogo.cn/qzapp/100410602/9C15C6F8B2408C836063FDBBA72B92DC/100'
            };
        },
    }

});