<template>
  <div id="app">
    <main-nav class="nav-bar" />

    <keep-alive exclude="Detail, Article, Blog">
      <router-view/>
    </keep-alive>

    <player class="player" 
            @playSong="playSong"
            @pauseSong="pauseSong"
            @nextSong="nextSong"
            @lastSong="lastSong"
            ref="player"/>

    <!-- <foot /> -->
    <audio :src="mp3url" ref="myaudio" @ended="ended"></audio>

  </div>

  
</template>

<script>
import MainNav from 'components/common/navbar/MainNav';
import { getSongUrl, playSong, getAlbumDetail } from "network/music";
import Player from 'components/common/player/Player'
import Foot from 'components/common/foot/Foot';
import Axios from 'axios';

export default {
  name: 'app',
  data(){
    return{
      song:{},
      songid:'',
      mp3url: '',
    }
  },
  mounted(){
    this.$refs.myaudio.loop = false
    this.$bus.$on('palyClick', song=>{
      this.song = song
      this.songid = song.id
    })
  },
  watch: {
    songid(){
      this.playmusic(this.songid, this.song.albumId, this.$store.state.currentSongIndex)
    }
  },
  computed:{
    songs(){
      return this.$store.state.songs
    }
  },
  methods:{
    playmusic(songid, albumid, index, self=this) {
      // console.log(this.song);
      //解决this指向问题
      let _self = self
      _self.$refs.player.isPlaying = true
      //使用all发送请求
      Axios.all([ getAlbumDetail(albumid), getSongUrl(songid)]).then(
        Axios.spread((albumdata, res) => {
          // console.log(`歌单`);
          // console.log(albumdata);
          // console.log(_self.song);
          _self.song.picUrl = albumdata.data.album.picUrl
          _self.$store.commit('changePlayerData', _self.song)

           if(res.data.data[0].url){
            // _self.$store.state.currentSongIndex = index
            _self.mp3url = res.data.data[0].url
            setTimeout(() => {
             _self.$refs.myaudio.play()
            }, 500);
          }else{
            _self.$notify({
              title: 'ヘ(>_<ヘ)',
              message: 'Sorry，没能帮您找到这首歌~~',
              offset: 80,
              type:'error'
            });
          }
        })
      )
      
       //获取专辑详情（拿到player背景图）
        // getAlbumDetail(albumid).then(albumdata => {
        //   console.log(`歌单`);
        //   console.log(this.song);
        //   this.song.picUrl = albumdata.data.album.picUrl
        //   this.$store.commit('changePlayerData', this.song)
        // })
        // let _self = self
        // getSongUrl(songid).then(res => {
        //   if(res.data.data[0].url){
        //     // _self.$store.state.currentSongIndex = index
        //     _self.mp3url = res.data.data[0].url
        //     setTimeout(() => {
        //      _self.$refs.myaudio.play()
        //     }, 500);
        //   }else{
        //     _self.$notify({
        //       title: 'ヘ(>_<ヘ)',
        //       message: 'Sorry，没能帮您找到这首歌~~',
        //       offset: 80,
        //       type:'error'
        //     });
        //   }
        //   console.log(_self.mp3url);
        // })

     
      },

      ended(){ 
        let _self = this
        // console.log(`state 中的 ---》${this.songs}`);   
        this.song = this.songs[++this.$store.state.currentSongIndex]
        this.$options.methods.playmusic(this.songs[this.$store.state.currentSongIndex].id, 
                                        this.songs[this.$store.state.currentSongIndex].albumId,
                                        this.$store.state.currentSongIndex, 
                                        _self)
        console.log(`ended`);
        console.log(this.song);
     },
     playSong(){
       this.$refs.myaudio.play()
     },
     pauseSong(){
       this.$refs.myaudio.pause()
     },
     nextSong(){
       let _self = this
        // console.log(`state 中的 ---》${this.songs}`);   
        this.song = this.songs[++this.$store.state.currentSongIndex]
        this.$options.methods.playmusic(this.songs[this.$store.state.currentSongIndex].id, 
                                        this.songs[this.$store.state.currentSongIndex].albumId,
                                        this.$store.state.currentSongIndex, 
                                        _self)
     },
     lastSong(){
       let _self = this
        // console.log(`state 中的 ---》${this.songs}`);   
        this.song = this.songs[--this.$store.state.currentSongIndex]
        this.$options.methods.playmusic(this.songs[this.$store.state.currentSongIndex].id, 
                                        this.songs[this.$store.state.currentSongIndex].albumId,
                                        this.$store.state.currentSongIndex, 
                                        _self)
     }
  },
 
  components: {
    MainNav,
    Player,
    Foot
  }
}
</script>

<style>
  @import url('./assets/css/base.css');
  .nav-bar{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    z-index: 9999;
  }

  .player{
    position: fixed;
    bottom:60px;
    left: 60px;
    z-index: 9999;
  }
</style>
