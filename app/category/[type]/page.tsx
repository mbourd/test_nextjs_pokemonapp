"use client";

import { useQuery } from "react-query";
import React, { useCallback, useEffect } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

import { fetchPokemonsByCategory } from "../../api/pokemon";
import { PageStyled } from "@/app/Page.style";
import { PokemonDetailCard } from "@/app/shared/components/PokemonDetailCard/PokemonDetailCard";
import { WaitLoaded } from "@/app/shared/components/WaitLoaded/WaitLoaded";
import { PokemonShortDetailAPIType } from "@/app/types";

type PokemonListPropsType = {
  params: { type: string };
};

const PokemonListPage: React.FC<PokemonListPropsType> = ({ params }) => {
  const router = useRouter();
  const { type } = params;
  const { data: pokemons, isLoading } = useQuery<PokemonShortDetailAPIType[]>(
    ["pokemonsByCategory", type],
    () => fetchPokemonsByCategory(type)
  );

  const onClickPokemon = useCallback(
    (pokemonName: string) => {
      router.push("/pokemon/" + pokemonName);
    },
    [router]
  );

  return (
    <WaitLoaded isLoading={isLoading}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Pokemons type: {type.toUpperCase()}
      </Typography>
      <Grid
        className={"pokemon-categories"}
        container
        spacing={3}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {pokemons?.map((pokemon) => {
          return (
            <Grid
              item
              xs={6}
              key={pokemon?.pokemon?.name ?? ""}
              onClick={() => {
                if (pokemon?.pokemon?.name)
                  onClickPokemon(pokemon.pokemon.name);
              }}
            >
              <PokemonDetailCard pokemon={pokemon} type={type} />
            </Grid>
          );
        })}
      </Grid>
    </WaitLoaded>
  );
};

export default PokemonListPage;
