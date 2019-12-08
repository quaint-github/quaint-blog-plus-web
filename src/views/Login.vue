<template>
    <div>
        <article>
            <!-- 头部导航 -->
            <h1 class="t_nav">
                <span>像“草根”一样，紧贴着地面，低调的存在，冬去春来，枯荣无恙。</span>
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
                                                <input type="password" v-model="loginForm.password"/>
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
                    <div class="avatar"> <img src="../assets/blog/images/avatar.jpg" alt=""> </div>
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
    import RightColumnNav from '../components/RightColumnNav'
    import RightSearch from '../components/RightSearch'
    import {checkLogin} from '../api/api'
    export default {
        name: "Login",
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
                    username: "quaint",
                    password: "777123"
                }
            }
        },
        methods: {
            _loginIn(){
                let username = this.loginForm.username;
                let password = this.loginForm.password;

                let vueThis = this;

                checkLogin({username: username, password:password}).then(res => {
                        window.console.log(res.data);
                        window.console.log(res.data.headImgUrl);
                        if(res.data){
                            vueThis.$store.commit('auth_success',{"token":"token","memberInfo":res.data});
                            vueThis.$router.push('/');
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
                this.$router.push('/register')
            }

        }
    }
</script>

<style>
    @import "../assets/blog/css/login.css";
</style>