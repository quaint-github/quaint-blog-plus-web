<template>
    <div>
        <header>
            <div class="tophead">
                <div class="logo"><a href="/">杨青个人博客</a></div>
                <!--<div id="mnav">-->
                    <!--<h2><span class="navicon"></span></h2>-->
                    <!--<ul>-->
                        <!--<li><router-link to="/">网站首页</router-link></li>-->
                        <!--<li><router-link to="/about">关于我-quaint</router-link></li>-->
                        <!--<li><a href="share.html">模板分享</a></li>-->
                        <!--<li><a href="list.html">学无止境</a></li>-->
                        <!--<li><a href="info.html">慢生活</a></li>-->
                        <!--<li><a href="gbook.html">留言</a></li>-->
                    <!--</ul>-->
                <!--</div>-->
                <nav class="topnav" id="topnav">
                    <ul>
                        <li><router-link to="/">网站首页</router-link></li>
                        <li><router-link to="/about">关于我-quaint</router-link></li>
                        <li><router-link to="/share">模板分享</router-link></li>
                        <li><router-link to="/list">学无止境</router-link></li>
                        <li><router-link to="/info">慢生活</router-link></li>
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