<template>
  <div id="app">
    <main-nav class="nav-bar"></main-nav>

    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MainNav from 'components/common/navbar/MainNav';


export default {
  name: 'app',
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
