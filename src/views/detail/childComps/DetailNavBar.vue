<template>
  <div class="">
    <nav-bar>
      <div slot="left" class="left" @click="backClick"></div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="item.index"
          class="title-item"
          :class="{active: index === currentIndex}"
          @click="titleClick(index)">{{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
    font-size: 15px;
  }
  .left {
    width:15px;
    height:15px;
    border-left: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    transform: rotate(45deg);
    margin: 15px;
    margin-left: 20px;
  }
</style>
