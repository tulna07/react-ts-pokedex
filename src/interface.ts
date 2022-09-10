export interface Pokemon {
  id?: number;
  url?: string;
  name: string;
  sprites?: {
    front_default: string;
  };
}

export interface PokemonDetails extends Pokemon {
  abilities?: {
    ability: string;
    name: string;
  }[];
}

export interface Details {
  id: number;
  isOpen: boolean;
}
