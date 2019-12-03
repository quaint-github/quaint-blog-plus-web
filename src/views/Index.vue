<template>
    <div>
        <blog-head></blog-head>
        <router-view/>
        <blog-footer></blog-footer>
    </div>
</template>

<script>
    import BlogHead from '../components/BlogHead'
    import BlogFooter from '../components/BlogFooter'
    export default {
        name: "Index",
        metaInfo: {
            title: 'IndexPage',
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
            BlogHead,
            BlogFooter
        }
    }
</script>

<style scoped>
    @import "../assets/blog/css/base.css";
    @import "../assets/blog/css/index.css";
</style>