<template>
  <div v-if="Object.keys(commentInfo).length != 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-img">
      <img :src="item" v-for="item in commentInfo.images" :key="item.index" alt="">
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.comment-info {
  margin:0 7px 15px;
}
.info-header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid #eeecee;
}
.info-header .header-more {
  margin: 0 5px;
}
.info-header .header-more::after {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
  transform: rotate(-45deg);
}
.info-header .header-title {
  font-size: 15px;
}
.info-header .header-more  {
  font-size: 13px;
}
.info-user {
  padding: 10px 0 0;
}
.info-user img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}
.info-user span {
  font-size: 15px;
  color: #525152;
}
.info-detail {
  margin: 10px 0;
}
.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-detail .info-other {
  margin: 10px 0;
  font-size: 12px;
  color: #999;
}
.info-detail .info-other .date {
  margin-right: 8px;
}
.info-img img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
