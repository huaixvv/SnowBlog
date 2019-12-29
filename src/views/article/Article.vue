<template>
  <div class="article">
      <div class="mark-down-view" v-show="true">
          <div class="title">{{blog.blogName}}</div>
            <mavon-editor v-model="blog.blogContent"
                        :toolbarsFlag="false"
                        defaultOpen="preview"
                        :subfield="false"
                        :boxShadow="false"
                        :transition	="false"
                        />
            <div class="foot"> 
              <span> ---------------</span>
              <span>最后编辑时间: {{blog.lastEditTime}}</span>
            </div>
            <div class="next-link el-icon-s-promotion"> <a href="https://github.com/Dusksnowing/SnowBlog">Github给我点个赞吧~~</a></div>         
          </div>   
  </div>  
</template>

<script>
  import { getBlogById } from "network/blog";

  export default {
    name: 'Article',
    data () {
      return {
        blogId: 1,
        blog:{},
      }
    },
    
    activated(){
      this.blog = {}
      this.blogId = this.$route.params.blogId
      getBlogById(this.blogId).then(res => {
        this.blog = res.data.data
        this.blog.lastEditTime = res.data.data.lastEditTime.toString().substr(0,10)
        this.blog.createTime = res.data.data.createTime.toString().substr(0,10)
        // console.log(this.blog);
        })

    },
    components: {
    }
  }
</script>

<style scoped>
  .article{
    background-color: #fbfbfb;
    padding-top: 150px;
  }
  .mark-down-view{
   width: 60%;
   margin: 0 auto;

 }
 .title{
   font-size: 21px;
   color: var(--text-color-H);
   /* background-color: red; */
   font-weight: 600;
   width: 93%;
   margin: 0 auto;
   padding: 0 0 18px 0;
   border-bottom: 1px solid rgb(190, 190, 190);
 }

 .next-link{
   width: 93%;
   margin: 0 auto;
   letter-spacing: 3px;
   font-size: 14px;
   padding: 50px 0 70px 50px;
   font-weight: 500;
   color: var(--text-color-H);
   text-decoration: underline
}

.foot{
  padding-top: 20px;
}

.foot span{
  display: block;
  width: 93%;
  margin: 0 auto;
  font-size: 13px;
  font-weight: 500;
  padding: 10px 0 5px 50px;
  color: var(--text-color-H);
  font-style: italic;
}
</style>