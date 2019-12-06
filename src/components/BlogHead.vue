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
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "BlogHead"
    }
</script>

<style scoped>

</style>