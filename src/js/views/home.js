import React, { useContext } from "react";
import "../../styles/home.css";
import { PeopleCard } from "../component/peopleCard.jsx";
import { PlanetCard } from "../component/planetCard.jsx";
import { StarshipCard } from "../component/starshipCard.jsx";
import { Context } from "../store/appContext";

export const Home = () =>{ 
	const {store, actions} = useContext(Context)
	
			/* Ver si esto de la imagen me puede funcionar con el RSS Feed de noticias lo de image con el url */
		return (
			<div className="container mt-5">
				<section className="mb-5">
					<h2 className="text-center mb-4">Characters</h2>
					<div className="row">
						{store.people?.map(el=>
						<PeopleCard
							key={el.uid}
							img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
							name={el.name}
							uid={el.uid}
						/>)}  
					</div>
				</section>
	
				<section className="mb-5">
					<h2 className="text-center mb-4">Planets</h2>
					<div className="row">
						{store.planets?.map(el=>
						<PlanetCard
							key={el.uid}
							img={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`}
							name={el.name}
							uid={el.uid}
						/>)}
					</div>
				</section>
	
				<section className="mb-5">
					<h2 className="text-center mb-4">Starships</h2>
					<div className="row">
						{store.starships?.map(el=>
						<StarshipCard
							key={el.uid}
							img={`https://starwars-visualguide.com/assets/img/starships/${el.uid}.jpg`}
							name={el.name}
							uid={el.uid}
						/>)}
					</div>
				</section>
			</div>
		);
	}
 
