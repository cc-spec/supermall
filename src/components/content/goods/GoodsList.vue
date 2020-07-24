<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.index" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .goods {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 2px;
  }
</style>
