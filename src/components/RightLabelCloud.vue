<template>
    <div class="cloud">
        <h2 class="hometitle">标签云</h2>
        <ul>
            <a @click="_getLabelArticle" v-for="labelCloud in labelCloudList" :key="labelCloud.id">{{labelCloud.labelName}}</a>
        </ul>
    </div>
</template>

<script>
    import {getLabelCloud} from '../api/api'
    export default {
        name: "RightLLabelCloud",
        data(){
            return{
                labelCloudList: [{
                        "id": 1,
                        "labelName": "Java",
                        "labelType": 2
                    }]
            }
        },
        created() {
            this._getLabelCloud()
        },
        methods: {
            _getLabelCloud(){
                let vueThis = this;
                getLabelCloud().then(function (resp) {
                    if (resp.data){
                        vueThis.labelCloudList = resp.data;
                    }
                }).error(function (err) {
                    window.console.log(err);
                });
            },
            _getLabelArticle(){
                // 获取标签文章列表
                if (this.$parent.name === 'List.vue'){
                    return
                }
            }
        }
    }
</script>

<style scoped>

</style>