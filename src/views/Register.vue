<template>
    <div>
        <article>
            <!-- 头部导航 -->
            <h1 class="t_nav">
                <span>像“草根”一样，紧贴着地面，低调的存在，冬去春来，枯荣无恙。</span>
                <a href="/" class="n1">网站首页</a>
                <a class="n2">注册</a>
            </h1>
            <!-- 左侧登录 -->
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
                                    <div class="mhy-form-input input-item">
                                        <div class="input-label"><span style="color: red">* </span>用户名</div>
                                        <div class="input-container">
                                            <label>
                                                <input v-on:focus="usernameFocus" v-on:blur="usernameBlur" v-model="username.val" type="text"/>
                                            </label> <!---->
                                        </div>
                                        <p class="error-text" v-if="username.showErr">
                                            <i class="anticon mhy-icon icon-closecircle"></i>
                                            {{username.msg}}
                                        </p>
                                    </div>
                                    <div class="mhy-form-input input-item">
                                        <div class="input-label"><span style="color: red">* </span>昵称</div>
                                        <div class="input-container">
                                            <label>
                                                <input v-on:focus="nickFocus" v-on:blur="nickBlur"  v-model="nickName.val" type="text"/>
                                            </label> <!---->
                                        </div>
                                        <p class="error-text" v-if="nickName.showErr">
                                            <i class="anticon mhy-icon icon-closecircle"></i>
                                            {{nickName.msg}}
                                        </p>
                                    </div>
                                    <div class="mhy-form-input input-item input-error">
                                        <div class="input-label"><span style="color: red">* </span>密码</div>
                                        <div class="input-container">
                                            <label>
                                                <input v-on:focus="pwdFocus" v-on:blur="pwdBlur" v-model="pwd.val" type="password"/>
                                            </label>
                                        </div>
                                        <p class="error-text" v-if="pwd.showErr">
                                            <i class="anticon mhy-icon icon-closecircle"></i>
                                            {{pwd.msg}}
                                        </p> <!---->
                                    </div>
                                    <div class="mhy-form-input input-item input-error">
                                        <div class="input-label"><span style="color: red">* </span>确认密码</div>
                                        <div class="input-container">
                                            <label>
                                                <input v-on:focus="rePwdFocus" v-on:blur="rePwdBlur" v-model="rePwd.val" type="password"/>
                                            </label>
                                        </div>
                                        <p class="error-text" v-if="rePwd.showErr">
                                            <i class="anticon mhy-icon icon-closecircle"></i>
                                            {{rePwd.msg}}
                                        </p>
                                        <p class="error-text" v-if="registerTip.showErr">
                                            <i class="anticon mhy-icon icon-closecircle"></i>
                                            {{registerTip.msg}}
                                        </p>
                                    </div>
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
    import {registerMember} from '../api/api'
    export default {
        name: "Register",
        components: {
            RightColumnNav,
            RightSearch
        },
        data(){
            return{
                username:{
                    val:"",
                    showErr:false,
                    msg:"用户名不能为空"
                },
                nickName:{
                    val:"",
                    showErr:false,
                    msg:"昵称不能为空"
                },
                pwd:{
                    val:"",
                    showErr:false,
                    msg:"密码不能为空"
                },
                rePwd:{
                    val:"",
                    showErr:false,
                    msg:"校验密码不能为空"
                },
                registerTip:{
                    showErr:false,
                    msg:"请按照要求完成注册～"
                }
            }
        },
        methods: {
            _registerIn(){
                if(this.username.showErr || this.nickName.showErr || this.pwd.showErr || this.rePwd.showErr){
                    this.registerTip.showErr = true;
                }else{
                    this.registerTip.showErr = false;

                    // todo 封装数据 编写后端接口
                    registerMember().then(res =>{
                        window.console.log(res)
                    })



                }

            },
            toAbout(){
                this.$router.push('/about')
            },
            toLogin(){
                this.$router.push('/login')
            },
            // 校验用户名非空
            usernameFocus(){
                this.username.showErr = false;
                this.registerTip.showErr = false;
            },
            usernameBlur(){
                // window.console.log(JSON.stringify(this.username))
                if (this.username.val===""){
                    this.username.showErr = true
                }
            },
            // 校验昵称非空
            nickFocus(){
                this.nickName.showErr = false;
                this.registerTip.showErr = false;
            },
            nickBlur(){
                // window.console.log(JSON.stringify(this.username))
                if (this.nickName.val===""){
                    this.nickName.showErr = true
                }
            },
            // 校验密码非空
            pwdFocus(){
                this.pwd.showErr = false;
                this.registerTip.showErr = false;
            },
            pwdBlur(){
                window.console.log(JSON.stringify(this.pwd))
                if (this.pwd.val===""){
                    this.pwd.showErr = true
                }
                if (this.rePwd.val === this.pwd.val){
                    this.rePwd.showErr = false;
                }
            },
            // 校验重复密码是否非空
            rePwdFocus(){
                this.rePwd.showErr = false;
                this.registerTip.showErr = false;
            },
            rePwdBlur(){
                // window.console.log(JSON.stringify(this.username))
                if (this.rePwd.val===""){
                    this.rePwd.showErr = true;
                    this.rePwd.msg = "校验密码不能为空";
                    return;
                }
                if (this.rePwd.val !== this.pwd.val){
                    this.rePwd.showErr = true;
                    this.rePwd.msg = "两次密码必须相同";
                }
            }

        }
    }
</script>

<style>
    @import "../assets/blog/css/login.css";
</style>