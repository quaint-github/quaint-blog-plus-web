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
        computed: {
            memberInfoId () {
                return this.$store.state.memberInfo.id;
            },
            memberInfo(){
                return this.$store.state.memberInfo;
            }
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