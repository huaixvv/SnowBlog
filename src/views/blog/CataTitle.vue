<template>
  <div class="cata-title">
    <div class="title-btn" v-for="(item,index) in catagory" :key="index">
      <el-button size="mini" plain round>{{item}}</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CataTitle',
    data () {
      return {
        catagory: ['全部','JavaScript','css','vue','webpack','java','ts','java','spring','面试','leetcode','nginx']
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