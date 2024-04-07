"use client";

import styled from "styled-components";

type TextShineStyledPropsType = {
  $colors: string[];
  $enabled?: boolean;
};

export const TextShineStyled = styled.span<TextShineStyledPropsType>`
  animation: ${({ $enabled }) =>
    $enabled ? "shine 3s linear infinite" : "none"};
  background: ${({ $colors }) => {
    const step = 100 / $colors.length;
    $colors = $colors.map((color, k) => `${color} ${step * k}%`);

    return `linear-gradient(to right, ${$colors.join(", ")})`;
  }};
  background-clip: text;
  background-size: 200% auto;
  -webkit-text-fill-color: transparent;

  @keyframes shine {
    to {
      background-position: -200% center;
    }
  }
`;
