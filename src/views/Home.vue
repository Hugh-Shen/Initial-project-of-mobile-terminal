<template>
  <div class="home">
    <h1>flex layout</h1>
    <div class="flex-container">
      <div>children one</div>
      <div>children two</div>
      <div class="flex-container-children">
        <span>hello</span>
        <span>flex</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  @include init-page();
  text-align: center;
  & > h1 {
    font-weight: $font-weight;
    padding: 30px 0;
    background: $color-pink;
    font-size: $font-large;
  }
  .flex-container {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background: $color-white;
    & > div {
      flex-grow: 1;
    }
    & > div:nth-child(3) {
      align-self: flex-end;
    }
  }
}
</style>
