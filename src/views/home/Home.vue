<template>
  <div class="home">

    <div class=" pinwheel">
      <img src="~assets/img/bird.jpg" alt="">
      <div class="text">Hi, Welcome to my blog, Taka a look by yourself.</div>
    </div>
      <!-- <test></test> -->
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import MainNav from 'components/common/navbar/MainNav';
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
      // Test
    },
    created(){
      // util()
    }
  }
</script>

<style scoped>
 .home{
   display: flex;
   justify-content: center;
   align-items: center;
 }

 
 .pinwheel img{
   width: 330px;
   margin: 130px auto;
   margin-top: 160px;
   border-radius: 5px;
   margin-left: 20px;
   /* animation: revolve 8s linear infinite;
   -webkit-animation: revolve 8s linear infinite; */
 }
 
 .text{
   position: absolute;
   bottom: 130px;
   letter-spacing: 1px;
   font-size: 13px;
   font-style: italic;
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