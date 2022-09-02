// 封装router都在src/router/index,js
import VueRouter from 'vue-router'
import Vue from 'vue'

import MainPage from '../views/MainPage.vue'
import NewPage from '../views/NewPage.vue'
import SportPage from '../views/SportPage.vue'
import NotFound from '../views/NotFound.vue'
import SportMain from '../views/sport/SportMain.vue'
import DomesticSport from '../views/sport/DomesticSport.vue'
import ForeignSport from '../views/sport/ForeignSport.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    name: 'main',
    path: '/main',
    component: MainPage
  },
  {
    name: 'new',
    path: '/new',
    component: NewPage
  },
  {
    name: 'sport',
    path: '/sport',
    component: SportPage,
    children: [
      {
        path: '/',
        redirect: 'sportmain'
      },
      {
        name: 'spt',
        path: 'sportmain',
        component: SportMain
      },
      {
        name: 'domc',
        path: 'domestic',
        component: DomesticSport
      },
      {
        name: 'foren',
        path: 'foreign',
        component: ForeignSport
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
