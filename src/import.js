import axios from 'axios'
export const getData = async function (store,param) {
	
	const servicesOptions = {
		method: 'GET',
		url: 'https://pilotage.inclusion.beta.gouv.fr/api/dataset/di_services?department='+store.state.selectedDepartement,
		headers: {
			'Content-Type': 'application/json'
		}
	};
	try {
		const { data } = await axios.request(servicesOptions);
		store.commit('initializeData',data)
	} catch (error) {
		console.error(error);
	}
	
	const structuresOptions = {
		method: 'GET',
		url: 'https://pilotage.inclusion.beta.gouv.fr/api/dataset/di_structures?department='+store.state.selectedDepartement,
		headers: {
			'Content-Type': 'application/json'
		}
	};
	
	try {
		const { data } = await axios.request(structuresOptions);
		store.commit('initializeStructuresData',data)
	} catch (error) {
		console.error(error);
	}
    
    store.commit("endImport",true)

	return true
}