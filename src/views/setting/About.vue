<template>
  <div>
    <!-- <main-nav></main-nav> -->
      <porfile></porfile>

  </div>
</template>

<script>
  import MainNav from 'components/common/navbar/MainNav';
  import Porfile from './Porfile';

  export default {
    name: 'Setting',
    data () {
      return {
      }
    },
    components: {
      MainNav,
      Porfile
    }
  }
</script>

<style scoped>
 
</style>