<template>
  <div id="profile">
    <h1>嗨！</h1>
    <h2>欢迎来到我的个人网站，</h2>
    <h2>自我介绍一下</h2>
    <h4>90后，目前应届生一枚，来自陕西，如你所见，前端菜鸟一枚，目前正在找工作中...</h4>
    <h4>个人性格还算开朗，喜欢听歌，也爱摄影，这个博客已经在 <a href="https://github.com/Dusksnowing/SnowBlog">GitHub</a> 开源，欢迎点赞提建议哦~~</h4>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
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
  margin: 150px  auto
}
 h1, h2, h4 {
   color: var(--text-color-gray);
   margin-top: 40px
 }
 a{
   font-style: italic;
 }
</style>