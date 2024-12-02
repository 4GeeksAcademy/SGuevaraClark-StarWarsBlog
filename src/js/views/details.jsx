import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Details = () => {
    const {store, actions} = useContext(Context)

const params = useParams()
console.log(params)

useEffect(()=>{
    actions.loadPerson(params.uid)
}, [])

const {height, name, mass} = store.person?.properties || ' '

    return(
        <div className="container">
        { 
        store.person?.properties ? 
        <>
            <div className="row">
                <div className="col">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
                        alt={name}
                        className="img-fluid"
                    />
                </div>
                <div className="col">
                    <h2>Name: {name} </h2>
                    <p>Height: {height} </p>
                    <p>Mass: {mass} </p>
                    <p>Hair Color: {store.person?.properties?.hair_color} </p>
                </div>
            </div>
        </> 
        :
        <h2>Loading</h2>
        }
    </div>
    );
}