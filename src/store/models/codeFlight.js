import flights from "./flights";

export default {
	state: {
		code: '',
		indeces: {}
	},
	mutations: {
		// SET_CODE(state) {
			
		// },
		SET_INDECES(state, indeces) {
			state.indeces = indeces
		}
	},
	actions: {
		// GET_CODE({ commit } ) {
		// },
		GET_INDECES({ commit }, indeces) {
			commit('SET_INDECES', indeces)
		}
	},
	getters: {
		CODE(state) {
			return state.code
		},
		INDECES(state) {
			return state.indeces
		}
	},
}