<template>
  <div>
    <MyTab :list="goodsList">
      <template v-slot:head>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{ good }">
        <td>{{ good.id }}</td>
        <td>{{ good.goods_name }}</td>
        <td>{{ good.goods_price }}</td>
        <td>
          <Mytag @addLabel="good.tags.push($event)"></Mytag>
          <span
            class="badge bg-warning text-dark"
            v-for="(item, index) in good.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delGood(good.id)">
            删除
          </button>
        </td>
      </template>
    </MyTab>
  </div>
</template>

<script>
import axios from '@/utils/request'
import MyTab from 'cpns/MyTab.vue'
import Mytag from 'cpns/MyTag.vue'
export default {
  name: 'MyGoodsList',
  components: {
    MyTab,
    Mytag
  },
  data() {
    return {
      goodsList: []
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
    async getGoods() {
      const {
        data: { data }
      } = await axios({
        url: '/api/goods'
      })
      this.goodsList = data
      console.log(data)
    },
    delGood(val) {
      this.goodsList = this.goodsList.filter((item) => !(item.id === val))
    }
  }
}
</script>

<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
