<template>
  <div class="player">
    <!-- 圆形状态 -->
    <transition
      enter-active-class="animated bounce"
      >
      <div  v-show="isSpread"
            @click="isSpread = !isSpread"
            class="player-out"
            :style="bgImg">
        <div class="player-in" 
            :style="bgImg">
        </div>
      </div>
    </transition>
    <!-- 展开 -->
    <transition 
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft">
      <div class="spread " 
          v-show="!isSpread" 
          :style="bgImg"
         >
        <div class="player-icon">
          <div class="last-song el-icon-caret-left" 
               @click="lastSong"></div>
          <div class="play-control el-icon-video-pause" 
               v-show="isPlaying"
               @click="pauseSong"></div>
          <div class="play-control el-icon-video-play" 
               v-show="!isPlaying"
               @click="playSong"></div>
          <div class="next-song el-icon-caret-right"
               @click="nextSong"></div>
        </div>

        <div class="song-desc">
          <div class="title" :title="song.songName">{{song.songName}}</div>
          <div class="author" :title="song.artists">{{song.artists}}</div>
        </div>
        <div class="cover"></div>
        <div class="close el-icon-close"  @click="isSpread = !isSpread"></div>
      </div>
    </transition>

    </div>
</template>

<script>
  export default {
    name: 'Player',
    
    data () {
      return {
        song:{},
        isSpread: true,
        isPlaying: true,
        bgImg:{
          backgroundImage: ''
        }
      }
    },
    mounted(){
      this.song = this.$store.state.playerData
      // console.log();
    },
    watch:{
      song:{
        handler(newValue, oldValue){
          this.bgImg.backgroundImage = `url("${newValue.albumImg}")`
        },
        deep:true,
        immediate:true
      },
    },
    computed:{
      
    },
    methods:{
      playSong(){
       this.isPlaying = !this.isPlaying
       this.$emit('playSong')
      },
      pauseSong(){
        this.isPlaying = !this.isPlaying
        this.$emit('pauseSong')
      },
      nextSong(){
        this.isPlaying = true
        this.$emit('nextSong')
      },
      lastSong(){
        this.isPlaying = true
        this.$emit('lastSong')
      }
    },
    components: {
    }
  }
</script>

<style scoped>
.player{
  cursor: pointer;
}
 .player-out{
   height: 65px;
   width: 65px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .player-in{
   height: 60px;
   width: 60px;
   background-size: cover;  
   border-radius: 50%;
   animation: revolve 8s linear infinite;
   -webkit-animation: revolve 8s linear infinite;
 }
 .spread{
   position: fixed;
   bottom: 60px;
   left: 60px;
   height: 65px;
   width: 250px;
   /* background-color: rgba(255, 0, 0, 0.281); */
   background-image: url('http://p2.music.126.net/CmMpTKzYkZyzjRuQVI_z0A==/109951164543961250.jpg');
   background-size: cover;
   border-radius: 10px;
   color: #fff;
   font-weight: 500;
   display: flex;
   align-items: center;
}
.cover{
   position: absolute;
   bottom: 0px;
   left: 0px;
   height: 65px;
   width: 250px;
   border-radius: 10px;
   background-color: rgba(0, 0, 0, 0.219);
}
.player-icon{
  display: flex;
  align-items: center;
  margin-left: 8px;
  position: relative;
  z-index: 999;
}
.song-desc{
  margin-left: 15px;
  position: relative;
  font-size: 14px;
  z-index: 999;
}
.song-desc div{
  width:90px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.title{
}
.author{
  font-size: 12px;
  padding-top: 4px;
}

.player-icon div{
   padding: 0 5px
 }
.play-control{
   font-size: 35px;
 }
.last-song{
  font-size: 20px;
}
.next-song{
  font-size: 20px;
}

.close{
  padding: 5px 5px;
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 17px;
  font-weight: 600;
  z-index: 999;
}
.close:hover{
  color: rgba(241, 167, 167, 0.726)
}
.next-song:hover{
  color: rgb(228, 228, 228)
}
.last-song:hover{
  color: rgb(228, 228, 228)
}
.play-control:hover{
  color: rgb(228, 228, 228)
 }
 @keyframes revolve {
   0%{transform: rotate(0deg)}
   25%{transform: rotate(90deg)}
   50%{transform: rotate(180deg)}
   75%{transform: rotate(270deg)}
   100%{transform: rotate(360deg)}
 }
 @-webkit-keyframes revolve {
   0%{-webkit-transform: rotate(0deg)}
   25%{-webkit-transform: rotate(90deg)}
   50%{-webkit-transform: rotate(180deg)}
   75%{-webkit-transform: rotate(270deg)}
   100%{-webkit-transform: rotate(360deg)}
 }

</style>