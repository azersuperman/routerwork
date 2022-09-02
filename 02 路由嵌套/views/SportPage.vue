<template>
  <div>
    <h2>体育-改变人生</h2>
    <router-link
      :to="{
        name: 'spt',
        query: {
          sonname: '体育的主页'
        }
      }"
      >体育主页</router-link
    ><router-link
      :to="{
        name: 'domc',
        query: {
          sonname: '国内的体育'
        }
      }"
      >国内体育</router-link
    ><router-link
      :to="{
        name: 'foren',
        query: {
          sonname: '国外的体育'
        }
      }"
      >国外体育</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
