<template>
    <div>
        <article>
            <h1 class="t_nav">
                <span>像“草根”一样，紧贴着地面，低调的存在，冬去春来，枯荣无恙。</span>
                <a href="/" class="n1">网站首页</a>
                <a href="/" class="n2">留言</a>
            </h1>

            <div class="leftbox">
                <div class="ab_box">
                    <div class="newsview">
                        <div class="whitebg">
                            <h2 class="htitle">留言</h2>
                            <div class="news_infos m20">
                                <div class="gbox">
                                    <form action="" method="post" name="form1" id="form1">
                                        <p> <strong>来说点儿什么吧...</strong></p>
                                        <p>
                                            <span> 您的姓名:</span>
                                            <input name="name" type="text" id="name">*
                                        </p>
                                        <input name="email" type="hidden" id="email" value="admin@qq.com">
                                        <p><span>选择头像:</span> *
                                            <i>
                                                <input type="radio" value="../images/tx1.jpg" id="1" name="mycall" style="display:none" selected="">
                                                <img id="a" src="http://jxhx2.yangqq.com/e/tool/images/tx5.jpg">
                                            </i>
                                            <i>
                                                <input type="radio" value="../images/tx2.jpg" id="2" name="mycall" style="display:none">
                                                <img id="b" src="http://jxhx2.yangqq.com/e/tool/images/tx5.jpg">
                                            </i>
                                        </p>
                                        <p>
                                            <span class="tnr">留言内容:</span>
                                            <textarea name="lytext" cols="60" rows="12" id="lytext"></textarea>
                                        </p>
                                        <p>
                                            <input type="submit" name="Submit3" value="提交">
                                            <input name="enews" type="hidden" id="enews" value="AddGbook">
                                        </p>
                                    </form>
                                </div>
                                <div class="fb">
                                    <ul>
                                        <span class="tximg"><img src="http://jxhx2.yangqq.com/e/tool/images/tx5.jpg"></span>
                                        <p class="fbtime"><span>2018-12-26</span> 哒哒</p>
                                        <p class="fbinfo">很喜欢这个模板感觉做的不错</p>
                                    </ul>
                                </div>
                                <div class="fb">
                                    <ul>
                                        <span class="tximg"><img src="http://jxhx2.yangqq.com/e/tool/images/tx5.jpg"></span>
                                        <p class="fbtime"><span>2018-12-06 </span> dancesmile</p>
                                        <p class="fbinfo">你好！这是我第一个留言的。</p>
                                    </ul>
                                </div>
                                <div class="hf">
                                    <ul>
                                        <p class="zzhf"><font color="#FF0000">站长回复:</font>你好，欢迎您访问我的网站</p>
                                    </ul>
                                </div>
                                <div class="clear"></div>
                                <div class="pagelist"></div>
                            </div>
                        </div>
                    </div>
                </div>
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
    import RightColumnNav from '../components/RightColumnNav';
    import RightLabelCloud from '../components/RightLabelCloud';
    import RightClickRank from '../components/RightClickRank';
    export default {
        name: "Saying",
        components: {
            RightSearch,
            RightColumnNav,
            RightLabelCloud,
            RightClickRank
        },
        metaInfo: {
            title: 'SayingPage',
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