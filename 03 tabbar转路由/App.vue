<template>
  <div class="app">
    <MyHeader title="tabbar案例" color="gold"></MyHeader>
    <router-view></router-view>
    <MyFooter :list="tabList" @change-componentname="router"></MyFooter>
  </div>
</template>

<script>
import MyHeader from 'cpns/MyHeader.vue'
import MyFooter from 'cpns/MyFooter.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  },
  data() {
    return {
      componentName: 'MyGoodsList',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList'
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch'
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo'
        }
      ]
    }
  },
  methods: {
    router(componentName) {
      switch (componentName) {
        case 'MyGoodsList':
          this.$router.push({
            name: 'mygood'
          })
          break
        case 'MyGoodsSearch':
          this.$router.push({
            name: 'goodsearch'
          })
          break
        case 'MyUserInfo':
          this.$router.push({
            name: 'goodinfo'
          })
          break
      }
    }
  }
}
</script>

<style scoped>
.app {
  padding: 50px 0 50px;
}
</style>
