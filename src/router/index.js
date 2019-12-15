import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('views/home/Home')
const Blog = () => import('views/blog/Blog')
const Setting = () => import('views/setting/Setting')
const Music = () => import('views/music/Music')
const Article = () => import('views/article/Article')


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
    path: '/music',
    component: Music
  },
  {
    path: '/article',
    component: Article
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router