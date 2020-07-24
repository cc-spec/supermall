<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>

    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right shop-middle-item">
        <table>
          <tr v-for="item in shop.score" :key="item.index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if(value < 1000) {
        return value
      } else {
        return (value / 10000).toFixed(1) + '万'
      }
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: 30px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-top {
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .shop-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-top .title {
    margin-left: 8px;
    vertical-align: center;
  }

  .shop-middle {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .shop-middle-item {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
    text-align: center;
    /* justify-content: space-evenlys; */
    border-right: 2px solid rgba(100, 100, 100, .1);
  }
  .info-sells,
  .info-goods {
    flex: 1;
    color:#000;
  }
  .sells-count,
  .goods-count {
    font-size: 18px;
  }
  .sells-text,
  .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }
  .shop-middle-right {
    font-size: 13px;
    color: #333;
    margin-left: 20px;
  }
  .shop-middle-right table tr td {
    padding: 5px;
  }
  .score {
    color: #678d4c;
  }
  .score-better {
    color: #ef5945;
  }
  .better,
  .better-more {
    color: #fff;
  }
  .better span{
    background-color: #678d4c;
  }
  .better-more span{
    background-color: #ef5945;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }
  .enter-shop {
    display: inline-block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    background-color: #f2f5fc;
    border-radius: 10px;
    text-align: center;
  }
</style>
