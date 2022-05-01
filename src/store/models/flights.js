import axios from "axios";

export default {
	state: {
		flights: JSON.parse(localStorage.getItem('result')),
	},
	mutations: {
		SET_FLIGHTS_STATE(state, result) {
			console.log(result);
			localStorage.setItem('result', JSON.stringify(result))

		}
	},
	actions: {
		async GET_FLIGHTS({ commit }, form) {
			console.log(form);
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