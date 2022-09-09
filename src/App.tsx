import React, { useState } from "react";

import axios from "axios";

// Style
import "./App.css";
import { useEffect } from "react";

interface Pokemon {
  id?: number;
  url?: string;
  name: string;
  sprites?: {
    front_default: string;
  };
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );

      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons([...pokemons, poke.data]);
      });
    };
  });

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
      </div>
    </div>
  );
};

export default App;
