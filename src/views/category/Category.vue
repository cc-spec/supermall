<template>
  <div id="category">
    <nav-bar class="nav"><div class="category-nav" slot="left">更多商品</div></nav-bar>
    <div class="content">
      <div class="left">
        <category-tab-menu id="category-tab" :category="category"/>
      </div>
      <div class="right">
        <div :data=[categoryData]>
          <category-content-subcategory :subcategories="showSubcategory"/>
          <tab-control :title="['综合', '新品', '销量']"></tab-control>
          <category-content-detail :category-detail="showCategoryDetail"/>
        </div>
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

import {getCategory, getSubcategory, getCategoryDetail} from 'network/category'

export default {
  name: 'Category',
  components: {
    CategoryTabMenu,
    CategoryContentSubcategory,
    CategoryContentDetail,
    NavBar,
    TabControl
  },
  data() {
    return {
      category: [],
      categoryData: {},
      currentIndex: -1
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
      return this.categoryData[this.currentIndex].categoryDetail['pop']
    }
  },
  methods: {
    /**
     * 事件监听相关方法
    **/

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
  .nav {
    position: fixed;
    width: 100vh;
    color: #fff;
    background-color: var(--color-tint);
    z-index: 20;
  }
  .category-nav {
    width: 100px;
    padding-left: 30px;
  }
  #category #category-tab{
    display: flex;
    flex-direction: column;
  }
  #category .content .left{
    float: left;
  }
  #category .content .right {
    float: right;
  }
</style>
