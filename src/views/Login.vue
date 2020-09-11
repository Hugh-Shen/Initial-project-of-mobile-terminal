<template>
  <div class="login">
    <img src="../assets/images/green.webp" alt="">
    <div class="login-container">
      <div class="login-container-form">
        <div class="login-container-form-item">
          <img src="../assets/images/login.png" alt="">
          <div class="input-container">
            <input type="text" class="input-box" placeholder="请输入用户名" />
          </div>
        </div>

        <div class="login-container-form-item">
          <img src="../assets/images/safety.png" alt="">
          <div class="input-container">
            <input type="password" class="input-box" placeholder="请输入密码" />
          </div>
        </div>
      </div>

      <div class="login-container-other">
        <span>注册账号</span>
        <span>忘记密码？</span>
      </div>

      <div class="login-container-btn">登录</div>

      <div class="login-container-footer">
        <p>其它登录方式</p>
        <div class="other-login">
          <img :src="item" alt=""
            v-for="(item, index) in otherLoginMethod"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { UserForm, UserRequest } from '@/api/user'

  @Component
  export default class Home extends Vue {
    userForm: UserForm = {
      userName: ''
    }

    user: UserRequest = {
      avatar: require('@/assets/images/sayHi.jpg'),
      nickName: 'hugh shen'
    }

    otherLoginMethod = [
      require('@/assets/images/qq.png'),
      require('@/assets/images/wx.png'),
      require('@/assets/images/wb.png')
    ]
  }
</script>

<style lang="scss" scoped>
.login {
  @include init-page();
  background: $color-white;
  & > img {
    width: 100%;
    height: 460px;
  }
  &-container {
    width: 100%;
    height: calc(100% - 480px);
    padding: 60px 80px 0;
    border-radius: 40px;
    box-sizing: border-box;
    background: $color-white;
    position: relative;
    left: 0;
    top: -40px;
    &-form {
      &-item {
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
        border-bottom: $border-common;
        & > img {
          width: 40px;
          height: 40px;
          margin-right: 20px;
        }
        .input-container {
          .input-box {
            padding: 0;
            border: none;
          }
        }
      }
    }
    &-other {
      display: flex;
      justify-content: space-between;
      color: $color-theme;
      font-size: $color-little;
      margin-top: 20px;
      margin-bottom: 80px;
    }
    &-btn {
      width: 100%;
      height: 88px;
      border-radius: 40px;
      background: $color-theme;
      color: $color-white;
      text-align: center;
      line-height: 88px;
      box-shadow: 0 4px 15px 0 $color-theme;
    }
    &-footer {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 240px;
      & > p::before {
        content: '';
        width: 25%;
        height: 1px;
        background: $color-line;
        position: absolute;
        left: 80px;
      }
      & > p::after {
        content: '';
        width: 25%;
        height: 1px;
        background: $color-line;
        position: absolute;
        right: 80px;
      }
      .other-login {
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 100px;
        box-sizing: border-box;
        & > img {
          width: 80px;
          height: 80px;
        }
        & > img:nth-child(2) {
          margin: 0 30px;
        }
      }
    }
  }
}
</style>
