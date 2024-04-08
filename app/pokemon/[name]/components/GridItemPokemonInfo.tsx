import * as React from 'react';
import { PokemonBasicInfo } from '@/app/shared/components/PokemonBasicInfo/PokemonBasicInfo';
import { PokemonFullDetailAPIType } from '@/app/types';
import { Grid } from '@mui/material';

type GridItemPokemonInfoPropsType = {
  pokemon?: PokemonFullDetailAPIType;
};

const GridItemPokemonInfo: React.FC<GridItemPokemonInfoPropsType> = ({
  pokemon,
}) => {
  return (
    <Grid
      item
      xs={3}
      md={3}
      lg={3}
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
      }}
    >
      <PokemonBasicInfo pokemon={pokemon} />
    </Grid>
  );
};

export { GridItemPokemonInfo };
