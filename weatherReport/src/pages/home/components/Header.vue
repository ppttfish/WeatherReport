<template>
  <div class="weather-header">
    <h1 class="city-temperature">{{ now.tmp }}<sup>०c</sup></h1>
    <div class="city-adress">
      {{ city }}
    </div>
    <div class="city-weather">{{ now.cond_txt }}</div>
    <div class="city-tips">
      <p class="tips-text">{{ tips.txt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String,
    now: Object,
    tips: Object
  }
}
</script>

<style lang="stylus" scoped>
  .weather-header
    padding: .3rem
    color: #fff
    background-color: #19CAAD
    .city-temperature
      color: #fff
      font-size: 1rem
    .city-adress
    .city-weather
      margin-top: .4rem
      color: #fff
    .city-tips
      margin-top: 2.5rem
      line-height: .35rem
      text-align: left
</style>
