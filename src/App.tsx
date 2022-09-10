import React, { useState } from "react";

import axios from "axios";

// Style
import "./App.css";
import { useEffect } from "react";
import PokemonCollection from "./components/PokemonCollection";

// Interfaces
import { Pokemon, Details } from "./interface";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [details, setDetails] = useState<Details>({ id: 0, isOpen: false });

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      setNextUrl(res.data.next);

      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons(p => [...p, poke.data]);
        setLoading(false);
      });
    };
    getPokemon();
  }, []);

  const handleLoadMore = async () => {
    const getPokemon = async () => {
      setLoading(true);
      const res = await axios(nextUrl);
      setNextUrl(res.data.next);

      res.data.results.forEach(async (pokemon: Pokemon) => {
        const poke = await axios(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons(p => [...p, poke.data]);
        setLoading(false);
      });
    };
    getPokemon();
  };

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonCollection
          pokemons={pokemons}
          details={details}
          setDetails={setDetails}
        />
        {!details.isOpen && (
          <div className="btn">
            <button onClick={handleLoadMore}>
              {loading ? "Loading ..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
