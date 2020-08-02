<template>
  <div class="tab-menu">
    <div v-for="(item, index) of category" :key="index"
      class="menu-item"
      @click="clickMenu(index)"
      :class="{active: currentIndex === index}">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryTabMenu',
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
      this.$emit('menuClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-menu {
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
</style>
