import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const StarshipCard = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/starships/' + props.uid);
    }

    const isFavorite = store.favorites.some(fav => fav.uid === props.uid);

    const handleFavorite = () => {
        if (isFavorite) {
            actions.removeFavorite(props.uid);
        } else {
            actions.addFavorite({
                uid: props.uid,
                name: props.name,
                type: 'starship'
            });
        }
    }

    return(
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <figure>
                    <img className="card-img-top" src={props.img} alt={props.name} />
                    <figcaption>{props.name}</figcaption>
                </figure>

                <div className="d-flex">
                    <button className="btn btn-primary" onClick={handleClick}>Learn More</button>
                    <button 
                        className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                        onClick={handleFavorite}
                    >
                        ♥
                    </button>
                </div>
            </div>
        </div>
    );
}