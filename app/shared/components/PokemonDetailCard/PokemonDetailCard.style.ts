"use client";

import styled from "styled-components";

type PokemonDetailCardStyledPropsType = {
  $typeName?: string;
};

const PokemonDetailCardStyled = styled.div<PokemonDetailCardStyledPropsType>`
  text-align: center;
  margin: 0 5 5 0;

  .MuiCard-root:nth-child(1) {
    background-color: ${({ theme, $typeName }) => {
      if (!$typeName) return theme.pokemon.categories.colors.unknown;

      const color =
        theme.pokemon.categories.colors?.[$typeName + ""] ??
        theme.pokemon.categories.colors.unknown;

      return color;
    }};
  }
`;

export { PokemonDetailCardStyled };
