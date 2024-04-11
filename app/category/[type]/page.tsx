import React from 'react';
import { PokemonList } from './components/PokemonList';
import { CategoryAPIType } from '@/app/types';

type PokemonListPropsType = {
  params: { type: string };
};
type ResponseType = {
  results: { name: string }[];
};

export async function generateStaticParams() {
  const response = await fetch('https://pokeapi.co/api/v2/type');

  if (!response || !response.ok) return [];

  const data: ResponseType = await response.json();

  return data.results.map((type: CategoryAPIType) => ({
    type: type?.name ?? '',
  }));
}

const PokemonListPage: React.FC<PokemonListPropsType> = ({ params }) => {
  return <PokemonList params={params} />;
};

export default PokemonListPage;
