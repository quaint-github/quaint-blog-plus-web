<template>
    <div>
        <article>
            <h1 class="t_nav"><span>不要轻易放弃。学习成长的路上，我们长路漫漫，只因学无止境。 </span>
                <router-link to="/" class="n1">网站首页</router-link>
                <router-link to="/list" class="n2">学无止境</router-link>
            </h1>
            <div class="blogs">
                <div class="mt20"></div>

                <li @click="skipToInfo(item.id)" v-for="item in articleList" :key="item.id">
                    <span class="blogpic"><img :src="item.mainImageUrl"></span>
                    <h3 class="blogtitle">{{item.articleTitle}}</h3>
                    <div class="bloginfo">
                        <p>{{item.articleAbstract}}</p>
                    </div>
                    <div class="autor">
                        <span class="lm">
                            <a @click.stop="_getArticleByLabelId({labelId:label.id})" v-for="label in item.labels" :key="label.id" target="_blank" class="classname">
                                {{label.labelName}}
                            </a>
                        </span>
                        <span class="dtime">{{item.createTime}}</span>
                        <span class="viewnum">浏览（{{item.readNum}}）</span>
                        <span class="readmore">
                            <a>阅读原文</a>
                        </span>
                    </div>
                </li>

                <!-- 分页位置 -->
                <!--<div class="pagelist"><a title="Total record">&nbsp;<b>45</b> </a>&nbsp;&nbsp;&nbsp;<b>1</b>&nbsp;<a href="/download/index_2.html">2</a>&nbsp;<a href="/download/index_2.html">下一页</a>&nbsp;<a href="/download/index_2.html">尾页</a></div>-->
            </div>
            <div class="sidebar">
                <right-search></right-search>
                <right-column-nav></right-column-nav>
                <right-label-cloud></right-label-cloud>
                <right-click-rank></right-click-rank>
            </div>
        </article>
    </div>
</template>

<script>
    import RightSearch from '../components/RightSearch';
    import RightColumnNav from '../components/RightColumnNav';
    import RightLabelCloud from '../components/RightLabelCloud';
    import RightClickRank from '../components/RightClickRank';
    import {getArticleList} from '../api/api'
    import {getSearchArticle} from '../api/api'
    import {getArticleByLabelId} from '../api/api'
    export default {
        name: "List",
        components: {
            RightSearch,
            RightColumnNav,
            RightLabelCloud,
            RightClickRank
        },
        metaInfo: {
            title: 'Quaint个人博客 - 学无止境'
        },
        data(){
            return{
                articleList:[{}],
                vueName:"List.vue"
            }
        },
        created:function(){
            // alert("query:"+JSON.stringify(this.$route.query));
            if (this.$route.query && this.$route.query.searchKey){
                this._getSearchArticle(this.$route.query)
            } else if(this.$route.query && this.$route.query.labelId){
                this._getArticleByLabelId(this.$route.query)
            }
            else{
                this._getArticleList()
            }
        },
        methods: {
            // 点击文章面板时
            skipToInfo(id){
                this.$router.push({path:'/info',query:{id:id}})
            },
            // 获取首页展示的文章列表
            _getArticleList() {
                let vueThis = this;
                getArticleList({})
                    .then(function (response) {
                        // window.console.log(response);
                        if(response.data!=="" && response.data.length>0){
                            vueThis.articleList = response.data;
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error);
                    });
            },
            _getSearchArticle(json){
                let vueThis = this;
                getSearchArticle(json)
                    .then(function (response) {
                        window.console.log(response)
                        if(response.data!==""){
                            vueThis.articleList = response.data;
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error);
                    })
            },
            _getArticleByLabelId(json){
                // window.console.log(json," test");
                let vueThis = this;
                getArticleByLabelId({id:json.labelId}).then(function (resp) {
                    if(resp.data){
                        vueThis.articleList = resp.data;
                    }
                }).catch(function (err) {
                    window.console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>