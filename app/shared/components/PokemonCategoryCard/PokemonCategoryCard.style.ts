'use client';

import styled from 'styled-components';

type PokemonCategoryCardStyledPropsType = {
  $typeName?: string;
};

const PokemonCategoryCardStyled = styled.div<PokemonCategoryCardStyledPropsType>`
  margin: 0 5 5 0;
  text-align: center;

  .MuiCard-root:nth-child(1) {
    background-color: ${({ theme, $typeName }) => {
      if (!$typeName) return theme.pokemon.categories.colors.unknown;

      const color =
        theme.pokemon.categories.colors?.[$typeName + ''] ??
        theme.pokemon.categories.colors.unknown;

      return color;
    }};
  }
`;

export { PokemonCategoryCardStyled };
