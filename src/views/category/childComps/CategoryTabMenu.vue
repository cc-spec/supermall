<template>
  <scroll class="tab-menu content">
    <div v-for="(item, index) of category" :key="index"
      class="menu-item"
      @click="clickMenu(index)"
      :class="{active: currentIndex === index}">
      <span>{{item.title}}</span>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'CategoryTabMenu',
  components: {
    Scroll
  },
  props: {
    category: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    clickMenu(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
  .tab-menu {
    height: 100vh;
    width: 100px;
    background-color: #f3f3f3;
  }
  .menu-item {
    width: 100px;
    height: 40px;
  }
  .menu-item span {
    display: block;
    width: 100px;
    line-height: 40px;
    text-align: center;
  }
  .active {
    color: var(--color-tint);
  }
  .active span {
    border-left: 2px solid var(--color-tint);
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /* overflow: hidden; */
  }
</style>
