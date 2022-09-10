import React from "react";
import PokemonList from "./PokemonList";

// Interfaces
import { PokemonDetails, Details } from "../interface";

// Style
import "./pokemon.css";

interface Props {
  pokemons: PokemonDetails[];
  details: Details;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
}

const PokemonCollection: React.FC<Props> = props => {
  const { pokemons, details, setDetails } = props;
  const selectPokemon = (id: number) => {
    if (details.isOpen) {
      return;
    }
    setDetails({ id, isOpen: true });
  };

  return (
    <>
      <section
        className={
          details.isOpen
            ? "collection-container-active"
            : "collection-container"
        }
      >
        {" "}
        {details.isOpen ? (
          <div className="overlay"></div>
        ) : (
          <div className=""></div>
        )}
        {pokemons.map(pokemon => (
          <div onClick={() => selectPokemon(pokemon.id!)}>
            <PokemonList
              id={pokemon.id!}
              key={pokemon.id}
              details={details}
              setDetails={setDetails}
              name={pokemon.name}
              abilities={pokemon.abilities}
              image={pokemon.sprites?.front_default!}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default PokemonCollection;
