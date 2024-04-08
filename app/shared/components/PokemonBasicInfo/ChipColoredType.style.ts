'use client';

import { ChipStyled } from '@/app/packages/design/components/Chip/Chip.style';
import styled from 'styled-components';

type ChipColoredTypeStyledPropsType = {
  $type?: string;
};

export const ChipColoredTypeStyled = styled(
  ChipStyled,
)<ChipColoredTypeStyledPropsType>`
  background-color: ${({ theme, $type }) => {
    if (!$type) return theme.pokemon.categories.colors.unknown;

    const color =
      theme.pokemon.categories.colors?.[$type + ''] ??
      theme.pokemon.categories.colors.unknown;

    return color;
  }};
`;
