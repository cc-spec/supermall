<template>
  <div class="content-subcategory">
    <div v-for="(item, index) in subcategories.list" :key="index" class="subcategory-item">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryContentSubcategory',
  props: {
    subcategories: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .content-subcategory {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 220px;
  }
  .subcategory-item {
    width: 30%;
    padding-top: 20px;
  }
  .subcategory-item img {
    width: 100%;
  }
  .subcategory-item div {
    padding-top: 10px;
    text-align: center;
  }
</style>
