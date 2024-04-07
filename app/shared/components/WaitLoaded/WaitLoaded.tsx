"use client"

import { Typography, CircularProgress } from "@mui/material";
import React from "react";

type WaitLoadedPropsType = {
  isLoading?: boolean;
};

const WaitLoaded: React.FC<React.PropsWithChildren<WaitLoadedPropsType>> = ({
  isLoading,
  children,
}) => {
  if (isLoading)
    return (
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        <span data-test-id="WaitLoaded-Typography">Loading...</span>
      </Typography>
    );

  return <>{children}</>;
};

export { WaitLoaded };
