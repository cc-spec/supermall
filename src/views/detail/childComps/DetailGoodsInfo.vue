<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="desc-start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="desc-end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list" :key="index"
        :src="item" alt=""
        @load="goodsImageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    goodsImageLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
  .detail-goods-info {
    padding: 10px 0;
  }
  .info-desc {
    padding: 0 15px;
  }
  .info-desc .desc-start,
  .info-desc .desc-end {
    width: 90px;
    height: 1px;
    background-color: #000;
    position: relative;
  }
  .info-desc .desc-start {
    float: left;
  }
  .info-desc .desc-end {
    float: right;
  }
  .desc-start::before,
  .desc-end::after {
    content: '';
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
    background: #333;
    bottom: 0;
  }
  .desc-end::after {
    right: 0;
  }
  .info-desc .desc {
    padding: 10px 0;
    font-size: 14px;
  }
  .detail-goods-info .info-key {
    margin: 10px 15px ;
    color: #333;
    font-size: 15px;
  }
  .info-list img {
    width: 100%;
  }
</style>
