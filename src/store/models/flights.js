import axios from "axios";

export default {
	state: {
		flights: {
			flightsTo: [],
			flightsBack:[]
		}
	},
	mutations: {
		SET_FLIGHTS_STATE(state, result) {
			state.flights.flightsTo = result.data.flights_to,
			state.flights.flightsBack = result.data.flights_back,
			
			console.log(result);
		}
	},
	actions: {
		async GET_FLIGHTS({ commit }, form) {
			const responce = await fetch(
				`http://localhost/api/flight?from=${form.from}&to=${form.to}&date1=${form.date1}&date2=${form.date2}&passengers=${form.passengers}`
			);
			const result = await responce.json();
			commit('SET_FLIGHTS_STATE', result)
		}
	},
	getters: {
		FLIGHTS(state) {
			return state.flights
		}
	},
}