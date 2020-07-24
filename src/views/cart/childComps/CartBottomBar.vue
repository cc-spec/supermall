<template>
  <div class="bottom-bar">
    <check-botton
      class="check-botton"
      :is-checked="selectAll"
      @click.native="checkBtnClick"/>
    <span>全选</span>
    <span class="total-price">合计:￥{{totalPrice}}</span>
    <span class="buy-product" @click="buyProduct">去计算({{cartLength}})</span>
  </div>
</template>

<script>
import CheckBotton from 'components/content/checkBotton/CheckBotton'

import {mapGetters} from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckBotton
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList']),
    totalPrice() {
      const cartList = this.$store.getters.cartList
      return cartList.filter(item => {
        return item.checked
        }).reduce((preValue, item) => {
        return preValue + item.count * item.price
      }, 0).toFixed(2)
    },
    selectAll() {
      if (this.cartList.length === 0) return false

      // 1. filter方法
      // return !(this.cartList.filter(item => !item.checked).length)

      // 2. find方法
      return !(this.cartList.find(item => !item.checked))
    }
  },
  methods: {
    checkBtnClick() {
      let selectAll = this.cartList.find(item => !item.checked)
      if (selectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = true
        });
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        })
      }
    },
    buyProduct() {

      if (!(this.cartList.find(item => item.checked))) {
        this.$toast.show('请选择购买的商品! ', 2000)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    background-color: #eeedef;
    height: 44px;
    line-height: 44px;
    width: 100%;
    padding-left: 35px;
    font-size: 14px;
  }
  .check-botton {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 10px;
  }
  .bottom-bar .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }
  .bottom-bar .buy-product {
    float: right;
    background-color: #ff5300;
    color: #fff;
    padding: 0 25px;
  }
</style>
