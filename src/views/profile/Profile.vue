<template>
  <div class="profile">
    <nav-bar>
      <div slot="center">我的档案</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'Profile',
  components: {
    NavBar
  }
}
</script>

<style>
  .profile {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>
