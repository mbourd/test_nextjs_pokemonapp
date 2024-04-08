'use client';

import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { PokemonCategoryCardStyled } from './PokemonCategoryCard.style';

type PokemonCategoryPropsType = {
  type?: { name?: string; url?: string };
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const PokemonCategoryCard: React.FC<PokemonCategoryPropsType> = ({
  type,
  onClick,
}) => {
  return (
    <PokemonCategoryCardStyled
      className="PokemonCategoryCard"
      $typeName={type?.name}
    >
      <Card onClick={onClick}>
        <CardActionArea>
          {/* <CardMedia
          component="img"
          height="70"
          image={''}
          alt={type?.name}
        /> */}
          <CardContent data-testid="PokemonCategoryCard-CardContent">
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
