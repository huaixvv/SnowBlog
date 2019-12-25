<template>
  <div class="blog-content">
    <div class="blog-item" v-for="(blog,index) in blogs" :key="index">
      <h3 class="title" @click="toArticle(blog.blogId)">{{blog.blogName}}</h3>
      <span class="el-icon-date">{{blog.lastEditTime.substr(0,10)}}</span>
      <span class="el-icon-chat-line-square">12</span>
      <span class="el-icon-collection-tag">java</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'BlogItem',
    props:{
      blogs:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data () {
      return {
      }
    },
    methods:{
      toArticle(blogId){
        this.$router.push(`/article/${blogId}`)
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