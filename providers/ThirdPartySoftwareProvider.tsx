'use client';

import React from 'react';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import theme from '@/theme';
import { ThemeProvider } from 'styled-components';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import dynamic from 'next/dynamic';

const StyledEngineProvider = dynamic(
  () => import('@mui/material/StyledEngineProvider'),
  { ssr: false },
);
const CssBaseline = dynamic(() => import('@mui/material/CssBaseline'), {
  ssr: false,
});

const ThirdPartySoftwareProvider: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </StyledEngineProvider>
      </AppRouterCacheProvider>
    </ReactQueryProvider>
  );
};

export { ThirdPartySoftwareProvider };
