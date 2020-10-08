import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <>
      <div
        className="card animate__animated animate__jello"
        style={{ width: 18 + "rem", maxWidth: 500, minHeight: 840 }}
      >
        <img
          className="card-img-top"
          src={`./assets/heroes/${id}.jpg`}
          alt={superhero}
        />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{publisher}</li>
            {alter_ego !== characters && (
              <li className="list-group-item">{characters}</li>
            )}
            {/* <li className="list-group-item">{alter_ego}</li> */}
            <li className="list-group-item">{first_appearance}</li>
          </ul>
          <Link to={`./hero/${id}`} className="btn btn-primary">
            Detalles
          </Link>
        </div>
      </div>
    </>
  );
};
