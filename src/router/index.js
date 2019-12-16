import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('views/home/Home')
const Blog = () => import('views/blog/Blog')
const Setting = () => import('views/setting/Setting')
const Article = () => import('views/article/Article')
const Search = () => import('views/music/Search')
const Chart = () => import('views/music/Chart')
const Album = () => import('views/music/Album')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/setting',
    component: Setting
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/Search',
    component: Search
  },
  {
    path: '/chart',
    component: Chart
  },
  {
    path: '/album',
    component: Album
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router