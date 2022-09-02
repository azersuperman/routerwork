import Vue from 'vue'
import VueRouter from 'vue-router'
import MyPage from '../views/MyPage.vue'
import MyClass from '../views/MyClass.vue'
import MyOrder from '../views/MyOrder.vue'
import MySelf from '../views/MySelf.vue'
import NotFound from '../views/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'MyPage'
  },
  {
    path: '/page',
    component: MyPage
  },
  {
    path: '/class',
    component: MyClass
  },
  {
    path: '/order',
    component: MyOrder
  },
  {
    path: '/self',
    component: MySelf
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
