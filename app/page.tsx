'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useQuery } from 'react-query';
import { fetchPokemonCategories } from './api/pokemon';
import { PokemonCategoryCard } from './shared/components/PokemonCategoryCard/PokemonCategoryCard';
import { Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { WaitLoaded } from './shared/components/WaitLoaded/WaitLoaded';
import { PokemonDetailCard } from './shared/components/PokemonDetailCard/PokemonDetailCard';
import { CategoryAPIType } from './types';
import {
  ImperativeHanlesType,
  SearchContainer,
} from './components/SearchContainer';

function MyApp() {
  const refSearchContainer = React.useRef<ImperativeHanlesType>(null);
  const router = useRouter();
  const [filteredCategories, setFilteredCategories] = React.useState<
    CategoryAPIType[]
  >([]);
  const [hasChangedSearchTerm, setHasChangedSearchTerm] = React.useState(false);

  const {
    data: categories,
    isLoading: isLoadingCategories,
    refetch: refetchCategories,
  } = useQuery<CategoryAPIType[]>('pokemonCategories', fetchPokemonCategories, {
    enabled: true,
  });

  const onClickCategory = React.useCallback(
    (typeName: string) => {
      router.push('/category/' + typeName);
    },
    [router],
  );
  const onClickPokemon = React.useCallback(
    (pokemonName: string) => {
      router.push('/pokemon/' + pokemonName);
    },
    [router],
  );

  React.useEffect(() => {
    if (!hasChangedSearchTerm || !refSearchContainer?.current) return;

    const pokemonSearched = refSearchContainer.current.getPokemonSearched();

    if (!pokemonSearched) return;

    setFilteredCategories((c) => {
      if (pokemonSearched?.types)
        return pokemonSearched.types.map((type) => type.type);

      return [];
    });
  }, [hasChangedSearchTerm]);

  return (
    <WaitLoaded isLoading={isLoadingCategories}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Categories of Pokemon
      </Typography>
      <SearchContainer
        ref={refSearchContainer}
        setHasChangedSearchTerm={setHasChangedSearchTerm}
      />
      <Grid
        className={'pokemon-categories'}
        container
        spacing={3}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {(filteredCategories.length ? filteredCategories : categories)?.map(
          (type: CategoryAPIType) => {
            const searchTerm =
              refSearchContainer.current?.getSearchTerm() ?? '';

            return (
              <Grid item xs={6} key={type?.name ?? ''}>
                <PokemonCategoryCard
                  type={type}
                  onClick={() => {
                    if (type?.name) onClickCategory(type.name);
                  }}
                />
                {filteredCategories.length ? (
                  <PokemonDetailCard
                    pokemon={{
                      pokemon: { name: searchTerm },
                    }}
                    onClick={() => {
                      if (searchTerm) onClickPokemon(searchTerm);
                    }}
                  />
                ) : null}
              </Grid>
            );
          },
        )}
      </Grid>
    </WaitLoaded>
  );
}

export default MyApp;
