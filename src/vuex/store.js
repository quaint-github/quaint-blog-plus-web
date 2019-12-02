import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        status: '',
        token: localStorage.getItem('token') || '',
        nickName: "nickName"
    },
    mutations: {
        auth_success(state, data) {
            // window.console.info("nickName:"+data.nickName);
            state.status = 'success';
            state.token = data.token;
            state.nickName = data.nickName;
        },
        auth_logout(state) {
            state.status = '';
            state.token = '';
            state.nickName = {};
        },
    }

});