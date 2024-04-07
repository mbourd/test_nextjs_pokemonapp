"use client"

import React from "react";
import { TextShineStyled } from "./TextShine.style";

type TextShinePropsType = {
  text?: string;
  colors?: string[];
  style?: React.CSSProperties;
  enabled?: boolean;
};

export const TextShine: React.FC<any> = ({
  text,
  colors = ["#000000", "#FFFFFF"],
  style,
  enabled = true,
}): React.ReactElement => {
  return (
    <TextShineStyled
      $colors={colors}
      $enabled={enabled}
      className={"PackageDesignTextShine"}
      style={style}
    >
      {text ?? ""}
    </TextShineStyled>
  );
};
