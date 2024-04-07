"use client";

import { useQuery } from "react-query";
import { fetchPokemonDetail } from "../../api/pokemon";
import React from "react";
import { Typography, Grid } from "@mui/material";
import { WaitLoaded } from "@/app/shared/components/WaitLoaded/WaitLoaded";
import { PokemonFullDetailAPIType } from "@/app/types";
import { getRandomNumberBetween } from "@/app/packages/helpers/getRandomNumberBetween";
import dynamic from "next/dynamic";
import { capitalizeFirstLetter } from "@/app/packages/helpers/capitalizeFirstLetter";
import { GridItemPokemonInfo } from "./components/GridItemPokemonInfo";
import { GridItemPokemonChart } from "./components/GridItemPokemonChart";
import { GridItemPokemonAvatar } from "./components/GridItemPokemonAvatar";
import { PokeBallIconSVG } from "@/app/packages/design/components/Icons/PokeBallIconSVG";

type PokemonDetailPropsType = {
  params: { name: string };
};

const PokemonDetailPage: React.FC<PokemonDetailPropsType> = ({ params }) => {
  const { name } = params;
  const { data: pokemon, isLoading } = useQuery<PokemonFullDetailAPIType>(
    ["pokemonDetail", name],
    () => fetchPokemonDetail(name)
  );

  const [isShiny, setIsShiny] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (pokemon) {
      setIsShiny((s) => {
        const isShiny = getRandomNumberBetween(1, 3) === 1;

        // if (isShiny)
        //   new Audio('https://www.myinstants.com/media/sounds/tmpq91k5v_6.mp3').play();

        return isShiny;
      });

      if (pokemon?.cries.latest) new Audio(pokemon?.cries.latest).play();
    }
  }, [pokemon]);

  return (
    <WaitLoaded isLoading={isLoading}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        <PokeBallIconSVG /> Pokemon:{" "}
        {`${capitalizeFirstLetter(name)} ${isShiny ? "(shiny)" : ""}`}
        <PokeBallIconSVG />
      </Typography>
      <Grid
        className={"pokemon-categories"}
        container
        spacing={3}
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <GridItemPokemonInfo pokemon={pokemon} />
        <GridItemPokemonChart pokemon={pokemon} />
        <GridItemPokemonAvatar isShiny={isShiny} pokemon={pokemon} />
      </Grid>
    </WaitLoaded>
  );
};

export default PokemonDetailPage;
