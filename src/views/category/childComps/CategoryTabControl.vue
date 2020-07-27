<template>
    <tab-control class="tab-control" :title="title">
    </tab-control>
</template>

<script>
import TabControl from 'components/content/tabControl/TabControl'

export default {
  name: 'CategoryTabControl',
  components: {
    TabControl
  },
  data() {
    return {
      title: [
        '女装',
        '内衣',
        '食品',
        '医药',
        '美妆',
        '洗护',
        '百货',
        '家电',
        '电脑',
        '手机',
        '电视',
        '冰箱'
      ]
    }
  }
}
</script>

<style scoped>
  .tab-control {
    height: 40px;
    width: 100px;
    line-height: 40px;
  }
</style>
