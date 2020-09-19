<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-container">
        <img src="../assets/images/options.png" alt />
        <div class="home-header-container-content">
          <p>Location</p>
          <div class="home-header-container-content-site">
            <img src="../assets/images/site.png" alt />
            <span>HuBei JingZhou</span>
          </div>
        </div>
        <img class="avatar" src="../assets/images/sayHi.jpg" alt />
      </div>
    </div>

    <div class="home-main">
      <List :msg="msg" @childEvents="navigationToLogin"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Provide } from 'vue-property-decorator'
  import List from '@/components/list.vue'

  @Component({
    components: {
      List
    }
  })
  export default class Home extends Vue {
    @Provide() isProvide = 'provide'
    msg = 'child'

    navigationToLogin() {
      this.$router.push({
        path: '/login'
      })
    }
  }
</script>

<style lang="scss" scoped>
.home {
  @include init-page();
  &-header {
    width: 100%;
    height: 260px;
    padding: 60px 30px 0;
    background: $color-white;
    box-sizing: border-box;
    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > img {
        width: 58px;
        height: 50px;
      }
      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: $border-common;
      }
      &-content {
        text-align: center;
        color: $color-gray;
        &-site {
          display: flex;
          align-items: center;
          padding-top: 20px;
          color: $color-default;
          font-size: $font-other;
          & > img {
            width: 40px;
            height: 40px;
          }
          & > span {
            margin-left: 10px;
          }
        }
      }
    }
  }
  &-main {
    width: 100%;
    height: calc(100% - 200px);
    border-radius: 40px;
    position: absolute;
    top: 200px;
    background: $color-background;
    box-sizing: border-box;
    padding: 30px;
  }
}
</style>
