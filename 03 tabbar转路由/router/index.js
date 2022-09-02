// 封装router都在src/router/index,js
import VueRouter from 'vue-router'
import Vue from 'vue'

import MyGoodsList from '../views/MyGoodList.vue'
import MyGoodsSearch from '../views/MyGoodsSearch.vue'
import MyUserInfo from '../views/MyUserInfo.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    name: 'mygood',
    path: '/goods',
    component: MyGoodsList
  },
  {
    name: 'goodsearch',
    path: '/search',
    component: MyGoodsSearch
  },
  {
    name: 'goodinfo',
    path: '/info',
    component: MyUserInfo
  }
]

const router = new VueRouter({
  routes
})

export default router
