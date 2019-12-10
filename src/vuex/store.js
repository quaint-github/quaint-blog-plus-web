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
            headImgUrl:''
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
                headImgUrl:''
            };
        },
    }

});