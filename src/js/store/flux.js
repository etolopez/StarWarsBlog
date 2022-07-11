const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: 
			[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				}
			],
			personajes: 
				[],
			detalle: 
			[],
			planets: 
			[],
			detallePlanetas:
			[],
			vehiculos:
			[],
			detallevehiculos:
			[],
		},
		actions: {

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			changeFav: (name)=> {
				const store = getStore();
				let index = store.favoritos.findIndex((elm)=> elm.name == name);
				let copyStore = [...store.favoritos];
				copyStore.splice(index, 1)
				setStore({favoritos: copyStore})
			},
			
			ponerComoFavorito: (nuevoFavorito) =>{
				const store = getStore();
				setStore({ favoritos: [...store.favoritos, nuevoFavorito]});
			},
			
			removeOneFavorite: (fav) => {
				const store = getStore();
				store.favoritos.splice(fav, 1);
				setStore({favoritos: [...store.favoritos]})
			},
			
			removeAllFavoritos: ()=>{
				const store = getStore();
				const del = store.favoritos = [];
				setStore({del})
			},
			
			getPersonajesStarWars : ()=> {
				fetch('https://www.swapi.tech/api/people').then(res=>res.json()).then(data=>
				setStore({personajes: data.results})
				).catch(err => err)
			}, 
			getDetallePersonaje: (uid) => {
				fetch('https://www.swapi.tech/api/people/' + uid).then(res=>res.json()).then(data=>
				setStore({detalle: data.results})
				).catch(err=>err)
			},
			getPlanetasStarWars : ()=> {
				fetch('https://www.swapi.tech/api/planets/').then(res=>res.json()).then(data=>
				setStore({planets: data.results})
				).catch(err => err)
			},
			getVehiclesStarWars : ()=> {
				fetch('https://www.swapi.tech/api/vehicles/').then(res=>res.json()).then(data=>
				setStore({vehiculos: data.results})
				).catch(err => err)
			},
		}
	};
};

export default getState;
