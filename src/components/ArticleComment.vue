<template>
    <div id="note-page-comment" class="quaint-margin-top-20px">
        <section class="ouvJEz">
            <!-- 一层 -->
            <div class="_26JdYM">
                <!-- 用户头像展示位置 -->
                <img v-if="this.$store.state.memberInfo.id!==0" class="_3LHFA-" :src="this.$store.state.memberInfo.headImgUrl">
                <img v-else class="_3LHFA-" src="../assets/blog/images/quaint-default-head.jpg" alt="">
                <div class="_3GKFE3">
                    <textarea v-on:focus="sayFocus" v-model="memberSay" class="_1u_H4i" placeholder="说点什么吧..."></textarea>

                    <div class="_3IXP9Q" style="display: flex;">
                        <div class="SKZUyR">
                            <!--<span>⌘ + Return 发表</span>-->
                            <span v-if="sayErr" style="color: red;">随便说点什么吧～</span>
                        </div>
                        <div v-if="bui01" class="_3Tp4of">
                            <button @click="_clickBui" type="button" class="_1OyPqC _3Mi9q9 _1YbC5u"><span>bui～</span></button>
                            <button @click="clickCancel" type="button" class="_1OyPqC _2nzlC_"><span>取消</span></button>
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
                        <!--<span class="_1DVmvZ" role="checkbox" tabindex="0" aria-label="只看作者" aria-checked="false">只看作者</span>-->
                    </div>
                    <!--<div class="_2zSaYx">-->
                        <!--<div class="_1ekjko _1BIpxf" role="button" tabindex="-1">按时间倒序</div>-->
                        <!--<div class="_1ekjko" role="button" tabindex="-1">按时间正序</div>-->
                    <!--</div>-->
                </h3>

                <div class="_2gPNSa" v-for="(commentItem,index) in commentList" :key="commentItem.id">
                    <div class="_2IUqvs _3uuww8" id="comment-50817634">
                        <a class="_1OhGeD" target="_blank" rel="noopener noreferrer">
                            <img class="_1_jhXc" :src="commentItem.comMemberHead" alt="">
                        </a>
                        <div class="_1K9gkf">

                            <div class="_23G05g">
                                <a class="_1OhGeD" target="_blank" rel="noopener noreferrer">{{commentItem.comMemberName}}</a>
                            </div>
                            <div class="_1xqkrI">
                                <!--<span>2楼 </span>-->
                                <time datetime="2019-12-06T03:50:52.000Z">{{commentItem.createTime}}</time>
                            </div>
                            <div class="_2bDGm4">{{commentItem.comContent}}</div>
                            <div class="_2ti5br">
                                <!-- 回复评论 2级 -->
                                <div class="_3MyyYc">
                                    <span @click="reCommShowText(index,commentItem.id,null)" class="_1Jvkh4" role="button" tabindex="-1" aria-label="添加评论">回复</span>
                                </div>
                                <!--<div class="_1vPqGj">-->
                                    <!--<span class="_1NgfK- _10lQTl _1Jvkh4" role="button" tabindex="-1" aria-label="删除评论">删除</span>-->
                                <!--</div>-->
                            </div>
                            <!-- 回复该评论的其他人 -->
                            <div class="_2kvBge">
                                <div class="_3g0yKR" v-for="reComment in commentItem.reComments" :key="reComment.id">
                                    <div class="_3d_vFY">
                                        <a class="_1OhGeD" target="_blank" rel="noopener noreferrer">
                                            <img class="_1_jhXc" :src="reComment.reMemberHead" alt="">
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
                                    <div class="_2bDGm4">{{reComment.aitMemberId?'@'+reComment.aitMemberName+'：':''}}{{reComment.reContent}}</div>
                                    <div class="_2ti5br">
                                        <!-- 回复评论 3级 -->
                                        <div class="_3MyyYc">
                                            <span @click="reCommShowText(index,commentItem.id,reComment)" class="_1Jvkh4" role="button" tabindex="-1" aria-label="回复评论"> 回复</span>
                                        </div>
                                        <!--<div class="_1vPqGj">-->
                                            <!--<span class="_1NgfK- _10lQTl _1Jvkh4" role="button" tabindex="-1" aria-label="删除评论"> 删除</span>-->
                                        <!--</div>-->
                                    </div>
                                </div>
                            </div>

                            <div v-if="showReCommentIndex===index" class="_3GKFE3">
                                <span v-if="sayInfoIndex" style="color: black;">@{{aitMemberName}}</span>
                                <textarea v-on:focus="sayFocusIndex" v-model="memberReSay" class="_1u_H4i" placeholder="说点什么吧..."></textarea>

                                <div class="_3IXP9Q" style="display: flex;">
                                    <div class="SKZUyR">
                                        <!--<span>⌘ + Return 发表</span>-->
                                        <span v-if="sayErrIndex" style="color: red;">随便说点什么吧～</span>
                                    </div>
                                    <div class="_3Tp4of">
                                        <button @click="_clickBuiIndex" type="button" class="_1OyPqC _3Mi9q9 _1YbC5u"><span>bui～</span></button>
                                        <button @click="clickCancelIndex" type="button" class="_1OyPqC _2nzlC_"><span>取消</span></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
    import {articleAddComment} from '../api/api'
    export default {
        name: "ArticleComment",
        props:['articleId','commentList'],
        data(){
            return{
                // 留言
                memberSay:"",
                sayErr:false,
                bui01:false,
                // 回复
                showReCommentIndex:-1,
                memberReSay:"",
                reCommId:null,
                aitMemberId:null,
                aitMemberName:"",
                sayErrIndex:false,
                sayInfoIndex:false
            }
        },
        methods: {
            // 点击回复时，展示回复框，并获取数据
            reCommShowText(index,commentId,reCommend){

                window.console.log(commentId);
                window.console.log(reCommend);

                this.memberReSay = "";
                this.sayInfoIndex = false;
                this.aitMemberId = null;
                this.reCommId = commentId;
                if (reCommend){
                    this.aitMemberId=reCommend.reMemberId;
                    this.aitMemberName = reCommend.reMemberName;
                    this.sayInfoIndex = true;
                }
                this.showReCommentIndex = index;
            },
            // 获取第i个回复框的焦点时
            sayFocusIndex(){
                this.sayErrIndex = false;
            },
            // 当第i个回复框点击取消时
            clickCancelIndex(){
                this.showReCommentIndex = -1;
            },
            sayFocus(){
                this.sayErr = false;
                this.bui01 = true;
            },
            clickCancel(){
              this.memberSay="";
              this.sayErr = false;
              this.bui01 = false;
            },
            // 回复点击bui 时 执行的逻辑
            _clickBuiIndex(){
                if(this.$store.state.memberInfo.id===0){
                    this.$router.push('/login')
                }else if (this.memberReSay!=="") {
                    // 执行留言逻辑
                    let memberInfo = this.$store.state.memberInfo;
                    let param = {
                        "articleId":this.articleId,
                        "memberId": memberInfo.id,
                        // 父评论id
                        "parentId": this.reCommId,
                        // 回复的用户id
                        "reId": this.aitMemberId,
                        "commentContent":this.memberReSay
                    };
                    articleAddComment(param).then(res =>{
                        window.console.log(res.date);
                        if (res.data){
                            alert("留言成功！");
                            this.$router.go(0);
                        }
                    }).catch(err =>{
                        alert("留言繁忙，请稍后！");
                        window.console.log(err);
                    })
                }else{
                    this.sayErrIndex = true;
                }
            },
            _clickBui(){
                if(this.$store.state.memberInfo.id===0){
                    this.$router.push('/login')
                }else if (this.memberSay!=="") {
                    // 执行留言逻辑
                    let memberInfo = this.$store.state.memberInfo;
                    let param = {
                        "articleId":this.articleId,
                        "memberId": memberInfo.id,
                        // 父评论id
                        "parentId": null,
                        // 回复的用户id
                        "reId": null,
                        "commentContent":this.memberSay
                    };
                    articleAddComment(param).then(res =>{
                        window.console.log(res.date);
                        if (res.data){
                            alert("留言成功！");
                            this.$router.go(0);
                        }
                    }).catch(err =>{
                        alert("留言繁忙，请稍后！");
                        window.console.log(err);
                    })
                }else{
                    this.sayErr = true;
                }
            }
        }
    }
</script>


<style scoped>
    @import "../assets/blog/css/jian.css";

</style>