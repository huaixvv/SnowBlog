import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('views/home/Home')
const Blog = () => import('views/blog/Blog')
const Setting = () => import('views/setting/Setting')
const Article = () => import('views/article/Article')
const Search = () => import('views/music/Search')
const Rank = () => import('views/music/Rank')
const Album = () => import('views/music/Album')
const Detail = () => import('views/music/Detail')

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
    path: '/rank',
    component: Rank
  },
  {
    path: '/album',
    component: Album,
  },
  {
    path: '/album/detail',
    component: Detail
      }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router