"use client";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { PokemonDetailCardStyled } from "./PokemonDetailCard.style";
import { PokemonShortDetailAPIType } from "../../../types";
import { capitalizeFirstLetter } from "@/app/packages/helpers/capitalizeFirstLetter";

type PokemonCategoryPropsType = {
  pokemon?: PokemonShortDetailAPIType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: string;
};

const PokemonDetailCard: React.FC<PokemonCategoryPropsType> = ({
  pokemon,
  onClick,
  type,
}) => {
  return (
    <PokemonDetailCardStyled className="PokemonDetailCard" $typeName={type}>
      <Card onClick={onClick}>
        <CardActionArea>
          <CardContent data-test-id="PokemonDetailCard-CardContent">
            <Typography gutterBottom variant="h5" component="div">
              {pokemon?.pokemon?.name
                ? capitalizeFirstLetter(pokemon.pokemon.name)
                : ""}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </PokemonDetailCardStyled>
  );
};

export { PokemonDetailCard };
