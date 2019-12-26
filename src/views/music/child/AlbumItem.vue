<template>
  <div class="album-item">
    <div class="item" v-for="(playlist,index) in playlists" 
                      :key="index"
                      @click="toDetail(playlist)">
      <img v-lazy="playlist.coverImgUrl" alt="">
      <div class="text">{{playlist.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AlbumItem',
    props:{
      playlists:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data () {
      return {
        testlist:[]
      }
      
    },
    methods:{
      toDetail(playlist){
        console.log('dian ji le');
        let strPlaylist = JSON.stringify(playlist)
        this.$store.commit('initPalylist', strPlaylist)
        this.$router.push('/album/detail')
      }
    },
    components: {
    }
  }
</script>

<style scoped>
.album-item{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
}
.item{
  cursor:pointer;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color-gray);
  width: 18%;
  /* background-color: blue; */
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 1px 24px 0 var(--color-shadow);
}
 .item img{
  border-radius: 5px 5px 0 0;
   width: 100%;
 }
 .text{
   margin: 5px 0px 5px 9px;
   height: 40px; 
   /* letter-spacing: 1px; */
   line-height: 20px;
   display: -webkit-box;
   overflow: hidden;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
 }
</style>