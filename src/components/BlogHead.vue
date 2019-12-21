<template>
    <div>
        <header>
            <div class="tophead">
                <div class="logo"><a href="/">Quaint个人博客</a></div>
                <nav class="topnav" id="topnav">
                    <ul>
                        <li><router-link to="/">网站首页</router-link></li>
                        <li><router-link to="/about">关于我</router-link></li>
                        <!--<li><router-link to="/share">模板分享</router-link></li>-->
                        <li><router-link to="/list">学无止境</router-link></li>
                        <li><router-link to="/saying">留言</router-link></li>
                        <li style="padding: 0;" v-if="memberInfo.nickName">
                            <a style="float: right; margin: 0 10px;" @click="exit">退出</a>
                        </li>
                        <li v-if="memberInfo.nickName">
                            {{memberInfo.nickName}}
                            <img style="float: right" class="_3LHFA-" :src="memberInfo.headImgUrl"/>
                        </li>
                        <li v-else><router-link to="/login">登录</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>
    import {getMemberInfo} from '../api/api'
    export default {
        name: "BlogHead",
        inject: ['reload'],
        data(){
            return{
                memberInfo:{
                    nickName:null,
                    headImgUrl:null
                }
            }
        },
        created:function () {
            this._getMemberInfo()
        },
        methods:{
            exit(){
                this.memberInfo=null;
                this.$store.commit("auth_logout",{});
                this.$message.success("logout success!");
                this.reload();
            },
            _getMemberInfo(){
                let vueThis = this;
                getMemberInfo({'accessToken':this.$store.state.accessToken}).then(res => {
                    // window.console.log(res);
                    vueThis.memberInfo = res.data;
                }).catch(err => {
                    window.console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>