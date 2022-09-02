<template>
  <div>
    <router-link
      :to="{ path: '/page', query: { frist: '首页新闻', last: '首页活动' } }"
      >首页</router-link
    >
    <router-link
      :to="{ path: '/class', query: { frist: '喜剧分类', last: '动漫分类' } }"
      >分类</router-link
    >
    <router-link
      :to="{ path: '/order', query: { frist: '拼单订单', last: '购物车分类' } }"
      >订单</router-link
    >
    <router-link
      :to="{ path: '/self', query: { frist: '个人积分', last: '团购积分' } }"
      >我的</router-link
    >
    <h3>显示路由切换的页面&darr;</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
