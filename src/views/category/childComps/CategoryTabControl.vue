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
        '电脑'
      ]
    }
  }
}
</script>

<style scoped>
  .tab-control {
    height: 50px;
    width: 100px;
    line-height: 50px;
  }
</style>
