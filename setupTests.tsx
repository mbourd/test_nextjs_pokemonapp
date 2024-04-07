import { render } from "@testing-library/react";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import React from "react";

const AllTheProviders = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

const customRender = (ui: React.JSX.Element, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
