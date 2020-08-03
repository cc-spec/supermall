<template>
  <div id="user-info" class="clear-fix">
    <a href="#">
      <slot name="user-icon">
        <img src="~assets/img/profile/my.svg" class="user-icon" alt="">
      </slot>
      <div class="login-info">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="user-phone">
          <span><img src="~assets/img/profile/myphone.svg" alt=""></span>
          <slot class="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProfileUserInfo'
}
</script>

<style scoped>
  #user-info {
    position: relative;
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }
  #user-info .user-icon {
    float: left;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
  }
  #user-info .login-info {
    float: left;
    padding: 15px;
    padding-bottom: 0;
    color: #fff;
  }
  #user-info .login-info div:first-child {
    padding-left: 2px;
  }
  .login-info .user-phone {
    padding-top: 5px;
    font-size: 13px;
  }
  .login-info .user-phone img {
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  #user-info a::after {
    content: '';
    display: inline-block;
    position: absolute;
    right: 15px;
    top: 50%;
    width: 10px;
    height: 10px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: translateY(-50%) rotate(45deg);
  }
</style>
