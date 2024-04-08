import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { Box, Container, StyledEngineProvider } from '@mui/material';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { PageStyled } from './Page.style';
import { ThirdPartySoftwareProvider } from '../providers/ThirdPartySoftwareProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'Search a Pokemon',
};

export default function RootLayout(props: React.PropsWithChildren<unknown>) {
  return (
    <html lang="en">
      <body>
        <ThirdPartySoftwareProvider>
          <PageStyled>
            <Container maxWidth="lg">
              <Box
                sx={{
                  my: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {props.children}
              </Box>
            </Container>
          </PageStyled>
        </ThirdPartySoftwareProvider>
      </body>
    </html>
  );
}
