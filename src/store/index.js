import { createStore } from 'vuex'
import flights from './models/flights'
import passengers from './models/passengers'
import codeFlight from './models/codeFlight'

export default createStore({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // getters: {
  // },
  modules: {
    flights,
    passengers,
    codeFlight
  }
})
