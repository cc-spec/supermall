<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f4f3f4;
  }
  .info-title {
    color: #282728;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .info-price {
    padding: 8px 0;
  }
  .info-price .n-price {
    color: var(--color-high-text);
    font-size: 24px;
  }
  .info-price .o-price {
    text-decoration: line-through;
    margin-left: 5px;
    font-size: 13px;
  }
  .info-price .discount {
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 30%;
    font-size: 12px;
    margin-left: 5px;
    padding: 3px;
    position: relative;
    top: -5px;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding-bottom: 3px;
    border-bottom: 2px solid rgba(100, 100, 100, .1);
  }
  .info-services {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .info-service-item span{
    color: #565556;
    font-size: 13px;
  }
</style>
