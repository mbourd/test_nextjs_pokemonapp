"use client"

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { PokemonCategoryCardStyled } from "./PokemonCategoryCard.style";

type PokemonCategoryPropsType = {
  type?: { name?: string; url?: string };
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const PokemonCategoryCard: React.FC<PokemonCategoryPropsType> = ({ type, onClick }) => {
  return (
    <PokemonCategoryCardStyled className="PokemonCategoryCard">
      <Card onClick={onClick}>
        <CardActionArea>
          {/* <CardMedia
          component="img"
          height="70"
          image={''}
          alt={type?.name}
        /> */}
          <CardContent data-test-id="PokemonCategoryCard-CardContent">
            <Typography gutterBottom variant="h5" component="div">
              {type?.name?.toUpperCase() ?? ''}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </PokemonCategoryCardStyled>
  );
};

export { PokemonCategoryCard };
