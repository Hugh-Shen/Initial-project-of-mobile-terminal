<template>
  <div>
    <p @click="navigationToLogin">{{ msg }}</p>
    <p>provide: {{ isProvide }}</p>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
    Prop,
    Inject
  } from 'vue-property-decorator';

  @Component
  export default class List extends Vue {
    @Prop() private msg!: string
    @Inject() private isProvide!: string

    created() {
      console.log('home', this.$options)
    }

    navigationToLogin() {
      this.$emit('childEvents')
    }
  }
</script>

<style scoped>

</style>
