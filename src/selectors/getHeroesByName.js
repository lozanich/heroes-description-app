import { heroes } from "../data/heroes";

export const getHeroesByName = (name) => {
  console.log(name);

  if (name === "") {
    return [];
  }

  name = name.toLocaleLowerCase();
  return heroes.filter((heroe) =>
    heroe.superhero.toLocaleLowerCase().includes(name)
  );
};
