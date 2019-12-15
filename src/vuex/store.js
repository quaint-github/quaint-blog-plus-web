import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        status: '',
        accessToken: localStorage.getItem('accessToken') || ''
    },
    mutations: {
        auth_success(state, data) {
            // window.console.info("nickName:"+data.nickName);
            state.status = 'login';
            state.accessToken = data.accessToken;
            localStorage.setItem("accessToken",data.accessToken);
        },
        auth_logout(state) {
            state.status = 'logout';
            state.accessToken = '';
            localStorage.removeItem("accessToken")
        },
    }

});