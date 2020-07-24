<template>
  <div class="check-botton" @click="selectItem">
    <img src="~assets/img/cart/check.svg" alt="" v-if="!isChecked">
    <img src="~assets/img/cart/checked.svg" alt="" v-else>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CheckBotton',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    selectItem() {
      this.$emit('checkBtnClick')
    }
  }
}
</script>

<style scoped>
  .check-botton img{
    width: 22px;
    height: 22px;
  }
</style>
