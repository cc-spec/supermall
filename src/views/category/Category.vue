<template>
  <div id="category">
    <nav-bar class="nav"><div class="category-nav" slot="left">更多商品</div></nav-bar>
    <category-tab-control id="category-tab"></category-tab-control>
  </div>
</template>

<script>
import CategoryTabControl from './childComps/CategoryTabControl'

import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'Category',
  components: {
    CategoryTabControl,
    NavBar
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
  .nav {
    color: #fff;
    background-color: var(--color-tint);
  }
  .category-nav {
    width: 100px;
  }
  #category #category-tab{
    display: flex;
    flex-direction: column;
  }
</style>
