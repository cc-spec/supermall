<template>
  <div id="category">
    <nav-bar class="nav"><div class="category-nav" slot="left">更多商品</div></nav-bar>
    <div class="content">
      <div class="left">
        <category-tab-menu id="category-tab" :category="category"/>
      </div>
      <div class="right">
        <div>right</div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryTabMenu from './childComps/CategoryTabMenu'

import NavBar from 'components/common/navbar/NavBar'

import {getCategory, getSubcategory, getCategoryDetail} from 'network/category'

export default {
  name: 'Category',
  components: {
    CategoryTabMenu,
    NavBar
  },
  data() {
    return {
      category: []
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    /**
     * 事件监听相关方法
    **/

    /**
     * 网络请求相关方法
    **/
    getCategory() {
      getCategory().then(res => {
        this.category = res.data.category.list
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
