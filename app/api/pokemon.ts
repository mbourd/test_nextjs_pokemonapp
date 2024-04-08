export const fetchPokemonCategories = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/type');
  const data = await response.json();

  return data.results;
};

export const fetchPokemonsByCategory = async (category: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${category}`);
  const data = await response.json();

  return data.pokemon;
};

export const fetchPokemonDetail = async (pokemonId: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
  );
  const data = await response.json();

  return data;
};

export const fetchPokemonDexEntry = async (pokemonId: string) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
  );

  if (!response.ok) return {};

  const data = await response.json();

  return data;
};
