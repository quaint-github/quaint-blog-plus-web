<template>
    <div>
        <article>
            <h1 class="t_nav">
                <span>像“草根”一样，紧贴着地面，低调的存在，冬去春来，枯荣无恙。</span>
                <a href="/" class="n1">网站首页</a>
                <a class="n2">留言</a>
            </h1>

            <div class="leftbox">
                <article-comment :article-id="0" :comment-list="commentList"></article-comment>
            </div>

            <div class="rightbox">
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
    import ArticleComment from '../components/ArticleComment';
    import RightColumnNav from '../components/RightColumnNav';
    import RightLabelCloud from '../components/RightLabelCloud';
    import RightClickRank from '../components/RightClickRank';
    import {getCommentByArticleId} from '../api/api'
    export default {
        name: "Saying",
        components: {
            RightSearch,
            ArticleComment,
            RightColumnNav,
            RightLabelCloud,
            RightClickRank
        },
        created: function(){
          this._getCommentByArticleId()
        },
        data(){
            return{
                commentList:[]
            }
        },
        methods: {
            // 获取评论信息
            _getCommentByArticleId(){
                let vueThis = this;
                getCommentByArticleId({id:0}).then(res =>{
                    if(res.data){
                        vueThis.commentList = res.data;
                    }
                }).catch(err =>{
                    window.console.log(err)
                });
            }
        },
        metaInfo: {
            title: 'Quaint个人博客 - 留言'
        }
    }
</script>

<style scoped>

</style>