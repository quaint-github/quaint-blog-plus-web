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