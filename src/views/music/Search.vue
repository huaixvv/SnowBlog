<template>
  <div class="search-music">
      <input :class="{'input-animation': isEnter}" type="text" 
             placeholder="点首歌来听听吧..." 
             autofocus="autofocus"
             @keyup.enter="search"
             v-model="inputValue">

      <transition name="el-zoom-in-center">
        <div v-show="isEnter" class="transition-box music-contain">
          <music-list class="list" ref="musicList" :songs="songs"></music-list>
        </div>
      </transition>

  </div>
</template>

<script>
  import MusicList from './child/MusicList';
  import { searchByName } from "network/music";
  import { MillisecondToTime } from "common/formatTime";

  export default {
    name: 'Search',
    
    data () {
      return {
        inputValue:'',
        isEnter: false,
        offset: 1,
        songs: [],
        
      }
    },
    methods:{

      search(){
        if (this.inputValue.length !== 0) {
          this.$refs.musicList.currentSongIndex = -1
          this.isEnter = true;
          searchByName(this.inputValue, this.offset++).then(res => {  
            const songdatas = res.data.result.songs;
            for (let songdata of songdatas ) {
              // let song = JSON.parse(JSON.stringify(s))    //深拷贝
              let song = {}    
              song.name =songdata.name
              song.id =songdata.id
              song.artists =songdata.artists.map(function(artist,index){
                            return artist.name
                            }).join('/')
              song.album =songdata.album.name
              song.duration = MillisecondToTime(songdata.duration).toString().substr(3)
              this.songs.push(song)
            }
            this.$store.commit('initSongs',this.songs)
            console.log(this.songs);
          })
        }
      }

      // search(){
      //   if (this.inputValue.length !== 0) {
      //     this.$refs.musicList.currentSongIndex = -1
      //     this.isEnter = true;
      //     searchByName(this.inputValue, this.offset++).then(res => {
      //     bus.$emit('searchData', res.data.result)
      //     })
      //   }
      // }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped>

 .search-music{
   margin-top: 64px;
   /* background-color: red; */
   /* width: 100%;
   height: 100%; */
   display: flex;
   justify-content: center;
   align-items: center;
 }
  input{
   position: fixed;
   margin-top: 230px;
   padding: 10px 0;
   width: 300px;
   border: none;
   background: transparent;
   outline: none;
   border-bottom: 1px solid var(--text-color-light);
   font-size: 15px; 
   color: var(--text-color-light);
   }
.input-animation{
   animation:mymove .2s infinite;
   animation-iteration-count:1;
   animation-fill-mode: forwards;
    /*Safari and Chrome */
   -webkit-animation:mymove .2s linear; 
   -webkit-animation-iteration-count:1;
   -webkit-animation-fill-mode: forwards; 
}
    @keyframes mymove
    {
    0% {top:0px;}
    100% {top:-130px;}
    }

    @-webkit-keyframes mymove /*Safari and Chrome*/
    {
    0% {top:0px;}
    100% {top:-130px;}
    }


    .music-contain{
      display: flex;
      justify-content: center;
      width: 80%;
      margin-top: 120px;
      height: 420px;
      overflow: hidden;
      overflow-y: scroll;
    }
 
</style>