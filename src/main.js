import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import animated from 'animate.css';

Vue.config.productionTip = false

//定义事件总线
Vue.prototype.$bus = new Vue()

Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.use(animated)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
