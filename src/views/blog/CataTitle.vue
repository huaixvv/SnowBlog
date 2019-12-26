<template>
  <div class="cata-title">
    <div class="title-btn" v-for="(item,index) in catagory" :key="index" @click="cataClick(index)">
      <el-button size="mini" plain round>{{item}}</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CataTitle',
    data () {
      return {
        catagory: ['全部','JavaScript','css','vue','React','webpack','Java','TypeScript','MySql','面试','leetcode', '剑指offer','网络', 'Linux', '数据结构与算法']
      }
    },
    methods:{
      cataClick(index){
        this.$emit('cataClick', index)
      }
    },
    components: {
    }
  }
</script>

<style scoped>
 .cata-title{
   width: 86%;
   /* background-color: red; */
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between
 }
 .title-btn{
   margin-top: 20px;
   margin-right: 3px;
 }

</style>