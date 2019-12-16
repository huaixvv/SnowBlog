<template>
    <div class="music-list">
      <div class="music-item" v-for="(song, index) in songs" :key="index" :class="{'active': index === currentSongIndex}">
        <div class="music-name">{{song.name}}</div>
        <div class="act-btn">
          <span @click="play(song.id, index)">播放</span>
          <span><a>下载</a></span>
        </div>
        <div class="music-artists">{{artists[index]}}</div>
        <div class="music-album">{{album[index].name}}</div>
        <div class="music-time">{{duration[index]}}</div>
      </div>  

    <!-- <keep-alive>
      <audio :src="mp3url" ref="myaudio" @ended="ended"></audio>
    </keep-alive> -->
      <!-- <div class="music-item"></div> -->
    </div>
</template>

<script>
  import { bus } from "common/bus";
  import { MillisecondToTime } from "common/formatTime";
  import { getSongUrl, playSong } from "network/music";

  export default {
    name: 'MusicList',
    data () {
      return {
        songs: [],     //歌曲列表
        songCount: 0,   //歌曲总数
        // mp3url:'',
        currentSongIndex: -1,
        songidIndex: []    //用来记录 歌曲id所对应的 组件 index
      }
    },
    mounted(){
      bus.$on('searchData', res => {
        this.songs = res.songs
        this.songCount = res.songCount
      })
      
     
    },
    methods:{
      play(songid, index){
        console.log(`${songid} == ${index}`);
        this.$emit('play',[songid, index, this.currentSongIndex])
        console.log(`zhixingle`);
      }
    },
    
    computed:{
      artists(){
        return this.songs.map(function(song){
          // console.log(song.artists);
          return song.artists.map(function(artist,index){
            return artist.name
          }).join('/')
        })
      },
      album(){
        return this.songs.map(function(song){
          return song.album
        })
      },
      duration(){
        return this.songs.map(function(song){
          console.log(song.duration);
          return MillisecondToTime(song.duration).substr(3)
        })    
      }
    },
    components: {
    }
  }
</script>

<style scoped>
.music-list{
  color: var(--text-color-light);
  font-weight: 500;
  font-size: 14px;
  width: 96%;
}
.music-list div{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.music-item{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 15px;
  padding-left: 0px;
  padding-top: 25px;
  border-bottom: 1px solid #c9c9c94f;
  cursor: pointer;
}

.active{
  color:rgb(56, 142, 228)
}

.music-name{
  flex: 0 0 260px;
}
.music-artists{
  flex: 1 1 auto;
}
.music-album{
  flex: 0 0 180px;
}
.act-btn{
  flex: 120px 0 0
}
 .act-btn span{
   padding: 0px 5px
 }

 .music-time{
   padding-right: 20px !important;
   padding-left: 80px
 }

 .act-btn{
   visibility: hidden;
 }
 .act-btn span:hover{
   color: rgb(44, 79, 196)
 }
 .music-item:hover .act-btn{
   visibility: visible;
 }
</style>