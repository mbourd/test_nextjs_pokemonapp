'use client';

import styled from 'styled-components';

type ButtonStyledPropsType = {
  $fitHeight?: boolean;
};

export const ButtonStyled = styled.span<ButtonStyledPropsType>`
  button {
    height: ${({ $fitHeight }) => ($fitHeight ? '100%' : 'auto')};
  }
`;
