<template>
  <div class="nav-title">
    <div v-for="(title,index) in titles"  
        :key="index"
        @click="titleClick(index)"
        class="nav-item"
        >
        <span :class="{active: $route.path === path[index]}"
               class="title-text">
          {{title}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'NavBarTitle',
    props: {
      // titles: {
      //   type: Array,
      //   default: ['首页','博客','音乐','设置']
      // }
    },
    data () {
      return {
        isActive: false,
      }
    },
    computed:{
      titles(){
        return this.$store.state.navTitles
      },
      path(){
        return this.$store.state.paths
      }
    },
    methods: {
      titleClick(index){
        if (this.titles[index] === '音乐') {
          console.log('yinyue');
          this.$store.commit('musicTitles')
        }else if (this.titles[index] === '去博客') {
          this.$store.commit('blogTitles')
        }
        this.$router.push(this.path[index])
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  .nav-title{
    display: flex;
    justify-content: space-around
  }
  .nav-item{
    cursor: pointer;
  }

 .nav-title div{
   height: 60px;
   width: 64px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 15px;
   color: var(--text-color-unactive);
   font-weight: 500;
 }
  .title-text{
    padding: 13px 0;

  }
  .active{
    border-bottom: 2px green solid ;
    box-sizing: border-box;
    margin-top: 2px;
    color: var(--text-color-active);
  }
</style>