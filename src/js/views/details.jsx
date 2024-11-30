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

    return(
<div className="container">
    { 
    store.person?.properties? 
    <>
        <h2>Name: {store.person?.properties?.name} </h2>
        <p>Height: {store.person?.properties?.height} </p>
        <p>Mass: {store.person?.properties?.mass} </p>
        <p>Hair Color: {store.person?.properties?.hair_color} </p>
    </> 
    :
    <h2>Loading</h2>
}
</div>

    );
}