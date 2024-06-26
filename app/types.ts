export type CategoryAPIType = {
  name?: string;
  url?: string;
};

export type PokemonFullDetailAPIType = {
  id?: number;
  moves?: { move?: { name?: string; url?: string } }[];
  abilities?: Record<string, any>[];
  base_experience?: number;
  cries: { latest?: string; legacy?: string };
  types: { slot?: number; type: CategoryAPIType }[];
  stats: {
    base_stat?: number;
    effort?: number;
    stat: { name?: string; url?: string };
  }[];
  sprites: {
    front_default?: string;
    front_shiny?: string;
  };
  name?: string;
  weight?: number;
  height?: number;
};

export type PokemonShortDetailAPIType = {
  pokemon?: {
    name?: string;
    url?: string;
  };
  slot?: number;
};

export type PokemonDexFlavorTextEntryType = {
  flavor_text?: string;
  language?: {
    name?: string;
    url?: string;
  };
  version?: {
    name?: string;
    url?: string;
  };
};
export type PokemonDexEntryAPIType = {
  flavor_text_entries?: PokemonDexFlavorTextEntryType[];
};
