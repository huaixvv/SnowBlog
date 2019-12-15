<template>
  <nav-bar>
    <img slot="nav-logo" class="logo" src="~assets/img/logo3.png" alt="">
    <div slot="nav-title" class="title">
      <nav-bar-title></nav-bar-title>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import NavBarTitle from 'components/common/navbar/NavBarTitle';
  export default {
    name: 'MainNav',
    
    data () {
      return {
        titles:[] 
      }
    },
    created(){

    },
    components: {
      NavBar,
      NavBarTitle
    }
  }
</script>

<style scoped>
 .logo{
    width: 164px;
    height: 40px;
 }
 
 .title{
   width: 25%;
   /* background-color: red; */
 }
</style>