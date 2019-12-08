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
                        <li style="padding: 0;" v-if="this.$store.state.memberInfo.id!==0"><a style="float: right; margin: 0 10px;" @click="exit">退出</a></li>
                        <li v-if="this.$store.state.memberInfo.id!==0">
                            {{this.$store.state.memberInfo.nickName}}
                            <img style="float: right" class="_3LHFA-" :src="this.$store.state.memberInfo.headImgUrl"/>
                        </li>
                        <li v-else><router-link to="/login">登录</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "BlogHead",
        methods:{
            exit(){
                this.$store.commit("auth_logout",{})
            }
        }
    }
</script>

<style scoped>

</style>