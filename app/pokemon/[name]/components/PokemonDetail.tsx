'use client';

import { useQuery } from 'react-query';
import { fetchPokemonDetail, fetchPokemonDexEntry } from '../../../api/pokemon';
import React from 'react';
import { Typography, Grid } from '@mui/material';
import { WaitLoaded } from '@/app/shared/components/WaitLoaded/WaitLoaded';
import {
  PokemonDexEntryAPIType,
  PokemonDexFlavorTextEntryType,
  PokemonFullDetailAPIType,
} from '@/app/types';
import { getRandomNumberBetween } from '@/app/packages/helpers/getRandomNumberBetween';
import { capitalizeFirstLetter } from '@/app/packages/helpers/capitalizeFirstLetter';
import { GridItemPokemonInfo } from '../components/GridItemPokemonInfo';
import { GridItemPokemonChart } from '../components/GridItemPokemonChart';
import { GridItemPokemonAvatar } from '../components/GridItemPokemonAvatar';
import { PokeBallIconSVG } from '@/app/packages/design/components/Icons/PokeBallIconSVG';

type PokemonDetailPropsType = {
  params: { name: string };
};

const PokemonDetail: React.FC<PokemonDetailPropsType> = ({ params }) => {
  const { name } = params;
  const { data: pokemon, isLoading } = useQuery<PokemonFullDetailAPIType>(
    ['pokemonDetail', name],
    () => fetchPokemonDetail(name),
  );
  const {
    data: dexEntry,
    isLoading: isLoadingDexEntry,
    isError: isErrorDexEntry,
  } = useQuery<PokemonDexEntryAPIType>(
    ['pokemonDexEntry', name],
    () => fetchPokemonDexEntry(name),
    {
      refetchOnWindowFocus: false,
    },
  );

  const [isShiny, setIsShiny] = React.useState<boolean>(false);
  const [description, setDescription] = React.useState<{
    desc: string;
    version: string;
  }>({ desc: '', version: '' });

  React.useEffect(() => {
    if (pokemon) {
      setIsShiny(() => {
        const isShiny = getRandomNumberBetween(1, 3) === 1;

        // if (isShiny)
        //   new Audio('https://www.myinstants.com/media/sounds/tmpq91k5v_6.mp3').play();

        return isShiny;
      });

      if (pokemon?.cries.latest) void new Audio(pokemon?.cries.latest).play();
    }
  }, [pokemon]);
  React.useEffect(() => {
    if (isErrorDexEntry || !dexEntry?.flavor_text_entries) {
      setDescription({ desc: 'N/A', version: 'N/A' });

      return;
    }

    const filteredDescsEntries: PokemonDexFlavorTextEntryType[] =
      dexEntry.flavor_text_entries.filter((descEntry) => {
        return descEntry?.language?.name === 'en';
      });
    const dexEntryDescsLength = filteredDescsEntries.length;
    const randNumber = getRandomNumberBetween(0, dexEntryDescsLength - 1);

    if (dexEntryDescsLength === 0) return;

    setDescription({
      desc: filteredDescsEntries[randNumber]?.flavor_text ?? '',
      version: filteredDescsEntries[randNumber]?.version?.name ?? '',
    });
  }, [dexEntry, isErrorDexEntry]);

  return (
    <WaitLoaded isLoading={isLoading}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        <PokeBallIconSVG /> Pokemon:{' '}
        {`${capitalizeFirstLetter(name)} ${isShiny ? '(shiny)' : ''}`}
        <PokeBallIconSVG />
      </Typography>
      <Grid
        className={'pokemon-categories'}
        container
        spacing={3}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Typography component="span" variant="body1" fontStyle="italic">
            <q>{description.desc}</q>
            <Typography variant="subtitle2" fontStyle="normal">
              <cite>- {description.version}</cite>
            </Typography>
          </Typography>
        </Grid>
        <GridItemPokemonInfo pokemon={pokemon} />
        <GridItemPokemonChart pokemon={pokemon} />
        <GridItemPokemonAvatar isShiny={isShiny} pokemon={pokemon} />
      </Grid>
    </WaitLoaded>
  );
};

export default PokemonDetail;
