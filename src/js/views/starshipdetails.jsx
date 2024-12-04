import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const StarshipDetails = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();

    useEffect(()=>{
        actions.loadStarship(params.uid);
    }, []);

    const {name, model, manufacturer, cost_in_credits} = store.starship?.properties || {}

    return(
        <div className="container">
        { 
        store.starship?.properties ? 
        <>
            <div className="row">
                <div className="col">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`}
                        alt={name}
                        className="img-fluid"
                        onError={(e) => {
                            e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                        }}
                    />
                </div>
                <div className="col">
                    <h2>Name: {name} </h2>
                    <p>Model: {model} </p>
                    <p>Manufacturer: {manufacturer} </p>
                    <p>Cost: {cost_in_credits} credits</p>
                </div>
            </div>
        </> 
        :
        <h2>Loading</h2>
        }
    </div>
    );
}