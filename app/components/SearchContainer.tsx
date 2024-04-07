"use client";

/* eslint-disable react/display-name */
import { TextField } from "@mui/material";
import * as React from "react";
import { useQuery } from "react-query";
import { Button } from "../packages/design/components/Button/Button";
import { PokemonFullDetailAPIType } from "../types";
import { fetchPokemonDetail } from "../api/pokemon";
import { SearchContainerStyled } from "./SearchContainer.style";
import { PokeBallIconSVG } from "../packages/design/components/Icons/PokeBallIconSVG";

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
  const [searchPokemonTerm, setSearchPokemonTerm] = React.useState<string>("");

  const {
    data: pokemonSearched,
    isLoading: isLoadingPokemonDetail,
    refetch: refetchPokemonDetail,
    isError,
  } = useQuery<PokemonFullDetailAPIType>(
    ["pokemonDetail", searchPokemonTerm],
    () => fetchPokemonDetail(searchPokemonTerm),
    {
      enabled: false,
    }
  );

  const getSearchTerm = React.useCallback(
    () => searchPokemonTerm,
    [searchPokemonTerm]
  );
  const getPokemonSearched = React.useCallback(
    () => pokemonSearched,
    [pokemonSearched]
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
        data-test-id="page-input-search"
        id="filled-basic"
        label="Search a Pokemon"
        variant="filled"
        onChange={(e) => {
          setSearchPokemonTerm(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter" || e.code === "NumpadEnter") {
            refetchPokemonDetail();
          }
        }}
      />
      <Button fitHeight size="large" onClick={() => refetchPokemonDetail()}>
        <span>Search</span><PokeBallIconSVG/>
      </Button>
    </SearchContainerStyled>
  );
});

export { SearchContainer };
