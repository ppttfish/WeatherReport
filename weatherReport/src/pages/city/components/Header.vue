<template>
  <div class="city-head boder-bottom">
      城市选择
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont icon-fanhui city-back"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  .city-head
    position: relative
    height: .88rem
    line-height: .88rem
    background: #19CAAD
    color: #fff
    text-align: center
    font-size: .32rem
    .header-left
      position: absolute
      color: #fff
      top: 0
      .city-back
        font-size: .5rem
        margin-left: .1rem
</style>
