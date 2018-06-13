import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '西安',
    now: {},
    tips: {},
    airQlty: {},
    futureList: []
  },
  mutations: {
    cityChange (state, city) {
      state.city = city
    },
    nowWeather (state, now) {
      state.now = now
    },
    logTips (state, tips) {
      state.tips = tips
    },
    logAirQlty (state, airQlty) {
      state.airQlty = airQlty
    },
    logFuture (state, futureList) {
      state.futureList = futureList
    }
  }
})
