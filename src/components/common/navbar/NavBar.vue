<template>
 <div id="nav-bar">
   <slot name="nav-logo"></slot>
   <slot name="nav-title"></slot>
 </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data () {
      return {
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  #nav-bar{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: red; */
    height: 64px;
    box-shadow: 1px 1px 15px 0 var(--color-shadow)
  } 
 
</style>