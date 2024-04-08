export const fetchPokemonCategories = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/type');
  const data = await response.json();

  return data.results;
};

export const fetchPokemonsByCategory = async (category: any) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${category}`);
  const data = await response.json();

  return data.pokemon;
};

export const fetchPokemonDetail = async (pokemonId: any) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
  );
  const data = await response.json();

  return data;
};
