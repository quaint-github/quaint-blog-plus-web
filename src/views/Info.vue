<template>
    <div>
        <article>
            <h1 class="t_nav"><span>您现在的位置是：首页 > 学无止境 > {{articleInfo.articleTitle}}</span>
                <router-link to="/" class="n1">网站首页</router-link>
                <router-link to="/list" class="n2">学无止境</router-link>
            </h1>
            <!-- 文章信息 -->
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
                <!-- 相关文章 -->
                <div class="otherlink">
                    <h2>相关文章</h2>
                    <ul v-if="articleInfo.sameArticles && articleInfo.sameArticles.length>0">
                        <li v-for="same in articleInfo.sameArticles" :key="same.id" >
                            <a class="a-hover" @click="_getArticleInfoById(same.id)">{{same.articleTitle}}</a>
                        </li>
                    </ul>
                    <ul v-else>
                        <div class="gbko"> 暂时没有相关文章 </div>
                    </ul>
                </div>
                <!-- 文章评论 -->
                <div class="news_pl">
                    <h2>文章评论</h2>
                    <ul>
                        <div class="gbko"> 评论功能暂未完成 </div>
                        <article-comment></article-comment>
                    </ul>
                </div>
            </div>
            <div class="sidebar">
                <right-search></right-search>
                <right-column-nav></right-column-nav>
                <right-label-cloud></right-label-cloud>
                <right-click-rank v-on:func="_getArticleInfoById"></right-click-rank>
            </div>
        </article>
    </div>
</template>

<script>
    import RightSearch from '../components/RightSearch';
    import RightColumnNav from '../components/RightColumnNav';
    import RightLabelCloud from '../components/RightLabelCloud';
    import RightClickRank from '../components/RightClickRank';
    import ArticleComment from '../components/ArticleComment';
    import {getArticleInfo} from '../api/api'
    export default {
        name: "Info",
        components: {
            RightSearch,
            RightColumnNav,
            RightLabelCloud,
            RightClickRank,
            ArticleComment
        },
        metaInfo: {
            title: 'Quaint个人博客 - 学无止境',
            meta: [
                {
                    name: 'keywords',
                    content: 'quaint个人博客,quaintBlog,quaint'
                },
                {
                    name: 'description',
                    content: '(๑• ₃ •๑)欢迎来到Quaintの博客，(๑> ؂ <๑)这是一个正在成长中的博客，一起成长的还有我的好朋友(> ω <)夏睡醒了秋~'
                }
            ]
        },
        created:function(){
            this._getArticleInfo()
        },
        data(){
            return{
                name: 'Info.vue',
                articleInfo:{}
            }
        },
        methods:{
            _getArticleInfo(){
                let vueThis = this;
                getArticleInfo(this.$route.query)
                    .then( res => {
                        // window.console.log(JSON.stringify(response.data));
                        if(res.data!==""){
                            vueThis.articleInfo = res.data;
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error);
                    });
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            },
            _getArticleInfoById(id){
                let vueThis = this;
                getArticleInfo({id:id})
                    .then(res => {
                        // window.console.log(JSON.stringify(response.data));
                        if(res.data!==""){
                            vueThis.articleInfo = res.data;
                        }
                    })
                    .catch(err => {
                        window.console.log(err);
                    });
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
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