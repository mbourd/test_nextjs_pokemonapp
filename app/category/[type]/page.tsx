import React from 'react';
import { PokemonList } from './components/PokemonList';

type PokemonListPropsType = {
  params: { type: string };
};

export function generateStaticParams() {
  return [{ type: 'normal' }];
}

const PokemonListPage: React.FC<PokemonListPropsType> = ({ params }) => {
  return <PokemonList params={params} />;
};

export default PokemonListPage;
