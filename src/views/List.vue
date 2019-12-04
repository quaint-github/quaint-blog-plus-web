<template>
    <div>
        <article>
            <h1 class="t_nav"><span>不要轻易放弃。学习成长的路上，我们长路漫漫，只因学无止境。 </span>
                <router-link to="/" class="n1">网站首页</router-link>
                <router-link to="/list" class="n2">学无止境</router-link>
            </h1>
            <div class="blogs">
                <div class="mt20"></div>

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

                <div class="pagelist"><a title="Total record">&nbsp;<b>45</b> </a>&nbsp;&nbsp;&nbsp;<b>1</b>&nbsp;<a href="/download/index_2.html">2</a>&nbsp;<a href="/download/index_2.html">下一页</a>&nbsp;<a href="/download/index_2.html">尾页</a></div>
            </div>
            <right-nav></right-nav>
        </article>
    </div>
</template>

<script>
    import RightNav from '../components/RightNav';
    import {getArticleList} from '../api/api'
    export default {
        name: "List",
        metaInfo: {
            title: 'ListPage',
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
        components: {
            RightNav
        },
        data(){
            return{
                homeArticle:[{}]
            }
        },
        created:function(){
            this._getArticleList()
        },
        methods: {
            // 获取首页展示的文章列表
            _getArticleList() {
                let vueThis = this;
                getArticleList({})
                    .then(function (response) {
                        // window.console.log(response);
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