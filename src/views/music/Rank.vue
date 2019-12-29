<template>
  <div class="rank">
    <div class="select">
      <div class="select-title">分类: <span @click="dialogTableVisible = true">{{currentTopName}}</span></div> 
    </div>
    <!-- 选择种类的对话框 -->
    <el-dialog :visible.sync="dialogTableVisible"
               :modal="false"
               :center="true"
               top="18vh"
               custom-class="dialog-class">
    <div class="cata-contain">
      <div class="cata-name" 
           v-for="(name, index) in topName" :key="index"
           @click="changeTopSong(index)">
        {{name}}
      </div>
    </div>
    </el-dialog>

    <loading class="loading" v-show="loading"/>

    <div class="music-contain">
      <music-list class="list" 
                  :songs="songs"
                  />
    </div>
  </div>
</template>

<script>
  import MusicList from './child/MusicList';
  import Loading from 'components/common/loading/Loading';
  import { getTopSong } from "network/music";
  import { MillisecondToTime } from "common/formatTime";

  export default {
    name: 'Chart',
    data () {
      return {
        songs: [],
        currentTopName:'云音乐热歌榜',
        dialogTableVisible: false,
        loading: false,
        topName: ['原创歌曲榜','云音乐热歌榜','电竞音乐榜',
                   '华语金曲榜','云音乐新歌榜','欧美热歌榜',
                   '抖音排行榜','云音乐飙升榜','欧美新歌榜',
                   '古典音乐榜','云音乐电音榜','ACG音乐榜'],
        topNameIdx:[2, 1, 30, 
                    17, 0, 31,
                    26, 3, 32,
                    24, 25, 22]
      }
    },
    created(){
      this.loading = true
      getTopSong(1).then(res => {
        // console.log(res);
        const songdatas = res.data.playlist.tracks
        // console.log(songdatas);
        for (let songdata of songdatas) {
          let song = {}
          song.name = songdata.name
          song.id = songdata.id
          song.artists = songdata.ar.map(function(artist,index){
                                     return artist.name
                                     }).join('/')
          song.albumName =songdata.al.name
          song.albumId = songdata.al.id
          song.album = songdata.al.name
          song.duration = MillisecondToTime(songdata.dt).toString().substr(3)
          this.songs.push(song)
        }
        this.loading = false
        //初始化store的songs
        this.$store.commit('initSongs',[])
        this.$store.commit('initSongs',this.songs)
        // console.log(`store songs =`);
        // console.log(this.$store.state.songs);
      })
    },
    methods: {
      changeTopSong(index){
        this.currentTopName = this.topName[index]
        this.songs = []
        this.loading = true
        this.dialogTableVisible = false
        getTopSong(this.topNameIdx[index]).then(res => {
          // console.log(res);
          const songdatas = res.data.playlist.tracks
          for (let songdata of songdatas) {
            let song = {}
            song.name = songdata.name
            song.id = songdata.id
            song.artists = songdata.ar.map(function(artist,index){
                                      return artist.name
                                      }).join('/')
            song.album = songdata.al.name
            song.albumName =songdata.al.name
            song.albumId = songdata.al.id
            song.duration = MillisecondToTime(songdata.dt).toString().substr(3)
            this.songs.push(song)
          }
          //初始化store的songs
          this.$store.commit('initSongs',[])
          this.$store.commit('initSongs',this.songs)
          this.loading = false
        })
      },    
    },
    components: {
      MusicList,
      Loading
    }
  } 
</script>

<style scoped>

 .select{
   margin-top:110px;
   /* background-color: red; */
   font-size: 15px;
   font-weight: 500;
   padding-left: 78%;
   color: var(--text-color-light)
 }
 .select span{
   cursor: pointer;
   font-size: 16px;
   color: var(--text-color-unactive)
 }
 .select span:hover{
   color: var(--text-color-hover)
 }
 .cata-contain{
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between
 }
 .cata-name{
   cursor: pointer;
   font-size: 14px;
   font-weight: 500;
   color: var(--text-color-light);
   padding: 10px 50px
 }
 .cata-name:hover{
   color: var(--text-color-hover);
 }

.music-contain{
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  height: 420px;
  overflow: hidden;
  overflow-y: scroll;
}

.loading{
  position: fixed;
  top: 40%;
  left: 45%
}
</style>