<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <!-- <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th> -->
        <slot name="head"></slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <slot name="body" :good="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style></style>
