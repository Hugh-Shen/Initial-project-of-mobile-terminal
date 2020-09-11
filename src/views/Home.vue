<template>
  <div class="home">
    <div @click="navigationToLogin">to login</div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Home extends Vue {
    navigationToLogin() {
      this.$router.push({
        path: '/login'
      })
    }
  }
</script>

<style lang="scss" scoped>
.login {
  @include init-page();
  background: $color-white;
}
</style>
