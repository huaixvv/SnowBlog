<template>
    <div class="music-list">
      <div class="music-item" v-for="(song, index) in songs" :key="index" :class="{'active': index === $store.state.currentSongIndex}">
        <div class="music-name">{{song.name}}</div>
        <div class="act-btn">
          <span @click="play(song, index)">播放</span>
          <span @click="download(song.id, song.name)">下载</span>
        </div>
        <div class="music-artists">{{song.artists}}</div>
        <div class="music-album">{{song.albumName}}</div>
        <div class="music-time">{{song.duration}}</div>
      </div>  
    </div>
</template>

<script>
  import { MillisecondToTime } from "common/formatTime";
  import { getSongUrl } from "network/music";
  import  axios  from "axios";


  export default {
    name: 'MusicList',
    data () {
      return {
        songidIndex: [] ,   //用来记录 歌曲id所对应的 组件 index
        downloadUrl:'',
      }
    },
    props: {
      songs: {
        type: Array,
        default(){
          return []
        }
      }
    },
    mounted(){
    },
    methods:{
      play(song,index){
          this.$store.commit('changeCurrentSongIndex', index)
          this.$bus.$emit('palyClick', song)
      },

      /**
       * 下载音乐
       */
      download(songid,fileName){
        // this.$message({
        //   message: '下载中, 请稍等....',
        //   center: true,
        //   offset:150,
        // });

        this.$notify({
              // title: 'ヘ(>_<ヘ)',
              message: '下载中, 请稍等....',
              offset: 80,
              type:'info'
            });
        getSongUrl(songid).then(res => {
          if(res.data.data[0].url){
            this.downloadUrl = res.data.data[0].url
            // console.log(this.downloadUrl);
            axios({
              method: 'get',
              url: this.downloadUrl,
              responseType: 'blob'
            }).then(res => {
                download(res.data, fileName, 'audio/mpeg')
            })
          }else{
            this.$notify({
              title: 'ヘ(>_<ヘ)',
              message: 'Sorry，没能帮您找到这首歌~~',
              offset: 80,
              type:'error'
            });
          }
        })
      }
    },
    
    computed:{
      // artists(){
      //   return this.songs.map(function(song){
      //     // console.log(song.artists);
      //     return song.artists.map(function(artist,index){
      //       return artist.name
      //     }).join('/')
      //   })
      // },
      // album(){
      //   return this.songs.map(function(song){
      //       return song.album.name
      //   })
      // },
      // duration(){
      //   return this.songs.map(function(song){
      //     // console.log(song.duration);
      //     return MillisecondToTime(song.duration)
      //   })    
      // }
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
   flex: 45px 0 0 ;
   padding-left: 80px
 }

 .act-btn{
   visibility: hidden;
 }
 .act-btn span:hover{
   color: var(--text-color-hover)
 }
 .music-item:hover .act-btn{
   visibility: visible;
 }
</style>