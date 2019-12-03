<template>
    <div>
        <article>
            <h1 class="t_nav"><span>不要轻易放弃。学习成长的路上，我们长路漫漫，只因学无止境。 </span><a href="/" class="n1">网站首页</a><a href="/" class="n2">学无止境</a></h1>
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
                            <a href="/" target="_blank" class="classname">{{item.label}}</a>
                        </span>
                        <span class="dtime">{{item.createTime}}</span>
                        <span class="viewnum">浏览（<a href="/">{{item.readNum}}</a>）</span>
                        <span class="readmore"><a href="/">阅读原文</a></span>
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
    import {getHomeArticle} from '../api/api'
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
                homeArticle:[{
                    "id": 1,
                    "articleTitle": "作为一个设计师,如果遭到质疑你是否能恪守自己的原则?",
                    "articleAbstract": "曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得",
                    "mainImageUrl": "http://www.yangqq.com/d/file/news/life/2018-06-29/75842f4d1e18d692a66c38eb172a40ab.jpg",
                    "memberId": 1,
                    "label": "1,2,3",
                    "readNum": 0,
                    "articleContent": "测试内容",
                    "updateTime": "2019-12-03T16:12:08",
                    "createTime": "2019-12-03T14:36:12",
                    "valid": true
                }]
            }
        },
        created:function(){
            this._getArticleList()
        },
        methods: {
            // 获取首页展示的文章列表
            _getArticleList() {
                let vueThis = this;
                getHomeArticle({})
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