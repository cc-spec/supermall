<template>
  <div id="category">
    <nav-bar><div class="category-nav" slot="left">更多商品</div></nav-bar>
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
  .category-nav {
    width: 100px;
    padding: 5px;
  }
  #category #category-tab{
    display: flex;
    flex-direction: column;
  }
</style>
