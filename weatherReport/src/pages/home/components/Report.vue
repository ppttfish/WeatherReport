<template>
  <div class="city-report">
    <div class="today-report">
      <span class="city-air">{{ '空气' + air.qlty + ' ' + air.aqi }}</span>
      <span class="city-rain">{{ now.wind_dir + ' ' + now.wind_sc + '级' }}</span>
    </div>
    <div
      class="everyday-report"
      v-for="(item, index) of list" :key="index"
    >
      <span class="date">今天</span>
      <span class="day-weather">{{ item.cond_txt_d + '丨' + item.cond_txt_n }}</span>
      <span class="day-temperture">{{ item.tmp_max + '/' + item.tmp_min }}<sup>०c</sup></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeReport',
  props: {
    air: Object,
    now: Object,
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .city-report
    padding: .2rem .4rem
    font-size: .32rem
    color: #999
    .today-report
      display: inline-block
      width: 100%
      margin-bottom: .2rem
      padding: .1rem 0
      text-align: center
      .city-air
      .city-rain
        display: inline-block
        box-sizing: border-box
        float: left
        width: 50%
      .city-air
        border-right: 1px solid #666
    .everyday-report
      padding: .4rem 0
      border-top: 1px solid #f5f5f5
      overflow: hidden
      span
        float: left
        width: 33.33%
      .day-weather
        text-align: center
      .day-temperture
        text-align: right
    .future-report
      margin-top: .3rem
      padding: .2rem 0
      border: 1px solid #19CAAD
      border-radius: .1rem
      text-align: center
      color: #19CAAD
</style>
