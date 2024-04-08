'use client';

import React from 'react';
import { Button as MUIButton } from '@mui/material';
import { ButtonStyled } from './Button.style';

type ButtonType = {
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  component?: 'button' | 'a';
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  fitHeight?: boolean;
  endIcon?: React.ReactNode;
};

export const Button: React.FC<React.PropsWithChildren<ButtonType>> = ({
  variant = 'contained',
  children,
  size = 'small',
  component = 'button',
  href,
  disabled,
  onClick,
  style,
  fitHeight,
  endIcon,
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
        endIcon={endIcon}
        color="secondary"
      >
        {children}
      </MUIButton>
    </ButtonStyled>
  );
};
