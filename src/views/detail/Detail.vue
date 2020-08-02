<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" id="detail-navbar" ref="nav"/>
    <scroll
      class="detail-content"
      ref="scroll"
      @scroll="detailScroll"
      :probe-type="3">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommend" ref="recommend"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar   @addCart="addToCart"/>
  </div>
</template>

<script>
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail.js'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {debounce} from 'common/utils.js'
import {backTopMixin} from 'common/mixin.js'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    BackTop
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopY: [],
      getThemeTopY: null,
      positionY: null,
      currentIndex: 0
    }
  },
  mixins: [backTopMixin],
  created() {
    // 1. 保存iid
    this.iid = this.$route.params.iid

    // 2. 获取详情数据
    getDetail(this.iid).then(res => {
      const data = res.result

       // 2.1 获取详情页轮播图数据
      this.topImages = data.itemInfo.topImages
      // 2.2 获取详情页商品信息相关数据
      this.goods = new Goods(data.columns, data.itemInfo, data.shopInfo.services)
      // 2.3 获取商家详情信息数据
      this.shop = new Shop(data.shopInfo)
      // 2.4 获取商品详情数据
      this.detailInfo = data.detailInfo
      // 2.5 获取参数数据
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 2.6 获取评论数据
      this.commentInfo = data.rate.list[0]
    })

    // 3. 获取推荐数据
    getRecommend(this.iid).then(res => {
      // console.log(res);
      this.recommend = res.data.list
    })

    // 4. 给getThemeTopY赋值（给this.themeTopY进行防抖）
    this.getThemeTopY = debounce(() => {
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.param.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopY.push(Number.MAX_VALUE)
      // console.log(this.themeTopY);
    }, 200)
    },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
      // this.themeTopY.push(0)
      // this.themeTopY.push(this.$refs.param.$el.offsetTop)
      // this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.themeTopY);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200)
    },
    detailScroll(position) {
      // // 1. 获取positionY值
      this.positionY = -position.y
      // // 2. 用positionY的值和主题的值进行对比
      // // 循环遍历主题数组
      length = this.themeTopY.length
      // for (let i = 0; i < length; i++) {
      //   // 如果positionY的值 >= themeTopY[i] 并且 < themeTopY[i + 1]
      //   if (this.currentIndex !== i && ((i < length - 1 && this.positionY >= this.themeTopY[i] && this.positionY < this.themeTopY[i + 1]) || (i === length - 1 && this.positionY >= this.themeTopY[i]))) {
      //     this.currentIndex = i
      //     this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }

      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex != i && (this.positionY >= this.themeTopY[i] && this.positionY < this.themeTopY[i + 1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

      // 回到顶部
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    addToCart() {
      // 1. 获取购物车界面需要展示的数据
      const product = {}
      product.iid = this.iid,
      product.desc = this.goods.desc
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.price = this.goods.realPrice
      product.count  = 0

      // 2. 将商品添加到购物车里
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 2000)
      })
    }
  }
}
</script>

<style>
  #detail {
    position: relative;
    height: 100vh;
    background-color: #fff;
    z-index: 1;
  }
  .nav-bar {
    background-color: #fff;
  }
  /* .detail-content {
    height: calc(100% - 44px);
    overflow: hidden;
  } */
  .detail-content {
    position: absolute;
    top: 44px;
    bottom: 60px;
    left: 0;
    right: 0;
  }
</style>
