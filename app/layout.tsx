import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { Box, Container } from '@mui/material';
import * as React from 'react';
import { PageStyled } from './Page.style';
import { ThirdPartySoftwareProvider } from '../providers/ThirdPartySoftwareProvider';

// const inter = Inter({ subsets: ['latin'] });

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
