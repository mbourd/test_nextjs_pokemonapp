import React from 'react';
import PokemonDetail from './components/PokemonDetail';

type PokemonDetailPropsType = {
  params: { name: string };
};

type ResponseType = {
  results: { name: string }[];
};

export async function generateStaticParams() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=999999`,
  );

  if (!response || !response.ok) return [];

  const data: ResponseType = await response.json();

  return data.results.map((pokemon) => ({ name: pokemon?.name ?? '' }));
}

const PokemonDetailPage: React.FC<PokemonDetailPropsType> = ({ params }) => {
  return <PokemonDetail params={params} />;
};

export default PokemonDetailPage;
