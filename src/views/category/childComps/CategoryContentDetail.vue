<template>
      <div>
        <goods-list :goods="categoryDetail"/>
      </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
  name: 'CategoryContentDetail',
  components: {
    GoodsList,
    GoodsListItem
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

</style>
