import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
// import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const { values, handleInputChange } = useForm({
    nameHero: q,
  });

  const { nameHero } = values;
  //   console.log(nameHero);

  let heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  //   const heroesFilter = getHeroesByName(nameHero);

  const handleSearch = (e) => {
    e.preventDefault();
    if (nameHero.trim().length < 1) {
      return;
    }
    history.push(`?q=${nameHero}`);
    // reset();
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch} className="form-group">
            <input
              className="form-control"
              type="text"
              onChange={handleInputChange}
              name="nameHero"
              autoComplete="off"
              value={nameHero}
              placeholder="Find your Hero"
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search....
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && <div className="alert alert-info">Busca un Heroe</div>}

          {q !== "" && heroesFilter.length === 0 && (
            <div className="alert alert-danger">
              No se encontraron resultados
            </div>
          )}

          {heroesFilter.map((hero) => {
            return <HeroCard key={hero.id} hero={hero} />;
          })}
        </div>
      </div>
    </div>
  );
};
