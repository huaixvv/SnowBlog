import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    navTitles: ['首页', '博客', '音乐', '设置'],
    paths:['/home', '/blog', '/music', '/setting']
  },
  mutations: {
    blogTitles(state) { 
      state.navTitles = ['首页', '博客', '音乐', '设置']
      state.paths = ['/home', '/blog', '/music', '/setting'] 
    },
    musicTitles(state) { 
      state.navTitles = ['去博客', '搜索', '排行', '专辑',]
      state.paths = ['/blog', '/search', '/chart', '/album']
    }
  }
})


export default store