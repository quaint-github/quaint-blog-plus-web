<template>
    <div>
        <article>
            <login v-on:to-register="toRegister" v-if="loginPage"></login>
            <register v-on:to-register="toLogin" v-else></register>
        </article>
    </div>
</template>

<script>
    import login from '../components/Login';
    import register from '../components/Register';
    export default {
        name: "LoginAndRegister",
        components:{
            login,
            register
        },
        data(){
            return{
                loginPage: true
            }
        },
        methods:{
            toRegister(){
                this.loginPage = false
            },
            toLogin(){
                this.loginPage = true
            }
        }
    }
</script>

<style scoped>

</style>