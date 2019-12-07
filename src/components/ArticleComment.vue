<template>
    <div id="note-page-comment">
        <section class="ouvJEz">
            <!-- 一层 -->
            <div class="_26JdYM">
                <!-- 用户头像展示位置 -->
                <img class="_3LHFA-" src="http://qzapp.qlogo.cn/qzapp/100410602/9C15C6F8B2408C836063FDBBA72B92DC/100" alt="">
                <div class="_3GKFE3">
                    <textarea class="_1u_H4i" placeholder="说点什么吧..."></textarea>

                    <div class="_3IXP9Q" style="display: flex;">
                        <div class="SKZUyR"><span>⌘ + Return 发表</span></div>
                        <div class="_3Tp4of">
                            <button type="button" class="_1OyPqC _3Mi9q9 _1YbC5u"><span>bui～</span></button>
                            <button type="button" class="_1OyPqC _2nzlC_"><span>取消</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 二层 回复层 -->
            <div v-if="commentList && commentList.length!==0" >
                <h3 class="QxT4hD">
                    <div class="_10KzV0">
                        <span>{{articleId===0?'留言：':'评论：'}}</span>
                        <span class="_2R7vBo">{{commentList[0].commentCount}}🔥</span>
                        <span class="_1DVmvZ" role="checkbox" tabindex="0" aria-label="只看作者" aria-checked="false">只看作者</span>
                    </div>
                    <div class="_2zSaYx">
                        <div class="_1ekjko _1BIpxf" role="button" tabindex="-1">按时间倒序</div>
                        <div class="_1ekjko" role="button" tabindex="-1">按时间正序</div>
                    </div>
                </h3>

                <div class="_2gPNSa" v-for="commentItem in commentList" :key="commentItem.id">
                    <div class="_2IUqvs _3uuww8" id="comment-50817634">
                        <a class="_1OhGeD" href="/u/a203a1fc243f" target="_blank" rel="noopener noreferrer">
                            <img class="_1_jhXc" src="http://qzapp.qlogo.cn/qzapp/100410602/9C15C6F8B2408C836063FDBBA72B92DC/100" alt="">
                        </a>
                        <div class="_1K9gkf">

                            <div class="_23G05g">
                                <a class="_1OhGeD" target="_blank" rel="noopener noreferrer">{{commentItem.comMemberName}}</a>
                            </div>
                            <div class="_1xqkrI"><span>2楼 </span>
                                <time datetime="2019-12-06T03:50:52.000Z">{{commentItem.createTime}}</time>
                            </div>
                            <div class="_2bDGm4">{{commentItem.comContent}}</div>
                            <div class="_2ti5br">
                                <div class="_3MyyYc">
                                    <span class="_1Jvkh4" role="button" tabindex="-1" aria-label="添加评论">回复</span>
                                </div>
                                <div class="_1vPqGj">
                                    <span class="_1NgfK- _10lQTl _1Jvkh4" role="button" tabindex="-1" aria-label="删除评论">删除</span>
                                </div>
                            </div>
                            <!-- 回复该评论的其他人 -->
                            <div class="_2kvBge">
                                <div class="_3g0yKR" v-for="reComment in commentItem.reComments" :key="reComment.id">
                                    <div class="_3d_vFY">
                                        <a class="_1OhGeD" target="_blank" rel="noopener noreferrer">
                                            <img class="_1_jhXc" src="http://qzapp.qlogo.cn/qzapp/100410602/9C15C6F8B2408C836063FDBBA72B92DC/100" alt="">
                                        </a>
                                        <div style="margin-left: 10px;">
                                            <div class="_23G05g">
                                                <a class="_1OhGeD" target="_blank" rel="noopener noreferrer">{{reComment.reMemberName}}</a>
                                            </div>
                                            <div class="_1xqkrI">
                                                <time datetime="2019-12-06T03:51:01.000Z">{{reComment.reCreateTime}}</time>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="_2bDGm4">{{reComment.aitMemberId?'@'+reComment.aitMemberName+':':''}}{{reComment.reContent}}</div>
                                    <div class="_2ti5br">
                                        <div class="_3MyyYc">
                                            <span class="_1Jvkh4" role="button" tabindex="-1" aria-label="回复评论"> 回复</span>
                                        </div>
                                        <div class="_1vPqGj">
                                            <span class="_1NgfK- _10lQTl _1Jvkh4" role="button" tabindex="-1" aria-label="删除评论"> 删除</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- 添加新评论 -->
            <div class="_1whZvR _2ti5br">
                <span class="_1Jvkh4" role="button" tabindex="-1" aria-label="添加子评论">添加新评论</span>
            </div>
            <div></div>
        </section>

    </div>
</template>
<script>
    export default {
        name: "ArticleComment",
        props:['articleId','commentList'],
        methods: {
        }
    }
</script>


<style scoped>
    @import "../assets/blog/css/jian.css";

</style>