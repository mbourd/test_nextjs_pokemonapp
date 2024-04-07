"use client"

import * as React from "react";
import { Button as MUIButton } from "@mui/material";
import { ButtonStyled } from "./Button.style";

type ButtonType = {
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  component?: "button" | "a";
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  fitHeight?: boolean;
};

export const Button: React.FC<React.PropsWithChildren<ButtonType>> = ({
  variant = "contained",
  children,
  size = "small",
  component = "button",
  href,
  disabled,
  onClick,
  style,
  fitHeight
}) => {
  return (
    <ButtonStyled $fitHeight={fitHeight}>
      <MUIButton
        className="PackagesDesignButton"
        variant={variant}
        size={size}
        component={component}
        disabled={disabled}
        onClick={onClick}
        href={href}
        style={style}
      >
        {children}
      </MUIButton>
    </ButtonStyled>
  );
};
