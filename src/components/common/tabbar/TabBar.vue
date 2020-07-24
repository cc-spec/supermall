<template>
  <div id="tab-bar">
    <!-- <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">关于</div>
    <div class="tab-bar-item">购物车</div>
    <div class="tab-bar-item">更多</div> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 1px rgba(0,0,0,.2);
  }

</style>
