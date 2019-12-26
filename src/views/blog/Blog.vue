<template>
  <div>
    <div class="blog-item-list">
      <blog-item :blogs="blogs" 
                  v-infinite-scroll="loadBlog"
      ></blog-item>
    </div>

    <transition name="el-zoom-in-center">
      <div class="cataBtn" v-show="!drawer">
        <el-button type="info" icon="el-icon-s-fold" size="mini" @click="drawer = true" circle/>
      </div>
    </transition>
    
  <div class="cata-drawer">
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
      size="70%"
      :modal="false"
      :wrapperClosable="false"
      custom-class="cu-class"
      :show-close="false"
      :withHeader="false"
      >
      <transition name="el-fade-in-linear">
        <div class="closeBtn"><el-button type="info" 
                       icon="el-icon-close"
                       @click="drawer = false" 
                       size="mini" plain circle></el-button>
        </div>
      </transition>
      
      <!--  分类 -->
      <cata-title @cataClick="cataClick"></cata-title>
    </el-drawer>
   </div> 
  </div>
</template>

<script>
  import MainNav from 'components/common/navbar/MainNav';
  import BlogItem from './BlogItem';
  import CataTitle from './CataTitle';
  import { getAllBlog, getBlogListByCata } from "network/blog";
  export default {
    name: 'Blog',
    data () {
      return {
        drawer: true,
        blogs:[]
      }
    },
    methods: {
      open(){
        console.log(open);
      },
      cataClick(index){
        getBlogListByCata(index, 1).then(res => {
          if (res.data.code === 40000) {
            this.$message({
              message: 'Sorry, 暂时还木有文章哦~去看看别的吧~~~',
              center: true,
              offset:90,
            })
          }else{
            this.blogs = res.data.data.list
          }
        })
      },
      loadBlog(){
        console.log(`jia zai blog`);
      }
    },
    created(){
      getAllBlog(1).then(res => {
        console.log(res);
        this.blogs = res.data.data.list
        // console.log(this.blogs);
      })
    },
    components: {
      MainNav,
      BlogItem,
      CataTitle
  }
  }
</script>

<style scoped>
 .main-nav{
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   background-color: #fff;
   z-index: 999;
 }

 .cataBtn{
   position: fixed;
   /* top: 150px; 
   right: 285px; */
   top: 156px;
   right: 46px;
   z-index: 2000;
 }

 .cata-drawer span{
   margin: 90px auto
 }

 .closeBtn{
   margin-top: 3px
 }

 .blog-item-list{
   height: 600px;
   width: 99%;
   overflow: hidden;
   text-overflow:ellipsis;
   white-space: nowrap;
   overflow-y: scroll;
 }
</style>