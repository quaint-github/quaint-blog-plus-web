<template>
    <div>
        <article>
            <h1 class="t_nav">
                <span>像“草根”一样，紧贴着地面，低调的存在，冬去春来，枯荣无恙。</span>
                <a href="/" class="n1">网站首页</a>
                <a href="/" class="n2">留言</a>
            </h1>

            <div class="leftbox">
                <div> 功能暂时未实现 </div>
                <article-comment></article-comment>
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
    export default {
        name: "Saying",
        components: {
            RightSearch,
            ArticleComment,
            RightColumnNav,
            RightLabelCloud,
            RightClickRank
        },
        metaInfo: {
            title: 'Quaint个人博客 - 留言',
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
        }
    }
</script>

<style scoped>

    /* 头像样式 */
    span.tximg { display: block; float: left; margin-right: 10px; }
    /* 提交按钮 样式*/
    .gbox input[type="submit"] { display: block; background: #303030; color: #fff; border: 0; line-height: 30px; padding: 0 20px; border-radius: 5px; float: right; }
    .gbox { padding: 0; overflow: hidden; }
    .gbox p { margin-bottom: 10px; overflow: hidden; }
    .gbox i { display: block; float: left; margin-right: 10px; }
    .gbox i input { margin: 10px auto; display: block; }
    /* 评论样式 回复样式 */
    p.fbtime { color: #000; }
    .fbtime span { float: right; color: #999; font-size: 12px; overflow: hidden; white-space: nowrap; }
    p.fbinfo { margin: 10px 0; }
    .fb ul { margin: 10px 0; padding: 20px 10px; border-bottom: #ececec 1px solid; }
    .hf ul { padding: 10px 10px; background: #f9f9f9; }
    .hf { padding-bottom: 20px; border-bottom: #dedddd 1px dashed; }
    textarea#lytext { width: 99%; }
</style>