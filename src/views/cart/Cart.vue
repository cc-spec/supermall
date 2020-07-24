<template>
  <div id="cart">
    <nav-bar class="cart-navbar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list class="cart-list"/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
  }
  .cart-navbar {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: var(--color-tint);
    color: #fff;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /* height: calc(100%-93px);
    overflow: hidden; */
  }
</style>
