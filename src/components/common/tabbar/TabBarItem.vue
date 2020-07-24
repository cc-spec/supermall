<template>
    <div class="tab-bar-item" @click="itemClick">
      <div :style="activeStyle">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <slot name="item-text"></slot>
      </div>
    </div>
    <!-- <div class="tab-bar-item">关于</div>
    <div class="tab-bar-item">购物车</div>
    <div class="tab-bar-item">更多</div> -->
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      // 判断当前活跃的路由的路径跟各个TabBarItem的path是否相等
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // this.$router.replace(this.path)
      this.$route.path === this.path || this.$router.replace(this.path);
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    background-color: #f6f6f6;
    height: 49px;
    /* line-height: 49px; */
    text-align: center;
    font-size: 14px;
    padding-bottom: 5px;
  }
  .tab-bar-item img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    /* margin-top: 3px; */
  }
</style>
