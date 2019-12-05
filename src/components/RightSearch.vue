<template>
    <div class="search">
        <input @submit.prevent v-model="formVal.searchKey" @keydown.enter="_searchSubmit" name="keyboard" id="keyboard" class="input_text"
               value="请输入关键字" style="color: rgb(153, 153, 153);" onfocus="if(value=='请输入关键字'){this.style.color='#000';value=''}" onblur="if(value==''){this.style.color='#999';value='请输入关键字'}" type="text">
        <input @click="_searchSubmit" name="Submit" class="input_submit" value="搜索" type="button">
    </div>
</template>

<script>
    export default {
        name: "RightSearch",
        data(){
            return{
                formVal:{
                    searchKey:''
                }
            }
        },
        methods: {
            _searchSubmit(){
                 //window.console.info(this.formVal);
                // 如果父组件是需要跳转的组件
                if (this.$parent.vueName === 'List.vue'){
                    //alert('dada')
                    this.$parent._getSearchArticle(this.formVal);
                } else{
                    this.$router.push({path: '/list',query:this.formVal});
                }
            }
        }
    }
</script>

<style scoped>

</style>