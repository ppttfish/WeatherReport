<template>
  <div>
    <city-header :city="this.$store.state.city"></city-header>
    <city-list :cityData="cityDomesticData"></city-list>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/CityList'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      cityDomesticData: {},
      cityForiegnData: {},
      showCityList: '',
      isDomesticShow: true
    }
  },
  components: {
    CityHeader,
    CityList
  },
  methods: {
    getDomesticCityInfo () {
      axios.get('/api/city.json')
        .then(this.logDomesticInfo)
    },
    logDomesticInfo (res) {
      res = res.data
      this.cityDomesticData = res.data
    }
    // handleQuery () {
    //   const weatherUrl = 'https://free-api.heweather.com/s6/weather/now?location=' + this.$store.state.city + '&key=e9d51d1a6e114ea28b3fc777a6b19816'
    //   const tipsUrl = 'https://free-api.heweather.com/s6/weather/lifestyle?location=' + this.$store.state.city + '&key=e9d51d1a6e114ea28b3fc777a6b19816'
    //   axios.get(weatherUrl)
    //     .then()
    //   axios.get(tipsUrl)
    //     .then()
    // },
    // logWeatherInfo (res) {
    //   this.$store.commit('nowWeather', res.data.HeWeather6[0].now)
    // },
    // logTips (res) {
    //   let index = Math.floor(Math.random() * 8)
    //   console.log(index)
    //   console.log(res.data.HeWeather6[0].lifestyle[index])
    //   this.$store.commit('logTips', res.data.HeWeather6[0].lifestyle[index])
    // }
  },
  mounted () {
    this.getDomesticCityInfo()
  }
}
</script>

<style>
