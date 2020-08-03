<template>
  <div class="list-view">
    <div v-for="(item, index) in listData" :key="index" class="icon">
      <img :src="item.icon " alt="">
      <span class="info">{{item.info}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileListView',
  props: {
    listData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .list-view {
    border-top: 15px solid #f1f2f2;
  }
  .list-view .icon {
    padding: 10px 10px;
    border-bottom: 2px solid #f2f2f2;
  }
  .list-view .icon img {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .list-view .info {
    font-size: 15px;
  }
</style>
