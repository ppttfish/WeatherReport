<template>
  <div>
    <home-header :city="this.$store.state.city" :now="this.$store.state.now" :tips="this.$store.state.tips"></home-header>
    <home-report :air="this.$store.state.airQlty" :now="this.$store.state.now" :list="this.$store.state.futureList"></home-report>
    <home-bottom></home-bottom>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeReport from './components/Report'
import HomeBottom from './components/Bottom'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeReport,
    HomeBottom
  },
  methods: {
    initHome (res) {
      this.$store.commit('nowWeather', res.data.HeWeather6[0].now)
    },
    initTips (res) {
      let index = Math.floor(Math.random() * 8)
      this.$store.commit('logTips', res.data.HeWeather6[0].lifestyle[index])
    },
    initAir (res) {
      this.$store.commit('logAirQlty', res.data.HeWeather6[0].air_now_city)
    },
    initFuture (res) {
      this.$store.commit('logFuture', res.data.HeWeather6[0].daily_forecast)
    }
  },
  mounted () {
    const weatherUrl = 'https://free-api.heweather.com/s6/weather/now?location=' + this.$store.state.city + '&key=e9d51d1a6e114ea28b3fc777a6b19816'
    const tipsUrl = 'https://free-api.heweather.com/s6/weather/lifestyle?location=' + this.$store.state.city + '&key=e9d51d1a6e114ea28b3fc777a6b19816'
    const airUrl = 'https://free-api.heweather.com/s6/air/now?location=' + this.$store.state.city + '&key=e9d51d1a6e114ea28b3fc777a6b19816'
    const futrueUrl = 'https://free-api.heweather.com/s6/weather/forecast?location=' + this.$store.state.city + '&key=e9d51d1a6e114ea28b3fc777a6b19816'
    axios.get(weatherUrl)
      .then(this.initHome)
    axios.get(tipsUrl)
      .then(this.initTips)
    axios.get(airUrl)
      .then(this.initAir)
    axios.get(futrueUrl)
      .then(this.initFuture)
  }
}
</script>

<style lang="stylus" scoped>

</style>
