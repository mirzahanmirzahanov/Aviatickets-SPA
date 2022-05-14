export default {
	state: {
		passengers:[]
	},
	mutations: {
		ADD_PASSENGER(state, passenger) {
			state.passengers.push(passenger)
		},
		REMOVE_PASSENGER(state, index) {
			state.passengers.splice(index, 1)
		}
	},
	actions: {
		ADD_PASS({ commit }, formPassenger) {
			const passenger = JSON.parse(JSON.stringify(formPassenger))
			commit('ADD_PASSENGER', passenger)
		},
		REMOVE_PASS({ commit }, index) {
			
			commit('REMOVE_PASSENGER', index)
		}
	},
	getters: {
		PASSENGERS(state) {
			return state.passengers
		}
	},
}