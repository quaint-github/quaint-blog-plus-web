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
                                        <div class="input-label">Quaint号</div>
                                        <div class="input-container">
                                            <input type="text"> <!---->
                                        </div>
                                        <p class="error-text" v-if="showNameErr">
                                            <i class="anticon mhy-icon icon-closecircle"></i>
                                            账号不能为空
                                        </p>
                                    </div>
                                    <div class="mhy-form-input input-item input-error">
                                        <div class="input-label">密码</div>
                                        <div class="input-container">
                                            <input type="password">
                                        </div>
                                        <p class="error-text" v-if="showPassErr">
                                            <i class="anticon mhy-icon icon-closecircle"></i>
                                            密码不能为空
                                        </p> <!---->
                                    </div>
                                    <div class="mhy-form-input input-item input-error">
                                        <div class="input-label">确认密码</div>
                                        <div class="input-container">
                                            <input type="password">
                                        </div>
                                        <p class="error-text" v-if="showPassErr">
                                            <i class="anticon mhy-icon icon-closecircle"></i>
                                            密码不能为空
                                        </p> <!---->
                                    </div>
                                    <div class="mhy-button login-btn is-block">
                                        <button type="submit" click-upload="" class="">
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
    export default {
        name: "Register",
        components: {
            RightColumnNav,
            RightSearch
        },
        data(){
            return{
                showNameErr:false,
                showPassErr:false
            }
        },
        methods: {
            toAbout(){
                this.$router.push('/about')
            },
            toLogin(){
                this.$router.push('/login')
            }
        }
    }
</script>

<style>
    @import "../assets/blog/css/login.css";
</style>