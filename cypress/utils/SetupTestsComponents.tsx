import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledEngineProvider } from '@mui/material';
import { ThirdPartySoftwareProvider } from '../../providers/ThirdPartySoftwareProvider';

type SetupTestsComponentProps = {};

const SetupTestsComponents: React.FC<
  React.PropsWithChildren<SetupTestsComponentProps>
> = ({ children }) => {
  let content = (
    <ThirdPartySoftwareProvider>
      <main id="main-content">{children}</main>
    </ThirdPartySoftwareProvider>
  );

  return <>{content};</>;
};

export { SetupTestsComponents };
