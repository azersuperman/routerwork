<template>
  <div>
    <ul>
      <li>
        <router-link to="/contact/allcontact">All_contacts</router-link>
      </li>
      <li><router-link to="/contact/alice">Alice</router-link></li>
      <li><router-link to="/contact/bob">Bob</router-link></li>
    </ul>
    <button @click="random">随机显示</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    random() {
      const a = Math.floor(Math.random() * 4)
      switch (a) {
        case 1:
          this.$router.push({
            path: '/contact/allcontact'
          })
          break
        case 2:
          this.$router.push({
            path: '/contact/alice'
          })
          break
        case 3:
          this.$router.push({
            path: '/contact/bob'
          })
          break
      }
    }
  }
}
</script>

<style></style>
