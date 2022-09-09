import React, { useState } from "react";

import axios from "axios";

// Style
import "./App.css";
import { useEffect } from "react";
import PokemonCollection from "./components/PokemonCollection";

// Interfaces
import { Pokemon } from "./interface";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=20"
      );

      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons(p => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  console.log(pokemons);

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonCollection pokemons={pokemons} />
      </div>
    </div>
  );
};

export default App;
