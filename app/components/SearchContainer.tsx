'use client';

/* eslint-disable react/display-name */
import { CircularProgress, TextField } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { Button } from '../packages/design/components/Button/Button';
import { PokemonFullDetailAPIType } from '../types';
import { fetchPokemonDetail } from '../api/pokemon';
import { SearchContainerStyled } from './SearchContainer.style';
import { PokeBallIconSVG } from '../packages/design/components/Icons/PokeBallIconSVG';

type SearchContainerPropsType = {
  setHasChangedSearchTerm?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ImperativeHanlesType = {
  getPokemonSearched: () => PokemonFullDetailAPIType | undefined;
  getSearchTerm: () => string;
};

const SearchContainer = React.forwardRef<
  ImperativeHanlesType,
  SearchContainerPropsType
>(({ setHasChangedSearchTerm }, ref) => {
  const [searchPokemonTerm, setSearchPokemonTerm] = React.useState<string>('');

  const {
    data: pokemonSearched,
    isLoading: isLoadingPokemonDetail,
    refetch: refetchPokemonDetail,
    isError,
  } = useQuery<PokemonFullDetailAPIType>(
    ['pokemonDetail', searchPokemonTerm],
    () => fetchPokemonDetail(searchPokemonTerm),
    {
      enabled: false,
    },
  );

  const getSearchTerm = React.useCallback(
    () => searchPokemonTerm,
    [searchPokemonTerm],
  );
  const getPokemonSearched = React.useCallback(
    () => pokemonSearched,
    [pokemonSearched],
  );

  React.useImperativeHandle(ref, () => {
    return { getSearchTerm, getPokemonSearched };
  });

  React.useEffect(() => {
    if (
      !isError &&
      !isLoadingPokemonDetail &&
      pokemonSearched &&
      setHasChangedSearchTerm
    ) {
      setHasChangedSearchTerm(true);
      setTimeout(() => {
        setHasChangedSearchTerm(false);
      }, 1);
    }
  }, [
    isError,
    isLoadingPokemonDetail,
    pokemonSearched,
    setHasChangedSearchTerm,
  ]);

  return (
    <SearchContainerStyled>
      <TextField
        data-testid="page-input-search"
        id="filled-basic"
        label="Search a Pokemon"
        variant="filled"
        onChange={(e) => {
          setSearchPokemonTerm(e.target.value.toLowerCase());
        }}
        onKeyDown={(e) => {
          if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            void refetchPokemonDetail();
          }
        }}
      />
      <Button
        fitHeight
        size="large"
        onClick={() => {
          void refetchPokemonDetail();
        }}
        endIcon={
          isLoadingPokemonDetail ? (
            <CircularProgress color="warning" />
          ) : (
            <PokeBallIconSVG />
          )
        }
      >
        <span>Search</span>
      </Button>
    </SearchContainerStyled>
  );
});

export { SearchContainer };
