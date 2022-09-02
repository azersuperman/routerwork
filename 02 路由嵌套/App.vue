<template>
  <div>
    <h2>嵌套路由</h2>
    <router-link
      :to="{
        name: 'main',
        query: { main: '主页' }
      }"
      >主页</router-link
    ><router-link
      :to="{
        name: 'new',
        query: { main: '新闻' }
      }"
      >新闻</router-link
    ><router-link
      :to="{
        name: 'sport',
        query: { main: '体育' }
      }"
      >体育</router-link
    >
    <router-view> </router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
