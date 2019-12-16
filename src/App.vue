<template>
  <div id="app">
    <main-nav class="nav-bar"></main-nav>

    <keep-alive>
      <router-view/>
    </keep-alive>

    <audio :src="mp3url" ref="myaudio" @ended="ended" @play="playmusic"></audio>

  </div>

  
</template>

<script>
import MainNav from 'components/common/navbar/MainNav';


export default {
  name: 'app',
  data(){
    return{
    }
  },
  computed:{
    mp3url(){
      return this.$store.state.mp3url
    }
  },
  methods:{
    playmusic(songid, index, self=this) {
        let _self = self
        _self.$refs.myaudio.loop = false
        console.log(48);
        console.log(_self);
        getSongUrl(songid).then(res => {
          if(res.data.data[0].url){
            _self.currentSongIndex = index
            _self.mp3url = res.data.data[0].url
            setTimeout(() => {
              console.log('timeout');
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
          // console.log(res.data.data[0].url);
        })
      },

      ended(){ 
        let _self = this
        console.log(_self.songs[++this.currentSongIndex].id + "```" + _self.currentSongIndex);
        console.log(72);
        console.log(_self);
        _self.$options.methods.playmusic(_self.songs[this.currentSongIndex].id, _self.currentSongIndex, _self)
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
