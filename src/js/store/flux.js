const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			url: 'https://www.swapi.tech/api/'
			
		},
		actions: {

			loadPeople: async () => {
				try {
					const resp = await fetch(getStore( ).url+'people');
					if (!resp.ok) throw new Error('Error loading data');
					const data = await resp.json()
					console.log(data)
					setStore({people: data.results})
				} catch (error) {
					console.log(error);
				}
			}
		
		}
	};
};

export default getState;
