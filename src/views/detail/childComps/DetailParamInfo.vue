<template>
  <div class="param-info">
    <table v-for="(table, index) in paramInfo.sizes" :key="index" class="info-size">
      <tr v-for="tr in table" :key="tr.index">
        <td v-for="td in tr" :key="td.index">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <img src="" alt="" class="info-img">
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scope>
   .param-info {
    position: relative;
    padding: 0 15px;
    font-size: 14px;
    border-top: 3px solid #f2f5f8;
  }
  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }
  .param-info table tr {
    height: 42px;
  }
  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .param-value {
    color: #eb4868
  }
  .info-img img {
    width: 100%;
  }
</style>
