import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeoresByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  // const heroes = getHeroesByPublisher(publisher);
  return (
    <>
      <div className="card-columns">
        {heroes.map((hero) => {
          return <HeroCard key={hero.id} hero={hero}></HeroCard>;
        })}
      </div>
    </>
  );
};
