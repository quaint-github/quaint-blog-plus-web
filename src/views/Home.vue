<template>
    <div>
        <div class="picshow">
            <ul>
                <li><a href="/"><i><img src="../assets/blog/images/b01.jpg"></i>
                    <div class="font">
                        <h3>从你的全世界路过</h3>
                    </div>
                </a></li>
                <li><a href="/"><i><img src="../assets/blog/images/b02.jpg"></i>
                    <div class="font">
                        <h3>你保护世界，我保护你</h3>
                    </div>
                </a></li>
                <li><a href="/"><i><img src="../assets/blog/images/b03.jpg"></i>
                    <div class="font">
                        <h3>生命的真谛深邃而美丽</h3>
                    </div>
                </a></li>
                <li><a href="/"><i><img src="../assets/blog/images/b04.jpg"></i>
                    <div class="font">
                        <h3>每次呼吸，都为下次与你的相逢</h3>
                    </div>
                </a></li>
                <li><a href="/"><i><img src="../assets/blog/images/b05.jpg"></i>
                    <div class="font">
                        <h3>喜欢你，因为你身上有熟悉的烟火气息</h3>
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
                        <span class="dtime">{{item.createTime}}</span>
                        <span class="viewnum">浏览（<a href="/">{{item.readNum}}</a>）</span>
                        <span class="readmore">
                            <router-link :to="{path:'/info',query:{id:item.id}}">阅读原文</router-link>
                        </span>
                    </div>
                </li>
            </div>

            <!-- 右侧导航 -->
            <div class="sidebar">
                <div class="about" @click="toAbout">
                    <div class="avatar"> <img src="../assets/blog/images/quaint-head.png" alt=""> </div>
                    <p class="abname">Quaint</p>
                    <p class="abposition">ACG爱好者</p>
                    <div class="abtext"> 放松,听歌,睡觉... </div>
                </div>
                <right-search></right-search>
                <right-column-nav></right-column-nav>
                <right-label-cloud></right-label-cloud>
                <right-click-rank></right-click-rank>
                <right-friendship-link></right-friendship-link>
            </div>
        </article>
        <div class="blank"></div>
    </div>
</template>

<script>
    import RightSearch from '../components/RightSearch';
    import RightColumnNav from '../components/RightColumnNav';
    import RightLabelCloud from '../components/RightLabelCloud';
    import RightClickRank from '../components/RightClickRank';
    import RightFriendshipLink from '../components/RightFriendshipLink';
    import {getHomeArticle} from '../api/api'
    export default {
        name: "Home",
        components: {
            RightSearch,
            RightColumnNav,
            RightLabelCloud,
            RightClickRank,
            RightFriendshipLink
        },
        metaInfo: {
            title: 'Quaint个人博客 - 风清忆箫伤の寻遍星空散落的每一份感动',
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
                        // window.console.log(response.data);
                        if(response.data!=="" && response.data.length>0){
                            vueThis.homeArticle = response.data;
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error);
                    });
            },
            toAbout(){
                this.$router.push('/about')
            }
        }
    }
</script>

<style scoped>

</style>