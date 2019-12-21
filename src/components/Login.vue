<template>
    <div>
        <article>
            <!-- 头部导航 -->
            <h1 class="t_nav">
                <span>时间冲不淡友情的酒，距离拉不开思念的手，祝福你，永远永远。</span>
                <a href="/" class="n1">网站首页</a>
                <a class="n2">登录</a>
            </h1>
            <!-- 左侧登录 -->
            <div class="leftbox">
                <div id="root">
                    <div class="mhy-verify-body-container">
                        <div class="mhy-verify-container">
                            <div class="mhy-login mhy-container-content">
                                <div class="tab-container">
                                    <div class="mhy-tabs login-tab tabs-flex">
                                        <div class="tab-item active">登录</div>
                                        <div class="quaint-tab-item">&</div>
                                        <div class="tab-item" @click="toRegister">注册</div>
                                        <i class="tab-active-line transition" style="width: 50%; left: 0%;"></i></div>
                                </div>
                                <form class="quaint-login-margin-top-from">
                                    <div class="mhy-form-input input-item">
                                        <div class="input-label"><span style="color: red">* </span>用户名</div>
                                        <div class="input-container">
                                            <label>
                                                <input type="text" v-model="loginForm.username"/>
                                            </label>
                                        </div>
                                        <p class="error-text" v-if="showNameErr.show">
                                            <i class="anticon mhy-icon icon-closecircle"></i>
                                            {{showNameErr.msg}}
                                        </p>
                                    </div>
                                    <div class="mhy-form-input input-item input-error">
                                        <div class="input-label"><span style="color: red">* </span>密码</div>
                                        <div class="input-container">
                                            <label>
                                                <input type="password" @keydown.enter="_loginIn" v-model="loginForm.password"/>
                                            </label>
                                        </div>
                                        <p class="error-text" v-if="showPassErr.show">
                                            <i class="anticon mhy-icon icon-closecircle"></i>
                                            {{showPassErr.msg}}
                                        </p>
                                    </div>
                                    <div class="mhy-button login-btn is-block">
                                        <button type="button" @click="_loginIn">
                                            登 录
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右侧辅助登录 -->
            <div class="rightbox" style="margin-top: 20px">
                <div class="about" @click="toAbout">
                    <div class="avatar"> <img src="../assets/blog/images/quaint-head.png" alt=""> </div>
                    <p class="abname">Quaint</p>
                    <p class="abposition">ACG爱好者</p>
                    <div class="abtext"> 放松,听歌,睡觉... </div>
                </div>
                <right-search></right-search>
                <right-column-nav></right-column-nav>
            </div>
        </article>
    </div>

</template>

<script>
    import RightColumnNav from './RightColumnNav'
    import RightSearch from './RightSearch'
    import {checkLogin} from '../api/api'
    export default {
        name: "Login",
        inject:['reload'],
        components: {
            RightColumnNav,
            RightSearch
        },
        data(){
            return{
                showNameErr:{
                    show:false,
                    msg:"用户名不能为空"
                },
                showPassErr:{
                    show:false,
                    msg:"密码不能为空"
                },
                loginForm: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            _loginIn(){
                let username = this.loginForm.username;
                let password = this.loginForm.password;

                let vueThis = this;

                checkLogin({username: username, password:password}).then(res => {
                        // window.console.log(res.data);
                        if(res.data){
                            vueThis.$store.commit('auth_success',{"accessToken":res.data.accessToken});
                            vueThis.$router.go(-1);
                            self.$message({
                                // dangerouslyUseHTMLString: true,
                                showClose: true,
                                message: 'login success！',
                                type: 'success'
                            });
                            vueThis.reload();
                            vueThis.showPassErr = {
                                show: false,
                                msg: ''
                            };
                        }else {
                            vueThis.showPassErr = {
                                show: true,
                                msg: '账号密码不匹配，请检查后重试！'
                            };
                        }
                    }).catch(err => {
                        vueThis.showPassErr = {
                            show: true,
                            msg: '服务器繁忙，请稍后重试！'
                        };
                        window.console.log(err);
                    });

            },
            toAbout(){
                this.$router.push('/about')
            },
            toRegister(){
                this.$emit('to-register',false)
            }

        },
        metaInfo: {
            title: 'Quaint个人博客 - 登录'
        }
    }
</script>

<style>
    @import "../assets/blog/css/login.css";
</style>