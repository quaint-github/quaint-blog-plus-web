<template>
    <div class="paihang">
        <h2 class="hometitle">点击排行</h2>
        <ul v-if="this.$parent.name === 'Info.vue'">
            <li v-for="article in rankArticles" :key="article.id" @click="__getArticleInfoById(article.id)" class="a-hover">
                <b><a>{{article.articleTitle}}</a></b>
                <p><i><img :src="article.mainImageUrl"></i>{{article.articleAbstract}}</p>
            </li>
        </ul>
        <ul v-else>
            <li v-for="article in rankArticles" :key="article.id" @click="skipArticleInfo(article.id)" class="a-hover">
                <b><a>{{article.articleTitle}}</a></b>
                <p><i><img :src="article.mainImageUrl"></i>{{article.articleAbstract}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getArticleClickRank} from '../api/api'
    export default {
        name: "RightClickRank",
        created: function () {
            this._getArticleClickRank()
        },
        data(){
            return{
                rankArticles:[
                    {
                        "id": 2,
                        "articleTitle": "我是怎么评价自己的？",
                        "articleAbstract": "为了挨打轻一些，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。",
                        "mainImageUrl": "http://www.yangqq.com/d/file/news/s/2018-07-28/95d1b1577a8a7aa4fe3893f2502617e9.jpg"
                    }
                ]
            }
        },
        methods: {
            _getArticleClickRank(){
                let vueThis = this;
                getArticleClickRank()
                    .then(function (response) {
                        // window.console.log(JSON.stringify(response.data));
                        if(response.data){
                            vueThis.rankArticles = response.data;
                        }
                    })
                    .catch(function (error) {
                        window.console.log(error);
                    });
            },
            __getArticleInfoById(id){
                //当点击子组件的按钮的时候，拿到父组件传递过来的func方法，并调用这个方法
                this.$emit('func',id)
            },
            skipArticleInfo(id){
                this.$router.push({path: '/info',query:{id:id}});
            }

        }
    }
</script>

<style scoped>

    .a-hover:hover a,p{
        cursor: pointer;
        color: #3e8ff7;
    }

</style>