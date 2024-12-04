import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favorites = () => {
    const { store, actions } = useContext(Context);

    const getImageUrl = (favorite) => {
        switch(favorite.type) {
            case 'planet':
                return `https://starwars-visualguide.com/assets/img/planets/${favorite.uid}.jpg`;
            case 'starship':
                return `https://starwars-visualguide.com/assets/img/starships/${favorite.uid}.jpg`;
            default: // for people/characters
                return `https://starwars-visualguide.com/assets/img/characters/${favorite.uid}.jpg`;
        }
    }

    const getDetailsLink = (favorite) => {
        switch(favorite.type) {
            case 'planet':
                return `/planets/${favorite.uid}`;
            case 'starship':
                return `/starships/${favorite.uid}`;
            default: // for people/characters
                return `/details/${favorite.uid}`;
        }
    }

    return (
        <div className="container">
            <h1>Favorites</h1>
            {store.favorites.length === 0 ? (
                <p>No favorites added yet</p>
            ) : (
                <div className="row">
                    {store.favorites.map(favorite => (
                        <div key={favorite.uid} className="col-12 col-md-6 col-lg-4 mb-3">
                            <div className="card">
                                <img 
                                    className="card-img-top" 
                                    src={getImageUrl(favorite)}
                                    alt={favorite.name}
                                    onError={(e) => {
                                        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                                    }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{favorite.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <Link to={getDetailsLink(favorite)} className="btn btn-primary">
                                            Learn More
                                        </Link>
                                        <button 
                                            onClick={() => actions.removeFavorite(favorite.uid)}
                                            className="btn btn-danger"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};