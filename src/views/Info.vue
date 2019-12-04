<template>
    <div>
        <article>
            <h1 class="t_nav"><span>您现在的位置是：首页 > 学无止境 > 文章详情</span>
                <router-link to="/" class="n1">网站首页</router-link>
                <router-link to="/list" class="n2">学无止境</router-link>
            </h1>
            <div class="infos">
                <div class="newsview">
                    <h3 class="news_title">{{articleInfo.articleTitle}}</h3>
                    <div class="news_author">
                        <span class="au01"><a href="http://quaint-aini.com">{{articleInfo.nickName}}</a></span>
                        <span class="au02">{{articleInfo.updateTime}}</span><span class="au03">共<b>
                        {{articleInfo.readNum}}</b>人围观</span></div>
                    <div class="tags">
                        <router-link to="/" v-for="label in articleInfo.labels" :key="label">{{label}}</router-link>
                    </div>
                    <div class="news_about">
                        <strong>简介</strong>
                        {{articleInfo.articleAbstract}}
                    </div>
                    <div class="news_infos" v-html="articleInfo.articleContent"></div>
                </div>
                <div class="share"> </div>
                <div class="nextinfo">
                    <p>上一篇：
                        <a class="a-hover" v-if="articleInfo.up" @click="_getArticleInfoById(articleInfo.up.id)">{{articleInfo.up.articleTitle}}</a>
                        <a class="a-hover-no-style" v-else>没有了</a>
                    </p>
                    <p>下一篇：
                        <a class="a-hover" v-if="articleInfo.down" @click="_getArticleInfoById(articleInfo.down.id)">{{articleInfo.down.articleTitle}}</a>
                        <a class="a-hover-no-style" v-else>没有了</a>
                    </p>
                </div>
                <div class="otherlink">
                    <h2>相关文章</h2>
                    <ul>
                        <li><a href="/download/div/2018-04-22/815.html" title="html5个人博客模板《黑色格调》">html5个人博客模板《黑色格调》</a></li>
                        <li><a href="/download/div/2018-04-18/814.html" title="html5个人博客模板主题《清雅》">html5个人博客模板主题《清雅》</a></li>
                        <li><a href="/download/div/2018-03-18/807.html" title="html5个人博客模板主题《绅士》">html5个人博客模板主题《绅士》</a></li>
                        <li><a href="/download/div/2018-02-22/798.html" title="html5时尚个人博客模板-技术门户型">html5时尚个人博客模板-技术门户型</a></li>
                        <li><a href="/download/div/2017-09-08/789.html" title="html5个人博客模板主题《心蓝时间轴》">html5个人博客模板主题《心蓝时间轴》</a></li>
                        <li><a href="/download/div/2017-07-16/785.html" title="古典个人博客模板《江南墨卷》">古典个人博客模板《江南墨卷》</a></li>
                        <li><a href="/download/div/2017-07-13/783.html" title="古典风格-个人博客模板">古典风格-个人博客模板</a></li>
                        <li><a href="/download/div/2015-06-28/748.html" title="个人博客《草根寻梦》―手机版模板">个人博客《草根寻梦》―手机版模板</a></li>
                        <li><a href="/download/div/2015-04-10/746.html" title="【活动作品】柠檬绿兔小白个人博客模板">【活动作品】柠檬绿兔小白个人博客模板</a></li>
                        <li><a href="/jstt/bj/2015-01-09/740.html" title="【匆匆那些年】总结个人博客经历的这四年…">【匆匆那些年】总结个人博客经历的这四年…</a></li>
                    </ul>
                </div>
                <div class="news_pl">
                    <h2>文章评论</h2>
                    <ul>
                        <div class="gbko"> </div>
                    </ul>
                </div>
            </div>
            <right-nav></right-nav>
        </article>
    </div>
</template>

<script>
    import RightNav from '../components/RightNav';
    import {getArticleInfo} from '../api/api'
    export default {
        name: "Info",
        metaInfo: {
            title: 'InfoPage',
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
        created:function(){
            this._getArticleInfo()
        },
        data(){
            return{
                articleInfo:{}
            }
        },
        methods:{
            _getArticleInfo(){
                let vueThis = this;
                getArticleInfo(this.$route.query)
                    .then(function (response) {
                        window.console.log(JSON.stringify(response.data));
                        if(response.data!==""){
                            vueThis.articleInfo = response.data;
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error);
                    });
            },
            _getArticleInfoById(id){
                let vueThis = this;
                getArticleInfo({id:id})
                    .then(function (response) {
                        window.console.log(JSON.stringify(response.data));
                        if(response.data!==""){
                            vueThis.articleInfo = response.data;
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error);
                    });
            }
        },
        components: {
            RightNav
        }
    }
</script>

<style scoped>

    .a-hover:hover{
        cursor: pointer;
        color: #3e8ff7;
    }
    .a-hover-no-style:hover{
        text-decoration: none;
        color: #555;
    }

</style>