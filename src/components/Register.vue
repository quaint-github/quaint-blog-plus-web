<template>
    <div>
        <article>
            <!-- 头部导航 -->
            <h1 class="t_nav">
                <span>在这世上珍贵的东西总是罕有，所以这世上只有一个你。</span>
                <a href="/" class="n1">网站首页</a>
                <a class="n2">注册</a>
            </h1>
            <!-- 左侧注册 -->
            <div class="leftbox">
                <div id="root">
                    <div class="mhy-verify-body-container">
                        <div class="mhy-verify-container">
                            <div class="mhy-login mhy-container-content">
                                <div class="tab-container">
                                    <div class="mhy-tabs login-tab tabs-flex">
                                        <div class="tab-item" @click="toLogin">登录</div>
                                        <div class="quaint-tab-item">&</div>
                                        <div class="tab-item active">注册</div>
                                        <i class="tab-active-line transition" style="width: 50%; left: 50%;"></i>
                                    </div>
                                </div>
                                <form class="quaint-login-margin-top-from">

                                    <label for="username">
                                        <div class="mhy-form-input input-item">
                                            <div class="input-label"><span style="color: red">* </span>用户名</div>
                                            <div class="input-container">
                                                <input ref="username" id="username" v-model="username" type="text"/>
                                            </div>
                                        </div>
                                    </label>
                                    <label for="nickName">
                                        <div class="mhy-form-input input-item">
                                            <div class="input-label"><span style="color: red">* </span>昵称</div>
                                            <div class="input-container">
                                                <input ref="nickName" id="nickName" v-model="nickName" type="text"/>
                                            </div>
                                        </div>
                                    </label>
                                    <label for="pwd">
                                        <div class="mhy-form-input input-item input-error">
                                            <div class="input-label"><span style="color: red">* </span>密码</div>
                                            <div class="input-container">
                                                <input ref="pwd" id="pwd" v-model="pwd" type="password"/>
                                            </div>
                                        </div>
                                    </label>
                                    <label for="rePwd">
                                        <div class="mhy-form-input input-item input-error">
                                            <div class="input-label"><span style="color: red">* </span>确认密码</div>
                                            <div class="input-container">
                                                <input ref="rePwd" id="rePwd" v-model="rePwd" type="password"/>
                                            </div>
                                        </div>
                                    </label>
                                    <div class="mhy-button login-btn is-block">
                                        <button @click="_registerIn" type="button" class="">
                                            注 册
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
    import {registerMember} from '../api/api'
    export default {
        name: "Register",
        inject:['reload'],
        components: {
            RightColumnNav,
            RightSearch
        },
        data(){
            return{
                username:"",
                nickName:"",
                pwd:"",
                rePwd:""
            }
        },
        methods: {
            _registerIn(){
                if (this.username === ""){
                    this.$message.warning("用户名不能为空!");
                    this.$refs.username.focus(); return
                }
                if (this.nickName === ""){
                    this.$message.warning("昵称不能为空!");
                    this.$refs.nickName.focus(); return
                }
                if (this.pwd === ""){
                    this.$message.warning("密码不能为空!");
                    this.$refs.pwd.focus(); return
                }
                if (this.rePwd === ""){
                    this.$message.warning("校验密码不能为空!");
                    this.$refs.rePwd.focus(); return
                }
                if (this.pwd !== this.rePwd){
                    this.$message.warning("两次密码不一致!");
                    this.$refs.rePwd.focus(); return
                }

                // 封装数据
                let param = {
                    "username":this.username,
                    "nickName":this.nickName,
                    "pwd":this.pwd,
                    "rePwd":this.rePwd
                };
                let self = this;
                registerMember(param).then(res =>{
                    window.console.log(res);
                    self.$store.commit('auth_success',{"accessToken":res.data.accessToken});
                    self.$router.go(-1);
                    self.$message.success('register success！');
                    self.reload();
                }).catch(err => {
                    self.$message.error("服务器繁忙，请稍后重试！");
                    window.console.log(err);
                });

            },
            toAbout(){
                this.$router.push('/about')
            },
            toLogin(){
                this.$emit('to-register',true)
            },

        },
        metaInfo: {
            title: 'Quaint个人博客 - 注册'
        }
    }
</script>

<style>
    @import "../assets/blog/css/login.css";
</style>