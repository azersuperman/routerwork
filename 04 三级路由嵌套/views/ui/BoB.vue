<template>
  <div>
    <h1>Bob</h1>
    <ul>
      <li><router-link to="/contact/bob/blog">blog</router-link></li>
      <li><router-link to="/contact/bob/flax">flax</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
