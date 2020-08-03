<template>
  <div class="profile">
    <nav-bar class="profile-navbar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <profile-user-info/>

    <section class="account">
      <div class="account-item">
        <div>
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div>
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div>
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <profile-list-view :list-data="oderList"/>
    <profile-list-view :list-data="serviceList"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import ProfileUserInfo from './childComps/ProfileUserInfo'
import ProfileListView from './childComps/ProfileListView'

export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileUserInfo,
    ProfileListView
  },
  data() {
    return {
      oderList: [
        {icon: require('assets/img/profile/message.svg'), info: '我的消息'},
        {icon: require('assets/img/profile/points.svg'), info: '积分商城'},
        {icon: require('assets/img/profile/card.svg'), info: '会员卡'}
      ],
      serviceList: [
        {icon: require('assets/img/profile/cart.svg'), info: '我的购物车'},
        {icon: require('assets/img/profile/app.svg'), info: '下载购物车APP'}
      ]
    }
  }
}
</script>

<style>
  .profile-navbar {
    color: #fff;
    background-color: var(--color-tint);
  }
  .account {
    display: flex;
  }
  .account-item {
    flex: 1;
    text-align: center;
    padding: 15px 0;
  }
  .account-item .balance {
    color: #fa8d65;
    font-size: 20px;
    font-weight: 700;
  }
  .account-info {
    padding-top: 5px;
  }
  .account .account-item:nth-child(2) {
    border-left: 2px solid #f2f2f2;
    border-right: 2px solid #f2f2f2;
  }
</style>
