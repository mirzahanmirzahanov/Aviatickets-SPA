import { createStore } from 'vuex'
import flights from './models/flights'
import passengers from './models/passengers'

export default createStore({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    flights,
    passengers,
  }
})
