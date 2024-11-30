import React from "react";

export const PeopleCard = (props) => {

    return(
        <div className="col -sm-6 col-md-4 col-lg-3">

        <div className="card">
            <figure>
                <img className="card-img-top" src={props.img} alt={props.name} />
                <figcaption>{props.name}</figcaption>
            </figure>

            <div className="d-flex">
        <button className="btn btn-primary">Learn More</button>
        <button className="btn btn-primary">Corazon</button>
            </div> 
        </div>
        </div>
    );
}