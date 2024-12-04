import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(()=>{
        actions.loadPlanet(params.uid);
    }, []);

    const {name, population, climate, terrain} = store.planet?.properties || {}

    return(
        <div className="container">
        { 
        store.planet?.properties ? 
        <>
            <div className="row">
                <div className="col">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
                        alt={name}
                        className="img-fluid"
                        onError={(e) => {
                            e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                        }}
                    />
                </div>
                <div className="col">
                    <h2>Name: {name} </h2>
                    <p>Population: {population} </p>
                    <p>Climate: {climate} </p>
                    <p>Terrain: {terrain} </p>
                </div>
            </div>
        </> 
        :
        <h2>Loading</h2>
        }
    </div>
    );
}