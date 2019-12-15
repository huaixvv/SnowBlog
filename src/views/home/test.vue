<template>
  <div id="profile">
    <h1>嗨！</h1>
    <h2>欢迎来到我的个人网站，这也是我个人的第三版网站</h2>
    <h2>自我介绍一下</h2>
    <h4>90后，来自安徽芜湖，现在在上海工作，从事前端开发，个人比较活泼开朗吧，没事学学技术，打打游戏听听歌</h4>
    <h4>说到听歌，给大家推荐一个个人收藏的歌单《程序员必备，带上耳机代码就是全世界》</h4>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return {
      }
    },
    components: {
    }
  }
</script>

<style scoped>
#profile{
  width: 58%;
  margin: 110px  auto
}
 h1, h2, h4 {
   color: var(--text-color-gray);
   margin-top: 40px
 }
</style>