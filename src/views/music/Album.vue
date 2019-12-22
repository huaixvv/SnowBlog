<template>
  <div class="album">
    <div class="title-contain" >
      <div class="title">
        <div v-for="(title, index) in titles" 
             :key="index"
             @click="changeCats(index)"
             :class="{'active': titleIndex===index}"
             >{{title}}</div>
      </div>
      <div class="cats" >
        <div v-for="(cat,index) in cats" 
             :key="index"
             @click="getCats(index)"
             :class="{'active': catsIndex===index}">{{cat}}</div>
      </div>
    </div>

    <div class="list-contain">
      <album-item :playlists="playlists"></album-item>
    </div>
  </div>
</template>

<script>
  import AlbumItem from './child/AlbumItem';
  import { getPlayList } from "network/music";

  export default {
    name: 'Album',
    data () {
      return {
        playlists: [],
        titleIndex: 0,
        catsIndex: -1,
        offset: 0,
        cats:['钢琴','民谣','古风','民族','治愈','流行','钢琴','清新'],
        titles:['全部','语种','风格','场景','情感','主题',],
        catslist:[
              ['钢琴','民谣','古风','民族','治愈','流行','钢琴','清新'],
              ['华语','欧美','日语','韩语','粤语'],    //语种
              ['流行','民谣','舞曲','民族','轻音乐','古风','古曲','说唱'],  //风格
              ['清晨','夜晚','学习','工作','午休','运动','旅行','散步','酒吧'],   //场景
              ['清新','浪漫','伤感','治愈','放松','孤独','感动','思念'],  //情感
              ['影视原声','校园','游戏','80后','90后','00后','吉他','钢琴']]   //主题
     }
    },
    created(){
      getPlayList().then(res => {
        this.playlists = res.data.playlists
        console.log(res);
      })
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll, true)
    },
    methods:{
      changeCats(index){
        // this.catsIndex = -1
        this.titleIndex = index
        this.cats = this.catslist[index]
      },
      getCats(index){
        console.log(`${this.titleIndex}----${this.catsIndex}`);
        if (index != this.catsIndex) {
          this.playlists = []
          this.offset = 0
          let catName = this.catslist[this.titleIndex][index]
          console.log(catName);
          getPlayList(catName).then(res => {
          console.log(res);
          this.playlists = res.data.playlists
        })
        }
        this.catsIndex = index
        // console.log(this.catslist[this.titleIndex][this.catsIndex]);
        
      },

      handleScroll(e){
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = e.target.scrollTop;
        //变量windowHeight是可视区的高度
        var windowHeight = e.target.clientHeight;
        //变量scrollHeight是滚动条的总高度
   		  var scrollHeight = e.target.scrollHeight;
        //滚动条到底部的条件
        if(scrollTop+windowHeight==(scrollHeight)){
          console.log(`${scrollTop}---${windowHeight}---${scrollHeight}`);
            //写后台加载数据的函数
//          	console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
//             alert("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
        let catName = this.catslist[this.titleIndex][this.catsIndex]
        getPlayList(catName,this.offset+=30, 30).then(res => {
          for (const item of res.data.playlists) {
            this.playlists.push(item) 
          }
          // console.log(this.playlists);
        })
       }
    }
        
      
    },
    components:{
      AlbumItem
    }
  }
</script>

<style scoped>
 .album{
   position: relative;
   /* background-color: red; */
   margin-top: 64px;
   height: 700px;
   overflow: hidden;
   overflow-y: scroll
 }
 .title-contain{
   background-color: #fff;
   font-size: 15px;
   font-weight: 500;
   color: var(--text-color-gray)
 }

 .title{
   margin-top: 50px;
   display: flex;
   justify-content: center;
 }
 .title div{
   cursor: pointer;
   margin-left: 20px;
   margin-bottom: 20px;
   padding: 4px 0;
 }


 .cats{
   display: flex;
   justify-content: center;
   margin-bottom: 30px;
 }
 .cats div{
  cursor: pointer;
  margin-left: 20px;
  padding: 4px 0;
 }

.active{
  /* border-bottom: 2px var(--text-color-hover) solid ; */
  box-sizing: border-box;
  color: var(--text-color-hover)
}

.list-contain{
  width: 80%;
  margin: 0 auto;
  /* height: 500px;
  overflow: hidden;
  overflow-y: scroll; */
}

</style>