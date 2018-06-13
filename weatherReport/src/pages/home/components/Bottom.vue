<template>
  <router-link
    class="nav-bottom"
    to="/city"
    tag="div"
  >
    <div class="menu iconfont icon-mulu"></div>
  </router-link>
</template>

<script>
export default {
  name: 'HomeBottom'
}
</script>

<style lang="stylus" scoped>
  .nav-bottom
    position: fixed
    bottom: 0
    left: 0
    right: 0
    height: .8rem
    padding: 0 .2rem
    line-height: .8rem
    border-top: 1px solid #f5f5f5
    background-color: #fff
    .menu
      font-size: .5rem
</style>
