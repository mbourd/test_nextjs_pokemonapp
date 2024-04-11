import React from 'react';
import PokemonDetail from './components/PokemonDetail';

type PokemonDetailPropsType = {
  params: { name: string };
};

export function generateStaticParams() {
  return [{ name: 'bulbasaur' }];
}

const PokemonDetailPage: React.FC<PokemonDetailPropsType> = ({ params }) => {
  return <PokemonDetail params={params} />;
};

export default PokemonDetailPage;
