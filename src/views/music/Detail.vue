<template>
  <div class="detail">
    <div class="top-desc" @click="test">
      <div class="title-img">
        <img :src="playdesc.coverImgUrl" alt="">
      </div>
      <div class="text">
        <div class="name">{{playdesc.name}}</div>
        <div class="desc" :title="playdesc.description">{{playdesc.description}}</div>
        <div class="total">
          <div class="nums-music">共 {{playdesc.trackCount}} 首音乐</div>
          <div class="listened">{{playdesc.playCount}} 人听过</div>
        </div>
      </div>
    </div>

  <!-- MusicList -->
    <div class="music-list">
      <music-list class="list" 
                  :songs="songs"/>
    </div>
  </div>
</template>

<script>
  import MusicList from './child/MusicList';
  import { getPlayDetail } from "network/music.js";
  import { MillisecondToTime } from "common/formatTime";

  export default {
    name: 'Detail',
    data () {
      return {
        playdesc: {},
        songs:[]
      }
    },
    created(){
      this.playdesc = this.$store.state.playlist
      getPlayDetail(this.playdesc.id).then(res => {
        const songslist = res.data.playlist.tracks
        for (let songdata of songslist) {
          console.log(songdata);
          const song = {}
          song.id = songdata.id
          song.name = songdata.name
          song.artists = songdata.ar.map((artist,index) => artist.name).join('/')
          song.album = songdata.al.name
          song.albumName =songdata.al.name
          song.albumId = songdata.al.id
          song.duration = MillisecondToTime(songdata.dt).toString().substr(3)
          this.songs.push(song)
        }
        this.$store.commit('initSongs',this.songs)
        // console.log(songslist);
      })
    },
    methods:{
      test(){
        console.log(this.playdesc);
    }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped>
 .detail{
   padding-top: 64px;
   font-size: 16px;
   font-weight: 500;
   color: var(--text-color-gray);
   letter-spacing: 1px;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
 }
 .top-desc{
   padding: 60px 0;
   width: 78%;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   line-height: 25px;
 }
 
 .title-img{
   height: 200px;
   width: 200px;
   margin: 5px 50px 0 0 ;
 }
 .title-img img{
   height: 200px;
   width: 200px;
   border-radius: 6px;
   overflow: hidden;
 }
.name{
  font-size: 19px;
}
.desc{
  height: 60px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3
}
.total{
  font-size: 13px;
}
 .text div{
   padding: 16px 0
 }
.total{
  display: flex;
}
.total div{
  padding: 0 20px 0 0 ;
} 

.music-list{
  width: 88%;
  margin: 0 auto;
}
</style>