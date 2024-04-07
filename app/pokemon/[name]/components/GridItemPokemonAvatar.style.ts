import styled from "styled-components";
import { Grid } from "@mui/material";

type GridItemPokemonAvatarStyledPropsType = {
  $types?: { type?: { name?: string } }[];
};

const GridItemPokemonAvatarStyled = styled(
  Grid
)<GridItemPokemonAvatarStyledPropsType>`
  border-radius: 20px;
  border: solid 3px red;
  background: ${({ theme, $types }) => {
    if (!$types) return "#eeeee4";

    if ($types.length === 1) {
      if (!$types[0].type?.name) return theme.pokemon.categories.colors.unknown;
      return theme.pokemon.categories.colors[$types[0].type.name];
    }

    const colors: string[] = [];

    for (const type of $types) {
      if (!type.type?.name)
        colors.push(theme.pokemon.categories.colors.unknown);
      else colors.push(theme.pokemon.categories.colors[type.type.name]);
    }

    return `linear-gradient(45deg, ${colors.join(",")})`;
  }};
`;

export { GridItemPokemonAvatarStyled };
