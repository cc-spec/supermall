<template>
  <div class="list-item">
    <div class="item-selector">
      <check-botton @checkBtnClick="itemClick" :is-checked="product.checked"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-info">
      <div class="info-title">{{product.title}}</div>
      <div class="info-desc">{{product.desc}}</div>
      <div class="item-bottom">
        <div class="item-price">￥{{product.price}}</div>
        <div class="item-count">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBotton from 'components/content/checkBotton/CheckBotton'

export default {
  name: 'CartListItem',
  components: {
    CheckBotton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemClick() {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
  .list-item {
    display: flex;
    width: 100%;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    justify-content: center;
    /* align-items: center; */
  }
  .item-selector {
    flex: 14%;
    align-self: center;
  }
  .item-img img{
    width: 80px;
    height: 100px;
    border-radius: 5%;
    vertical-align: middle;
  }
  .item-info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    padding: 0 13px;
  }
  .item-info .info-title,
  .item-info .info-desc {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item-info .info-title {
    font-size: 17px;
    color: #333;
  }
  .item-info .info-desc {
    font-size: 14px;
    color: #4e4c4e;
  }
  .item-bottom {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .item-price,
  .item-count {
    align-self: center;
  }
  .item-price {
    color: #f78856;
    padding-left: -2px;
  }
</style>
