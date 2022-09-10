import React from "react";
import PokemonList from "./PokemonList";

// Interfaces
import { Pokemon } from "../interface";

// Style
import "./pokemon.css";

interface Props {
  pokemons: Pokemon[];
}

const PokemonCollection: React.FC<Props> = props => {
  const { pokemons } = props;
  return (
    <div>
      <section className="collection-container">
        {pokemons.map(pokemon => (
          <div className="">
            <PokemonList
              id={pokemon.id!}
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites?.front_default!}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PokemonCollection;
