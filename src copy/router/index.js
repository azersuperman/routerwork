// 封装router都在src/router/index,js
import VueRouter from 'vue-router'
import Vue from 'vue'

import UIRouter from '../views/UIRouter.vue'
import ConTacts from '../views/ConTacts.vue'
import AboutS from '../views/AboutS.vue'
import AllContacts from '../views/ui/AllContacts.vue'
import AliceS from '../views/ui/AliceS.vue'
import BoB from '../views/ui/BoB.vue'
import BloG from '../views/ui/bob/BloG.vue'
import FlaX from '../views/ui/bob/FlaX.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/uirouter'
  },
  {
    path: '/uirouter',
    component: UIRouter
  },
  {
    path: '/contact',
    component: ConTacts,
    children: [
      {
        path: '/',
        redirect: 'bob'
      },
      {
        path: 'allcontact',
        component: AllContacts
      },
      {
        path: 'alice',
        component: AliceS
      },
      {
        path: 'bob',
        component: BoB,
        children: [
          {
            path: 'blog',
            component: BloG
          },
          {
            path: 'flax',
            component: FlaX
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    component: AboutS
  }
]

const router = new VueRouter({
  routes
})

export default router
