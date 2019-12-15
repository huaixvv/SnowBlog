<template>
  <div class="blog-content">
    <div class="blog-item" v-for="i in 9" :key="i">
      <h3 class="title" @click="toarticle">前端模块化</h3>
      <span class="el-icon-date">2019-12-08</span>
      <span class="el-icon-chat-line-square">12</span>
      <span class="el-icon-collection-tag">java</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogItem',
    data () {
      return {
      }
    },
    methods:{
      toarticle(){
        this.$router.push('/article')
      }
    },
    components: {
    }
  }
</script>

<style scoped>
 .blog-content{
   width: 100%;
   /* background-color: gray; */
   margin: 0 auto;
   padding-top: 119px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
 }

 .blog-item{
   width: 56%;
   /* background-color: red; */
   padding-bottom: 22px;
   border-bottom: 1px #c9c9c94f solid;
   padding-top: 15px;
   letter-spacing: 1px;
 }

h3{
 color: var(--text-color-gray);
 font-size: 20px;
 cursor: pointer;
}

.blog-item span{
   margin-right: 25px;
   font-size: 13px;
   font-weight: 500;
   color: var(--text-color-light)
 }
</style>