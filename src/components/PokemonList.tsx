import React, { useEffect, useState } from "react";

// Interfaces
import { PokemonDetails, Details } from "../interface";

// Style
import "./pokemon.css";

interface Props {
  id: number;
  name: string;
  image: string;
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
  details: Details;
  setDetails: React.Dispatch<React.SetStateAction<Details>>;
}

const PokemonList: React.FC<Props> = props => {
  const { id, name, image, abilities, details, setDetails } = props;
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    setSelected(id === details.id);
  }, [details]);

  const closeDetails = () => {
    setDetails({
      id: 0,
      isOpen: false,
    });
  };

  return (
    <div className="">
      {selected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetails}>
              X
            </p>
            <div className="detail-info">
              <img src={image} alt="pokemon" className="detail-img" />
              <p className="detail-name"> {name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability"> Ablities: </p>
              {abilities?.map((ab: any) => {
                return <div className=""> {ab.ability.name}</div>;
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name"> {name} </p>
          <img src={image} alt="pokemon" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
