'use client';

import { PokemonFullDetailAPIType } from '@/app/types';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import React from 'react';
import { PokemonBasicInfoStyled } from './PokemonBasicInfo.style';
import { ChipColoredTypeStyled } from './ChipColoredType.style';
import { ChipStyled } from '@/app/packages/design/components/Chip/Chip.style';

type PokemonBasicInfoPropsType = {
  pokemon?: PokemonFullDetailAPIType;
};

export const PokemonBasicInfo: React.FC<PokemonBasicInfoPropsType> = ({
  pokemon,
}) => {
  return (
    <PokemonBasicInfoStyled className="PokemonBasicInfo">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Pokemon basic information
            </ListSubheader>
          }
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="ID"
              secondary={
                <React.Fragment>
                  <Typography
                    data-testid="ListItemText-Typography-ID"
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {pokemon?.id ?? ''}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Types"
              secondary={
                <React.Fragment>
                  {pokemon?.types?.map((type, index) => {
                    return (
                      <ChipColoredTypeStyled
                        data-testid="ListItemText-Chip-Types"
                        // @ts-ignore
                        component={'span'}
                        key={`${type?.type?.name}${index}`}
                        label={type?.type?.name ?? ''}
                        $type={type?.type?.name}
                      />
                    );
                  })}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Abilities"
              secondary={
                <React.Fragment>
                  {pokemon?.abilities?.map((ability, index) => {
                    return (
                      <ChipStyled
                        data-testid="ListItemText-Chip-Abilities"
                        // @ts-ignore
                        component={'span'}
                        key={`${ability?.ability?.name}${index}`}
                        label={ability?.ability?.name ?? ''}
                      />
                    );
                  })}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Moves"
              secondary={
                <React.Fragment>
                  <Typography
                    data-testid="ListItemText-Typography-Moves"
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {pokemon?.moves?.length ?? ''}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Base experience"
              secondary={
                <React.Fragment>
                  <Typography
                    data-testid="ListItemText-Typography-BaseExp"
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {pokemon?.base_experience ?? ''}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Weight"
              secondary={
                <React.Fragment>
                  <Typography
                    data-testid="ListItemText-Typography-Weight"
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {(pokemon?.weight ?? 0) + ' dkg'}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Height"
              secondary={
                <React.Fragment>
                  <Typography
                    data-testid="ListItemText-Typography-Height"
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {(pokemon?.height ?? 0) + ' dm'}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </PokemonBasicInfoStyled>
  );
};
