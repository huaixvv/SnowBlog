<template>
  <div class="home">
      <porfile></porfile>
      <!-- <test></test> -->
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import MainNav from 'components/common/navbar/MainNav';
  import Porfile from './Porfile';
  // import Test from './test';


  export default {
    name: 'Home',
    data () {
      return {
      }
    },
    components: {
      NavBar,
      MainNav,
      Porfile,
      // Test
    },
    created(){
      // util()
    }
  }
</script>

<style scoped>
 /* .home{
   width: 100%;
 } */
</style>