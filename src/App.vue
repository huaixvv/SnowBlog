<template>
  <div id="app">
    <main-nav class="nav-bar"></main-nav>

    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>

    <audio :src="mp3url" ref="myaudio" @ended="ended"></audio>

  </div>

  
</template>

<script>
import MainNav from 'components/common/navbar/MainNav';
import { getSongUrl, playSong } from "network/music";


export default {
  name: 'app',
  data(){
    return{
      songid:'',
      mp3url: ''
      
    }
  },
  mounted(){
    this.$refs.myaudio.loop = false
    this.$bus.$on('palyClick', res=>{
      this.songid = res
      console.log(`songid == ${this.songid}`);
    })
  },
  watch: {
    songid(){
      console.log(`bianhuale  ${this.songid}`);
      this.playmusic(this.songid, this.$store.state.currentSongIndex)
    }
  },
  computed:{
    songs(){
      return this.$store.state.songs
    }
  },
  methods:{
    playmusic(songid, index, self=this) {
        let _self = self
        getSongUrl(songid).then(res => {
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
          console.log(_self.mp3url);
        })
      },

      ended(){ 
        let _self = this
        console.log(`state 中的 ---》${this.songs}`);
        this.$options.methods.playmusic(this.songs[++this.$store.state.currentSongIndex].id, this.$store.state.currentSongIndex, _self)
      }
  },
 
  components: {
    MainNav
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
</style>
