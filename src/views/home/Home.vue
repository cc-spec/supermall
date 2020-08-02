<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tab-control"
        v-show="isTabFixed"/>

    <scroll class="content"
        ref="scroll"
        :probeType=3
        @scroll="contentScroll"
        :pull-up-load="true"
        @pullUpLoad="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommend="recommend"/>
      <feature-view/>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata, getHomeGoods} from 'network/home'
import {backTopMixin} from 'common/mixin'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []}, //流行
        'new': {page: 0, list: []}, //新款
        'sell': {page: 0, list: []} //精选
      },
      currentType: 'pop',
      // isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  mixins: [backTopMixin],
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 1. 请求轮播图、推荐模块的多个数据
    this.getHomeMultidata(),

    // 2. 请求商品展示列表的第一页数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  methods: {
    /**
     * 事件监听相关方法
    **/
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // backClick() {
    //   this.$refs.scroll.scrollTo(0, 0, 500)
    // },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)

      this.$refs.scroll.refresh()
    },
    swiperImageLoad() {
      this.tabOffsetTop =  this.$refs.tabControl2.$el.offsetTop
    },

    /**
     * 网络请求相关方法
    **/
    // 1. 请求轮播图，推荐模块的多个数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        //  console.log(res);
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },

    //  2. 请求商品展示列表的数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1

      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()  //上拉加载更多
      })
    }
  }
}
</script>

<style scoped>  /*scoped：作用域，有了该标签之后的style只对该组件起作用*/
  #home {
    height: 100vh;
    /* position: relative; */
  }
  .home-nav {
    /* position: sticky;
    top: 0;
    left: 0;
    z-index: 9; */
    background-color: var(--color-tint);
    color: #fff;
  }

  .tab-control {
    position: relative;
    z-index: 999;
  }

  /* 1. 使用calc计算属性 */
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
  } */

  /* 2. 使用相对定位和绝对定位 */
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /* overflow: hidden; */
  }
</style>
