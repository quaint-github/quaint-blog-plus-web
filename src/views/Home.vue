<template>
    <div>
        <div class="picshow">
            <ul>
                <li><a href="/"><i><img src="../assets/blog/images/b01.jpg"></i>
                    <div class="font">
                        <h3>个人博客模板《早安》</h3>
                    </div>
                </a></li>
                <li><a href="/"><i><img src="../assets/blog/images/b02.jpg"></i>
                    <div class="font">
                        <h3>个人博客模板《早安》</h3>
                    </div>
                </a></li>
                <li><a href="/"><i><img src="../assets/blog/images/b03.jpg"></i>
                    <div class="font">
                        <h3>个人博客模板《早安》</h3>
                    </div>
                </a></li>
                <li><a href="/"><i><img src="../assets/blog/images/b04.jpg"></i>
                    <div class="font">
                        <h3>个人博客模板《早安》</h3>
                    </div>
                </a></li>
                <li><a href="/"><i><img src="../assets/blog/images/b05.jpg"></i>
                    <div class="font">
                        <h3>个人博客模板《早安》</h3>
                    </div>
                </a></li>
            </ul>
        </div>
        <article>
            <div class="blogs">

                <li v-for="item in homeArticle" :key="item.id">
                    <span class="blogpic"><a href="/"><img :src="item.mainImageUrl"></a></span>
                    <h3 class="blogtitle"><a href="/">{{item.articleTitle}}</a></h3>
                    <div class="bloginfo">
                        <p>{{item.articleAbstract}}</p>
                    </div>
                    <div class="autor">
                        <span class="lm">
                            <a v-for="label in item.labels" :key="label" href="/" target="_blank" class="classname">
                                {{label}}
                            </a>
                        </span>
                        <span class="dtime">{{item.updateTime}}</span>
                        <span class="viewnum">浏览（<a href="/">{{item.readNum}}</a>）</span>
                        <span class="readmore">
                            <router-link :to="{path:'/info',query:{id:item.id}}">阅读原文</router-link>
                        </span>
                    </div>
                </li>

            </div>

            <div class="sidebar">
                <div class="about">
                    <div class="avatar"> <img src="../assets/blog/images/avatar.jpg" alt=""> </div>
                    <p class="abname">dancesmile | 杨青</p>
                    <p class="abposition">Web前端设计师、网页设计</p>
                    <div class="abtext"> 一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。 </div>
                </div>
                <div class="search">
                    <form action="/e/search/index.php" method="post" name="searchform" id="searchform">
                        <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字" style="color: rgb(153, 153, 153);" onfocus="if(value=='请输入关键字'){this.style.color='#000';value=''}" onblur="if(value==''){this.style.color='#999';value='请输入关键字'}" type="text">
                        <input name="show" value="title" type="hidden">
                        <input name="tempid" value="1" type="hidden">
                        <input name="tbname" value="news" type="hidden">
                        <input name="Submit" class="input_submit" value="搜索" type="submit">
                    </form>
                </div>
                <div class="cloud">
                    <h2 class="hometitle">标签云</h2>
                    <ul>
                        <a href="/">陌上花开</a> <a href="/">校园生活</a> <a href="/">html5</a> <a href="/">SumSung</a> <a href="/">青春</a> <a href="/">温暖</a> <a href="/">阳光</a> <a href="/">三星</a><a href="/">索尼</a> <a href="/">华维荣耀</a> <a href="/">三星</a> <a href="/">索尼</a>
                    </ul>
                </div>
                <div class="paihang">
                    <h2 class="hometitle">点击排行</h2>
                    <ul>
                        <li><b><a href="/download/div/2015-04-10/746.html" target="_blank">【活动作品】柠檬绿兔小白个人博客模板30...</a></b>
                            <p><i><img src="../assets/blog/images/t02.jpg"></i>展示的是首页html，博客页面布局格式简单，没有复杂的背景，色彩局部点缀，动态的幻灯片展示，切换卡，标...</p>
                        </li>
                        <li><b><a href="/download/div/2014-02-19/649.html" target="_blank"> 个人博客模板（2014草根寻梦）30...</a></b>
                            <p><i><img src="../assets/blog/images/b03.jpg"></i>2014第一版《草根寻梦》个人博客模板简单、优雅、稳重、大气、低调。专为年轻有志向却又低调的草根站长设...</p>
                        </li>
                        <li><b><a href="/download/div/2013-08-08/571.html" target="_blank">黑色质感时间轴html5个人博客模板30...</a></b>
                            <p><i><img src="../assets/blog/images/b04.jpg"></i>黑色时间轴html5个人博客模板颜色以黑色为主色，添加了彩色作为网页的一个亮点，导航高亮显示、banner图片...</p>
                        </li>
                        <li><b><a href="/download/div/2014-09-18/730.html" target="_blank">情侣博客模板系列之《回忆》Html30...</a></b>
                            <p><i><img src="../assets/blog/images/b05.jpg"></i>Html5+css3情侣博客模板，主题《回忆》，使用css3技术实现网站动画效果，主题《回忆》,分为四个主要部分，...</p>
                        </li>
                        <li><b><a href="/download/div/2014-04-17/661.html" target="_blank">黑色Html5个人博客模板主题《如影随形》30...</a></b>
                            <p><i><img src="../assets/blog/images/b06.jpg"></i>014第二版黑色Html5个人博客模板主题《如影随形》，如精灵般的影子会给人一种神秘的感觉。一张剪影图黑白...</p>
                        </li>
                        <li><b><a href="/jstt/bj/2015-01-09/740.html" target="_blank">【匆匆那些年】总结个人博客经历的这四年…30...</a></b>
                            <p><i><img src="../assets/blog/images/mb02.jpg"></i>博客从最初的域名购买，到上线已经有四年的时间了，这四年的时间，有笑过，有怨过，有悔过，有执着过，也...</p>
                        </li>
                    </ul>
                </div>
                <div class="links">
                    <h2 class="hometitle">友情链接</h2>
                    <ul>
                        <li><a href="http://www.yangqq.com" title="杨青个人博客">杨青个人博客</a></li>
                        <li><a href="http://www.yangqq.com" title="杨青个人博客">杨青个人博客</a></li>
                        <li><a href="http://www.yangqq.com" title="杨青个人博客">杨青个人博客</a></li>
                    </ul>
                </div>
            </div>
        </article>
        <div class="blank"></div>

    </div>
</template>

<script>
    import {getHomeArticle} from '../api/api'
    export default {
        name: "Home",
        metaInfo: {
            title: 'IndexPage',
            meta: [
                {
                    name: 'keywords',
                    content: '关键字1,关键字2,关键字3'
                },
                {
                    name: 'description',
                    content: '这是一段网页的描述'
                }
            ]
        },
        data(){
            return{
                homeArticle:[{}]
            }
        },
        created:function(){
            this._getHomeArticle()
        },
        methods: {
            // 获取首页展示的文章列表
            _getHomeArticle() {
                let vueThis = this;
                getHomeArticle({})
                    .then(function (response) {
                        window.console.log(response.data);
                        if(response.data!=="" && response.data.length>0){
                            vueThis.homeArticle = response.data;
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error);
                    });
            },
        }
    }
</script>

<style scoped>

</style>