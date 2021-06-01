import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
// import batman from "../../assets/heroes/dc-batman.jpg"; // contenido estatico

const heroImages = require.context("../../assets/heroes", true);

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  // const hero = getHeroById(heroeId);
  console.log(heroeId);

  if (!hero) {
    return <Redirect to="/" />;
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const handleReturn = () => {
    // console.log(history);
    if (history.length <= 2) {
      // console.log("ifff history push");
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="row mt-5 animate__animated animate__backInLeft">
      <div className="col-4">
        <img
          className="img-thumbnail"
          // src={`../assets/heroes/${heroeId}.jpg`} // desde public assets
          // src={batman} // cuando tenemos un import
          src={heroImages(`./${heroeId}.jpg`)}
          alt={superhero}
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>Alter ego {alter_ego}</span>
          </li>
          <li className="list-group-item">
            <span>Publisher {publisher}</span>
          </li>
          <li className="list-group-item">
            <span>First Appearence {first_appearance}</span>
          </li>
        </ul>

        <h5>Characters</h5>
        <p> {characters}</p>

        <button onClick={handleReturn} className="btn btn-outline-primary">
          Regresar
        </button>
      </div>
    </div>
  );
};
