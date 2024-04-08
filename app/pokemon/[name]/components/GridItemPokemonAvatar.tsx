'use client';

import * as React from 'react';
import { TextShine } from '@/app/packages/design/components/TextShine/TextShine';
import { PokemonFullDetailAPIType } from '@/app/types';
import { Badge, Avatar, Fade, Grid } from '@mui/material';
import { GridItemPokemonAvatarStyled } from './GridItemPokemonAvatar.style';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

type GridItemPokemonAvatarPropsType = {
  isShiny?: boolean;
  pokemon?: PokemonFullDetailAPIType;
};

const GridItemPokemonAvatar: React.FC<GridItemPokemonAvatarPropsType> = ({
  pokemon,
  isShiny,
}) => {
  const onClickPlayCries = React.useCallback(() => {
    if (pokemon?.cries.latest) new Audio(pokemon?.cries.latest).play();
  }, [pokemon?.cries.latest]);

  return (
    <Fade in={true} timeout={1000}>
      <GridItemPokemonAvatarStyled
        item
        xs={4}
        md={4}
        lg={4}
        $types={pokemon?.types}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Badge
              badgeContent={<VolumeUpIcon />}
              color="secondary"
              onClick={onClickPlayCries}
            >
              <TextShine
                text={pokemon?.name?.toUpperCase()}
                enabled={isShiny}
                colors={[
                  'rgba(255, 205, 0, 1)',
                  'rgba(255, 205, 0, 0.9)',
                  'rgba(255, 205, 0, 0.8)',
                  'rgba(255, 205, 0, 0.7)',
                  'rgba(255, 205, 0, 0.6)',
                  'rgba(255, 205, 0, 0.5)',
                  'rgba(255, 205, 0, 0.4)',
                  'rgba(255, 205, 0, 0.3)',
                  'rgba(255, 205, 0, 0.2)',
                  'rgba(255, 205, 0, 0.1)',
                  'rgba(255, 205, 0, 1)',
                ]}
                style={{ fontSize: '3rem', fontWeight: 'bolder' }}
              />
            </Badge>
            {isShiny && '🌟'}
          </Grid>
        </Grid>
        <Avatar
          variant={'square'}
          alt={pokemon?.name?.toUpperCase()}
          src={
            (isShiny
              ? pokemon?.sprites?.front_shiny
              : pokemon?.sprites?.front_default) ?? ''
          }
          sx={{ width: '100%', height: '100%' }}
        />
      </GridItemPokemonAvatarStyled>
    </Fade>
  );
};

export { GridItemPokemonAvatar };
