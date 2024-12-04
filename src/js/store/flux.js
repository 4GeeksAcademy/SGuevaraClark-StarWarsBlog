const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            person: null,   
            planets: [],
            planet: null,   
            starships: [],
            starship: null, 
            favorites: [],
            url: 'https://www.swapi.tech/api/'
            
        },
        actions: {

            addFavorite: (item) => {
                const store = getStore();
                const isFavorite = store.favorites.some(fav => fav.uid === item.uid);
                
                if (!isFavorite) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

            removeFavorite: (uid) => {
                const store = getStore();
                setStore({ 
                    favorites: store.favorites.filter(fav => fav.uid !== uid)
                });
            },


            loadPeople: async () => {
                try {
                    const resp = await fetch(getStore().url + 'people');
                    if (!resp.ok) throw new Error('Error loading data');
                    const data = await resp.json();
                    setStore({people: data.results});
                } catch (error) {
                    console.log(error);
                }
            },

            loadPerson: async (uid) => {
                try {
                    const resp = await fetch(getStore().url + 'people/' + uid);
                    if (!resp.ok) throw new Error('Error loading data');
                    const data = await resp.json();
                    setStore({person: data.result});
                } catch (error) {
                    console.log(error);
                }
            },

            loadPlanets: async () => {
                try {
                    const resp = await fetch(getStore().url + 'planets');
                    if (!resp.ok) throw new Error('Error loading data');
                    const data = await resp.json();
                    setStore({planets: data.results});
                } catch (error) {
                    console.log(error);
                }
            },

            loadPlanet: async (uid) => {
                try {
                    const resp = await fetch(getStore().url + 'planets/' + uid);
                    if (!resp.ok) throw new Error('Error loading data');
                    const data = await resp.json();
                    setStore({planet: data.result});
                } catch (error) {
                    console.log(error);
                }
            },

            loadStarships: async () => {
                try {
                    const resp = await fetch(getStore().url + 'starships');
                    if (!resp.ok) throw new Error('Error loading data');
                    const data = await resp.json();
                    setStore({starships: data.results});
                } catch (error) {
                    console.log(error);
                }
            },

            loadStarship: async (uid) => {
                try {
                    const resp = await fetch(getStore().url + 'starships/' + uid);
                    if (!resp.ok) throw new Error('Error loading data');
                    const data = await resp.json();
                    setStore({starship: data.result});
                } catch (error) {
                    console.log(error);
                }
            }
        }
    };
};

export default getState;
