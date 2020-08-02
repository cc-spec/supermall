<template>
  <div id="category">
    <nav-bar class="category-nav"><div slot="center">更多商品</div></nav-bar>
    <div class="category-content">
      <div class="left">
        <scroll class="content" ref="left-scroll">
          <category-tab-menu id="category-tab"
            :category="category"
            @menuClick="menuClick"/>
        </scroll>
      </div>
      <div class="right">
        <scroll class="content" ref="right-scroll">
          <div :data=[categoryData]>
            <category-content-subcategory :subcategories="showSubcategory"/>
            <tab-control
              :title="['综合', '新品', '销量']"
              @tabClick="tabClick"
              ref="tabControl"/>
            <category-content-detail :category-detail="showCategoryDetail"/>
          </div>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryTabMenu from './childComps/CategoryTabMenu'
import CategoryContentSubcategory from './childComps/CategoryContentSubcategory'
import CategoryContentDetail from './childComps/CategoryContentDetail'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import Scroll from 'components/common/scroll/Scroll'

import {getCategory, getSubcategory, getCategoryDetail} from 'network/category'

export default {
  name: 'Category',
  components: {
    CategoryTabMenu,
    CategoryContentSubcategory,
    CategoryContentDetail,
    NavBar,
    TabControl,
    Scroll
  },
  data() {
    return {
      category: [],
      categoryData: {},
      currentIndex: -1,
      currentType: 'pop'
    }
  },
  created() {
    this.getCategory()
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    /**
     * 事件监听相关方法
    **/
    menuClick(index) {
      this.getSubcategory(index)
    },
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
      this.$refs.tabControl.currentIndex = index
    },
    /**
     * 网络请求相关方法
    **/
    // 1. 请求多个数据
    getCategory() {
      getCategory().then(res => {
        this.category = res.data.category.list
        for(let i = 0; i < this.category.length; i++) {
          // 获取数据的数据结构
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        this.getSubcategory(0)
      })
    },
    // 2. 请求分类子类展示的数据
    getSubcategory(index) {
      this.currentIndex = index
      const maitKey = this.category[index].maitKey
      getSubcategory(maitKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this.getCategoryDetail('pop')
        this.getCategoryDetail('sell')
        this.getCategoryDetail('new')
      })
    },
    // 3. 请求分类下面推荐模块的数据
    getCategoryDetail(type) {
      const miniWallkey = this.category[this.currentIndex].miniWallkey
      getCategoryDetail(miniWallkey, type).then(res => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    }
  }
}
</script>

<style scoped>
  .category-nav {
    color: #fff;
    background-color: var(--color-tint);
    z-index: 20;
  }
  #category #category-tab{
    display: flex;
    flex-direction: column;
  }
  #category .category-content .left{
    float: left;
  }
  #category .category-content .right {
    float: right;
  }
  .right .content,
  .left .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
  }
  .left .content {
    left: 0;
  }
  .right .content {
    left: 100px;
  }
</style>
